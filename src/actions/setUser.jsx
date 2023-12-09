
import axios from "axios";
import { redirect } from "react-router-dom";

import {validation} from "../validation/validationUserForm"
export async function action({request}) { 
  const data = await request.formData();
  const name = data.get('name');
  const username = data.get('username');
  const email = data.get('e-mail');
  const phoneNumber = data.get('phone')
  const dateOfBirth = data.get('birthday');
  const errorList = {};
  const submition = {
    name,
    username,
    email,
    phoneNumber,
    dateOfBirth
  }
  console.log(validation.birthdayValidation(dateOfBirth))
  if(!validation.nameValidation(name)){
    errorList.name = "Imię musi posiadać więcej niż 2 znaki" 
  }
  if(!validation.usernameValidation(username)){
    errorList.username = "Login musi posiadać więcej niż 3 znaki" 
  }
  if(!validation.emailValidation(email)){
    errorList.email = "Błędny E-mail" 
  }
  if(!validation.phoneValidation(phoneNumber)){
    errorList.phone = "Błędny numer telefonu" 
  }
  if(!validation.birthdayValidation(dateOfBirth)){
    errorList.birthday = "Błędna data urodzin" 
  }

  console.log(errorList)
  

  return redirect('/create-user')
  
}