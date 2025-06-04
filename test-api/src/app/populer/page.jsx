"use client"

import Listing from "@/components/list"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import { getAnimeResponse } from "@/libs/api-libs"
import React, { useEffect, useState } from "react"


const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])
    
    const fetchData = async() => {
        const populerAnime = await getAnimeResponse("top/anime",`page=${page}`)
        setTopAnime(populerAnime)
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