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
import TodayIcon from "@material-ui/icons/Today";

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
  const allDatas = [...work, ...formation].sort((a, b) => b.date.from.isBefore(a.date.from));

  return (
    <div className={style.timeline}>
      <Timeline>
        {allDatas.map((card, i) =>
          card.organisme ? (
            <TimelineItem key={i} className="formation">
              <TimelineContent
                onClick={(_) =>
                  setHighlight(toID(card.company + card.date.from.format("DD/MM/YYYY")))
                }
              >
                <h2 className="band">
                  {card.date.to.format("DD/MM/YYYY")}
                </h2>
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot color="secondary">{/* <SchoolIcon /> */}</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineOppositeContent>
                <CardFormation className="card" key={i} data={card} />
              </TimelineOppositeContent>
            </TimelineItem>
          ) : (
            <TimelineItem key={i} className="exp-pro">
              <TimelineContent>
                <h2 className="band">{card.date.from.format("DD/MM/YYYY")}</h2>
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  {/* {card.stack ? <LaptopMacIcon /> : <WorkIcon />} */}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineOppositeContent
                onClick={(_) =>
                  setHighlight(toID(card.company + card.date.from.format("DD/MM/YYYY")))
                }
              >
                <CardExPro
                  id={toID(card.company + card.date.from.format("DD/MM/YYYY"))}
                  highlight={highlight === toID(card.company + card.date.from.format("DD/MM/YYYY"))}
                  className="card"
                  key={i}
                  data={card}
                  expPro
                />
              </TimelineOppositeContent>
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
