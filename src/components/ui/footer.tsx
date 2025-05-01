import Link from "next/link";

const Footer = () => {
    return(
        <>
        <div className="flex flex-col px-16 py-32 bg-[url('/images/footer.png')] bg-cover bg-fixed gap-4">
            <div className="flex flex-row justify-between">
                <img src="/images/logo.png" alt="logo" className="p-4 bg-mine-white w-40 border-0 rounded-mine-rounded shadow-2xl bg-cover bg-fixed "/>

                <div className="flex flex-col gap-4 items-center">
                    <div className="flex flex-row gap-4 justify-around">
                        <img src="/images/facebook.svg" alt="yemag_facebook" className="w-10"/>
                        <img src="/images/instagram.svg" alt="yemag_facebook" className="w-10"/>
                        <img src="/images/youtube.svg" alt="yemag_facebook" className="w-10"/>
                    </div>
                    <Link href={"/"} className="btn p-6 font-semibold  text-lg bg-mine-red text-mine-white rounded-mine-rounded"> Des questions ? </Link>
                </div>
            </div>

            <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-8 items-end">
            <ul className=" font-semibold">
                 <li>F.A.Q</li>
                 <li>Inscription</li>
                 <li>Contact et addresse</li>
                 <li>Mention légales</li>
                 <li>Terms et conditions</li>
                </ul>

                <ul className=" font-semibold lg:pl-30">
                 <li>Au Togo</li>
                 <li>Au Bénin</li>
                 <li>En Allemagne</li>
                </ul>
            </div>


                <ul className=" font-semibold">
                 <li className="flex flex-row gap-2"><img src="/images/phone_simple.svg" className="w-5"/> +228 70 41 72 55</li>
                 <li className="flex flex-row gap-2"><img src="/images/phone_simple.svg" className="w-5"/> +229 45 91 53 90</li>
                 <li className="flex flex-row gap-2"><img src="/images/phone_simple.svg" className="w-5"/> +49 157 331 359 94</li>
                 <li className="flex flex-row gap-2"><img src="/images/envelope.svg" className="w-5"/>contact@yemag-uni.com</li>
                 <li>Lomé - Sokodé - Kara - Cotonou</li>
                </ul>
            </div>
        </div>

        <div className="bg-gray-800 py-2 justify-center content-center items-center flex flex-row">
            <p className="text-mine-footer font-semibold text-gray-400">Copyright 2023 YEMAG. Design & Developed By Charmidez</p>
        </div>
        </>
    )
}

export default Footer