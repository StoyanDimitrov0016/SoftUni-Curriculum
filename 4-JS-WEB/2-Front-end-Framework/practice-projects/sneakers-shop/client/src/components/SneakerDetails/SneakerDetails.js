import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        <section id="details">
            <div id="details-wrapper">
                <p id="details-title">Shoe Details</p>
                <div id="img-wrapper">
                    <img src={imageUrl} alt={`Sneaker: ${brand} - ${model}`} />
                </div>
                <div id="info-wrapper">
                    <p>Brand: <span id="details-brand">{brand}</span></p>
                    <p>Model: <span id="details-model">{model}</span></p>
                    <p>Release date: <span id="details-release">{release}</span></p>
                    <p>Designer: <span id="details-designer">{designer}</span></p>
                    <p>Value: <span id="details-value">{value}</span></p>
                </div>

                {/*Edit and Delete are only for creator*/}
                <div id="action-buttons">
                    <Link className="edit-btn" to={`/edit/${_id}`}>Edit</Link>
                    <Link className="delete-btn" to={`/sneakers/${_id}`}>Delete</Link>
                </div>
            </div>
        </section>
    );
}