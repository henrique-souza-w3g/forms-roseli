export const Button = ({onClick, children, valid, className}: {onClick?: () => void, children: React.ReactNode, valid?: string, className?: string }) => {
    return (
        <button className={`button ${valid} cursor-pointer justify-between flex rounded-md p-2 mt-2 mb-2 font-bold w-full sm:w-auto ${className || ''}`}
                onClick={onClick}>
            {children} 
        </button>
    )
}