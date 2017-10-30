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
        instance = new ShopApi.SuggestionModel()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('SuggestionModel', () => {
        it('should create an instance of SuggestionModel', () => {
      // uncomment below and update the code to test SuggestionModel
      // var instane = new ShopApi.SuggestionModel()
      // expect(instance).to.be.a(ShopApi.SuggestionModel);
        })

        it('should have the property brands (base name: "brands")', () => {
      // uncomment below and update the code to test the property brands
      // var instane = new ShopApi.SuggestionModel()
      // expect(instance).to.be();
        })

        it('should have the property categories (base name: "categories")', () => {
      // uncomment below and update the code to test the property categories
      // var instane = new ShopApi.SuggestionModel()
      // expect(instance).to.be();
        })

        it('should have the property content (base name: "content")', () => {
      // uncomment below and update the code to test the property content
      // var instane = new ShopApi.SuggestionModel()
      // expect(instance).to.be();
        })

        it('should have the property customSuggestions (base name: "custom_suggestions")', () => {
      // uncomment below and update the code to test the property customSuggestions
      // var instane = new ShopApi.SuggestionModel()
      // expect(instance).to.be();
        })

        it('should have the property products (base name: "products")', () => {
      // uncomment below and update the code to test the property products
      // var instane = new ShopApi.SuggestionModel()
      // expect(instance).to.be();
        })

        it('should have the property suggestedPhrases (base name: "suggested_phrases")', () => {
      // uncomment below and update the code to test the property suggestedPhrases
      // var instane = new ShopApi.SuggestionModel()
      // expect(instance).to.be();
        })

        it('should have the property suggestedTerms (base name: "suggested_terms")', () => {
      // uncomment below and update the code to test the property suggestedTerms
      // var instane = new ShopApi.SuggestionModel()
      // expect(instance).to.be();
        })

    })

}))
