
import { Sun, Moon } from "lucide-react";


export default function Header({ darkMode, toggleDarkMode }) {
    return (
        <header className="w-full bg-2 flex items-center justify-between px-6 py-4 border-b-1 border-blue-800 shadow-md">
            <a href="https://mediondocs.netlify.app/">
                <div className="logo flex items-center justify-center">
                    <div className="logo_container inline-block mr-1 w-8 h-8 rounded-xl overflow-hidden">
                        <img src="./favicon.svg" alt="MediOnDocs Logo" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-wide text-blue-400"><span className="bg-[length:100%_15%] bg-repeat-x bg-[position:left_0%_bottom_10%] tapered">MediOn<span className="text-blue-600">Docs</span></span></h1>
                </div>
            </a>


            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-700"
                >
                {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-400" />}
            </button>
        </header>
    );
}