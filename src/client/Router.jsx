import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import DefaultLayout from './layouts/default';
import EmptyLayout from './layouts/empty';
import Post from './pages/Post';
import Home from './pages/Home';
import Login from './pages/Login'
import Settings from './pages/Settings';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          {/* <Route path="/tags" element={<Tag />} /> */}
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