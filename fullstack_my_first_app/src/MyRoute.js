import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  ProtectedPage,
  NotFoundPage,
  ControlledFormPage,
  UncontrolledFormPage,
  UserProfilePage,
} from './pages';
import { NavBar } from './NavBar';

const routes = [
    {
        path: '/',
        Component : HomePage,
    },
    {
        path: '/counter',
        Component : CounterButtonPage,
    },
    {
        path: '/people-list',
        Component : PeopleListPage,
    },
    {
        path: '/protected',
        Component : ProtectedPage,
    },
    {
        path: '/controlled',
        Component : ControlledFormPage,
    },
    {
        path: '/uncontrolled',
        Component : UncontrolledFormPage,
    },
    {
        path: '/userprofile',
        Component : UserProfilePage,
    },
    {
        path: '*',
        Component : NotFoundPage,
    },
 ];


 const appLinks = [
    { url: '/', label: 'Home' },
    { url: '/counter', label: 'Counter' },
    { url: '/people-list', label: 'People List' },
    { url: '/controlled', label: 'Controlled' },
    { url: '/uncontrolled', label: 'Uncontrolled' },
  ];

 export const MyRoutes = () => (
    <Router>
        <NavBar links={appLinks}/>
        <div className='App-header'>
        <Routes>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                element={<route.Component />} 
            >
            </Route>
        ))}
        </Routes>
        </div>
    </Router>
)