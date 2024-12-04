import homePage from "../pages/homePage"
import loginPage from "../pages/loginPage"
import userdata from "../fixtures/userdata.json"
const HomePage = new homePage()
const LoginPage = new loginPage()

describe('Like', () => {
  it('passes', () => {
    LoginPage.simpleLogin(userdata.LoginSuccess.email,userdata.LoginSuccess.senha)
    HomePage.checkCurtida()
  })
  it('Fail', () => {
    cy.visit('http://localhost:3000')
    HomePage.curtirHeroi()
    HomePage.erroLogin()
  })
})


describe('Hire a Hero', () => {
  it('passes', () => {
    LoginPage.simpleLogin(userdata.LoginSuccess.email,userdata.LoginSuccess.senha)
    HomePage.contrarHeroi()
    HomePage.checkSaves()
  })
  it('Fail', () => {
    cy.visit('http://localhost:3000')
    HomePage.curtirHeroi()
    HomePage.erroLogin()
  })
})