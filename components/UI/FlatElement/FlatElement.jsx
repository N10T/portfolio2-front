import React from "react";
import style from "./FlatElement.module.css";

export default function FlatElement({ content, faClass }) {
  return (
    <>
      <div className={style.element}>
      {faClass && <i className={`${faClass} ${style.picto}`}></i>}
        <p className={style.content}>{content}</p>
      </div>
        <div className={style["gradient-line"]} />
    </>
  );
}
