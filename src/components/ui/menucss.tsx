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
        className={`hover:underline`}
        href={linkMine}>
        {nameMenuMine}
      </Link>
    </>
  );
};

export default Menucss;
