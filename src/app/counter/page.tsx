"use client"
import { useState } from "react"
export default function PageCounter() {
    const [count, setCount] = useState(0)
    const increment = () => { setCount(count + 1) }
    const x = () => { setCount(count - 1) }
    return (
        <div>
            <h1 className="text-3xl">
                {count}
            </h1>
            <button onClick={increment}>Increment</button>
            <br />
            <button onClick={x}>Decrement</button>

        </div>
    )
}