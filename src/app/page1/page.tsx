import Image from "next/image"
import Link from "next/link"

export default function Page1() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl text-center">Page 1</h1>
            <h1>66162110062-9</h1>
            <Image src="/blox.png" width={300} height={300} alt="player" />
            <ul className="list-none p-0">
                <li className="border-1 hover:bg-purple-500"><Link href="/page1">page1</Link></li>
                <li className="border-1 hover:bg-purple-500"><Link href="/page2">page2</Link></li>
            </ul>
        </div>
    )
}