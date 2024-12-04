import loginPage from "../pages/loginPage"
import datauser from "../fixtures/userdata.json"
import homePage from "../pages/homePage"
import editHeroPage from "../pages/editHeroPage"
import herodata from "../fixtures/herodata.json"
const HomePage = new homePage()
const LoginPage = new loginPage ()
const EditHeroPage = new editHeroPage()

describe('Editar Heroi', () => {
  it.only('Success', () => {
    LoginPage.simpleLogin(datauser.LoginSuccess.email, datauser.LoginSuccess.senha)
    HomePage.editHeroBtn()
    EditHeroPage.editHeroSuccess(herodata.Edit1.name,herodata.Edit1.price,herodata.Edit1.fans,herodata.Edit1.saves,herodata.Edit1.power)
    HomePage.checklocation()
    HomePage.checkHeroEdit(herodata.Edit1.name,herodata.Edit1.price,herodata.Edit1.fans,herodata.Edit1.saves,herodata.Edit1.power)
    //implementar check da alteração, como eu faço isso, preciso comparar o antes e o depois 
  })

  it('Fail', () => {
    LoginPage.simpleLogin(datauser.LoginSuccess.email, datauser.LoginSuccess.senha)
    HomePage.editHeroBtn()
    EditHeroPage.editHeroFail()
  })
})
