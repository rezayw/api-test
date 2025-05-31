import Image from "next/image"

const Listing = ({title, images}) => {
    return (
        <div className="">
            <Image src={images} alt="..." width={600} height={400}/>
            <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
        </div>
    )
}

export default Listing