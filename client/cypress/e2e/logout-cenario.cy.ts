import HomePage from '../pages/homePage.js'

 
const homePage = new HomePage()





describe('Cenarios sem login realizado', () => {
  it('curtir heroi', () => {
    cy.visit('http://localhost:3000')
    homePage.curtirHeroi()
    homePage.erroLogin()
  })
  it('contratar heroi', () => {
    cy.visit('http://localhost:3000')
    homePage.curtirHeroi()
    homePage.erroLogin()
  })

})