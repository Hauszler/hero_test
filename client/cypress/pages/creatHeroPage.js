class creatHero {
    selectorList()  {
        const selector = {
            communBtn: 'button',
            newHeroForm: '.px-8',
            name: '[data-cy="nameInput"]',
            price: '[data-cy="priceInput"]',
            fans: '[data-cy="fansInput"]',
            saves: '[data-cy="savesInput"]',
            powers: '[data-cy="powersSelect"]',
            avatar: "input[data-cy='avatarFile']",
            requierd: '.text-red-500',
            
        } 
        return selector
    }

    checkLocation(){
        cy.location('pathname').should('equal','/heroes/new')
        cy.get(this.selectorList().newHeroForm).should('be.visible')
    }

    newHeroForm(name,price,fans,saves){
        cy.get(this.selectorList().name).type(name)
        cy.get(this.selectorList().price).type(price)
        cy.get(this.selectorList().fans).type(fans)
        cy.get(this.selectorList().saves).type(saves)
        cy.get(this.selectorList().powers).select('Mind Control')
        cy.get(this.selectorList().avatar).selectFile('/Users/andrehauszler/Desktop/QA/MENTORIA/Heroes-App/cypress-heroes/client/cypress/fixtures/avatar/avatar_01.png', {action: 'drag-drop'})
    }

    submmitForm(){
        cy.get(this.selectorList().communBtn).eq(2).click()
    }
    
    checkRequierd(){
        cy.get(this.selectorList().requierd)
    }
}


export default creatHero