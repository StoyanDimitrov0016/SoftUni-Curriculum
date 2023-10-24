import { useState } from "react";

export const CreateGame = ({
    onCreateGameSubmit,
}) => {
    const [formValues, setFormValues] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });

    const onChangeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateGameSubmit(formValues);
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        value={formValues.title}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        value={formValues.category}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        value={formValues.maxLevel}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        value={formValues.imageUrl}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={formValues.summary}
                        onChange={onChangeHandler} />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Create Game"
                    />
                </div>
            </form>
        </section>
    );
};