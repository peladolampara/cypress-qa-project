let num = Math.random();
let correo = 'prueba+'+num+'@gmail.com'


let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorageCache", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});
    
describe('Logged CheckOut', ()=>{
    
      
    before(()=>{
        cy.visit('http://e.na.us.development.qhapaq.expandya.com/')
        cy.wait(5000)
        
        cy.get('.header-utilities__link.login.js-header-account-overlay-link.js-header-utilities-link-login').click()
    
        cy.get('.js-login-username-input').type('luisrojasmunoz@gmail.com')
        cy.get('.js-login-password-input').type('Luis1596!')
        cy.get('.js-login-block >.header-account__form >.header-account__block-function >.btn-wrapper').click()
        
    })
    beforeEach(()=>{
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    })

    it('Proceso de checkout agregando productos de en todos los mpp', ()=> {
        cy.wait(5000)
        cy.get('.header-menu').click('left')

        cy.get('#product-32').click()
        cy.get('.header-cart__content-header-close').click()
        cy.get('#edit-purchased-entity-0-attributes-attribute-weight--2').select(1)
        cy.get('#product-178').click()
        cy.wait(6000)
        cy.get('.header-cart__content-header-close').click()

        //ir a skin care
        cy.visit('http://e.na.us.development.qhapaq.expandya.com/products?cat=/general/skin-care')
        cy.get('#product-55').click()
        cy.get('.header-cart__content-header-close').click()
        cy.get('#edit-purchased-entity-0-attributes-attribute-weight--8').select(0)
        cy.get('#product-56').click()
        cy.wait(5000)
        cy.get('.header-cart__content-header-close').click()
        

        //ir a hair care
        cy.visit('http://e.na.us.development.qhapaq.expandya.com/products?cat=/general/hair-care')
        cy.get('#product-59').click()
        cy.get('.header-cart__content-header-close').click()
        cy.get('#edit-purchased-entity-0-attributes-attribute-weight--2').select(0)
        cy.get('#product-74').click()
        cy.wait(5000)
        cy.get('.header-cart__content-header-close').click()

        //Ir a clothing
        cy.visit('http://e.na.us.development.qhapaq.expandya.com/products?cat=/general/clothing')
        cy.get('#product-14').click()
        cy.get('.header-cart__content-header-close').click()
        cy.get('#edit-purchased-entity-0-attributes-attribute-size--8').select(0)
        cy.get('#product-156').click()
        cy.wait(5000)
        cy.get('.header-cart__content-header-close').click()

        //Ir a shoes
        cy.visit('http://e.na.us.development.qhapaq.expandya.com/products?cat=/general/shoes')
        cy.get('#product-9').click()
        cy.get('.header-cart__content-header-close').click()
        cy.get('#edit-purchased-entity-0-attributes-attribute-size--5').select(3)
        cy.get('#product-242').click()
        cy.wait(5000)

        //Hacer checkoput
        cy.get('.agree-button').click()
        cy.get('.header-cart__content-checkout').click()
        cy.wait(5000)
        //----------------------

        //Llenar formularios
        cy.get('#continue-customer-shipping').click()
        cy.get('#continue-customer-billing').click()
        //----------------------
        //cy.get('#edit-payment-information-add-payment-method-payment-details-security-code').type('123')

        cy.get('#continue-customer-payment').click()

        cy.get('#edit-actions-next').click()
    })
    

  

    

    
})  

