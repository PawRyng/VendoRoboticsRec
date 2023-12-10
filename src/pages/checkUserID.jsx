import React, { useState } from "react";
import { Form, redirect, useActionData, Link  } from "react-router-dom";

//import elements
import GoBackElement from "../components/goBackElement";


const CheckUserID = () => {
const [id, setId] = useState(null);
const lastCreatedUser = localStorage.getItem('lastCreatedUser');

  return( 
    <>
        <GoBackElement/>
        {lastCreatedUser && <p>Ostatnio utworzony użytkownik: <span onClick={async ()=> await navigator.clipboard.writeText(lastCreatedUser)}>{lastCreatedUser}</span> &lt;- kliknij aby skopiować</p>}

        <div className="form-container">
            <label htmlFor="ID">Podaj ID użytkownika</label>
            <input type="text" name="id" id="ID" value={id || ''} onChange={e => setId(e.target.value)}/>
            <Link to={`/update-user/${id}`}>Dalej</Link>
        </div>
    </>
    );
};

export default CheckUserID;
