describe('ssp Navigation', () => {

    before(() => {
        cy.visit('http://e.na.us.development.qhapaq.expandya.com/')

    });
    
    it('Ir a MPP', () => {
        cy.get('[href="/products?cat=/general/clothing"]').click('left')

    });
    
    it('Ir a SPP', () => {
        cy.get('.product--variation-field--variation_field_multi_in_image__14 > img').click()
    });

    it('Escoger colores', () => {
        cy.get('[data-slick-index="1"] > .option > :nth-child(1) > :nth-child(1) > .color_field__swatch').click()
        cy.wait(2000)
        cy.get('[data-slick-index="2"] > .option > :nth-child(1) > :nth-child(1) > .color_field__swatch').click()
        cy.wait(2000)
        cy.get('[data-slick-index="4"] > .option > :nth-child(1) > :nth-child(1) > .color_field__swatch').click()
        cy.wait(2000)

        cy.get('.form-select.required').select(1)
        cy.wait(2000)

        cy.get('.form-select.required').select(2)

        

    });

    it('Verirficar si las imagenes carga', () => {
        cy.get('.image > .product--variation-field--variation_field_images__14 > .slick-list > .slick-track > .slick-current > img').should('be.visible')
        cy.wait(1000)
        cy.get('.product-block__slider__thumbnail > .product--variation-field--variation_field_images__14 > .slick-list > .slick-track > [data-slick-index="1"] > img').click()
        cy.wait(1000)

        cy.get('.image > .product--variation-field--variation_field_images__14 > .slick-list > .slick-track > .slick-current > img').should('be.visible')
        cy.wait(1000)

        cy.get('.product-block__slider__thumbnail > .product--variation-field--variation_field_images__14 > .slick-list > .slick-track > [data-slick-index="2"] > img').click()
        cy.wait(1000)

        cy.get('.image > .product--variation-field--variation_field_images__14 > .slick-list > .slick-track > .slick-current > img').should('be.visible')
        cy.wait(1000)
        
        cy.get('.product-block__slider__thumbnail > .product--variation-field--variation_field_images__14 > .slick-list > .slick-track > .slick-current > img').click()
        cy.wait(1000)

        cy.get('.image > .product--variation-field--variation_field_images__14 > .slick-list > .slick-track > .slick-current > img').should('be.visible')
        cy.wait(1000)
        cy.get('.product-block__slider__thumbnail > .product--variation-field--variation_field_images__14 > .slick-list > .slick-track > .slick-current > img').click()

        cy.wait(1000)

        cy.get('.image > .product--variation-field--variation_field_images__14 > .slick-list > .slick-track > .slick-current > img').should('be.visible')
        cy.wait(2000)

        //cy.get('#product-173').click()
        cy.get('.form-select.required').select(0)
        cy.wait(2000)

        cy.get('.add-to-cart-custom-button > .form-actions').click('center')
        cy.get('.header-cart__content-header-close').click()


        cy.get('.form-select.required').select(1)
        cy.wait(2000)
        cy.get('.add-to-cart-custom-button > .form-actions').click('center')

       // cy.get('#product-173').click()

        cy.get('.header-cart__content-header-close').click()

        cy.get('.form-select.required').select(2)
        cy.wait(2000)
        cy.get('#product-173').click()

        cy.wait(3000)
        cy.get('.header-cart__content-header-close').click()
        cy.wait(3000)

    });

    //Ir a spp de fragrance

    it('Ir a MPP', () => {

        cy.get('[href="/products?cat=/general/fragrance"]').click()
        cy.get('.product--variation-field--variation_field_multi_in_image__32 > img').click()
        cy.wait(2000)


        cy.get('#edit-purchased-entity-0-attributes-attribute-weight').select(1)
        cy.wait(2000)

        cy.get('#product-179').click()

        cy.wait(2000)
        cy.get('.header-cart__content-header-close').click()
        cy.wait(2000)


        cy.get('select[data-drupal-selector="edit-purchased-entity-0-attributes-attribute-weight"]').select(0)
        cy.wait(2000)

        cy.get('#product-32').click()
        cy.wait(2000)
        cy.get('.header-cart__content-header-close').click()
        cy.wait(2000)


        cy.get('.product-slider-dots > :nth-child(2)')
        cy.wait(2000)

        cy.get('.product-slider-dots > :nth-child(3)')
        cy.get('.product-slider-dots > :nth-child(4)')
        cy.get('.product-slider-dots > :nth-child(5)')
        cy.get('.product-slider-dots > :nth-child(1)')



    });
    
   

    



});

