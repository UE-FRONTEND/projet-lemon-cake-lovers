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
        cy.visit("http://192.168.43.180:4000/");
        cy.get('#Demarre').click();
        cy.wait(1000);
        const SubButton = cy.get('#buttonSur');
        const SubText = cy.get('#GuessText');
        let SubRes = cy.get('#TextRet');
        cy.wait(5000); //OU virer les constantes/variables pour type après le get (asynchronisme);
        let guess = 1000;
        let countTry = 0;
        const SubTry = () => {
            //cy.wait(2000);
            SubText.type(guess);
            SubButton.click();
            //countTry += 1;
            /*if(SubRes.contains("C'est moins !")) {
                guess -=  guess/2;
                SubTry(guess);
            }
            else if (SubRes.contains("C'est plus !")){
                guess += guess/2;
                SubTry(guess);
            }
            else {
                cy.get('#NbEssaisDefaites').contains("Nombre d'essais : "+String(countTry));
            }*/
        }
        SubTry();
    })
})