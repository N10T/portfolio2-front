import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import SchoolIcon from "@material-ui/icons/School";
import TodayIcon from '@material-ui/icons/Today';

import dayjs from "dayjs";
import { CardExPro, CardFormation } from "../../UI/Card";
import style from "../../../styles/me.module.css";
// import Link from "next/link";
import WorkIcon from "@material-ui/icons/Work";
import Tags from "../../UI/Tags";
export default function OppositeContentTimeline({ context, work, formation, fixed }) {
  const toID = (string, bool) => (bool ? "#" : "") + string.replace(/\W/gi, "");
  const [highlight, setHighlight] = React.useState(null);
  const [tags, setTags] = React.useState([]);
  const filter = (work) => (tags.length ? tags.includes(work.company.name) : true);
  const allDatas = [...work, ...formation].sort(function (a, b) {
    a = a.date.from.split("/").reverse().join("");
    b = b.date.from.split("/").reverse().join("");
    return b.localeCompare(a); // <-- alternative
  });

  return (
    <div className={style.timeline}>
      {/* <Tags setTags={setTags}/> */}
      <Timeline>
      <TimelineItem >
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <TodayIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent/>
            </TimelineItem>
        {allDatas.map((card, i) =>
          card.organisme ? (
            <TimelineItem key={i} className="formation">
              <TimelineOppositeContent>
                <CardFormation className="card" key={i} data={card} />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent onClick={(_) => setHighlight(toID(card.company + card.date.from))}>
                <h2 className="band">
                  {card.date.from} - {card.date.to ? card.date.to : dayjs().format("DD/MM/YYYY")}
                </h2>
              </TimelineContent>
            </TimelineItem>
          ) : (
            <TimelineItem key={i} className="exp-pro">
              <TimelineOppositeContent>
                <div className="flex right">
                  <h2 className="band">{card.date.from}</h2>
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  {card.stack ? <LaptopMacIcon /> : <WorkIcon />}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent onClick={(_) => setHighlight(toID(card.company + card.date.from))}>
                <CardExPro
                  id={toID(card.company + card.date.from)}
                  highlight={highlight === toID(card.company + card.date.from)}
                  className="card"
                  key={i}
                  data={card}
                  expPro
                />
              </TimelineContent>
            </TimelineItem>
          )
        )}

        {/* {work.filter(v=>filter(v)).map((card, i) => (
            <TimelineItem key={i}>
              <TimelineOppositeContent>
                <Typography align="right" variant="subtitle2" color="textSecondary">
                  {card.date.from} - {card.date.to ? card.date.to : dayjs().format("DD/MM/YYYY")}
                </Typography>
                
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  {card.stack ? <LaptopMacIcon /> : <WorkIcon />}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent onClick={(_) => setHighlight(toID(card.company + card.date.from))}>
              
          <CardExPro
            id={toID(card.company + card.date.from)}
            highlight={highlight === toID(card.company + card.date.from)}
            className="card exp-pro"
            key={i}
            data={card}
            expPro
          />
              </TimelineContent>
            </TimelineItem>
          ))} */}
      </Timeline>
    </div>
  );
}
