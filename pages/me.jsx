import React from 'react'
import withContext from '../components/withContext';
import style from "../styles/me.module.css";


function Me(props) {
    console.log(props);
    return (
        <div className={style.foo}>
            <p>Me</p>
        </div>
    )
}

export default withContext(Me)
