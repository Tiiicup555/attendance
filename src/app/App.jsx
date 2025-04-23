import './styles/index.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/shared/home/HomePage';
import { LoginPage } from '../pages/shared/login/LoginPage';
import SchedulePage from '../pages/shared/schedule/SchedulePage';

export default function App() {
  return (
    <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="schedule" element={<SchedulePage />}/>
    </Routes>
  );
}
