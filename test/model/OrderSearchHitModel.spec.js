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
        instance = new ShopApi.OrderSearchHitModel()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('OrderSearchHitModel', () => {
        it('should create an instance of OrderSearchHitModel', () => {
      // uncomment below and update the code to test OrderSearchHitModel
      // var instane = new ShopApi.OrderSearchHitModel()
      // expect(instance).to.be.a(ShopApi.OrderSearchHitModel);
        })

        it('should have the property data (base name: "data")', () => {
      // uncomment below and update the code to test the property data
      // var instane = new ShopApi.OrderSearchHitModel()
      // expect(instance).to.be();
        })

        it('should have the property relevance (base name: "relevance")', () => {
      // uncomment below and update the code to test the property relevance
      // var instane = new ShopApi.OrderSearchHitModel()
      // expect(instance).to.be();
        })

    })

}))
