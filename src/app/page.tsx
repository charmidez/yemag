import Autoplayvideo from "@/components/ui/autoplayvideo";
import Cardcolor from "@/components/ui/cardcolor";
import Cardinfo from "@/components/ui/cardinfo";
import Titresection from "@/components/ui/titresection";

function Home() {
  return (
    <div>
      <div className="flex flex-col">
        {/* Section 1 vidéo */}
        <Autoplayvideo srcMine="/videos/yemag_video.mp4" />

        {/* Actualité */}
        <div className="flex flex-col p-16 bg-mine-gray">
          <Titresection titre="Actualités" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              image="/images/administration.jpg"
            />
            <Cardinfo
              titreCard="Une célébration mémorable : la fête du personnel Yemag, 21 décembre 2024"
              descCard="Le 21 décembre dernier, Yemag a marqué la fin de l’année 2024 en grande pompe avec une fête exceptionnelle"
              linkInfo="/"
              image="/images/evenements.jpg"
            />
            <Cardinfo
              titreCard="Une célébration mémorable : la fête du personnel Yemag, 21 décembre 2024"
              descCard="Le 21 décembre dernier, Yemag a marqué la fin de l’année 2024 en grande pompe avec une fête exceptionnelle"
              linkInfo="/"
              image="/images/presentationtitre.jpg"
            />
          </div>
        </div>

        {/*Yemag reference inégalé*/}
        <div className="flex flex-col p-16 bg-mine-white">
          <Titresection titre="YEMAG, une référence inégalée" />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-2 md:gap-4">
            <Cardcolor
              titre="Réputée"
              desc="Reconnue pour son excellence dans l’enseignement de l’allemand au sein de la communauté éducative."
              couleur="border-mine-black text-mine-black"
              images="/images/BlackreputationMine.png"
            />
            <Cardcolor
              titre="Innovante"
              desc="Des méthodes d’enseignement novatrices, offrant aux étudiants des approches modernes."
              couleur="border-mine-red text-mine-red"
              images="/images/RedreputationMineNew.png"
            />
            <Cardcolor
              titre="Efficace"
              desc="Acquérir des compétences linguistiques solides en allemand en un temps records."
              couleur="border-mine-yellow text-gray-700"
              images="/images/YeloowreputationMine.png"
            />
            <Cardcolor
              titre="Fiabilité"
              desc="YEMAG, reconnu pour son engagement et ses exploits, assure un environnement de confiance pour ses étudiants."
              couleur="border-gray-300 text-mine-black"
              images="/images/FiabiliteMineNew.png"
            />
          </div>
        </div>

        {/*Pourquoi choisir YEMAG*/}
        <div className="flex flex-col bg-mine-redlight">
          <Titresection titre="Pourquoi choisir YEMAG" className="pt-16 px-16"/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <img src="/images/presentationtitre.jpg" className="object-cover" />
            <img src="/images/presentationtitre.jpg" className="object-cover" />
            <img src="/images/presentationtitre.jpg" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
