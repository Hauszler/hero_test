class homePage {
    selectorsList() {
        const selectors = {
            curtirBtn: "[data-cy='like']",
            contratarBtn: "[data-cy='money']",
            erroLoginPopUp: ".shadow-lg",
            erroLoginPopUpBtn: '.gap-4 > .gap-2 > .undefined',
            communBtn: 'button',
        }
        return selectors
    }

    curtirHeroi(){
        cy.get(this.selectorsList().curtirBtn).eq(0).click()
    }

    contrarHeroi(){
        cy.get(this.selectorsList().contratarBtn).eq(0).click()
    }

    erroLogin(){
        cy.get(this.selectorsList().erroLoginPopUp)
        cy.get(this.selectorsList().erroLoginPopUpBtn).click()
    }

    creatHero(){
        cy.get(this.selectorsList().communBtn).eq(0).click()
        
    }

}

export default homePage