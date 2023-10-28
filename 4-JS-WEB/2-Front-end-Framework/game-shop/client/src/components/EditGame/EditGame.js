import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import { useService } from "../../hooks/useService";
import { gameServiceFactory } from "../../services/gameService";

export const EditGame = ({
    onGameEditSubmit
}) => {
    const { gameId } = useParams();
    const gameService = useService(gameServiceFactory);
    const { formValues, changeHandler, onSubmit, changeFormValues } = useForm({
        _id: '',
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    }, onGameEditSubmit);

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => changeFormValues(result))
            .catch((error) => console.log(error));
    }, [gameId]);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>

                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={formValues.title} onChange={changeHandler} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={formValues.category} onChange={changeHandler} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min={1} value={formValues.maxLevel} onChange={changeHandler} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={formValues.imageUrl} onChange={changeHandler} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={formValues.summary} onChange={changeHandler} />

                    <input className="btn submit" type="submit" defaultValue="Edit Game" />
                </div>
            </form>
        </section>
    );
};
