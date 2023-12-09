import React from "react";
import { useNavigate } from 'react-router-dom';

const GoBackElement = () => {
  const navigate = useNavigate();
  return(
    <nav>
      <button onClick={() => navigate(-1)}>go back</button>
    </nav>
    )
    
};

export default GoBackElement;
