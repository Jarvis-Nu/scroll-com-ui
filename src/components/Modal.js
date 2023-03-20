import { Dialog, Transition } from "@headlessui/react"
import { modalState } from "../../atom/modal"
import { useRecoilState } from "recoil"
import { Fragment } from "react"
import { XIcon } from "@heroicons/react/outline"

export default function Modal() {
    const [open, setOpen] = useRecoilState(modalState)
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
                                <div className="w-full">
                                    <div className="w-full flex items-center justify-between">
                                        <h3 className="text-2xl font-semibold">Fill out form</h3>
                                        <button onClick={() => setOpen(false)}>
                                            <XIcon className="w-10 h-10" />
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}