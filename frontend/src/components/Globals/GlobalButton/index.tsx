export default function GlobalButton({
    children,
    className = "",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`
                flex
                items-center
                justify-center
                gap-2
                
                px-6
                py-3

                hover:rounded-lg

                bg-black text-white                
                hover:bg-neutral-700
                
                cursor-pointer
                
                transition-all 
                duration-400
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}