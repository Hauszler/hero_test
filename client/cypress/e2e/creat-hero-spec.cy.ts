import loginPage from '../pages/loginPage'
import creatHero from '../pages/creatHero'
import datauser from '../fixtures/userdata.json'
import homePage from '../pages/homePage'

const LoginPage = new loginPage()
const CreatHero = new creatHero()
const HomePage = new homePage()


describe('Creat New Hero', () => {
  it('Success', () => {
    LoginPage.simpleLogin(datauser.LoginSuccess.email, datauser.LoginSuccess.senha)
    HomePage.creatHero()
    CreatHero.checkLocation()
    CreatHero.newHeroForm('New hero', 65,0,0)
    CreatHero.submmitForm()
  })
  it('fail', () => {
    LoginPage.simpleLogin(datauser.LoginSuccess.email, datauser.LoginSuccess.senha)
    HomePage.creatHero()
    CreatHero.checkLocation()
    CreatHero.submmitForm()
    CreatHero.checkRequierd()
  })
})