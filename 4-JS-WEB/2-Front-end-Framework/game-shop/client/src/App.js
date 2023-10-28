import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { gameServiceFactory } from './services/gameService';
import { authServiceFactory } from './services/authService';

import { AuthContext } from './contexts/AuthContext';

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
    const [auth, setAuth] = useState({});

    const gameService = gameServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken);

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

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data.email, data.password);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log('Error while logging in occurred:', error);
        }
    };

    const onRegisterSubmit = async (data) => {
        const confirmPassword = data['confirm-password'];
        const password = data.password;

        //TODO: Further improving of password validation
        if (password !== confirmPassword) {
            return;
        }

        try {
            const result = await authService.register(data.email, data.password);
            setAuth(result);
            navigate('/');
        } catch (error) {
            console.log('Error while registering in occurred:', error);
        }
    };

    const onLogout = async () => {
        await authService.logout();
        setAuth({});
    };

    const onGameEditSubmit = async (data) => {
        const editedGame = await gameService.update(data._id, data);

        setGames(state => state.map(game => game._id === data._id ? editedGame : game));

        navigate(`/catalog/${data._id}`);
    };

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: auth.accessToken
    };

    return (
        <AuthContext.Provider value={context} >
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
        </AuthContext.Provider>
    );
};

export default App;
