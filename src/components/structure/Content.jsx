export default function Content({children}) {
    return (
        <div className="mx-auto w-full max-w-[1440px] px-12 pt-[39px] pb-14 max-[1050px]:px-7 max-[760px]:px-[18px] max-[760px]:pt-[27px] max-[760px]:pb-10">
            {children}
        </div>
    )
}