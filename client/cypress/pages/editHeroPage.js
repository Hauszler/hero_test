

class editHeroPage {
    selectoList(){
        const selector = {
            name: '[data-cy="nameInput"]',
            price: '[data-cy="priceInput"]',
            fans: '[data-cy="fansInput"]',
            saves: '[data-cy="savesInput"]',
            power: '[data-cy="powersSelect"]',
            avatar: '[data-cy="avatarFile"]',
            submitBtn: 'button',
            expectError: '.text-red-500',
        }
        return selector
    }

    editHeroFail(){
        cy.get(this.selectoList().name).clear()
        cy.get(this.selectoList().price).clear().type(0)
        cy.get(this.selectoList().fans).clear().type(0)
        cy.get(this.selectoList().saves).clear().type(0)
        cy.get(this.selectoList().power).select("Mind Control")
        cy.get(this.selectoList().avatar).selectFile('/Users/andrehauszler/Desktop/QA/MENTORIA/Heroes-App/cypress-heroes/client/cypress/fixtures/avatar/avatar_02.jpeg', {action: 'drag-drop'})
        cy.get(this.selectoList().submitBtn).eq(3).click()
        cy.get(this.selectoList().expectError)
    }
    editHeroSuccess(name,price,fans,saves,power){
        cy.get(this.selectoList().name).clear().type(name)
        cy.get(this.selectoList().price).clear().type(price)
        cy.get(this.selectoList().fans).clear().type(fans)
        cy.get(this.selectoList().saves).clear().type(saves)
        cy.get(this.selectoList().power).select(power)
        cy.get(this.selectoList().avatar).selectFile('/Users/andrehauszler/Desktop/QA/MENTORIA/Heroes-App/cypress-heroes/client/cypress/fixtures/avatar/avatar_02.jpeg', {action: 'drag-drop'})
        cy.get(this.selectoList().submitBtn).eq(3).click()
    }

}

export default editHeroPage
