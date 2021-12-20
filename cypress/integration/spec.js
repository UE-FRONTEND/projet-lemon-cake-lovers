describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit("http://192.168.43.180:4000/");
    }),
        it('Make sure we can type a value', () => {
            cy.get('#Demarre').click()
            cy.get('#GuessText').type("1123");
            cy.wait(1000);
            cy.get('.buttonValid').click();
            cy.wait(1000);
            cy.get('#GuessText').should('be.empty');
        }),
        it('Get the right result after typing 1001', () => {
            cy.get('#GuessText').type("1001");
            cy.wait(1000);
            cy.get('.buttonValid').click().then( m => cy.log("m") );
            cy.wait(1000);
            cy.get('#TextRet').contains("C'est moins !");
        }),
        it('Get the right result after typing -1', () => {
            cy.get('#GuessText').type("-1");
            cy.wait(1000);
            cy.get('.buttonValid').click();
            cy.wait(1000);
            cy.get('#TextRet').contains("C'est plus !");
        }),
        it('Make sure surrender is working', () => {
            cy.get('#buttonSur').click();
            cy.url().should('eq', 'http://192.168.43.180:4000/Defeat')
        }),
        it('Consult history doing well', () => {
            cy.get('#HomeBack').click();
            cy.get('#Histo').click();
            cy.url().should('eq', 'http://192.168.43.180:4000/Historique')
        })
        /*,
                    it('Game solver' , () => {
                        let guess = 1000;
                        let offset = 250;
                        let max = 0;
                        let min = 0;
                        cy.get('#HomeBack').click();
                        cy.get('#Demarre').click();
                        for(let i = 0 ; i < 20 ; i++) {
                            cy.get('#GuessText').type(String(guess));
                            cy.wait(1000);
                            cy.get('.buttonValid').click();
                            cy.wait(1000);
                            cy.get('#TextRet').invoke('text').as('text');
                            if(this.text === 'M') {
                                max = guess;
                                offset = (max-min / 2) ;
                                guess -= offset;
                                if(guess - offset > min) {
                                    guess -= offset;
                                }
                                else {
                                    while (guess - offset < min) {
                                        offset /= 2;
                                    }
                                    guess -= offset;
                                }
                            }

                            else if (this.text === 'P') {
                                min = guess;
                                offset = (max-min / 2) ;
                                guess += offset;

                                if(guess + offset < max) {
                                    guess += offset;
                                }
                                else {
                                    while (guess - offset > max) {
                                        offset /= 2;
                                    }
                                    guess += offset;
                                }
                            }
                            else {
                                guess=676;
                            }
                        }
                })
        }*/
})