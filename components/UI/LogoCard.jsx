import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from '@material-ui/core/Button';
import { theme } from "../../styles/palette";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RadialBarChart, Legend, Tooltip, RadialBar } from "recharts";

export default function LogoCard({ fontawersome, data: { skill, url, name } }) {
  return (
    <div className="logoCard">
      <RadialBarChart
        style={{ position: "absolute", bottom: 0 }}
        width={64}
        height={64}
        innerRadius="80%"
        outerRadius="110%"
        data={[
          { name: name, value: skill / 2, fill: theme.palette.secondary.main },
          { value: 5, fill: theme.palette.primary.main },
        ]}
        endAngle={-30}
        startAngle={210}
      >
        <RadialBar minAngle={30} background clockWise={true} dataKey="value" />
      </RadialBarChart>
      {url && <img src={url} alt={name} />}

      {fontawersome && <FontAwesomeIcon icon={fontawersome} />}
      <span>{name}</span>
    </div>
  );
}
