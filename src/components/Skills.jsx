import FadeIn from "./FadeIn";
import Fond from "../assets/arr_skills.png";
import { TypeAnimation } from "react-type-animation";

const Skills = () => {
  const skillsData = [
    {
      title: "Analyse & Conception",
      items: [
        {
          name: "Analyse des besoins",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          ),
        },
        {
          name: "Modélisation (Merise, UML)",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          ),
        },
        {
          name: "Conception de bases de données",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          ),
        },
        {
          name: "Rédaction de spécifications",
          icon: (
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Technologies",
      items: [
        {
          name: "HTML5",
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-6 h-6" alt="HTML5" />,
        },
        {
          name: "CSS3",
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-6 h-6" alt="CSS3" />,
        },
        {
          name: "JavaScript",
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-6 h-6" alt="JavaScript" />,
        },
        {
          name: "React.js",
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-6 h-6" alt="React" />,
        },
        {
          name: "Tailwind CSS",
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="w-6 h-6" alt="Tailwind CSS" />,
        },
        {
          name: "Express.js",
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-6 h-6" alt="Express" />,
        },
        {
          name: "MySQL",
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="w-6 h-6" alt="MySQL" />,
        },
        {
          name: "Intelligence Artificielle",
          icon: (
            <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2m0 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3M7.5 14a1.5 1.5 0 100 3 1.5 1.5 0 000-3m9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Outils",
      items: [
        {
          name: "VS Code",
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="w-6 h-6" alt="VS Code" />,
        },
        {
          name: "Postman",
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" className="w-6 h-6" alt="Postman" />,
        },
        {
          name: "DBeaver",
          icon: (
            <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          ),
        },
        {
          name: "Git & GitHub",
          icon: (
            <div className="flex -space-x-1">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="w-5 h-5" alt="Git" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-5 h-5" alt="GitHub" />
            </div>
          ),
        },
        {
          name: "Vercel",
          icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" className="w-6 h-6" alt="Vercel" />,
        },
        {
          name: "Render",
          icon: (
            <svg className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          ),
        },
        {
          name: "Aiven",
          icon: (
            <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat shadow-[0_-8px_30px_-5px_rgba(255,255,255,0.7)]"
      style={{ backgroundImage: `url(${Fond})` }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Titre */}
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-3">
              <TypeAnimation
                sequence={["Compétences", 5000, "Connaissances", 5000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Les compétences derrière mes réalisations
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillsData.map((skill, index) => (
            <FadeIn key={skill.title} delay={index * 0.15}>
              {/* Effet de transparence + blur (fonctionne aussi sur mobile) */}
              <div className="bg-white/75 backdrop-blur-md rounded-2xl p-6 sm:p-7 
                              shadow-sm border border-white/40 
                              hover:shadow-lg hover:bg-white/85 
                              transition-all duration-300 h-full">
                
                {/* Titre de la catégorie */}
                <h3 className="text-lg font-semibold text-blue-500 mb-5">
                  {skill.title}
                </h3>

                {/* Grille de compétences */}
                <div className="grid grid-cols-1 gap-3">
                  {skill.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 bg-white/60 backdrop-blur-sm 
                                 border border-white/50 rounded-xl px-4 py-3 
                                 shadow-sm hover:shadow-md hover:-translate-y-0.5 
                                 hover:bg-white/80 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-7 flex justify-center">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;