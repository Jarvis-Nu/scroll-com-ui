import Head from "next/head"
import Header from "../../components/Header"
import Image from "next/legacy/image"
import { SocialIcon } from "react-social-icons"
import Card from "../../components/Card"
import { usePrepareSendTransaction, useSigner, useSendTransaction, useWaitForTransaction } from "wagmi"
import { utils } from 'ethers'
import { useState, Fragment } from "react"
import { useDebounce } from "use-debounce"
import { Dialog, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"

export default function Item() {
    const { data: signer } = useSigner()
    const [address, setAddress] = useState("")
    signer?.getAddress().then(function(result) {
        setAddress(result)
    }).catch(e => console.log(e))
    const [debouncedTo] = useDebounce("0x5C04F69c9603A808BF4157Ef959F1Ed1e16c0F73", 0)
    const [debouncedAmount] = useDebounce("0", 0)
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
    const [open, setOpen] = useState(false)
    return(
        <div>
            <Head>
                <title>ScrollCom</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <main>
                <Header />
                <div className="h-full w-full bg-[#282828]/5 flex justify-center items-center py-5">
                    <div className="max-w-[750px] lg:max-w-4xl xl:max-w-6xl w-full flex justify-between items-center bg-white">
                        <div className="w-full flex flex-col sm:flex-row justify-center sm:space-x-[40px] p-5">
                            <div>
                                <div className="w-[275px] xl:w-[350px] xl:h-[325px] h-[225px] relative">
                                    <Image src={"/image.jpg"} layout="fill" />
                                </div>
                            </div>
                            <div className="w-[275px] sm:w-[500px] space-y-2.5">
                                <h2 className="text-2xl">Fngeen Men{"'"}s Luxury Diamond Waterproof Quartz Watch - Gold</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consectetur odit tempore 
                                    nemo delectus, error ipsa esse omnis? Dignissimos consequuntur perspiciatis harum minus 
                                    tempora eligendi unde voluptates. Autem, ipsum voluptates.
                                </p>
                                <div className="space-y-1.5">
                                    <h5 className="text-lg font-semibold">Share product</h5>
                                    <div className="flex space-x-1.5">
                                        <button>
                                            <SocialIcon url="https://facebook.com" />
                                        </button>
                                        <button>
                                            <SocialIcon url="https://discord.com" />
                                        </button>
                                        <button>
                                            <SocialIcon url="https://twitter.com" />
                                        </button>
                                        <button>
                                            <SocialIcon url="https://mail.google.com" />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-[275px] sm:w-full">
                                    <button className="w-full bg-black text-white py-2.5" onClick={function() {
                                        if (open) {
                                            setOpen(false)
                                        }
                                        else {
                                            setOpen(true)
                                        }
                                    }}>
                                        {address ? "Purchase for 0.02SETH" : "Please connect wallet"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full w-full bg-[#282828]/5 flex justify-center items-center py-5">
                    <div className="max-w-[750px] lg:max-w-4xl xl:max-w-6xl w-full flex justify-between items-center bg-white">
                        <div className="w-full p-5">
                            <div>
                                <h2 className="text-2xl font-semibold">More watches</h2>
                            </div>
                            <div className="w-full flex overflow-x-scroll overflow-y-hidden scrollbar-hide">
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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
        </div>
    )
}