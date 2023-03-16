import Image from "next/legacy/image";

export default function Card() {
    return(
        <div className="max-w-[300px] h-full p-2.5">
            <div className="bg-black w-[250px] h-[225px] relative">
                <Image src={"/image.jpg"} alt="image" layout="fill" />
            </div>
        </div>
    )
}