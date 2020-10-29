import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../../styles/palette";
// import dayjs from "dayjs";

import {
  faNodeJs,
  faCss3Alt,
  faJsSquare,
  faReact,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import LogoCard from "../UI/LogoCard";
const lib = { faNodeJs, faCss3Alt, faJsSquare, faReact, faHtml5 };
// library.add(faNodeJs, faCss3Alt, faJsSquare, faReact, faHtml5);
// [faJS,
//     faReact,
//     faNodeJS,
//     faExpress,
//     faHbs,
//     faMongoDB,
//     faMongoose,
//     faHTML,
//     CSS ]
const useStyles = makeStyles({
  position: {
    // borderColor: theme.palette.secondary.main,
    borderBottom: "4px solid " + theme.palette.secondary.main,
  },
});

const styleJSS = (props) => ({
  root: {
    minWidth: 275,
  },
  position: {
    height: props ? "calc(100% - 2px)" : "100%",
    // borderColor:  "#ffd359"
  },
  pos: {
    marginBottom: 12,
  },
});

function CardExPro({ data, expPro, highlight, context, ...props }) {
  const {
    position,
    company: { name, logoURL, url: companyURL },
    // date: { from, to },
    city,
    details,
    stack,
  } = data;
  const classes = useStyles();
  return (
    <Card style={styleJSS().root} {...props}>
      {logoURL && (
        <div className="logo-company-card">
          <div className="company-logo">
            <a href={companyURL} target="blank">
              <img src={logoURL} alt={name} />
            </a>
          </div>
          <span className="city">{city}</span>
        </div>
      )}
      <CardContent>
        <div className="flex">
          <h2 className={"position " + classes.position}>{position}</h2>
          {/* <div className="triangle position"/> */}
        </div>
        <ul className="details">
          {details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
        {stack && (
          <div className="logo-bannier slide-in-right">
            {stack
              // .sort((a, b) => a.name.localeCompare(b.name))
              .map((elem, i) => (
                <LogoCard key={i} data={elem} fontawersome={lib[elem.fontAwersome]} />
                // elem.fontAwersome && <LogoCard><FontAwesomeIcon key={i} icon={lib[elem.fontAwersome]} /><p>{elem.name}</p></LogoCard>
              ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function CardFormation({ data, ...props }) {
  const {
    title,
    organisme,
    date: { from, to },
    city,
    details,
    logoURL,
  } = data;
  const classes = useStyles();
  return (
    <Card style={styleJSS().root} {...props}>
      {logoURL && (
        <div className="logo-company-card">
          <div className="company-logo">
            <a href={companyURL} target="blank">
              <img src={logoURL} alt={name} />
            </a>
          </div>
          <span className="city">{organisme}</span>
        </div>
      )}
      <CardContent>
        <div className="flex right">
          <h2 className={"title"}>{title}</h2>
          {/* <div className="triangle position"/> */}
        </div>
        <ul className="details">
          {details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
export {CardExPro,CardFormation};
