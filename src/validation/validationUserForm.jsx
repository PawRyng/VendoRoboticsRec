export const validation = {
    emailValidation: email =>{
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailPattern.test(email)){
            return true
        }
        else{
            return false
        }
    },
    nameValidation: name =>{
        if (name.length < 2) {
            return false;
        }
        return true;
    },
    usernameValidation: username =>{
        if (username.length < 3) {
            return false;
        }
        return true;
    },
    phoneValidation: phone =>{
        const phonePattern = /\b(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}\b/g

        if (!phonePattern.test(phone)) {
            return false;
        }
        return true;
    },
    birthdayValidation: birthday =>{
        const today = new Date().toISOString().split('T')[0];
        if ( birthday >= today ||  birthday.length<=0) {
            return false;
        }
        return true;
    }

}