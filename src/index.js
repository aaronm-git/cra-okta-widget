import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

// Pages
import Home from 'pages/Home';
import Login from 'pages/Login';
import LoginCallback from 'pages/Login/LoginCallback';
import Contact from 'pages/Contact';
import About from 'pages/About';
const routes = () => {
  return [
    <Route path="/" element={<Home />} />,
    <Route path="login">
      <Route index="true" exact element={<Login />} />
      <Route path="callback" element={<LoginCallback />} />
    </Route>,
    <Route path="/about" element={<About />} />,
    <Route path="/contact" element={<Contact />} />
  ];
};

const router = createBrowserRouter(createRoutesFromElements(routes()));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
