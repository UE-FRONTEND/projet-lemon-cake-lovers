

describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit("http://localhost:4000/");
    })
        it('Make sure we can type a value', () => {
            cy.get('#Demarre').click()
            cy.get('#GuessText').type("1123");
            cy.wait(1000);
            cy.get('.buttonValid').click();
            cy.wait(1000);
            cy.get('#GuessText').should('be.empty');
        })
        it('Get the right result after typing 1001', () => {
            cy.get('#GuessText').type("1001");
            cy.wait(1000);
            cy.get('.buttonValid').click().then( m => cy.log("m") );
            cy.wait(1000);
            cy.get('#TextRet').then( ($span) => {
                expect($span.text()).to.eq("C'est moins !");
            });
        })
        it('Get the right result after typing -1', () => {
            cy.get('#GuessText').type("-1");
            cy.wait(1000);
            cy.get('.buttonValid').click();
            cy.wait(1000);
            cy.get('#TextRet').then( ($span) => {
                expect($span.text()).to.eq("C'est plus !");
            });
            cy.wait(1000);

        })
        it('Make sure surrender is working', () => {
            cy.get('#buttonSur').click();
            cy.url().should('eq', 'http://localhost:4000/Defeat');
            cy.wait(1000);

        })
        it('Consult history doing well', () => {
            cy.get('#HomeBack').click();
            cy.get('#Histo').click();
            cy.url().should('eq', 'http://localhost:4000/Historique');
            cy.wait(1000);

        })
        it('Game solver' , () => {
            let guess = 1001;
            let offset = 250;
            let max = 0;
            let min = 0;
            cy.get('#HomeBack').click();
            cy.get('#Demarre').click();
            cy.get('#GuessText').type(String(guess));
            cy.wait(1000);
            cy.get('.buttonValid').click();
            cy.wait(1000);
            //Hypothese qu'il faut au maximum 20 essais pour trouver la valeur
            for(let i = 0 ; i < 20; i++) {
                //On cherche l'url
                cy.url().then(urlString =>{
                    //Vérifie que on a pas gagné, donc pas changer de page
                    if(urlString === "http://localhost:4000/Partie") {
                        //On get le texte "C'est plus ou moins"
                        cy.get('#TextRet').invoke("text").as("text").then((text) => {
                            //Recherche dichotomique
                            if (text === "C'est plus !") {
                                max = guess;
                                offset = (max - min) / 2;
                                guess += Math.abs(offset);
                            } else if (text === "C'est moins !") {
                                min = guess;
                                offset = (max - min) / 2;
                                guess -= Math.abs(offset);
                            }
                            //On ecrit et valide la réponse
                            guess = parseInt(guess);
                            cy.get('#GuessText').type(String(guess));
                            cy.wait(1000);
                            cy.get('.buttonValid').click();
                            cy.wait(1000);
                        });
                    }
                });
            }
            cy.url().should("eq", "http://localhost:4000/Victory");
        })
})