export default function Label({id, children, ...rest}){

    return (
        <label 
        htmlFor={id}
        className="text-[0.83rem] font-semibold text-[#3b455b]"
        {...rest}
        >
            {children}
        </label>
    )
}