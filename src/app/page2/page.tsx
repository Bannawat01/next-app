import Link from "next/link"

export default function Page2() {
    return (
        <div>
            <h1>Page 2</h1>
            <Link href={"\page1"}>page1</Link>
            <Link href={"\page2"}>page2</Link>
            <Link href={"\page3"}>page3</Link>
        </div>
    )
}