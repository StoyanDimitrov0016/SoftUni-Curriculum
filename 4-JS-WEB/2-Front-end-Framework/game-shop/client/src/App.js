import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { gameServiceFactory } from './services/gameService';

import { AuthProvider } from './contexts/AuthContext';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateGame } from './components/CreateGame/CreateGame';
import { Catalog } from './components/Catalog/Catalog';
import { GameDetails } from './components/GameDetails/GameDetails';
import { Logout } from './components/Logout/Logout';
import { EditGame } from './components/EditGame/EditGame';

function App() {
    const navigate = useNavigate();

    const [games, setGames] = useState([]);

    const gameService = gameServiceFactory();//auth.accessToken

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result))
            .catch(error => console.log(error));
    }, []);

    const onCreateGameSubmit = async (data) => {
        const newGame = await gameService.create(data);
        setGames(state => [...state, newGame]);
        navigate('/catalog');
    };

    const onGameEditSubmit = async (data) => {
        const editedGame = await gameService.update(data._id, data);

        setGames(state => state.map(game => game._id === data._id ? editedGame : game));

        navigate(`/catalog/${data._id}`);
    };

    return (
        <AuthProvider >
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home games={games} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/create-game" element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
                        <Route path="/catalog" element={<Catalog games={games} />} />
                        <Route path="/catalog/:gameId" element={<GameDetails />} />
                        <Route path="/catalog/:gameId/edit" element={<EditGame onGameEditSubmit={onGameEditSubmit} />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthProvider>
    );
};

export default App;
