export default function SubmitButton({text, ...rest}){

    return (
        <button 
        type="submit" 
        className="mt-[17px] inline-flex min-h-[42px] items-center justify-center gap-[9px] rounded-lg bg-[var(--primary)] px-4 text-[0.86rem] font-semibold text-white transition-colors hover:bg-[var(--primary-dark)]"
        {...rest}
        >
            {text}
        </button>
    )
}