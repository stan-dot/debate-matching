import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Rooms} from "./pages/Rooms";
import{ Chat} from "./pages/Chat";
import {Quiz }from "./pages/Quiz";
import{ NoPage} from "./pages/NoPage";
import {SocketWrapper} from "./Socket.wrapper";

export default function App() {
  return (
    <SocketWrapper>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rooms />}>
          <Route path="chat" element={<Chat />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </SocketWrapper>
  );
}
