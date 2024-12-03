
import userdata from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()


describe('Login', () => {
  it.only('realizar o login com sucesso', () => {
    cy.visit('http://localhost:3000')
    loginPage.goLoginPage()
    loginPage.loginWithUser(userdata.LoginSuccess.email, userdata.LoginSuccess.senha)
    loginPage.logOut()
  })

  it('realizar o login sem sucesso', () => {
    cy.visit('http://localhost:3000')
    loginPage.goLoginPage()
    loginPage.loginWithUser(userdata.LoginFail.email, userdata.LoginFail.senha)
    loginPage.getError()
  })

})