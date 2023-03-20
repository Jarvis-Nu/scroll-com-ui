import { Dialog, Transition } from "@headlessui/react"
import { modalState } from "../../atom/modal"
import { useRecoilState } from "recoil"
import { Fragment } from "react"
import { utils } from 'ethers'
import { usePrepareSendTransaction, useSendTransaction, useWaitForTransaction } from "wagmi"
import { useDebounce } from "use-debounce"

export default function Modal() {
    const [open, setOpen] = useRecoilState(modalState)
    const [debouncedTo] = useDebounce("0x5C04F69c9603A808BF4157Ef959F1Ed1e16c0F73", 0)
    const [debouncedAmount] = useDebounce("0.01", 0)
    const { config } = usePrepareSendTransaction({
        request: {
          to: debouncedTo,
          value: debouncedAmount ? utils.parseEther(debouncedAmount) : undefined,
        },
    })
    const { data, sendTransaction } = useSendTransaction(config)
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })
    return(
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                onClose={() => setOpen(false)}
            >
                <div className="flex items-center justify-center
                    min-h-[800px] sm:min-h-screen pt-4 pb-20
                    text-center sm:block sm:p-0"
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay
                            className="fixed inset-0 bg-gray-500 bg-opacity-75
                            transition-opacity"
                        />
                    </Transition.Child>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left
                            overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                <div className="w-full space-y-2.5">
                                    <h3 className="text-2xl font-semibold">Fill out form</h3>
                                    <div>
                                        <input type="text" placeholder="Enter name" className='w-full border-black/30 border-2 h-10 px-1.5 outline-none' />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Enter location of P.O box" className='w-full border-black/30 border-2 h-10 px-1.5 outline-none' />
                                    </div>
                                    <button className="bg-black p-3 w-full text-white" onClick={sendTransaction} disabled={isLoading ? true : isSuccess ? false : false}>
                                        { isLoading ? "Paying..." : isSuccess ? "Payed!" : "Pay 0.01SET"}
                                    </button>
                                </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}