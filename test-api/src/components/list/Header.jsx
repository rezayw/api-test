import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
    <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-amber-50">{title}</h1>
        {linkHref && linkTitle ? 
                <Link href={linkHref} className="md:text-xl text-sm underline hover:text-amber-500 transition-all text-amber-50">
                    {linkTitle}
                </Link>
            : null
        }
    </div>
    )
}
export default Header