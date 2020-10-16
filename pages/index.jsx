import Link from "next/link";
import styles from "../styles/home.module.css";
import i18nInit from "../config/i18n"
import { useTranslation, initReactI18next, FormattedString } from "react-i18next";
import withContext from '../components/withContext';
import React from "react"
// import i18n from "i18next";
// import { FormattedString } from "react-i18next";

function Home({context}) {
//   const {lng,resources,chooseLng} = context
//   i18nInit (resources,lng)
//   const { t } = useTranslation();
// console.log(context);

  return (
    <div className={styles.main}>
      <div className={styles.band}></div>
      <img className={styles.image} src="./images/background-me.gif" alt="foo"/>
      <h1>En construction</h1>
      {/* <button onClick={()=>chooseLng("en")}>English</button>
      <button onClick={()=>chooseLng("fr")}>Francais</button>
      <h2>{t('Welcome to React')}</h2>
      Home
      <Link href="/me">
        <a>{t('connaitre')}</a>
      </Link>
      <Link href="/realisations">
        <a>{t('réalisations')}</a>
      </Link>
      <Link href="/labs">
        <a>{t('labs')}</a>
      </Link>
      <Link href="/contact">
        <a>{t('contact')}</a>
      </Link> */}
    </div>
  );
}





class Home2 extends React.Component {
  state = {count:0}
componentDidMount(){
  const interval = setInterval(() => {
    console.log(this.state.count);
    this.setState({count:this.state.count+1})
  }, 1000);
}

componentWillUnmount(){
  clearInterval(interval)
}
  render() {
    return (
      <div>
        {this.state.count}
      </div>
    )
  }
}




export default withContext(Home)