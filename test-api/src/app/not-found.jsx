"use client"
import { FileSearchIcon } from "@phosphor-icons/react"
import Link from "next/link"
import React from "react"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl max-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearchIcon size={32} color="orange"/>
                <h3 className="text-amber-300 text-50xl - font-bold">NOT FOUND</h3>
                <Link href="/" className="text-amber-50 hover:text-amber-300 transition-all underline">Kembali</Link>
            </div>
            
        </div>
    )
}

export default Page