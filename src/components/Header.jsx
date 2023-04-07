
import { Link } from "wouter";

const Header = () => {
    return (
        <nav className="p-5 shadow-2xl flex mb-2" style={{ backgroundColor: "#EEEDE8" }}>
            <div className="flex items-center cursor-pointer">
                <img className="inline h-28" src="../logo.png" alt="" />
                <Link href="/" className="text-7xl font-serif ml-5">My Anime</Link>
            </div>
            <div className="flex flex-auto items-center justify-end">
                <Link href="/anime" className="text-4xl hover:text-red-500 duration-500 mx-5">ANIMES</Link>
                <Link href="/manga" className="text-4xl hover:text-red-500 duration-500 mx-5">MANGAS</Link>
                <Link href="/character" className="text-4xl hover:text-red-500 duration-500 mx-5">CHARACTERS</Link>
            </div>
        </nav>
    )
}

export default Header;