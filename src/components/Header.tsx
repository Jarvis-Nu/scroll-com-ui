import Image from "next/image";

export default function Header() {
    return(
        <div className="w-full shadow-black shadow flex justify-center items-center py-5">
            <div className="max-w-6xl w-full flex justify-between items-center">
                <div>
                    <Image src={"/logo.png"} width={200} height={50} />
                </div>
                <div></div>
                <div>
                    <button className="p-4 bg-black text-white">
                        Join Seller{"'"}s Dao
                    </button>
                </div>
            </div>
        </div>
    )
}