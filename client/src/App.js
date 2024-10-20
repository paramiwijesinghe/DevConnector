import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile_forms/CreateProfile';
import EditProfile from './components/profile_forms/EditProfile';
import AddExperience from './components/profile_forms/AddExperience';
import AddEducation from './components/profile_forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {


  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return( 
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <section className="container"> {/* Move section here */}
          <Alert />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/profile/:id" element={<Profile/>} />
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/create-profile" element={<PrivateRoute element={<CreateProfile />} />} />
            <Route path="/edit-profile" element={<PrivateRoute element={<EditProfile />} />} />
            <Route path="/add-experience" element={<PrivateRoute element={<AddExperience />} />} />
            <Route path="/add-education" element={<PrivateRoute element={<AddEducation />} />} />

            </Routes>
        </section>
      </Fragment>
    </Router> 
  </Provider>
)};

export default App;
 