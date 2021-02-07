import Card from "../components/UI/FlatCard/FlatCard";
import FlatElement from "../components/UI/FlatElement/FlatElement";
import style from "../styles/resume.module.css";
import resume from "../utils/resume";
import Contact from "../components/Contact";

//http://preview.themeforest.net/item/material-cvresume/full_screen_preview/12374628?_ga=2.96388063.256243122.1610037240-2071033513.1610037240
const props = {};
props.resume = {
  picture:
    "https://media-exp1.licdn.com/dms/image/C4D03AQE9SPj9BRJFaA/profile-displayphoto-shrink_800_800/0/1572179905020?e=1618444800&v=beta&t=K1pc9dRJGa_PEaKMzxc7SdBYlGqexX5O-vNi2lKzbjU",
  works: [
    {
      title: "Ironhack",
      subtitle: "20/10/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ab blanditiis eum aut, aliquid non, deserunt, voluptate voluptates accusamus nulla nihil debitis et quisquam. Aut, ullam. Suscipit, provident temporibus!",
    },
    {
      title: "Carrefour",
      subtitle: "20/10/2003",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ab blanditiis eum aut, aliquid non, deserunt, voluptate voluptates accusamus nulla nihil debitis et quisquam. Aut, ullam. Suscipit, provident temporibus!",
    },
    {
      title: "Google",
      subtitle: "20/10/2002",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ab blanditiis eum aut, aliquid non, deserunt, voluptate voluptates accusamus nulla nihil debitis et quisquam. Aut, ullam. Suscipit, provident temporibus!",
    },
  ],
  educations: [
    {
      title: "Ironhack",
      subtitle: "20/10/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ab blanditiis eum aut, aliquid non, deserunt, voluptate voluptates accusamus nulla nihil debitis et quisquam. Aut, ullam. Suscipit, provident temporibus!",
    },
    {
      title: "Ironhack",
      subtitle: "20/10/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ab blanditiis eum aut, aliquid non, deserunt, voluptate voluptates accusamus nulla nihil debitis et quisquam. Aut, ullam. Suscipit, provident temporibus!",
    },
    {
      title: "Ironhack",
      subtitle: "20/10/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam aspernatur ab blanditiis eum aut, aliquid non, deserunt, voluptate voluptates accusamus nulla nihil debitis et quisquam. Aut, ullam. Suscipit, provident temporibus!",
    },
  ],
  hobbies: [
    {
      title: "Wakeboard",
    },
    {
      title: "Basketball",
    },
    {
      title: "Coding",
    },
    {
      title: "Dance",
    },
  ],
};

resume.works = [
  ...resume.works.sort((workA, workB) => {
    const isBefore = workA.date.to.isBefore(workB.date.to);
    return isBefore ? 1 : -1;
  }),
];

function CV() {
  return (
    <div className={style.resumeContainer}>
      <div id="resume" className={style["grid-container"]}>
        <aside id="profile" className={style.profile}>
          <div className={style.picture} style={{ backgroundImage: `url(${props.resume.picture}` }}>
          </div>
            <Contact />
          {/* <FlatElement faClass="fas fa-envelope-open-text" content={"0606060606"} />
          <FlatElement
            faClass="fas fa-envelope-open-text"
            content={"lorem zaedfqoze elqfihaopze aezpfiojzp mzzdm olzeoe  ùerf"}
          /> */}
        </aside>
        <Card id="work" array={resume.works} title="Works experience" />
        <Card id="education" array={resume.formation} title="Education" />
        <Card
          id="hobbies"
          array={resume.hobbies}
          title="Hobbies"
          noSubtitle
          noDescription
          isHorizontal
        />
      </div>
    </div>
  );
}

export default CV;
