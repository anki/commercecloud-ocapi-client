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
        instance = new ShopApi.ProductListLinkModel()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('ProductListLinkModel', () => {
        it('should create an instance of ProductListLinkModel', () => {
      // uncomment below and update the code to test ProductListLinkModel
      // var instane = new ShopApi.ProductListLinkModel()
      // expect(instance).to.be.a(ShopApi.ProductListLinkModel);
        })

        it('should have the property description (base name: "description")', () => {
      // uncomment below and update the code to test the property description
      // var instane = new ShopApi.ProductListLinkModel()
      // expect(instance).to.be();
        })

        it('should have the property link (base name: "link")', () => {
      // uncomment below and update the code to test the property link
      // var instane = new ShopApi.ProductListLinkModel()
      // expect(instance).to.be();
        })

        it('should have the property name (base name: "name")', () => {
      // uncomment below and update the code to test the property name
      // var instane = new ShopApi.ProductListLinkModel()
      // expect(instance).to.be();
        })

        it('should have the property _public (base name: "public")', () => {
      // uncomment below and update the code to test the property _public
      // var instane = new ShopApi.ProductListLinkModel()
      // expect(instance).to.be();
        })

        it('should have the property title (base name: "title")', () => {
      // uncomment below and update the code to test the property title
      // var instane = new ShopApi.ProductListLinkModel()
      // expect(instance).to.be();
        })

        it('should have the property type (base name: "type")', () => {
      // uncomment below and update the code to test the property type
      // var instane = new ShopApi.ProductListLinkModel()
      // expect(instance).to.be();
        })

    })

}))
