import FadeIn from "./FadeIn";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Gros titre à gauche */}
          <FadeIn direction="left" className="lg:w-5/12">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-none tracking-tight">
                Qui<br />
                <span className="text-blue-600">suis-je ?</span>
              </h2>
              
              {/* Ligne animée */}
              <div className="mt-6 w-20 h-1.5 bg-blue-100 rounded-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1/2 bg-blue-600 rounded-full animate-slide"></div>
              </div>
            </div>
          </FadeIn>

          {/* Texte à droite */}
          <FadeIn direction="right" delay={0.2} className="lg:w-7/12">
            <div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                Titulaire d'une Licence en Méthodes Informatiques Appliquées à la Gestion
                des Entreprises (MIAGE), mon parcours m'a permis d'acquérir des connaissances
                en informatique, en gestion et en analyse des besoins.
              </p>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                Je m'intéresse particulièrement à la conception de logiciels et aux nouvelles
                technologies. Curieux et persévérant, j'aime apprendre, expérimenter
                et enrichir mes compétences à travers des projets concrets.
              </p>

              {/* Infos rapides */}
             
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div>
                <p className="text-sm text-gray-500 mb-1">NOM Prénom</p>
                <p className="font-semibold text-gray-900">SAMAKE Boubacar</p>
            </div>
            <div>
                <p className="text-sm text-gray-500 mb-1">Localisation</p>
                <p className="font-semibold text-gray-900">Bamako, Mali</p>
            </div>
            <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="font-semibold text-gray-900 break-all">bm.samake42@gmail.com</p>
            </div>
            <div>
                <p className="text-sm text-gray-500 mb-1">Disponibilité</p>
                <p className="font-semibold text-blue-600">Ouvert aux opportunités</p>
            </div>
            </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default About;