describe('Crear cuenta', ()=>{

    let num = Math.random();
    let correo = 'prueba+'+num+'@gmail.com'
    
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
        cy.get('.js-register-email-input').type(correo)
        cy.get('.js-register-password-input').type('Luis1596')

        cy.get('.js-register-confirm-pwd-input').type('Luis1596')
        cy.get('.register-policy').click('left')
        cy.get('.register-updates').click('left')

    })

    it('Verificar que las letras de password suggestion se pongan verdes ',()=>{
        cy.get('.js-register-password-condition-length.valid')
            .should('have.css', 'color')
            .and('equal', 'rgb(104, 212, 104)')

        cy.get('.js-register-password-condition-numbers')
            .should('have.css', 'color')
            .and('equal', 'rgb(104, 212, 104)')

        cy.get('.js-register-password-condition-letters')  
            .should('have.css', 'color')
            .and('equal', 'rgb(104, 212, 104)')   
                   
        cy.get('.js-register-password-condition-symbols')
            .should('have.css', 'color')
            .and('equal', 'rgb(104, 212, 104)')

        })
    
    it('Crear cuenta', () =>{
        cy.get('.header-account__register-button').click()
    })
})  