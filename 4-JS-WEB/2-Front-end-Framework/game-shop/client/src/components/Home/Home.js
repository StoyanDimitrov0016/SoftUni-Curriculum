import { HomeItem } from "./HomeItem/HomeItem";

export const Home = ({ games }) => {
    const firstThreeGames = games.slice(0, 3);

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>

                {firstThreeGames.map(g => (
                    <HomeItem key={g._id} game={g} />
                ))}

                {firstThreeGames.length === 0 && (
                    <p className="no-articles">No games yet</p>)
                }

            </div>
        </section>);
};