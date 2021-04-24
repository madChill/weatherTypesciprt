import React, { FunctionComponent, ChangeEvent } from 'react'
import styles from "./style.module.css";

const Loading: FunctionComponent<{}> = (props) => {
    return (
        <div className={styles.search}>
            <div className={styles.isLoading}>
                ... LOADING
            </div>

        </div>)
}
export default Loading