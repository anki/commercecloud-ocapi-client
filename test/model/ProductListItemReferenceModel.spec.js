/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
    // AMD.
        define(['expect.js', '../../src/index'], factory)
    } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require('../../src/index'))
    } else {
    // Browser globals (root is window)
        factory(root.expect, root.ShopApi)
    }
}(this, (expect, ShopApi) => {
    'use strict'

    let instance

    beforeEach(() => {
        instance = new ShopApi.ProductListItemReferenceModel()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('ProductListItemReferenceModel', () => {
        it('should create an instance of ProductListItemReferenceModel', () => {
      // uncomment below and update the code to test ProductListItemReferenceModel
      // var instane = new ShopApi.ProductListItemReferenceModel()
      // expect(instance).to.be.a(ShopApi.ProductListItemReferenceModel);
        })

        it('should have the property id (base name: "id")', () => {
      // uncomment below and update the code to test the property id
      // var instane = new ShopApi.ProductListItemReferenceModel()
      // expect(instance).to.be();
        })

        it('should have the property priority (base name: "priority")', () => {
      // uncomment below and update the code to test the property priority
      // var instane = new ShopApi.ProductListItemReferenceModel()
      // expect(instance).to.be();
        })

        it('should have the property productDetailsLink (base name: "product_details_link")', () => {
      // uncomment below and update the code to test the property productDetailsLink
      // var instane = new ShopApi.ProductListItemReferenceModel()
      // expect(instance).to.be();
        })

        it('should have the property productList (base name: "product_list")', () => {
      // uncomment below and update the code to test the property productList
      // var instane = new ShopApi.ProductListItemReferenceModel()
      // expect(instance).to.be();
        })

        it('should have the property _public (base name: "public")', () => {
      // uncomment below and update the code to test the property _public
      // var instane = new ShopApi.ProductListItemReferenceModel()
      // expect(instance).to.be();
        })

        it('should have the property purchasedQuantity (base name: "purchased_quantity")', () => {
      // uncomment below and update the code to test the property purchasedQuantity
      // var instane = new ShopApi.ProductListItemReferenceModel()
      // expect(instance).to.be();
        })

        it('should have the property quantity (base name: "quantity")', () => {
      // uncomment below and update the code to test the property quantity
      // var instane = new ShopApi.ProductListItemReferenceModel()
      // expect(instance).to.be();
        })

        it('should have the property type (base name: "type")', () => {
      // uncomment below and update the code to test the property type
      // var instane = new ShopApi.ProductListItemReferenceModel()
      // expect(instance).to.be();
        })

    })

}))
