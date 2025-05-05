import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-[url('/images/footer.png')] bg-cover bg-fixed px-4 lg:px-64 py-20 grid gap-10">
        {/* Haut du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-8">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="p-4 bg-mine-white w-40 border-0 rounded-mine-rounded shadow-2xl"
            width={100}
            height={100}
          />

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row gap-4">
              <Image
                src="/images/facebook.svg"
                alt="facebook"
                className="w-8"
                width={100}
                height={100}
              />
              <Image
                src="/images/instagram.svg"
                alt="instagram"
                className="w-8"
                width={100}
                height={100}
              />
              <Image src="/images/youtube.svg" alt="youtube" className="w-8"  width={100}
                height={100}/>
            </div>
            <Link
              href={"/"}
              className="btn px-6 py-2 font-semibold text-lg bg-mine-red text-mine-white rounded-mine-rounded"
            >
              Des questions ?
            </Link>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="flex flex-col md:flex-row justify-between gap-y-8">
          <div className="flex flex-col sm:flex-row gap-8">
            <ul className="font-semibold space-y-1">
              <li>F.A.Q</li>
              <li>Inscription</li>
              <li>Contact et adresse</li>
              <li>Mentions légales</li>
              <li>Termes et conditions</li>
            </ul>

            <ul className="font-semibold space-y-1">
              <li>Au Togo</li>
              <li>Au Bénin</li>
              <li>En Allemagne</li>
            </ul>
          </div>

          <ul className="font-semibold space-y-2">
            <li className="flex items-center gap-2">
              <Image
                src="/images/phone_simple.svg"
                alt="Phone"
                width={20}
                height={20}
              />
              +228 70 41 72 55
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/images/phone_simple.svg"
                alt="Phone"
                width={20}
                height={20}
              />
              +229 45 91 53 90
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/images/phone_simple.svg"
                alt="Phone"
                width={20}
                height={20}
              />
              +49 157 331 359 94
            </li>
            <li className="flex items-center gap-2">
              <Image
                src="/images/envelope.svg"
                alt="Email"
                width={20}
                height={20}
              />
              contact@yemag-uni.com
            </li>
            <li>Lomé - Sokodé - Kara - Cotonou</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 py-4 flex justify-center">
        <p className="text-mine-footer lg:text-sm text-gray-400 font-semibold text-center px-4">
          © 2023 YEMAG. Design & Developed By Charmidez
        </p>
      </div>
    </>
  );
};

export default Footer;
