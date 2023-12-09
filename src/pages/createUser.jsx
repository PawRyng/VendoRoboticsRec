import React from "react";
import { Form } from "react-router-dom";

//import elements
import GoBackElement from "../components/goBackElement";


const CreateUser = () => {
const maxData = new Date().toISOString().split('T')[0];
  return( 
    <>
        <GoBackElement/>

        <Form method="post" action="/create-user">
            <label htmlFor="name">Imię</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="username">Login</label>
            <input type="text" name="username" id="usernam" />
            <label htmlFor="mail">E-mail</label>
            <input type="email" name="e-mail" id="mail" />
            <label htmlFor="phone">Telefon</label>
            <input type="tel" name="phone" id="phone" />
            <label htmlFor="phone">Data urodzin</label>
            <input type="date" name="birthday" id="birthday" max={maxData}/>
            <input type="submit" value="Stwórz" />
        </Form>
    </>
    );
};

export default CreateUser;
