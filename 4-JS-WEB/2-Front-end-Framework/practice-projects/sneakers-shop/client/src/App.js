import './App.css';
import { Dashboard } from './components/Dashboard/Dashboard';
import { EditSneaker } from './components/EditSneaker/EditSneaker';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { NavigationBar } from './components/NavigationBar.js/NavigationBar';
import { NewSneakerForm } from './components/NewSneakerForm/NewSneakerForm';
import { Register } from './components/Register/Register';
import { SearchSneaker } from './components/SearchSneaker/SearchSneaker';
import { SneakerDetails } from './components/SneakerDetails/SneakerDetails';

function App() {
  return (
    <div id="wrapper">
      <header>

        <NavigationBar />

      </header>
      <main>

        <Home />
        <Dashboard />

        {/* Register Page (Only for Guest users) */}
        <Register />

        {/* Login Page (Only for Guest users) */}
        <Login />

        {/* Create Page (Only for logged-in users) */}
        <NewSneakerForm />

        {/* Details page */}
        <SneakerDetails />

        {/* Edit Page (Only for logged-in users) */}

        <EditSneaker />

        {/* Search Page (Only for logged-in users) */}
        <SearchSneaker />

      </main>
    </div>

  );
}

export default App;
