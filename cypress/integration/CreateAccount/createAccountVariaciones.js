describe('Crear cuenta', ()=>{

    it('Navegar a Qhapaq', ()=>{
        cy.visit('http://e.na.us.development.qhapaq.expandya.com/')
    })

    it('Dar Click en sign up', ()=>{
        cy.get('.header-utilities__link.login.js-header-account-overlay-link.js-header-utilities-link-login').click()
    })

    it('Dar click en el segundo sing up', ()=>{
        cy.get('.js-register-btn.header-account__reference-link').click()
    })

    it('Llenar informacion para creacion de usuario', ()=>{
        cy.get('.js-register-fname-input').type('PruebaNombre')
        cy.get('.js-register-lname-input').type('PruebaApellido')
        cy.get('.js-register-email-input').type('peladolamparatv')

        cy.get('.js-register-email-error-format')
            .should('have.css', 'display')
            .and('equal', 'block')

        //cy.get('.js-login-username-error-format').should('be.visible')
        cy.get('.js-register-password-input').type('Luis1596')
        cy.get('.js-register-password-input').type('{selectAll}{backspace}')
        cy.get('.error-msg.js-register-password-error-empty')
            .should('have.css', 'display')
            .and('equal', 'block')

        cy.get('.js-register-confirm-pwd-input').type('Luis1596')
        cy.get('.js-register-confirm-pwd-input').type('{selectAll}{backspace}')
        cy.get('.js-register-confirm-pwd-error-empty')
            .should('have.css', 'display')
            .and('equal', 'block')

        cy.get('.header-account__register-button.btn-wrapper.js-register-submit')
            .should('have.attr','disabled', 'disabled')


    })
    
    
})  