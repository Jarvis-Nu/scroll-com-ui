import Image from "next/legacy/image";

export default function Card() {
    return(
        <div className="max-w-[300px] h-full p-2.5 flex flex-col items-center">
            <div className="bg-black w-[275px] h-[225px] relative">
                <Image src={"/image.jpg"} alt="image" layout="fill" />
            </div>
            <h3 className="text-2xl w-[275px]">Fngeen Men's Luxury Diamond Waterproof Quartz Watch - Gold</h3>
        </div>
    )
}