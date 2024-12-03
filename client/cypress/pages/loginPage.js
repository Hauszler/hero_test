class loginPage {
    selectorsList() {
        const selectors = {
            communBtn: 'button',
            loginmenu: '.shadow-lg',
            email: "[name='email']",
            password: "[name='password']",
            singInBtn: '.text-white',
            expectError: ".text-red-500",
        }
        return selectors
    }

    goLoginPage(){
        cy.get(this.selectorsList().communBtn).eq(0).click()
    }

    loginWithUser(email,password){
        cy.get(this.selectorsList().loginmenu)
        cy.get(this.selectorsList().email).type(email)
        cy.get(this.selectorsList().password).type(password)
        cy.get(this.selectorsList().singInBtn).click()
    }

    getError(){
        cy.get(this.selectorsList().expectError)
    }

    logOut(){
        cy.get(this.selectorsList().communBtn).eq(1).click()
    }

    simpleLogin(email, passowrd){
        cy.visit('http://localhost:3000')
        cy.get(this.selectorsList().communBtn).eq(0).click()
        cy.get(this.selectorsList().loginmenu)
        cy.get(this.selectorsList().email).type(email)
        cy.get(this.selectorsList().password).type(passowrd)
        cy.get(this.selectorsList().singInBtn).click()
    }
}



export default loginPage