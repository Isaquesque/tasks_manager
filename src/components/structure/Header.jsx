import { FiSearch } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

export default function Header() {
    return (
        <div className="w-full flex flex-row p-6 justify-end">
            {/* icons container */}
            <div className="flex flex-row gap-8">
                <FiSearch size={28}/>
                <GoBell size={28}/>
                <CgProfile size={28}/>
            </div>
        </div>
    )
}