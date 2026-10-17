export default function Container({children}) {
    return (
        <div className="w-full h-screen flex flex-row relative">
            {children}
        </div>
    )
}