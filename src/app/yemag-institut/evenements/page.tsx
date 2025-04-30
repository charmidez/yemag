import Titrepage from "@/components/ui/titrepage";
import Link from "next/link";

const desc = "";
const descDeutch = "";

function Evenements() {
  return (
    <>
      <Titrepage
        titre="Grands Évenements"
        description={desc}
        descriptionDeutsch={descDeutch}
        className="bg-[url('/images/presentationtitre.jpg')]"
      >
        <Link href="/" className="btn bg-mine-red text-mine-white rounded-mine-little-rounded w-full">Toute l'Actualité</Link>
      </Titrepage>
    </>
  );
}

export default Evenements;
