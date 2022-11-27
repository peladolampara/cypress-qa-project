describe('ssp Navigation', () => {

    before(() => {
        cy.visit('http://e.na.us.development.qhapaq.expandya.com/')

    });
    
    it('Ir a MPP', () => {
        cy.get('[href="/products?cat=/general/fragrance"]').click()

        cy.get('#edit-purchased-entity-0-attributes-attribute-weight--9').select(1)

        cy.get('#edit-purchased-entity-0-attributes-attribute-weight--8').select(1)

        cy.get('[href="/products?cat=/general/skin-care"]').click()
        cy.get('#edit-purchased-entity-0-attributes-attribute-weight--9').select(2)
        cy.get('.pager__items > :nth-child(2) > a').click()
        cy.get('#product-51').click()
        cy.wait(2000);
        cy.get('.header-cart__content-header-close').click()
        cy.wait(2000);
        //no hay que seleccionar en este mpp

        cy.get('[href="/products?cat=/general/hair-care"]').click()
        //no hay que seleccionar en este mpp

        cy.get('[href="/products?cat=/general/clothing"]').click()
        cy.get('#edit-purchased-entity-0-attributes-attribute-size--9').select(1)
        cy.get('#edit-purchased-entity-0-attributes-attribute-size--8').select(3)
        cy.get('.pager__items > :nth-child(2) > a').click()
        cy.get('#product-262').click()
        cy.wait(2000);
        cy.get('.header-cart__content-header-close').click()
        cy.wait(2000);
        cy.get('#product-26').click()
        cy.wait(2000);
        cy.get('.header-cart__content-header-close').click()
        cy.wait(2000);

        cy.get('[href="/products?cat=/general/shoes"]').click()
        cy.get('#edit-purchased-entity-0-attributes-attribute-size--9').select(1)
        cy.get('#edit-purchased-entity-0-attributes-attribute-size--7').select(2)

        cy.get('[href="/products?cat=/general/handbags"]').click()
        cy.get('#edit-purchased-entity-0-attributes-attribute-size').select(1)
        cy.get('#edit-purchased-entity-0-attributes-attribute-size--7').select(1)

        cy.get('[href="/products?cat=/general/gifts"]').click()
        cy.get('#edit-purchased-entity-0-attributes-attribute-size--4').select(1)
        cy.get('#edit-purchased-entity-0-attributes-attribute-size--8').select(1)
        cy.get('.pager__items > :nth-child(2) > a').click()
        cy.get('#product-220').click()
        cy.wait(2000);
        cy.get('.header-cart__content-header-close').click()
        cy.wait(2000);
        cy.get('#product-227').click()
        cy.wait(2000);
        cy.get('.header-cart__content-header-close').click()
        cy.wait(2000);




    });
    


})
