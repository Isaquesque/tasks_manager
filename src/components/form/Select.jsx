export default function Select({name, id, defaultValue, value, onChange, required, options,  ...rest}){

    return (

        <select
        name={name}
        id={id}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        required={required}
        className="min-h-[43px] w-full rounded-[7px] border border-[#dfe2e9] bg-white px-3 py-2 text-[0.86rem] text-[#283248] outline-none transition focus:border-[#8583e4] focus:ring-[3px] focus:ring-[#5856d6]/10"
        {...rest}
        >
            {options.map((op, key)=>{
                return (
                    <option key={key} value={op.value}>{op.readableValue}</option>
                )
            })}
        </select>
    )
}