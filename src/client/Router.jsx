import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import DefaultLayout from './layouts/default';
import EmptyLayout from './layouts/empty';
import Event from './pages/Event';
import Home from './pages/Home';
import Login from './pages/Login'
import Settings from './pages/Settings';
import Routine from './pages/Routine';
import Todo from './pages/Todo';
import Tags from './pages/Tags';



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/management" element={<Event/>} />
            <Route path="/routine" element={<Routine/>} />
            <Route path="/todo" element={<Todo/>} />
          <Route path="/tags" element={<Tags/>} />
          {/* <Route path="/helps" element={<Help />} /> */}
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route element={<EmptyLayout/>}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;