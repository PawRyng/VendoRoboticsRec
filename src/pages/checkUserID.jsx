import React, { useState } from "react";
import { Form, redirect, useActionData, Link  } from "react-router-dom";

//import elements
import GoBackElement from "../components/goBackElement";

//import icon
import IconCopy from '../assets/icons/coppy-icon'


const CheckUserID = () => {
const [id, setId] = useState(null);
const lastCreatedUser = localStorage.getItem('lastCreatedUser');

  return( 
    <div className="check-user">
        <GoBackElement/>
        {lastCreatedUser && <p className="check-user__label">Ostatnio utworzony użytkownik: <p className="last-created-id" onClick={async ()=> await navigator.clipboard.writeText(lastCreatedUser)}>{lastCreatedUser}<IconCopy/></p> </p>}

        <div className="check-user__form-container">
            <label htmlFor="ID">Podaj ID użytkownika</label>
            <input type="text" name="id" id="ID" value={id || ''} onChange={e => setId(e.target.value)}/>
            <Link className="button-next-step" to={`/update-user/${id}`}>Dalej</Link>
        </div>
    </div>
    );
};

export default CheckUserID;
