import Image from "next/image";

type SheetbarProps = {
  className: string;
};

const Sheetbar: React.FC<SheetbarProps> = ({ className }) => {
  return (
    <>
      <div className={`bg-mine-red ${className} flex flex-row justify-between`}>
        {/*boutton whatsapp et appel*/}
        <div className="flex flex-row justify-start items-center gap-4">
          <Image
            src="/images/whatsapp.svg"
            className="h-5 w-5"
            alt="logo"
            width={100}
            height={100}
          />
          <Image
            src="/images/phone.svg"
            className="h-5 w-5"
            alt="logo"
            width={100}
            height={100}
          />
          <a
            href=""
            className="lg:text-lg lg:font-bold text-mine-white flex text-sm font-semibold"
          >
            +228 70 41 72 55
          </a>
        </div>

        {/*boutton translation de langue*/}
        <div className="lg:flex hidden flex-row justify-start items-center gap-4">
          <a
            href="#"
            className="text-lg font-medium text-mine-red flex flex-row items-center gap-2 border-2 border-mine-white bg-mine-white rounded-lg px-2"
          >
            <Image
              src="/images/germany.svg"
              className="h-5 w-5"
              alt="Deutch"
              width={100}
              height={100}
            />
            Deutsch
          </a>
          <a
            href="#"
            className="text-lg font-medium text-mine-red flex flex-row items-center gap-2 border-2 border-mine-white bg-mine-white rounded-lg px-2"
          >
            <Image
              src="/images/french.svg"
              className="h-5 w-5"
              alt="French"
              width={100}
              height={100}
            />
            Français
          </a>

        </div>

        {/*boutton translation de langue phone*/}
        <div className="lg:hidden flex flex-row gap-2">
        <Image
            src="/images/germany.svg"
            className="h-6 w-6 border-2 border-white rounded-full"
            alt="Deutch"
            width={100}
            height={100}
          />

          <Image
            src="/images/french.svg"
            className="h-6 w-6 border-2 border-white rounded-full"
            alt="French"
            width={100}
            height={100}
          />
        </div>

      </div>
    </>
  );
};

export default Sheetbar;
