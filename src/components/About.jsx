import FadeIn from "./FadeIn";
import "../App.css";

const About = () => {
  const services = [
    {
      title: "Conception de logiciels",
      description:
        "Analyse des besoins, modélisation et conception d’applications adaptées aux enjeux métier.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Développement d'applications",
      description:
        "Création d’applications web et logicielles modernes, performantes et évolutives.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Analyse & Conseil",
      description:
        "Étude des processus, identification des besoins et accompagnement dans la transformation digitale.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Nouvelles technologies",
      description:
        "Veille technologique, expérimentation et intégration de solutions innovantes dans les projets.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

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

              {/* ========== BOUTON TÉLÉCHARGER CV ========== */}
              <div className="mt-10">
                <a
                  href="/CV_SAMAKE_Boubacar.pdf"   // ← Mets le bon nom de ton fichier PDF ici
                  download
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-blue-600 text-white font-medium rounded-xl 
                             hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg 
                             hover:-translate-y-0.5"
                >
                  {/* Icône PDF */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Télécharger mon CV
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ========== SECTION SERVICES ========== */}
        <div className="mt-20 md:mt-28">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Mes <span className="text-blue-600">Services</span>
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Voici les domaines dans lesquels je peux vous accompagner avec passion et rigueur.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <FadeIn key={service.title} direction="up" delay={0.1 * (index + 1)}>
                <div className="group h-full bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-1">
                  {/* Icône */}
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>

                  {/* Titre */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;