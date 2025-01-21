import Image from "next/image"
import Link from "next/link"

export default function Page1() {
    return (
        <div>
            <h1 className="text-3xl text-center">Page 1</h1>
            <div className="flex flex-col items-center">
                <h1>66162110062-9</h1>
                <Image src="/blox.png" width={300} height={300} alt="player" />
                <Link className="border-1 hover:bg-purple-500" href={"\page1"}>page1</Link>
                <Link className="border-1 hover:bg-purple-500" href={"\page2"}>page2</Link>
                <Link className="border-1 hover:bg-purple-500" href={"\page3"}>page3</Link>
            </div>

        </div>
    )
}