import Head from "next/head"
import Header from "../../components/Header"
import Image from "next/legacy/image"
import { SocialIcon } from "react-social-icons"
import { ChatAlt2Icon } from "@heroicons/react/solid"
import Card from "@/components/Card"

export default function Item() {
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
                        <div className="w-full flex justify-center space-x-[40px] p-5">
                            <div>
                                <div className="w-[275px] xl:w-[350px] xl:h-[325px] h-[225px] relative">
                                    <Image src={"/image.jpg"} layout="fill" />
                                </div>
                            </div>
                            <div className="w-[500px] space-y-2.5">
                                <h2 className="text-2xl">Fngeen Men{"'"}s Luxury Diamond Waterproof Quartz Watch - Gold</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consectetur odit tempore 
                                    nemo delectus, error ipsa esse omnis? Dignissimos consequuntur perspiciatis harum minus 
                                    tempora eligendi unde voluptates. Autem, ipsum voluptates.
                                </p>
                                <div className="space-y-1.5">
                                    <h5 className="text-lg font-semibold">Contact seller</h5>
                                    <div className="flex space-x-1.5">
                                        <button>
                                            <ChatAlt2Icon className="w-10 h-10" />
                                        </button>
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
                                <div className="w-full">
                                    <button className="w-full bg-black text-white py-2.5">
                                        Purchase for 0.02SETH
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
        </div>
    )
}