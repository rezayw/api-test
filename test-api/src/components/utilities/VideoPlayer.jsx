"use client"
import { XCircleIcon } from "@phosphor-icons/react"
import YouTube from "react-youtube"
import { useState } from "react"


const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleCloseButton = () => {
        setIsOpen((prevState) => !prevState)
    }
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
    
    const Player = () => {
        return ( 
         <div className="fixed bottom-2 right-2">
            <button onClick={handleCloseButton} className="text-amber-50 float-right bg-amber-900 px-3 mb-1">
                <XCircleIcon size={32}/>
            </button>
            <YouTube videoId={youtubeId} 
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    />
        </div>
         )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button 
                onClick={handleVideoPlayer}
                className="rounded fixed bottom-5 right-5 x-32 bg-amber-50 text-amber-900 text-xl hover:bg-amber-400"> 
                Watch Trailer
            </button>
        )
    }

    const option = {
        width: "300",
        height: "250"
    }
    return isOpen ? <Player /> : <ButtonOpenPlayer />
}

export default VideoPlayer