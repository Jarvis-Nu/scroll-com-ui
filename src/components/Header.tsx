import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline"
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
    return(
        <div className="w-full shadow-sm shadow-[#282828]/5 flex justify-center items-center py-5">
            <div className="max-w-[750px] lg:max-w-4xl xl:max-w-6xl w-full flex justify-between items-center">
                <div>
                    <Image src={"/logo.png"} width={200} height={50} alt="Logo" />
                </div>
                <div className="flex items-center">
                    <div>
                        <input type="text" className="h-14 w-72 border-2 border-black outline-none p-2.5" placeholder="Search for item" />
                    </div>
                    <div className="border-2 border-black h-14 border-l-0 flex flex-col items-center justify-center px-2.5">
                        <button>
                            <SearchIcon className="w-10 h-10" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center space-x-5">
                    <button className="p-4 bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black">
                        Join Seller{"'"}s Dao
                    </button>
                    <button className="p-2 bg-black text-white">
                        <ConnectButton />
                    </button>
                </div>
            </div>
        </div>
    )
}