function guessAnumber(guess,countTry,min,max) {
    cy.wait(1000);
    cy.get('#GuessText').type(String(guess));
    cy.get('#GuessButton').click();
    cy.get('#TextRet').invoke('text').then(text => res = text);
    countTry += 1;
    let term;
    let res;
    if(res !== "Bravo !") {
        if(res === "C'est plus !") {
            min = guess;
            term = guess/2;
            while(guess + term < max){
                term /= 2;
            }
            guess += term;
        }
        else {
            max = guess;
            term = guess/2;
            while(guess - term > min){
                term /= 2;
            }
            guess -= term;
        }
        guessAnumber(guess,countTry,min,max);
    }
    else {
        return countTry;
    }
}

describe('Make sure our todo list app is working well', () => {
    /*it('Test that we can open a browser and load our app', () => {
        cy.visit("http://192.168.43.180:4000/");
        cy.wait(1000); // /!\ /!\ /!\ USELESS LINE HERE <---
        // Cypress always wait before doing the next action
        // Please, do not copy that line for the rest of the TP.
    }),
    it('Make sure we can type a value', () => {
        cy.get('#Demarre').click()
        cy.wait(1000);
        cy.get('#GuessText').type("1123");
        cy.get('#GuessButton').click();
        cy.get('#GuessText').should('be.empty');
    }),
    it('Get the right result after typing 1001', () => {
        cy.get('#GuessText').type("1001");
        cy.get('#GuessButton').click();
        cy.get('#TextRet').contains("C'est moins !");
    }),
    it('Get the right result after typing -1', () => {
        cy.get('#GuessText').type("-1");
        cy.get('#GuessButton').click();
        cy.get('#TextRet').contains("C'est plus !");
    }),
    it('Make sure surrender is working', () => {
        cy.get('#buttonSur').click();
        cy.get('#NbEssaisDefaites').contains("Nombre d'essais : 3");
    }),*/
    it('Greatest solver of this problem', () => {
        //cy.get('#HomeBack').click();
        cy.visit("http://192.168.43.180:4001/");
        cy.get('#Demarre').click();
        cy.wait(3000);
        let countTry = guessAnumber(1000,0,0,1000);
    })
})