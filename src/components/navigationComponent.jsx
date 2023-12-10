// Navigation.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavigationComponent = () => {
  const location = useLocation();

  return (
    <nav>
        
        <NavLink
          to="/linear-chart"
        >
          Wykres liniowy
        </NavLink>
        <NavLink
          to="/bar-chart"
        >
          Wykres Słupkowy
        </NavLink>
        <NavLink
          to="/create-user"
        >
          Stwórz użytkownika
        </NavLink>
        <NavLink
          to="/update-user"
        >
          Edytuj użytkownika
        </NavLink>
    </nav>
  );
};

export default NavigationComponent;
