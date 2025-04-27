import Link from "next/link";

type MenucssProps = {
  linkMine: string;
  nameMenuMine: string;
};

const Menucss = ({ linkMine, nameMenuMine }: MenucssProps) => {
  return (
    <>
    <div className={`hover:underline hover:text-mine-red hover:bg-mine-redlight active:scale-95 transition transform active:underline active:text-mine-red active:font-black px-8 active:bg-mine-redlight`}>
    <Link
        href={linkMine}>
        {nameMenuMine}
      </Link>
    </div>
    </>
  );
};

export default Menucss;
