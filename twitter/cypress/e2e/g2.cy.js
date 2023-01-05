describe('G2', () => {
    const login = () => {
        cy
            .intercept('GET', '/twitter/tweets', {
                statusCode: 200, body: { data: [] }
            }).as('getTweets')

        cy
            .intercept('GET', '/twitter/auth', {
                statusCode: 200, body: {
                    user: { id: 1 },
                    token: 'xyz',
                }
            })
            .as('authCheck')

        cy.visit('/')
        cy.wait('@getTweets')
        cy.wait('@authCheck')
    }

    it('Der Composer wird nach dem Posten eines Tweets geleert', () => {
        login()

        cy.intercept('POST', '/twitter/tweets', {
            statusCode: 200, body: { data: { id: 1 } }
        }).as('post')

        cy.get('.composer__textarea').type('Hello World')
        cy.get('.composer .btn').click()

        cy.wait('@post')

        cy.get('.composer__textarea').should('have.value', '')
    })

    it('Der Stream wird nach dem Posten eines Tweets neu geladen', () => {
        login()

        cy.intercept('POST', '/twitter/tweets', {
            statusCode: 200, body: { data: { id: 1 } }
        }).as('post')

        cy.get('.composer__textarea').type('Hello World')
        cy.get('.composer .btn').click()

        cy.wait('@post')

        cy.wait('@getTweets')
    })
})
