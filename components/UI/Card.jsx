import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../../styles/palette";
// import dayjs from "dayjs";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import colorContext from "../Context"

import {
  faNodeJs,
  faCss3Alt,
  faJsSquare,
  faReact,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import LogoCard from "../UI/LogoCard";
const lib = { faNodeJs, faCss3Alt, faJsSquare, faReact, faHtml5 };
const foo = [
  {
    "name": "18-24",
    "uv": 31.47,
    "pv": 2400,
    "fill": "#8884d8"
  },
]
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

function CardExPro({ data, expPro, highlight, context, ...props }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
          <div className={expanded ? "logo-bannier slide-in-right" : "logo-bannier"} onClick={handleExpandClick}>
            {stack
              // .sort((a, b) => a.name.localeCompare(b.name))
              .map((elem, i) => <LogoCard key={i} data={elem} fontawersome={lib[elem.fontAwersome]} expanded={expanded} />)}
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
        <div className="flex">
          <h2 className={"position " + classes.position}>{title}</h2>
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
