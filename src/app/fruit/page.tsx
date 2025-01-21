"use client"
import { useState, useEffect } from "react"
import Card from "../components/Card"

export default function PageFruit() {
    const [fruit, setFruit] = useState('None')
    const toBanana = () => { setFruit('banana') }
    const toApple = () => { setFruit('apple') }
    useEffect(() => {
        document.title = fruit
    })
    return (
        <div >
            <div className="text-3xl text-center border-spacing-1">
                <ul></ul>
                <button onClick={toBanana}>Banana</button>
                <ul></ul>
                <button onClick={toApple}>Apple</button>
            </div>

            <div className="flex justify-center ">
                <Card src="/muha.png" title="Player 456"></Card>
            </div>

        </div>
    )
}