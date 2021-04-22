import React, { FunctionComponent, ChangeEvent } from 'react'
import styles from "./style.module.css";

import lang from "../../../helpers/language"
const Search: FunctionComponent<{ onChange: (val: ChangeEvent<HTMLInputElement>) => void }> = (props) => {
    return (
        <div className={styles.search}>
            <input onChange={(val) => props.onChange(val)} className={styles.input}
                placeholder={lang.InputPlaceHolderSearch}
                type="search" id="location" name="location"></input>
        </div>)
}
export default Search