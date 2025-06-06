"use client"

import { ArrowSquareDownLeftIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
    const router = useRouter()
    
    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-4">
            <button className="text-amber-50" onClick={handleBack} >
                <ArrowSquareDownLeftIcon size={32} />
            </button>
            <h3 className="text-2xl font-bold text-amber-50">{title}</h3>
        </div>
    )
}

export default Header