"use client"

import Listing from "@/components/list"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import React, { useEffect, useState } from "react"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])
    
    const fetchData = async() => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
        const data = await res.json()
        setTopAnime(data)
    }

    useEffect(() => {
        fetchData()
    }, [page])
    
    
    return (
        <>
            <HeaderMenu title={`Ter Populer #${page}`}/>
            <Listing api={topAnime}/>
            <Pagination 
            page={page} 
            lastPage={topAnime.pagination?.last_visible_page} 
            setPage={setPage}/>
        </>
    )
}

export default Page