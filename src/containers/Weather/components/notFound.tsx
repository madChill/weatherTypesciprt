import React, { FunctionComponent, ChangeEvent } from 'react'
import styles from "./style.module.css";
import NotFoundImg from '../assets/cloud1.png';

import lang from "../../../helpers/language"
const NotFound: FunctionComponent<{}> = (props) => {
    return (
        <div className={styles.search}>
            <div className={styles.imgNotFoundLayout}>
                <img className={styles.imgNotFound} src={NotFoundImg} />
            </div>
            <div className={styles.contentNotFound}>
                <p>{lang.notFoundLocation}</p>
            </div>
        </div>)
}
export default NotFound