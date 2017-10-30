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
        instance = new ShopApi.GiftCertificateItemModel()
    })

    const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
    }

    const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
    }

    describe('GiftCertificateItemModel', () => {
        it('should create an instance of GiftCertificateItemModel', () => {
      // uncomment below and update the code to test GiftCertificateItemModel
      // var instane = new ShopApi.GiftCertificateItemModel()
      // expect(instance).to.be.a(ShopApi.GiftCertificateItemModel);
        })

        it('should have the property amount (base name: "amount")', () => {
      // uncomment below and update the code to test the property amount
      // var instane = new ShopApi.GiftCertificateItemModel()
      // expect(instance).to.be();
        })

        it('should have the property giftCertificateItemId (base name: "gift_certificate_item_id")', () => {
      // uncomment below and update the code to test the property giftCertificateItemId
      // var instane = new ShopApi.GiftCertificateItemModel()
      // expect(instance).to.be();
        })

        it('should have the property message (base name: "message")', () => {
      // uncomment below and update the code to test the property message
      // var instane = new ShopApi.GiftCertificateItemModel()
      // expect(instance).to.be();
        })

        it('should have the property recipientEmail (base name: "recipient_email")', () => {
      // uncomment below and update the code to test the property recipientEmail
      // var instane = new ShopApi.GiftCertificateItemModel()
      // expect(instance).to.be();
        })

        it('should have the property recipientName (base name: "recipient_name")', () => {
      // uncomment below and update the code to test the property recipientName
      // var instane = new ShopApi.GiftCertificateItemModel()
      // expect(instance).to.be();
        })

        it('should have the property senderName (base name: "sender_name")', () => {
      // uncomment below and update the code to test the property senderName
      // var instane = new ShopApi.GiftCertificateItemModel()
      // expect(instance).to.be();
        })

        it('should have the property shipmentId (base name: "shipment_id")', () => {
      // uncomment below and update the code to test the property shipmentId
      // var instane = new ShopApi.GiftCertificateItemModel()
      // expect(instance).to.be();
        })

    })

}))
