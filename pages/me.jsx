import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// import Link from "@material-ui/core/Link";
import Timeline from "../components/me/exPro/Timeline";

const resume = {
  work: [
    {
      position: "Professeur assistant",
      company: {
        name: "Ironhack",
        logoURL:
          "https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/ajracsdqu5gmyfl6nai0",
        url: "https://ironhack.com/en",
      },
      date: { from: "24/08/2020", to: "" },
      city: "Paris",
      details: [
        "Assister le professeur lors des leçons en anglais.",
        "Corriger les exercices journaliers, commenter ou proposer des solutions.",
        "Apprendre aux élèves une méthodologie de travail, à lire et débugger leur code.",
        "Identifier les besoins et faire des renforcements sur des sujets demandés.",
        "Effectuer un suivi individuel moral et technique sur les 9 semaines de classe.",
        "Code review",
      ],
      stack: [
        { name: "VanillaJS", fontAwersome: "faJsSquare" },
        { name: "React", fontAwersome: "faReact" },
        { name: "NodeJS", fontAwersome: "faNodeJs" },
        { name: "HTML", fontAwersome: "faHtml5" },
        { name: "CSS", fontAwersome: "faCss3Alt" },
        {
          name: "Hbs",
          url:
          "https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/handlebars-js.png?fit=500%2C500&ssl=1",
        },
        {
          name: "MongoDB",
          url: "https://www.alwaysdata.com/static/img/technologies/databases/mongodb.png",
        },
        { name: "Express", url:"https://2bp5av1fu3f9121glc3i2z5i-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/express.png" },
      ],
    },
    {
      position: "Développeur web",
      company: {
        name: "Orange Maple",
        logoURL:
          "https://orangemaple.co.uk/wp-content/uploads/2018/11/Orange-Maple-Logo-2-300x147.png",
        url: "https://orangemaple.co.uk/",
      },
      date: { from: "01/05/2020", to: "24/08/2020" },
      city: "Londres",
      details: [
        "Réalisation d'un workshop collaboratif en ligne.",
        "Methode agile",
        'Réalisation de toute la partie "whiteboard"',
      ],
      // stack: ["VanillaJS", "React", "CanvasJS", "MaterielUI", "HTML", "CSS", "JSS"],
      stack: [
        { name: "VanillaJS", fontAwersome: "faJsSquare" },
        { name: "React", fontAwersome: "faReact" },
        { name: "HTML", fontAwersome: "faHtml5" },
        { name: "CSS", fontAwersome: "faCss3Alt" },
        { name: "MaterielUI", url: "https://img.icons8.com/color/452/material-ui.png" },
        { name: "CanvasJS" },
      ],
    },
    {
      position: "Responsable des activités",
      company: {
        name: "UCPA",
        logoURL: "https://sayse.fr/wp-content/uploads/2016/11/arenice.png",
        url: "https://www.arenice.cergypontoise.fr/",
      },
      date: { from: "01/05/2018", to: "23/08/2018" },
      city: "Cergy",
      building: "Aren'Ice",
      details: [
        "Coordination des créneaux d'occupations (Fédération Française de Hockey sur Glace & associations locales)",
        "Mise en place des activités sportives UCPA",
        "Management des équipes pédagogique, des techniciens patinoire et agent de patins",
        "Création d'outils numériques (plannification, reservation)",
      ],
    },
    {
      position: "Responsable d'exploitation",
      company: {
        name: "UCPA",
        logoURL: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logo-UCPA-2015.jpg",
        url: "https://www.ucpa.com/",
      },
      date: { from: "01/05/2017", to: "01/04/2018" },
      city: "Paris",
      building: "Espace Forme Alfred Nakache",
      details: [
        "Coordination des créneaux d'occupations (Fédération Française de Hockey sur Glace & associations locales)",
        "Mise en place des activités sportives UCPA",
        "Management des équipes pédagogique, des techniciens patinoire et agent de patins",
        "Création d'outils numériques (plannification, reservation)",
      ],
    },
    {
      position: "Responsable des activités",
      company: {
        name: "UCPA",
        logoURL: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logo-UCPA-2015.jpg",
        // logoURL: "https://www.palaisomnisports-marseille.com/download/fstore/loisirs/Pomge/pomge-bandeau.png",
        url: "https://www.palaisomnisports-marseille.com/",
      },
      date: { from: "01/02/2016", to: "31/09/2016" },
      city: "Paris",
      building: "Palais omnisports Marseille Grand Est",
      details: [
        "Organisation et animation de l'équipe pédagogique – 15 agents",
        "Création et maintenance d'un outil de planification (Google SpreadSheet et Form)",
        "Mise en place d’outils de réservations en ligne",
      ],
    },
    {
      position: "Responsable d'unité",
      company: {
        name: "UCPA",
        logoURL: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logo-UCPA-2015.jpg",
        url: "https://www.ucpa.com/",
      },
      date: { from: "01/05/2011", to: "31/04/2017" },
      city: "Paris",
      building: "Espace Glisse Paris 18",
      details: [
        "Organiser et animer les équipes d'accueil et technique",
        "Gérer du budget (Marché de 250K€)",
        "Création d'outils de suivi des usagers (Excel)",
        "Compte rendu journalier",
      ],
    },
    {
      position: "Educateur sportif",
      company: {name:"Municipalités",logoURL:"https://upload.wikimedia.org/wikipedia/fr/thumb/3/36/Logo_Noisy_Sec.svg/1200px-Logo_Noisy_Sec.svg.png"},
      date: { from: "01/05/2011", to: "31/04/2017" },
      city: "",
      details: [
        "Educateur multisports (Ville de Noisy le sec, Bobigny, La Courneuve, Paris)",
        "Moniteur sur glace (La Courneuve – UCPA)",
        "Moniteur d’acrobaties (Xswipe - association d’arts martiaux acrobatiques)",
        "Animateur (UCPA, Sport Elite Jeune, Championnet Sport)",
      ],
    },
  ],
  hobbies: ["sports de glisse", "Sports mécaniques", "Électronique", "Voyages"],
  competences: {
    langues: [
      { Francais: "langue maternelle" },
      { Anglais: "professionnel" },
      { Allemand: "débutant" },
    ],
    googleSuite: ["Drive", "Sheet", "Form", "Google Apps Script"],
    permis: ["Voiture", "Moto", "Bateau (côtier)"],
    développement: [
      "JavaScript",
      "React",
      "HTML / CSS / JSS",
      "NextJS",
      "NodeJS",
      "MongoDB",
      "Express",
    ],
  },
  formation: [
    {
      title: "WEB DEVELOPMENT BOOTCAMP",
      organisme: "Ironhack",
      date: { from: "14/10/2019", to: "13/03/2020" },
      city: "Paris",
      details: [
        "Plus de 400 heures de formation entièrement en anglais (HTML, CSS et JavaScript)",
        "Plus de 40 exercices corrigés",
        "Projets Front-end / Back-end (utilisation de MongoDB, NodeJS, Express, React, SCSS, API's, AJAX)",
      ],
    },
    {
      title: "Licence sciences et techniques des activités physiques et sportives",
      organisme: "Université Paris XIII",
      date: { from: "01/09/2008", to: "15/06/2011" },
      city: "Bobigny",
      details: [
        "Trois ans couvrant toutes les matières pour enseigner l'EPS dont 1 an de spécialisation dans la recherche en entrainement et performance",
      ],
    },
  ],
};
// resume.work.map((v) => {
//   if (v.stack) v.stack.sort((a, b) => !!a.fontAwersome < !!b.fontAwersome ? 1 : -1);
//   return v;
// });
// export { resume };
const Me = () => {
  // const [part, setPart] = React.useState("Presentation");
  // React.useEffect(() => {
  //   console.log(window.navigator);
  // }, []);

  return (
    <div style={{ backgroundColor: "#DEDEDE" }}>
      {/* <NavbarMe handleClick={setPart} /> */}
      {/* <h1>{part}</h1> */}
      <h1 className="text-center">Mon parcours</h1>
      {/* <div style={{ display: "flex", alignItems: "flex-start", backgroundColor: "#DEDEDE" }}>
      </div> */}
      <Timeline {...resume} fixed />
    </div>
  );
};

function NavbarMe({ handleClick }) {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      style={{ display: "flex", justifyContent: "space-around", height: "10vh" }}
    >
      <a onClick={() => handleClick("Exp Pro")}>Exp Pro</a>
      <a onClick={() => handleClick("Compétences")}>Compétences</a>
      <a color="textPrimary" onClick={() => handleClick("Hobbies")} aria-current="page">
        Hobbies
      </a>
      <a color="textPrimary" onClick={() => handleClick("Formation")} aria-current="page">
        Formation
      </a>
    </Breadcrumbs>
  );
}

export default Me;
