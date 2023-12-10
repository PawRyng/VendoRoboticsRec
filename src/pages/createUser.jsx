import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

//import elements
import GoBackElement from "../components/goBackElement";


const CreateUser = () => {
const maxData = new Date().toISOString().split('T')[0];
const data = useActionData();
const { errorList } = data !== undefined ? data : {};
const { sendData } = data !== undefined ? data : {};
console.log(sendData?.message);
if(sendData?.message === "OK"){
    redirect('/')
}
  return( 
    <>
        <GoBackElement/>

        <Form method="post" action="/create-user">
            {sendData?.message === "error" && <p>Błąd serwera lub użytkownik są już w bazie danych</p>}
            <label htmlFor="name">Imię</label>
            <input type="text" name="name" id="name" />
            {errorList?.name && <label htmlFor="name">{errorList?.name}</label>}
            <label htmlFor="username">Login</label>
            <input type="text" name="username" id="usernam" />
            {errorList?.username && <label htmlFor="username">{errorList?.username}</label>}
            <label htmlFor="mail">E-mail</label>
            <input type="email" name="e-mail" id="mail" />
            {errorList?.email && <label htmlFor="email">{errorList?.email}</label>}
            <label htmlFor="phone">Telefon</label>
            <input type="tel" name="phone" id="phone" />
            {errorList?.phone && <label htmlFor="phone">{errorList?.phone}</label>}
            <label htmlFor="date">Data urodzin</label>
            <input type="date" name="birthday" id="birthday" max={maxData}/>
            {errorList?.birthday && <label htmlFor="birthday">{errorList?.birthday}</label>}
            <input type="submit" value="Stwórz" />
        </Form>
    </>
    );
};

export default CreateUser;
