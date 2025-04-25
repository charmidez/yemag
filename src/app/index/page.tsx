import Navbar from "../../components/ui/navbar";

export default async function Home() {
  await new Promise(r=> setTimeout(r,1000))
  return (
    <Navbar className="bg-amber-700"/>
  );
}
