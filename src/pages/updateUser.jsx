import React, { useState } from "react";
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";

//import elements
import GoBackElement from "../components/goBackElement";


const UpdateUser = () => {
const maxData = new Date().toISOString().split('T')[0];

const data = useActionData();
const { errorList } = data !== undefined ? data : {};
const { updatedData } = data !== undefined ? data : {};

const {getUserByID} = useLoaderData();

const [name, setName] = useState(getUserByID?.name || '');
const [surname, setSurname] = useState(getUserByID?.surname || '');
const [email, setEmail] = useState(getUserByID?.email || '');
const [phone, setPhone] = useState(getUserByID?.phoneNumber || '');
const [dateOfBirth, setDateOfBirth] = useState(getUserByID?.dateOfBirth || '');


if(getUserByID?.error){
    const confirmation = window.confirm( getUserByID.error+"\nWróć na stronę z id");
    if (confirmation) {
        window.location.href = '/update-user'
    } 
}

if(updatedData?.message === 'OK'){
    redirect()
}

  return( 
    <>
        <GoBackElement/>

        <Form method="post" className={(updatedData?.message === "OK" || updatedData?.message === "error") && 'form-info'} >
            {updatedData?.message === "OK" && <p className="server-success">Dane użytkownika zostały pomyślnie zmienione</p>}
            {updatedData?.message === "error" && <p className="server-error">Dane użytkownika nie zostały zmienione</p>}
            <div className="form-container">
                <label htmlFor="name">Imię</label>
                <input className={errorList?.name && 'error-input'} type="text" name="name" id="name" value={name} onChange={e=> setName(e.target.value)}/>
                {errorList?.name && <label className="error-label" htmlFor="name">{errorList?.name}</label>}
            </div>
            <div className="form-container">
                <label htmlFor="surname">Login</label>
                <input className={errorList?.surname && 'error-input'} type="text" name="surname" id="surname" value={surname} onChange={e=> setSurname(e.target.value)}/>
                {errorList?.surname && <label className="error-label" htmlFor="surname">{errorList?.surname}</label>}
            </div>
            <div className="form-container">
                <label htmlFor="mail">E-mail</label>
                <input className={errorList?.email && 'error-input'} type="email" name="e-mail" id="mail" value={email} onChange={e=> setEmail(e.target.value)}  />
                {errorList?.email && <label className="error-label" htmlFor="email">{errorList?.email}</label>}
            </div>
            <div className="form-container">
                <label htmlFor="phone">Telefon</label>
                <input className={errorList?.phone && 'error-input'} type="tel" name="phone" id="phone" value={phone}  onChange={e=> setPhone(e.target.value)}/>
                {errorList?.phone && <label className="error-label" htmlFor="phone">{errorList?.phone}</label>}
            </div>
            <div className="form-container">
                <label htmlFor="date">Data urodzin</label>
                <input className={errorList?.birthday && 'error-input'} type="date" name="birthday" id="birthday" max={maxData} value={dateOfBirth}  onChange={e=> setDateOfBirth(e.target.value)} />
                {errorList?.birthday && <label className="error-label" htmlFor="birthday">{errorList?.birthday}</label>}
            </div>

            <input type="submit" value="Edytuj" />
        </Form>
    </>
    );
};

export default UpdateUser;
