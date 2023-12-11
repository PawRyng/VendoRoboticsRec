import axios from "axios";
export async function loader({params}) {

  const getUserByID = await axios.get(import.meta.env.VITE_APP_USER_URL+`/${params.idUser}`).then(function (response) {
    if(response.status === 200){
        return response.data
    }
  })
  .catch(function (error) {
    if(error.response.status === 404){
      return {error: "Nie znaleziono użytkownika"}
    }
  });

  



  //edycja tytułu

  return {getUserByID};
}