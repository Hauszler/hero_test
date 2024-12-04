class homePage {
    selectorsList() {
        const selectors = {
            curtirBtn: "[data-cy='like']",
            contratarBtn: "[data-cy='money']",
            erroLoginPopUp: ".shadow-lg",
            erroLoginPopUpBtn: '.gap-4 > .gap-2 > .undefined',
            communBtn: 'button',
            savesCount: "[data-cy='saves']",
            fanCount: "[data-cy='fans']",
            priceHero: "[data-cy='price']",
            nameHero: "[data-cy='name']",
            powerHero: "[data-cy='powers']",
            editHero: "[data-cy='pencil']",
        }
        return selectors
    }
//Curtir heroi
    curtirHeroi(){
        cy.get(this.selectorsList().curtirBtn).eq(0).click()
        //const numlike = parseInt( cy.get(this.selectorsList().fanCount).invoke('text'))
        
    }
    checkCurtida(){
    // Passo 1: Captura o valor inicial do contador
    cy.get(this.selectorsList().fanCount).eq(0)
      .invoke('text') // Obtém o texto do elemento
      .then((text) => {
        const initialValue = parseInt(text, 10); // Converte o texto para número

        // Passo 2: Clica no botão "Curtir"
        cy.get(this.selectorsList().curtirBtn).eq(0).click()

        // Passo 3: Verifica se o valor aumentou em +1
        cy.get(this.selectorsList().fanCount).eq(0)
          .invoke('text')
          .should((newText) => {
            const newValue = parseInt(newText, 10); // Converte o texto atualizado
            expect(newValue).to.equal(initialValue + 1) // Compara os valores
        });
    });

    }
    
//Contratar Heroi
    contrarHeroi(){
        cy.get(this.selectorsList().contratarBtn).eq(0).click()
    }

    checkSaves(){
        // Passo 1: Captura o valor inicial do contador
        cy.get(this.selectorsList().savesCount).eq(0)
          .invoke('text') // Obtém o texto do elemento
          .then((text) => {
            const initialValue = parseInt(text, 10); // Converte o texto para número
    
            // Passo 2: Clica no botão "Curtir"
            cy.get(this.selectorsList().contratarBtn).eq(0).click({force:true})
            cy.contains('Yes').click()
    
            // Passo 3: Verifica se o valor aumentou em +1
            cy.get(this.selectorsList().savesCount).eq(0)
              .invoke('text')
              .should((newText) => {
                const newValue = parseInt(newText, 10) // Converte o texto atualizado
                expect(newValue).to.equal(initialValue + 1) // Compara os valores
            });
        });
    
        }
//Erro Login
    erroLogin(){
        cy.get(this.selectorsList().erroLoginPopUp)
        cy.get(this.selectorsList().erroLoginPopUpBtn).click()
    }
//clicar botão Criar Heroi
    creatHero(){
        cy.get(this.selectorsList().communBtn).eq(0).click()
        
    }
//clicar botão editar Heroi
    editHeroBtn(){
        cy.get(this.selectorsList().editHero).eq(0).click()
    }
    checklocation(){
        cy.location('pathname').should('equal','/heroes')
    }
//Check alteração do edite do Heroi

    checkHeroEdit(name,price,fans,saves,power){
        cy.get(this.selectorsList().nameHero).eq(0).should('have.text', name)
        cy.get(this.selectorsList().priceHero).eq(0).should('have.text', '$'+price)
        cy.get(this.selectorsList().fanCount).eq(0).should('have.text', fans)
        cy.get(this.selectorsList().savesCount).eq(0).should('have.text', saves)
        cy.get(this.selectorsList().powerHero).eq(0).should('have.text', power+" ")

    }
}


export default homePage