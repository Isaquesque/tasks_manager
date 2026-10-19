export default function DateInput({name, id, defaultValue, value, onChange, required, ...rest}){

    function formatDate(date) {

        if(date){
            const strDay = String(date.getDate()).padStart(2, "0")
            const strMonth = String(date.getMonth() + 1).padStart(2, "0")
            const strYear = String(date.getFullYear())

            return strYear+"-"+strMonth+"-"+strDay
        }
        return ""
        
    }

    if(defaultValue){
        defaultValue = formatDate(defaultValue)
    }
    
    if(value){
        value = formatDate(value)
    }

    return (
        <input 
        type={"date"} 
        name={name} 
        id={id} 
        defaultValue={defaultValue} 
        value={value}
        onChange={onChange}
        required={required}
        className="min-h-[43px] w-full rounded-[7px] border border-[#dfe2e9] bg-white px-3 py-2 text-[0.86rem] text-[#283248] outline-none transition focus:border-[#8583e4] focus:ring-[3px] focus:ring-[#5856d6]/10 placeholder:text-[#a4abba]"
        {...rest}
        />
    )
}