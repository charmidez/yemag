import Autoplayvideo from "@/components/ui/autoplayvideo";
import Cardinfo from "@/components/ui/cardinfo";
import Titresection from "@/components/ui/titresection";


function Home() {
  return (
    <div>
        <title>YEMAG - Acceuil </title>
      <div className="flex flex-col">
        {/* Section 1 vidéo */}
        <Autoplayvideo srcMine="/videos/yemag_video.mp4" />
        {/* Actualité */}
        <div className="flex flex-col p-16 bg-mine-gray">
            <Titresection titre="Actualités" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Données et liste à récupérer depuis la base de données avec le composant carte*/}
              <Cardinfo
                titreCard="Une célébration mémorable : la fête du personnel Yemag, 21 décembre 2024"
                descCard="Le 21 décembre dernier, Yemag a marqué la fin de l’année 2024 en grande pompe avec une fête exceptionnelle"
                linkInfo="/"
                image="/images/presentationtitre.jpg"
              />
              <Cardinfo
                titreCard="Une célébration mémorable : la fête du personnel Yemag, 21 décembre 2024"
                descCard="Le 21 décembre dernier, Yemag a marqué la fin de l’année 2024 en grande pompe avec une fête exceptionnelle"
                linkInfo="/"
                image="/images/presentationtitre.jpg"
              />
              <Cardinfo
                titreCard="Une célébration mémorable : la fête du personnel Yemag, 21 décembre 2024"
                descCard="Le 21 décembre dernier, Yemag a marqué la fin de l’année 2024 en grande pompe avec une fête exceptionnelle"
                linkInfo="/"
                image="/images/presentationtitre.jpg"
              />
                            <Cardinfo
                titreCard="Une célébration mémorable : la fête du personnel Yemag, 21 décembre 2024"
                descCard="Le 21 décembre dernier, Yemag a marqué la fin de l’année 2024 en grande pompe avec une fête exceptionnelle"
                linkInfo="/"
                image="/images/presentationtitre.jpg"
              />
              
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
