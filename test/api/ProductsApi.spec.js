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
import {clientId, proxyUrl, baseUrl} from '../config.json'

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
}(this, function(expect, ShopApi) {
    'use strict'

    var instance
    const client = new ShopApi.ApiClient(
        `${proxyUrl}/${baseUrl}`,
        { 'x-dw-client-id': clientId }
    )

    beforeEach(() => {
        instance = new ShopApi.ProductsApi(client)
    })

    var getProperty = (object, getter, property) => {
        // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function')
            return object[getter]()
        else
            return object[property];
    }

    var setProperty = (object, setter, property, value) => {
        // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function')
            object[setter](value)
        else
            object[property] = value;
    }

    const VALID_PRODUCT_ID = '008884303989'
    const INVALID_PRODUCT_ID = '-1'

    describe('ProductsApi', () => {

        describe('getProductsByID', () => {
            it('should return product when calling getProductsByID with valid product id', () =>
                instance.getProductsByID(VALID_PRODUCT_ID)
                    .then((product) => {
                        expect(product.id).to.be(VALID_PRODUCT_ID);
                    })
            )

            it('should return fault calling getProductsByID with invalid product id', () =>
                instance.getProductsByID(INVALID_PRODUCT_ID)
                    .catch((fault) => {
                        expect(fault.type).to.be('ProductNotFoundException');
                    })
            )
        })

        describe('getProductsByIDAvailability', () => {
            it('should call getProductsByIDAvailability successfully', () =>
                instance.getProductsByIDAvailability(VALID_PRODUCT_ID)
                    .then((product) => {
                        expect(product.inventory).to.be.an('object');
                    })
            )
        })

        describe('getProductsByIDBundledProducts', () => {
            it('should call getProductsByIDBundledProducts successfully', () =>
                instance.getProductsByIDBundledProducts(VALID_PRODUCT_ID)
                    .then((product) => {
                        expect(product.constructor.name).to.be('ProductModel')
                    })
            )
        })

        describe('getProductsByIDImages', () => {
            it('should call getProductsByIDImages successfully', () =>
                instance.getProductsByIDImages(VALID_PRODUCT_ID)
                    .then((product) => {
                        expect(product.image_groups).to.be.an('array');
                    })
            )
        })

        describe('getProductsByIDLinks', () => {
            it('should call getProductsByIDLinks successfully', () =>
                instance.getProductsByIDLinks(VALID_PRODUCT_ID)
                    .then((product) => {
                        expect(product.constructor.name).to.be('ProductModel')
                    })
            )
        })


        describe('getProductsByIDOptions', () => {
            it('should call getProductsByIDOptions successfully', () =>
                instance.getProductsByIDOptions(VALID_PRODUCT_ID)
                    .then((product) => {
                        expect(product.constructor.name).to.be('ProductModel')
                    })
            )
        })

        describe('getProductsByIDPrices', () => {
            it('should call getProductsByIDPrices successfully', () =>
                instance.getProductsByIDPrices(VALID_PRODUCT_ID)
                    .then((product) => {
                        expect(product.constructor.name).to.be('ProductModel')
                        expect(product.prices).to.be.an('object')
                    })
            )
        })

        describe('getProductsByIDPromotions', () => {
            it('should call getProductsByIDPromotions successfully', () =>
                instance.getProductsByIDPromotions(VALID_PRODUCT_ID)
                    .then((product) => {
                        expect(product.constructor.name).to.be('ProductModel')
                    })
            )
        })

        describe('getProductsByIDVariations', () => {
            it('should call getProductsByIDVariations successfully', () =>
                instance.getProductsByIDVariations(VALID_PRODUCT_ID)
                    .then((product) => {
                        expect(product.constructor.name).to.be('ProductModel')
                        expect(product.variants).to.be.an('array')
                    })
            )
        })

        describe('getProductsByIDs', () => {
            it('should call getProductsByIDs successfully', () =>
                instance.getProductsByIDs(['008884303996', '008884304009'])
                    .then((result) => {
                        expect(result.constructor.name).to.be('ProductResultModel')
                        expect(result.total).to.be(2)
                    })
            )
        })

    })

}))
