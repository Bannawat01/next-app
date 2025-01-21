import Link from "next/link"
import Image from "next/image"

const manus = [
    { name: "Home", path: "/" },
    { name: "About us", path: "#" },
    { name: "Page 1", path: "/page1" },
    { name: "Page 2", path: "/page2" },
    { name: "Page 3", path: "/page3" },
    { name: "Fruit", path: "/fruit" }
]
export default function Navbar() {
    return (

        <div className="w-full sticky top-0 flex justify-between bg-zinc-500">
            <div>
                <Image src="/image.png" width={50} height={50} alt="player" />
            </div>
            <div>
                <ul className="flex gap-x-6">

                    {/* <li className="border-1 hover:bg-blue-500" ><Link href="/">Home</Link></li>
                    <li className="border-1 hover:bg-blue-500" ><Link href="/about">About us</Link></li>
                    <li className="border-1 hover:bg-blue-500" ><Link href="/page1">Page 1</Link></li>
                    <li className="border-1 hover:bg-blue-500" ><Link href="/page2">Page 2</Link></li>  
                    <li className="border-1 hover:bg-blue-500" ><Link href="/page3">Page 3</Link></li>
                    <li className="border-1 hover:bg-blue-500"><Link href="/fruit">Fruit</Link></li> */}

                    {manus.map((manu, index) => (
                        <li key={index} className="border-1 hover:bg-blue-500" ><Link href={manu.path}>{manu.name}</Link></li>
                    ))}
                </ul>
            </div>


        </div>

    )
}