
import axios from "axios";

import {validation} from "../validation/validationUserForm"
export async function action({ params, request }) { 
  const data = await request.formData();
  const name = data.get('name');
  const surname = data.get('surname');
  const email = data.get('e-mail');
  const phoneNumber = data.get('phone')
  const dateOfBirth = data.get('birthday');
  const errorList = {};
  if(!validation.nameValidation(name)){
    errorList.name = "Imię musi posiadać więcej niż 2 znaki" 
  }
  if(!validation.surnameValidation(surname)){
    errorList.surname = "Nazwisko musi posiadać więcej niż 3 znaki" 
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
    return { errorList }
  }
  const updatedData = await axios.put(`${import.meta.env.VITE_APP_USER_URL}/${params?.idUser}`, 
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
      if(response.status === 200){
        return {message: 'OK'};
      }
    })
    .catch(function (error) {
      return {message: 'error'};
    });
  return {updatedData};
}