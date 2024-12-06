import loginPage from "../pages/loginPage"
import userdata from "../fixtures/userdata.json"
import homePage from "../pages/homePage"
const LoginPage = new loginPage()
const HomePage = new homePage()

describe('template spec', () => {
  it('passes', () => {
    LoginPage.simpleLogin(userdata.LoginSuccess.email, userdata.LoginSuccess.senha)
    HomePage.deletHeroSuccsess()
  })
  it('fail', () => {
    LoginPage.simpleLogin(userdata.LoginSuccess.email, userdata.LoginSuccess.senha)
    HomePage.deletHeroFail()
  })
})