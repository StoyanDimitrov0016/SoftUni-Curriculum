// import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard';
import { EditSneaker } from './components/EditSneaker/EditSneaker';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { NavigationBar } from './components/NavigationBar.js/NavigationBar';
import { NewSneakerForm } from './components/NewSneakerForm/NewSneakerForm';
import { Register } from './components/Register/Register';
import { SearchSneaker } from './components/SearchSneaker/SearchSneaker';
import { SneakerDetails } from './components/SneakerDetails/SneakerDetails';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <div id="wrapper">
            <header>
                <NavigationBar />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Dashboard />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/create' element={<NewSneakerForm />} />
                    <Route path='/details/:sneakerId' element={<SneakerDetails />} />
                    <Route path='/edit/:sneakerId' element={<EditSneaker />} />
                    <Route path='/search' element={<SearchSneaker />} />
                </Routes>
            </main>
            <Footer />
        </div>

    );
}

export default App;
