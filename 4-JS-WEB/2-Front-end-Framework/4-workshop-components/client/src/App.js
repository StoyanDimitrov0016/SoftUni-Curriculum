import { useEffect, useState } from 'react';

import * as userService from "./services/userService";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import { UserList } from "./components/UserList";

import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: ''
  });
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: ''
  });

  useEffect(() => {
    userService.getAll()
      .then(users => { setUsers(users) })
      .catch(err => {
        console.log('Error: ' + err);
      })
  }, []);

  const onUserCreateSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const createdUser = await userService.create(data);

    setUsers(state => [...state, createdUser]);
  }

  const onUserDelete = async (userId) => {
    await userService.remove(userId);

    setUsers(state => state.filter(x => x !== userId));
  };

  const onUserUpdateSubmit = async (e, userId) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const updatedUser = await userService.update(userId, data);

    setUsers(state => state.map(x => x._id === userId ? updatedUser : x));
  }

  const formChangeHandler = (e) => {
    setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
  }

  const formValidate = (e) => {
    const value = e.target.value;
    const errors = {};

    if (e.target.name === 'firstName' && (value.length < 3 || value.length > 20)) {
      errors.firstName = 'First name should be between 3 and 20 characters long!';
    }

    if (e.target.name === 'lastName' && (value.length < 3 || value.length > 20)) {
      errors.firstName = 'Last name should be between 3 and 20 characters long!';
    }

    setFormErrors(errors);
  }

  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />

          <UserList
            users={users}
            onUserCreateSubmit={onUserCreateSubmit}
            onUserDelete={onUserDelete}
            onUserUpdateSubmit={onUserUpdateSubmit}
            formValues={formValues}
            formChangeHandler={formChangeHandler}
            formErrors={formErrors}
            formValidate={formValidate}
          />

        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
