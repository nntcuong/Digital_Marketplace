import Link from "next/link";
import Container from "../Container";
const NavBar = () => {
    return <div
        className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm"
    >
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="
                flex
                item-center
                justify-between
                gap-3
               md:gap-0
                ">
                    <Link href="/"> Mercedes</Link>
                
                <div className="hidden md:block">
                    Search
                </div>
                <div className="">
                    <div>
                        CartCount
                    </div>
                    <div>
                        UserMenu
                    </div>
                </div>
                </div>
            </Container>
        </div>
    </div>
}
export default NavBar;