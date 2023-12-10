import React from "react";
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";

//import elements
import GoBackElement from "../components/goBackElement";


const UpdateUser = () => {
const maxData = new Date().toISOString().split('T')[0];
const data = useActionData();
const {getUserByID} = useLoaderData();
const { errorList } = data !== undefined ? data : {};

if(getUserByID?.error){
    const confirmation = window.confirm( getUserByID.error+"\nWróć na stronę z id");
    if (confirmation) {
        window.location.href = '/update-user'
    } 
}

  return( 
    <>
        <GoBackElement/>

        <Form method="post" action="/update-user">
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

export default UpdateUser;
