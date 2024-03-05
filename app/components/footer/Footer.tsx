import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
const Footer = () => {
    return <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container >
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">

                <FooterList>
                    <h3 className="text-base font-bold mb-2">
                        Shop Categories
                    </h3>
                    <Link href="#">
                        Phones
                    </Link>
                    <Link href="#">
                        Laptops
                    </Link>
                    <Link href="#">
                        Desktops
                    </Link>
                    <Link href="#">
                        Watches
                    </Link>
                    <Link href="#">
                        Tvs
                    </Link>
                    <Link href="#">
                        Access
                    </Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">
                        Customer Service
                    </h3>
                    <Link href="#">
                        Contact Us
                    </Link>
                    <Link href="#">
                        Shipping Policy
                    </Link>
                    <Link href="#">
                        Returns & Exchanges
                    </Link>
                    <Link href="#">
                        Watches
                    </Link>
                    <Link href="#">
                        FAQs
                    </Link>

                </FooterList>
                <div className="w-full md: w-1/3 mb-6 md:md-0">
                    <h3 className="text-base font-bold mb-2">
                        About Us
                    </h3>
                    <p className="md-2">
                        © 2007 - 2023 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT / Địa chỉ: 261 - 263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh / GPĐKKD số 0311609355 do Sở KHĐT TP.HCM cấp ngày 08/03/2012. GP số 47/GP-TTĐT do sở TTTT TP HCM cấp ngày 02/07/2018. Điện thoại: (028) 7302 3456. Email: fptshop@fpt.com. Chịu trách nhiệm nội dung: Nguyễn Trịnh Nhật Linh.
                    </p>
                    <p>
                        &copy : {new Date().getFullYear()}
                        Shop. All rights reserved
                    </p>
              

                </div>
                <FooterList>
                        <h3 className="text-base font-bold mb-2">
                            Follow Us
                        </h3>
                        <div className="gap-2 flex flex-row">
                            <Link href="#">
                                <MdFacebook size={24}/>
                            </Link>
                            <Link href="#">
                                <AiFillTwitterCircle size={24}/>
                            </Link>

                            <Link href="#">
                                <AiFillYoutube size={24}/>
                            </Link>

                            <Link href="#">
                                <AiFillYoutube size={24}/>
                            </Link>
                        </div>
                    </FooterList>
            </div>
        </Container>
    </footer>
}
export default Footer;