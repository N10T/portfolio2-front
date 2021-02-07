import React from "react";
import style from "./FlatCard.module.css";

function Card(props) {
  if (props.array[0].date)
    props.array.map((w) => {
      const year = w.date.to.diff(w.date.from, "y");
      const month = w.date.to.diff(w.date.from, "month");
      // const plus =  year > 0 ? Math.floor((year - w.date.to.diff(w.date.from, "y",true))*10) :""
      w.date.duree = year > 0 ? year + ` an${year > 1 ? "s" : ""} ` : month + " mois";
      return w;
    });

  return (
    <section id={props.id} className={`${style.card} flex`}>
      <img className={style.icon} src="https://img.icons8.com/ios/452/education.png" alt="icon" />
      <div className={style.content}>
        <h1>{props.title}</h1>

        <div className={`${style.elements} ${props.isHorizontal ? style.horizontal : ""}`}>
          {props.array.map((element, i) => {
            return (
              <article key={i} className={`${style.element} flex`}>

                {element.company && (
                  <img className={style.icon} src={element.company.logoURL} alt="icon" />
                )}
                <div>
                  <h2 className={style.title}>
                    {element.title} {element.company?.name && "- " + (element.building || element.company.name)}
                  </h2>
                  {!props.noSubtitle && (
                    <h3 className={style.subtitle}>
                      {element.date &&
                        element.date.from.format("DD/MM/YY") +
                          " - " +
                          element.date.to.format("DD/MM/YY") +
                          " - " +
                          element.date.duree}
                    </h3>
                  )}
                  {!props.noDescription && (
                    <ul className={style.description}>
                      {element.details &&
                        element.details.map((detail, i) => <li className={props.id === "education" && style.marginLeft} key={i + "detail"}>{detail}</li>)}
                    </ul>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Card;
