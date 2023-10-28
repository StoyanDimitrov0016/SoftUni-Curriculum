import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { gameServiceFactory } from "../../services/gameService";
import { commentServiceFactory } from '../../services/commentService';
import { useService } from "../../hooks/useService";

export const GameDetails = () => {
    const { gameId } = useParams();

    const [game, setGame] = useState({});
    const [existingComments, setExistingComments] = useState([]);
    const [comment, setComment] = useState('');
    const gameService = useService(gameServiceFactory);
    const commentService = useService(commentServiceFactory);

    useEffect(() => {
        gameService.getOne(gameId)
            .then(gameData => {
                setGame(gameData);
                return commentService.getAll(gameId);
            })
            .then(commentsData => setExistingComments(commentsData))
            .catch(error => console.log(error));
    }, [gameId]);

    const onCommentSubmit = async (e) => {
        e.preventDefault();

        const newComment = await commentService.create(gameId, comment);
        setExistingComments(state => [...state, newComment]);
        setComment('');
    };

    const onCommentChange = (e) => {
        e.preventDefault();

        setComment(e.target.value);
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {existingComments.map(c => (
                            <li key={c._id} className="comment">
                                <p>Content: {c.comment}</p>
                            </li>)
                        )}

                        {existingComments.length === 0 && (
                            <p className="no-comment">No comments.</p>
                        )}
                    </ul>
                </div>

                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <Link to={'/'} className="button">Edit</Link>
                    <Link to={'/'} className="button">Delete</Link>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onCommentSubmit}>
                    <textarea
                        name="comment"
                        placeholder="Comment &hellip;"
                        value={comment}
                        onChange={onCommentChange}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Add Comment"
                    />
                </form>
            </article>
        </section>
    );
};
