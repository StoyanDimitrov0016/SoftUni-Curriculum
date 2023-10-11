import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from '../../styles/Details.module.css';
import * as sneakerService from '../../services/sneakerService';
import { Link } from "react-router-dom";

export const SneakerDetails = () => {
    const { sneakerId } = useParams()
    const [sneakerDetails, setSneakerDetails] = useState({});

    useEffect(() => {
        sneakerService.getOne(sneakerId)
            .then(sneaker => setSneakerDetails(sneaker))
            .catch(error => console.log('There is some error with fetching particular sneaker', error));
    }, [sneakerId]);

    const { brand, model, imageUrl, release, designer, value, _id } = sneakerDetails;

    return (
        <section id={styles.details}>
            <div id={styles["details-wrapper"]}>
                <p id={styles["details-title"]}>Shoe Details</p>
                <div id={styles["img-wrapper"]}>
                    <img src={imageUrl} alt={`Sneaker: ${brand} - ${model}`} />
                </div>
                <div id={styles["info-wrapper"]}>
                    <p>Brand: <span id={styles["details-brand"]}>{brand}</span></p>
                    <p>Model: <span id={styles["details-model"]}>{model}</span></p>
                    <p>Release date: <span id={styles["details-release"]}>{release}</span></p>
                    <p>Designer: <span id={styles["details-designer"]}>{designer}</span></p>
                    <p>Value: <span id={styles["details-value"]}>{value}</span></p>
                </div>

                {/*Edit and Delete are only for creator*/}
                <div id={styles["action-buttons"]}>
                    <Link className={styles["edit-btn"]} to={`/edit/${_id}`}>Edit</Link>
                    <Link className={styles["delete-btn"]} to={`/sneakers/${_id}`}>Delete</Link>
                </div>
            </div>
        </section>
    );
}