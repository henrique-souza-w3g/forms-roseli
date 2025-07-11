export const Button = ({onClick, children, valid, className, carregando}: {onClick?: () => void, children: React.ReactNode, valid?: string, className?: string, carregando?: any }) => {
    return (
        <button className={`button ${valid} cursor-pointer justify-between flex rounded-md p-2 mt-2 mb-2 font-bold w-full sm:w-auto ${className || ''}`}
                onClick={onClick}
                disabled={carregando}>
            {children} 
        </button>
    )
}