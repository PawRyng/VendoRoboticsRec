import React from "react";
import { Link } from 'react-router-dom';

import IconArrowGoBackFill from '../assets/icons/back-arrow'

const GoBackElement = () => {
  return(
    <nav className="go-back">
      <Link to="/" className="go-back__button"><IconArrowGoBackFill/></Link>
    </nav>
    )
    
};

export default GoBackElement;
