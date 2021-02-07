import {
  band,
  slideInTop,
  slideInLeft,
  buttons,
  image,
  scaleDownCenter,
} from "../styles/home.module.css";
import api from "../api/defaultAPI";
// import i18nInit from "../config/i18n"
// import { useTranslation, initReactI18next, FormattedString } from "react-i18next";
// import withContext from "../components/withContext";
import Button from "../components/UI/Button";
// import i18n from "i18next";
// import { FormattedString } from "react-i18next";

console.log(process.env.REACT_APP_BACKEND_URL)
api
  .get()
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

function Home({ context }) {
  //   const {lng,resources,chooseLng} = context
  //   i18nInit (resources,lng)
  //   const { t } = useTranslation();
  // console.log(context);

  return (
    <React.Fragment>
      <div className={band + " " + slideInTop}></div>
      <img className={image + " " + slideInLeft} src="./images/background-me.gif" alt="foo" />
      <div className={buttons}>
        <Button variant="outlined" color="primary" to="./resume" className={scaleDownCenter}>
          Me découvrir
        </Button>
        <Button variant="outlined" color="primary" to="./projects" className={scaleDownCenter}>
          Mes projets
        </Button>
        <Button variant="outlined" color="primary" to="./labs" className={scaleDownCenter}>
          Mon labo
        </Button>
        <Button variant="outlined" color="primary" to="./contact" className={scaleDownCenter}>
          Me contacter
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Home;
