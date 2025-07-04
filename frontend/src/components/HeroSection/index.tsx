import Image from "next/image";
import GlobalButton from "../Globals/GlobalButton";

import heroImage from "@/../public/hero.png";

export default function HeroSection() {
    return (
        <section className={`z
            relative
            overflow-hidden
            max-h-[89vh]
        `}>
            <Image 
                className={`
                    mt-[-40px]
                    z-10
                    w-[88vw]  
                `}
                src={heroImage} 
                alt="A man using Cosmos Chat on his phone, with a blurred background of a cityscape" 
            />
            <div className={`
                flex
                items-center
                justify-end

                absolute
                top-0
                left-0
                z-20
                h-full
                w-full
            `}>
                <div className={`
                    bg-white
                    
                    mr-[5%]

                    border-1
                    border-black
                `}>
                    <h2 className={`
                        text-7xl
                        font-bold
                        text-black
                        p-4
                    `}>
                        Talk to <br /> 
                        anyone, <br /> 
                        anywhere, <br />
                        anytime, on <br />
                        the Cosmos.
                    </h2>

                    <div className={`
                        mt-3
                        flex
                        items-center
                        justify-between
                    `}>
                        <a href="/register">
                            <GlobalButton>
                                Get Started
                            </GlobalButton>
                        </a>

                        <span>
                            or
                        </span>

                        <a href="/chat">
                            <GlobalButton>
                                Open Chat
                            </GlobalButton>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}