type SheetbarProps = {
  className: string;
};

const Sheetbar: React.FC<SheetbarProps> = ({ className }) => {
  return (
    <>
      <div
        className={`bg-mine-red ${className} flex flex-row justify-between`}
      >
        <div className="flex flex-row justify-start items-center gap-4">
          <img src="/images/whatsapp.svg" className="h-5 w-5" alt="logo" />
          <img src="/images/phone.svg" className="h-5 w-5" alt="logo" />
          <a href="" className="text-lg font-bold text-mine-white">
            +228 70 41 72 55
          </a>
        </div>

        <div className="flex flex-row justify-start items-center gap-4">
          <a
            href="#"
            className="text-lg font-medium text-mine-red flex flex-row items-center gap-2 border-2 border-mine-white bg-mine-white rounded-lg px-2"
          >
            <img src="/images/germany.svg" className="h-5 w-5" alt="Deutch" />
            Deutsch
          </a>
          <a
            href="#"
            className="text-lg font-medium text-mine-red flex flex-row items-center gap-2 border-2 border-mine-white bg-mine-white rounded-lg px-2"
          >
            <img src="/images/french.svg" className="h-5 w-5" alt="French" />
            Français
          </a>
        </div>
      </div>
    </>
  );
};

export default Sheetbar;
