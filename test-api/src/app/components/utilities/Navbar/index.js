import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-amber-700">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-white text-2xl">API test</Link>
                <input placeholder="Find ..." className=""></input>
            </div>
        </header>
    )
}

export default Navbar