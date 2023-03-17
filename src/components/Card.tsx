import Image from "next/legacy/image";
import Link from "next/link";

export default function Card() {
    return(
        <Link href={"/"}>
            <div className="max-w-[300px] h-full p-2.5 flex flex-col items-center space-y-1 bg-white hover:scale-105">
                <div className="bg-black w-[275px] xl:w-[250px] h-[225px] relative">
                    <Image src={"/image.jpg"} alt="image" layout="fill" />
                </div>
                <h3 className="text-xl w-[275px] xl:w-[250px]">Fngeen Men{"'"}s Luxury Diamond Waterproof Quartz Watch - Gold</h3>
            </div>
        </Link>
    )
}