import React from 'react'
import styles from '../styles/Home.module.css';

const Card = (props) => {
    return (
        <div onClick={props.onClick}  className={styles.card}>
            {props.children}
        </div>
    )
}

export default Card
