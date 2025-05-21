import Autoplayvideo from "@/components/ui/autoplayvideo";
import Cardcolor from "@/components/ui/cardcolor";
import Cardinfo from "@/components/ui/cardinfo";
import { Cardsimple } from "@/components/ui/cardsimple";
import Titresection from "@/components/ui/titresection";

import Image from "next/image";

const cardTitre1 =
  "Partenariat avec l'Université de Lomé - Département Allemand de la Faculté des Lettres, Langues et Arts";
const cardText1 =
  "YEMAG est fier d’annoncer son partenariat avec le Département Allemand de l’Université de Lomé. Ce partenariat renforce les liens académiques et offre aux étudiants l’opportunité d’enrichir leur parcours éducatif. Les YEMAGUISTES bénéficieront d’un accès aux ressources académiques et aux programmes d’échange, tout en développant leurs compétences linguistiques et leur compréhension de la culture allemande.";

const cardTitre2 =
  "Partenariat entre YEMAG et le Lycée de Tokoin - Renforcement des Liens Éducatifs sur le plan lingustique";
const cardText2 =
  "YEMAG se réjouit de son partenariat avec le Lycée de Tokoin, témoignant d’un engagement accru pour le renforcement des liens éducatifs, notamment dans le domaine linguistique. Cette collaboration permet aux YEMAGUISTES de bénéficier d’un accès élargi à des ressources pédagogiques de qualité et à des programmes d’échange linguistique, favorisant ainsi le développement de leurs compétences en allemand et leur immersion culturelle.";

function Home() {
  return (
    <div>
      <title>YEMAG - Acceuil</title>

      <div className="flex flex-col">
        {/* Section 1 vidéo */}
        <Autoplayvideo srcMine="/videos/yemag_video.mp4" />

        {/* Actualité */}
        <div className="flex flex-col p-16 lg:px-64 bg-mine-gray">
          <Titresection titre="Actualités"/>
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
        <div className="flex flex-col p-16 lg:px-64 bg-mine-white">
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
          <Titresection
            titre="Pourquoi choisir YEMAG"
            className="pt-16 p-16 lg:px-64"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {["learn1.jpg", "learn2.jpg", "learn3.jpg"].map((src, index) => (
              <div key={index} className="relative aspect-square w-full">
                <Image
                  src={`/images/${src}`}
                  alt=""
                  fill
                  className="object-cover rounded-mine-carre"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Yemag et partenariats */}
        <div className="flex flex-col p-16 lg:px-64">
          <Titresection titre="YEMAG et partenariat" />

          <div className="grid grid-rows-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {/*Université de lomé*/}
            <div className="card items-center justify-center bg-gray-100 rounded-mine-carre p-4 gap-4">
              <Image
                src="/images/UnivLome.png"
                alt="presentation"
                className="w-full rounded-mine-carre"
                width={2000}
                height={2000}
              />
              <div className="card-body p-0">
                <h2 className="font-bold text-xl card-title justify-center">
                  {cardTitre1}
                </h2>
                <p className="">{cardText1}</p>
              </div>
            </div>
            {/*Lycéé de tokoin*/}
            <div className="card items-center justify-center bg-gray-100 rounded-mine-carre p-4 gap-4">
              <Image
                src="/images/Lytoko.png"
                alt="presentation"
                className="w-full rounded-mine-carre"
                width={2000}
                height={2000}
              />
              <div className="card-body p-0">
                <h2 className="font-bold text-xl card-title justify-center">
                  {cardTitre2}
                </h2>
                <p className="">{cardText2}</p>
              </div>
            </div>
          </div>
        </div>

        {/*YEMAG EN CHIFFRES*/}
        <div className="flex flex-col bg-mine-redlight p-16 lg:px-64">
          <Titresection titre="YEMAG Institut et Voyage en chiffres" />
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-8 bg-mine-gray p-8 rounded-mine-rounded">
            <div className="justify-center items-center flex flex-col gap-2">
              <h2 className="text-8xl font-bold">+450</h2>
              <p className="text-xl font-light">Étudiants</p>
            </div>
            <div className="justify-center items-center flex flex-col gap-2">
              <h2 className="text-8xl font-bold">+50</h2>
              <p className="text-xl font-light">Pédagogues</p>
            </div>
            <div className="justify-center items-center flex flex-col gap-2">
              <h2 className="text-8xl font-bold">+5</h2>
              <p className="text-xl font-light">Centres de formations</p>
            </div>
            <div className="justify-center items-center flex flex-col gap-2">
              <h2 className="text-8xl font-bold">+50</h2>
              <p className="text-xl font-light">Départs chaque année</p>
            </div>
          </div>
        </div>

        {/*News Letters*/}
        <div className="bg-red-300 border-t-8 border-mine-red justify-center items-center flex flex-row p-16 lg:px-64">
          <div className="card w-100 bg-red-400 rounded-mine-rounded  shadow-2xl">
            <div className="card-body">
              <h2 className="text-mine-white font-bold text-2xl">
                Boostez votre savoir-faire dès aujourd &apos hui : Recevez nos
                conseils exclusifs en vous abonnant à notre newsletter !
              </h2>
              <input type="Prénon & Nom" className="input w-full" />
              <input type="Prénon & Nom" className="input w-full" />
              <button className="btn w-full text-mine-red ">
                S&aposenregistrer
              </button>
            </div>
          </div>
        </div>

        {/*Card*/}
        <div className="p-16 lg:px-64 flex flex-row items-center justify-center">
          <Cardsimple titreCard="Candidature et inscription" descPargrCard={[`Si vous envisagez de postuler à YEMAG, et de partir pour
                l'Allemagne, vous êtes à la place idéale.`]} imgSrc="/images/presentationtitre.jpg" button="EN SAVOIR PLUS"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
