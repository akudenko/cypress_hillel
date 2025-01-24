class SignInForm {

    get registrationBtn(){
        return cy.get(".modal-footer").contains("Registration");
    }

    get inputs(){
        return cy.get("form input");
    }

    get loginBtn(){
        return cy.get(".modal-footer");
    }

    get errorMessage(){
        return cy.get(".invalid-feedback p");
    }

    openRegistrationFormPopup(){
        this.registrationBtn.click();
    }

    setEmail(email){
        this.registrationEmail.type(email);
    }

    setPassword(password){
        this.registrationPassword.type(password);
    }

    setConfirmPassword(password){
        this.registrationRepeatPassword.type(password);
    }

    confirmRegister(){
        this.registrationBtn.click();
    }

}

export default new SignInForm();