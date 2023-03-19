import Head from "next/head"
import Header from "../../components/Header"
import Image from "next/legacy/image"
import { SocialIcon } from "react-social-icons"
import Card from "@/components/Card"
import { Chat } from "@pushprotocol/uiweb";
import { ITheme } from '@pushprotocol/uiweb';
import { useSigner } from "wagmi"
import { useState } from "react"

export default function Item() {
    const theme: ITheme = {
        btnColorPrimary: 'black'
    }
    const { data: signer } = useSigner()
    const [address, setAddress] = useState("")
    async function getAddress() {
        const addressData = await signer?.getAddress()
        if (addressData) {
            setAddress(addressData)
        }
    }
    getAddress()
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
                                    <button className="w-full bg-black text-white py-2.5">
                                        {signer?.getAddress() ? "Purchase for 0.02SETH" : "Please connect wallet"}
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
                {
                    signer?.getAddress() ? <Chat
                        account={address}
                        supportAddress="0xd9c1CCAcD4B8a745e191b62BA3fcaD87229CB26d"
                        modalTitle="Contact seller"
                        theme={theme}
                    /> : <button className="w-full bg-black text-white p-2.5 fixed bottom-0">
                        Connect wallet to chat seller
                    </button>
                }
            </main>
        </div>
    )
}