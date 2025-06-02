const Pagination = ({ page, lastPage, setPage }) => {
    
    //handle scroll
    const scrollTop = () => { 
        scrollTo({
            behaviour: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }
    return (
        <div className="flex justify-center items-center py-4 px-4 gap-4 text-amber-50 text-2xl">
            <button onClick={handlePrevPage} 
            disabled={page <= 1}
            className="transition-all hover:text-color-accent">Prev</button>
            <p>{page} of {lastPage} </p>
            <button
            disabled={page >= lastPage} 
            onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
        </div>
    )
}

export default Pagination