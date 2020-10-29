import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogoCard({ fontawersome,data: {url,  name }}) {
  return (
    <div className="logoCard">
      {url && <img src={url} alt={name} />}

      {fontawersome && <FontAwesomeIcon icon={fontawersome} />}
      <span>
        {name}
      </span>
    </div>
  );
}
