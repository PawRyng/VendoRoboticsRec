
import axios from "axios";
import { redirect } from "react-router-dom";

import {validation} from "../validation/validationUserForm"
export async function action({request}) { 
  const data = await request.formData();
  const name = data.get('name');
  const surname = data.get('username');
  const email = data.get('e-mail');
  const phoneNumber = data.get('phone')
  const dateOfBirth = data.get('birthday');
  const errorList = {};
  if(!validation.nameValidation(name)){
    errorList.name = "Imię musi posiadać więcej niż 2 znaki" 
  }
  if(!validation.surnameValidation(surname)){
    errorList.username = "Nazwisko musi posiadać więcej niż 3 znaki" 
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
  

  //wysłanie 
  if(Object.keys(errorList).length > 0){
    return {errorList}
  }
  const sendData = await axios.post(import.meta.env.VITE_APP_USER_URL, 
    {
      name: name,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      if(response.status === 201){
        localStorage.setItem('lastCreatedUser', response.data.user_id);
        return {message: 'OK'};
      }
      else{
        return redirect('/create-user');
      }
    })
    .catch(function (error) {
      return {message: 'error'};
    });
  return {sendData};
}