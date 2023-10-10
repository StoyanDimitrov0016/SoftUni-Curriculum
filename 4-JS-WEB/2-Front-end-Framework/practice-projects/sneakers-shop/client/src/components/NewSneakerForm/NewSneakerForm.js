import React, { useState } from "react";
import * as sneakerService from '../../services/sneakerService';

export const NewSneakerForm = () => {
    const [formValues, setFormValues] = useState({
        brand: '',
        model: '',
        imageUrl: '',
        release: '',
        designer: '',
        value: ''
    });

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

        const res = await sneakerService.create(formValues);

    };

    return (
        <section id="create" >
            <div className="form">
                <h2>Add item</h2>
                <form className="create-form" onSubmit={onSubmitHandler} >
                    <input
                        type="text"
                        name="brand"
                        id="shoe-brand"
                        placeholder="Brand"
                        value={formValues.brand}
                        onChange={onChangeHandler} />

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
        </section >
    );
}