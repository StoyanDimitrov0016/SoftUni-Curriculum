import React from "react";
import styles from '../../styles/Dashboard.module.css'
import { SneakerCard } from "./SneakerCard";
import { useState, useEffect } from "react";
import * as sneakerService from '../../services/sneakerService';

export const Dashboard = () => {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        sneakerService.getAll()
            .then(newSneakers => {
                setSneakers(Object.values(newSneakers))
            })
            .catch(error => console.log('Error in getting all sneakers:' + error))
    }, []);

    return (
        <section id={styles["dashboard"]}>
            <h2>Collectibles</h2>
            <ul className={styles["card-wrapper"]}>
                {sneakers.length === 0 && <h2>There are no items added yet.</h2>}
                {sneakers.length >= 1 &&
                    sneakers.map(sneaker => <SneakerCard key={sneaker._id}  {...sneaker} />)}
            </ul>
        </section>
    );
}