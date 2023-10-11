import React from "react";
import styles from '../../styles/Search.module.css';
import cardStyles from '../../styles/Dashboard.module.css';
import { Link } from "react-router-dom";

export const SearchSneaker = () => {
    return (
        <section id={styles.search}>
            <h2>Search by Brand</h2>
            <form className={styles['search-wrapper']}>
                <input
                    id={styles['#search-input']}
                    type="text"
                    name="search"
                    placeholder="Search here..."
                    required=""
                />
                <button type="submit">Search</button>
            </form>
            <h3>Results:</h3>
            <div id={styles["search-container"]}>
                <ul className={styles["card-wrapper"]}>
                    {/* Display a li with information about every post (if any)*/}
                    <li className={cardStyles.card}>
                        <img src="./images/travis.jpg" alt="travis" />
                        <p>
                            <strong>Brand: </strong>
                            <span className={cardStyles.brand}>Air Jordan</span>
                        </p>
                        <p>
                            <strong>Model: </strong>
                            <span className={cardStyles.model}>1 Retro High TRAVIS SCOTT</span>
                        </p>
                        <p>
                            <strong>Value:</strong>
                            <span className={cardStyles.value}>2000</span>$
                        </p>
                        <Link className={cardStyles["details-btn"]} to='/details'> Details</Link>
                    </li>
                </ul>
                {/* Display an h2 if there are no posts */}
                {/* <h2>There are no results found.</h2> */}
            </div>
        </section>
    );
}