import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

//import elements
import GoBackElement from "../components/goBackElement";


const CreateUser = () => {
const maxData = new Date().toISOString().split('T')[0];
const data = useActionData();
const { errorList } = data !== undefined ? data : {};
const { sendData } = data !== undefined ? data : {};
if(sendData?.message === "OK"){
    redirect('/')
}
  return( 
    <>
        <GoBackElement/>

        <Form method="post" action="/create-user" className={sendData?.message === "error" && 'form-info'}>
            {sendData?.message === "error" && <p className="server-error">Błąd serwera lub użytkownik są już w bazie danych</p>}
            <div className="form-container">
                <label htmlFor="name">Imię</label>
                <input className={errorList?.name && 'error-input'} type="text" name="name" id="name" />
                {errorList?.name && <label className="error-label" htmlFor="name">{errorList?.name}</label>}
            </div>
            <div className="form-container">
                <label htmlFor="surname">Nazwisko</label>
                <input className={errorList?.surname && 'error-input'} type="text" name="surname" id="surname" />
                {errorList?.surname && <label className="error-label" htmlFor="surname">{errorList?.surname}</label>}
            </div>
            <div className="form-container">
                <label htmlFor="mail">E-mail</label>
                <input className={errorList?.email && 'error-input'} type="email" name="e-mail" id="mail" />
                {errorList?.email && <label className="error-label" htmlFor="email">{errorList?.email}</label>}
            </div>
            
            <div className="form-container">
                <label htmlFor="phone">Telefon</label>
                <input className={errorList?.phone && 'error-input'} type="tel" name="phone" id="phone" />
                {errorList?.phone && <label className="error-label" htmlFor="phone">{errorList?.phone}</label>}
            </div>
    
            <div className="form-container">
                <label htmlFor="date">Data urodzin</label>
                <input className={errorList?.birthday && 'error-input'} type="date" name="birthday" id="birthday" max={maxData}/>
                {errorList?.birthday && <label className="error-label" htmlFor="birthday">{errorList?.birthday}</label>}
            </div>
            <input type="submit" value="Stwórz" />
        </Form>
    </>
    );
};

export default CreateUser;
