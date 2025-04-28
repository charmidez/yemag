import Link from "next/link";

type MenucssProps = {
  linkMine: string;
  nameMenuMine: string;
  onClick?: () => void;
};

const Menucss = ({ linkMine, nameMenuMine }: MenucssProps) => {
  return (
    <>
    <Link
        className={`hover:underline hover:text-mine-red hover:bg-mine-redlight active:scale-95 transition transform active:underline active:text-mine-red active:font-black px-8 active:bg-mine-redlight`}
        href={linkMine}>
        {nameMenuMine}
      </Link>
    </>
  );
};

export default Menucss;
