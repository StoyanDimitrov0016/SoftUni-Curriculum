import React from "react";
import styles from '../../styles/Dashboard.module.css'
import { Link } from "react-router-dom";

export const SneakerCard = ({ _id, brand, model, imageUrl, value }) => {
    return (
        <li className={styles.card}>
            <img src={imageUrl} alt={`Sneaker: ${brand} - ${model}`} />
            <p>
                <strong>Brand: </strong>
                <span className="brand">{brand}</span>
            </p>
            <p>
                <strong>Model: </strong>
                <span className="model">{model}</span>
            </p>
            <p>
                <strong>Value:</strong>
                <span className="value">{value}</span>$
            </p>
            <Link className={styles["details-btn"]} to={`/details/${_id}`} >Details</Link>
        </li>
    );
}