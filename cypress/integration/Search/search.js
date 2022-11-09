let num = Math.random();
    let correo = 'prueba+'+num+'@gmail.com'

describe('Search process', () => {
    before(() => {
        cy.visit('http://e.na.us.development.qhapaq.expandya.com/')
        cy.get('.header-utilities__link.login.js-header-account-overlay-link.js-header-utilities-link-login').click()
        cy.get('.js-register-btn.header-account__reference-link').click()
        cy.get('.js-register-fname-input').type('PruebaNombre')
        cy.get('.js-register-lname-input').type('PruebaApellido')
        cy.get('.js-register-email-input').type(correo)
        cy.get('.js-register-password-input').type('Luis1596')
        cy.get('.js-register-confirm-pwd-input').type('Luis1596')
        cy.get('.register-policy').click('left')
        cy.get('.register-updates').click('left')
        cy.get('.header-account__register-button').click()

    });
    it('Ir a search', () => {
        cy.wait(5000)
        cy.get('.search > .header-utilities__link-icon').click()

        cy.get('#edit-text').type('Shirt')
        cy.get('#edit-submit-product-search').click()
        cy.get('.agree-button').click()
        cy.get('#product-156').click()
        cy.get('.header-cart__content-header-close').click()
        cy.get('#edit-purchased-entity-0-attributes-attribute-size--5').select(1)
        cy.get('#product-327').click()
        cy.get('.header-cart__content-header-close').click()
        cy.wait(3000)
        cy.get('.pager__items > :nth-child(2) > a').click()
        cy.get('#product-294').click()
        cy.get('.header-cart__content-header-close').click()
        cy.get('#product-90').click()
        cy.get('.header-cart__content-header-close').click()

        cy.get('.search-sort').click()
        cy.wait(1000)
        cy.get('.search-sort__menu > :nth-child(3)').click()

        cy.wait(1000)
        cy.get('#product-327').click()
    });

 
    

});