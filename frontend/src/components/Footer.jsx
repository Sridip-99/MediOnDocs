
import {Heart} from "lucide-react";


export default function Footer() {
    return (
        <footer className="w-full bg-2 flex flex-col lg:flex-row items-center justify-between px-6 py-4 border-t-1 border-blue-800 shadow-t-md">
            <a href="https://mediondocs.netlify.app/">
                <div className="logo flex items-center justify-center">
                    <div className="logo_container inline-block mr-1 w-8 h-8 rounded-xl overflow-hidden">
                        <img src="./favicon.svg" alt="MediOnDocs Logo" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-wide text-blue-400"><span className="bg-[length:100%_15%] bg-repeat-x bg-[position:left_0%_bottom_10%] tapered">MediOn<span className="text-blue-600">Docs</span></span></h1>
                </div>
            </a>

            <p className="inline-block text-md font-regular tracking-wide text-blue-600 dark:text-blue-400">Made with <Heart className="inline w-[16px] text-red-400"/> by 
                <a href="https://sridiptah99.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-500"> Sridip Tah</a>
            </p>
        </footer>
    );
}