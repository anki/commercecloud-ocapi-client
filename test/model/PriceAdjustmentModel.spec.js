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
        instance = new ShopApi.PriceAdjustmentModel()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('PriceAdjustmentModel', () => {
        it('should create an instance of PriceAdjustmentModel', () => {
      // uncomment below and update the code to test PriceAdjustmentModel
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be.a(ShopApi.PriceAdjustmentModel);
        })

        it('should have the property appliedDiscount (base name: "applied_discount")', () => {
      // uncomment below and update the code to test the property appliedDiscount
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

        it('should have the property couponCode (base name: "coupon_code")', () => {
      // uncomment below and update the code to test the property couponCode
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

        it('should have the property createdBy (base name: "created_by")', () => {
      // uncomment below and update the code to test the property createdBy
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

        it('should have the property creationDate (base name: "creation_date")', () => {
      // uncomment below and update the code to test the property creationDate
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

        it('should have the property custom (base name: "custom")', () => {
      // uncomment below and update the code to test the property custom
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

        it('should have the property itemText (base name: "item_text")', () => {
      // uncomment below and update the code to test the property itemText
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

        it('should have the property lastModified (base name: "last_modified")', () => {
      // uncomment below and update the code to test the property lastModified
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

        it('should have the property manual (base name: "manual")', () => {
      // uncomment below and update the code to test the property manual
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

        it('should have the property price (base name: "price")', () => {
      // uncomment below and update the code to test the property price
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

        it('should have the property priceAdjustmentId (base name: "price_adjustment_id")', () => {
      // uncomment below and update the code to test the property priceAdjustmentId
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

        it('should have the property promotionId (base name: "promotion_id")', () => {
      // uncomment below and update the code to test the property promotionId
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

        it('should have the property promotionLink (base name: "promotion_link")', () => {
      // uncomment below and update the code to test the property promotionLink
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

        it('should have the property reasonCode (base name: "reason_code")', () => {
      // uncomment below and update the code to test the property reasonCode
      // var instane = new ShopApi.PriceAdjustmentModel()
      // expect(instance).to.be();
        })

    })

}))
