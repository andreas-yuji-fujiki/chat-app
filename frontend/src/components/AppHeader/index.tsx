import GlobalButton from "../Globals/GlobalButton";

import { CiChat1 } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";

export default function AppHeader() {
    return (
        <header className={`
            flex
            items-center
            justify-between

            py-4
            px-8
        `}>
            <div>
                <a href="/">
                    <div 
                        className={`
                            text-white
                            bg-black
                            px-5
                            py-2
                        `} 
                    >
                        <h1 className={`
                            text-2xl 
                            font-bold

                            flex
                            gap-2
                            items-center
                        `}>
                            Cosmos Chat <CiChat1 />
                        </h1>
                        <p className="text-sm pointer-events-none">
                            A real-time chat application
                        </p>
                    </div>
                </a>
            </div>

            <nav>
                <ul className={`
                    flex
                    gap-4
                    items-center
                    list-none
                `}>
                    <li>
                        <a href="/login">
                            <GlobalButton>
                                Login
                            </GlobalButton>
                        </a>
                    </li>
                    <li>
                        <a href="/register">
                            <GlobalButton>
                                Get started <CiLocationArrow1 />
                            </GlobalButton>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};