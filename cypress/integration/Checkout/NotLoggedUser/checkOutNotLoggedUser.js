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
    
describe('Not logged check out', ()=>{
    
      
    before(()=>{
        cy.visit('http://e.na.us.development.qhapaq.expandya.com/')
        cy.wait(5000)
    })

    beforeEach(()=>{
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
    })

    it('Proceso de checkout agregando productos de en todos los mpp', ()=> {
        cy.wait(5000)
        cy.get('.header-menu').click('left')

        cy.get('#product-32').click()
        cy.get('.header-cart__content-header-close').click()
        cy.get('#edit-purchased-entity-0-attributes-attribute-weight--8').select(1)
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
        cy.get('#edit-expandya-customer-guest-group-email').type('prueba.correo@gmail.com')
        cy.get('#continue-customer-step').click()

        cy.get('#edit-shipping-information-shipping-profile-address-0-address-given-name').type('Luis')
        cy.get('#edit-shipping-information-shipping-profile-address-0-address-family-name').type('Rojas')

        cy.get('#edit-shipping-information-shipping-profile-address-0-address-address-line1').type('Urbanizacion santa maria de casa grande')

        cy.get('#edit-shipping-information-shipping-profile-address-0-address-postal-code').type('090205')

        cy.get('#edit-shipping-information-shipping-profile-address-0-address-locality').type('guayaquil')

        cy.get('#edit-shipping-information-shipping-profile-address-0-address-country-code--2').select(70)
        //cy.get('#edit-shipping-information-shipping-profile-address-0-address-country-code--X6wh8byaNMk').select(34)

        cy.get('#edit-shipping-information-shipping-profile-field-mobile-number-0-mobile').type('997664497')
        cy.wait(3000)
        cy.get('#continue-customer-shipping').click()
        cy.get('#continue-customer-billing').click()
        cy.wait(3000)
        //----------------------
        cy.get('.payment-cod-wrapper>.js-form-item>.option').click('left')

        cy.get('#continue-customer-payment').click()
        cy.wait(3000)
        cy.get('.checkout-form__container-footer').click(750,120)


        cy.wait(3000)

        cy.get('[aria-label="CONTINUE"]').click()

        cy.wait(4000)

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

        //Hacer checkoput
        //cy.get('.agree-button').click()
        cy.get('.header-cart__content-checkout').click()
        cy.wait(5000)
        //----------------------

        //Llenar formularios
        cy.get('#edit-expandya-customer-guest-group-email').type('prueba.correo@gmail.com')
        cy.get('#continue-customer-step').click()

        cy.get('#edit-shipping-information-shipping-profile-address-0-address-given-name').type('Luis')
        cy.get('#edit-shipping-information-shipping-profile-address-0-address-family-name').type('Rojas')

        cy.get('#edit-shipping-information-shipping-profile-address-0-address-address-line1').type('Urbanizacion santa maria de casa grande')

        cy.get('#edit-shipping-information-shipping-profile-address-0-address-postal-code').type('090205')

        cy.get('#edit-shipping-information-shipping-profile-address-0-address-locality').type('guayaquil')

        cy.get('#edit-shipping-information-shipping-profile-address-0-address-country-code--2').select(70)
        //cy.get('#edit-shipping-information-shipping-profile-address-0-address-country-code--X6wh8byaNMk').select(34)

        cy.get('#edit-shipping-information-shipping-profile-field-mobile-number-0-mobile').type('997664497')
        cy.wait(3000)
        cy.get('#continue-customer-shipping').click()
        cy.get('#continue-customer-billing').click()
        cy.wait(3000)
        //----------------------
        cy.get('.payment-cod-wrapper>.js-form-item>.option').click('left')

        cy.get('#continue-customer-payment').click()
        cy.wait(3000)
        cy.get('.checkout-form__container-footer').click(750,120)

    })
    

  

    

    
})  

