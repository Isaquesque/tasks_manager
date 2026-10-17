export default function TextArea({name, id, placeholder, defaultValue, value, onChange, required, ...rest}){

    return (
        <textarea 
        name={name} 
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        required={required}
        className="min-h-[125px] w-full resize-y rounded-[7px] border border-[#dfe2e9] bg-white px-3 py-2 text-[0.86rem] leading-relaxed text-[#283248] outline-none transition focus:border-[#8583e4] focus:ring-[3px] focus:ring-[#5856d6]/10 placeholder:text-[#a4abba]"
        {...rest}
        />
    )
}