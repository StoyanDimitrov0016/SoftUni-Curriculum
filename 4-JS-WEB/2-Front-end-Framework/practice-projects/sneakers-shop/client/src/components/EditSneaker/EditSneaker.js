import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as sneakerService from '../../services/sneakerService';

export const EditSneaker = () => {
    const [formValues, setFormValues] = useState({
        brand: '',
        model: '',
        imageUrl: '',
        release: '',
        designer: '',
        value: '',
        _id: ''
    });

    const { sneakerId } = useParams();

    useEffect(() => {
        sneakerService.getOne(sneakerId)
            .then(sneakerDetails => setFormValues(sneakerDetails))
            .catch(error => console.log('Error while fetching sneakers info occurred:', error));
    }, [sneakerId]);

    // console.log(FormData);

    const onChangeHandler = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setFormValues(state => ({
            ...state,
            [name]: name === 'value' ? Number(value) : value,
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const res = await sneakerService.edit(formValues);

    };

    return (
        <section id="edit">
            <div className="form" onSubmit={onSubmitHandler}>
                <h2>Edit Sneaker:</h2>
                <h2>{`${formValues.brand} ${formValues.model} - ${formValues.release}`}</h2>
                <form className="edit-form">
                    <input
                        type="text"
                        name="brand"
                        id="shoe-brand"
                        placeholder="Brand"
                        value={formValues.brand}
                        onChange={onChangeHandler}
                    />
                    <input
                        type="text"
                        name="model"
                        id="shoe-model"
                        placeholder="Model"
                        value={formValues.model}
                        onChange={onChangeHandler} />
                    <input
                        type="text"
                        name="imageUrl"
                        id="shoe-img"
                        placeholder="Image url"
                        value={formValues.imageUrl}
                        onChange={onChangeHandler}
                    />
                    <input
                        type="text"
                        name="release"
                        id="shoe-release"
                        placeholder="Release date"
                        value={formValues.release}
                        onChange={onChangeHandler}
                    />
                    <input
                        type="text"
                        name="designer"
                        id="shoe-designer"
                        placeholder="Designer"
                        value={formValues.designer}
                        onChange={onChangeHandler}
                    />
                    <input
                        type="text"
                        name="value"
                        id="shoe-value"
                        placeholder="Value"
                        value={formValues.value}
                        onChange={onChangeHandler} />
                    <button type="submit">Post</button>
                </form>
            </div>
        </section>
    );
}