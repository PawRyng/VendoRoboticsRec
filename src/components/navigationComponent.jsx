// Navigation.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';


//import icons

import IconLineChart from '../assets/icons/line-chart'
import IconBarChart from '../assets/icons/bar-chart'
import IconUserAdd from '../assets/icons/add-user'
import IconAccountEditOutline from '../assets/icons/edit-user'

const NavigationComponent = () => {
  const location = useLocation();

  return (
    <nav className='main-page'>
        
        <NavLink 
          to="/linear-chart"
          className='main-page__item main-page__item--line'
        >
          <IconLineChart/>
          Wykres liniowy
        </NavLink>
        <NavLink
          to="/bar-chart"
          className='main-page__item main-page__item--bar'
        >
          <IconBarChart/>
          Wykres Słupkowy
        </NavLink>
        <NavLink 
          to="/create-user"
          className='main-page__item main-page__item--create'
        >
          <IconUserAdd/>
          Stwórz użytkownika
        </NavLink>
        <NavLink
          to="/update-user"
          className='main-page__item main-page__item--edit'
        >
          <IconAccountEditOutline/>
          Edytuj użytkownika
        </NavLink>
    </nav>
  );
};

export default NavigationComponent;
