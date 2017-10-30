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
import expect from 'expect.js'
import ShopApi from '../../src/index'

import {clientId, proxyUrl, baseUrl} from '../config.json'
import * as utils from '../utils'

let instance
let client
let newCustomer

before(() => {
    client = new ShopApi.ApiClient({
        basePath: `${baseUrl}`,
        defaultHeaders: {'x-dw-client-id': clientId}
    })

    return utils.getNewRegisteredUser(client)
        .then((customer) => {
            newCustomer = customer
            return Promise.resolve()
        })
})

beforeEach(() => {
    instance = new ShopApi.ProductListsApi(client)
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
}

describe('ProductListsApi', () => {
    describe('getProductLists', () => {
        it('calling getProductLists with no options returns fault', () =>
            instance.getProductLists()
                .catch((fault) => {
                    expect(fault.type).to.be('ProductListSearchTermException')
                })
        )

        it('calling getProductLists with valid options returns successfully', () =>
            instance.getProductLists({email: newCustomer.email})
                .then((result) => {
                    expect(result.constructor.name).to.be('PublicProductListResultModel')
                })
        )
    })

    describe('getProductListsByID', () => {
        it('calling getProductListsByID with valid product list id should return successfully', () =>
            // NOTE: The cusomer model doesn't have the product lists assigned to it,
            // this has been added only  for testing purposes
            instance.getProductListsByID(newCustomer.product_lists[0].id)
                .then((productList) => {
                    expect(productList.constructor.name).to.be('PublicProductListModel')
                })
        )

        it('calling getProductListsByID with invalid product list id should return fault', () =>
            // NOTE: The cusomer model doesn't have the product lists assigned to it,
            // this has been added only  for testing purposes
            instance.getProductListsByID('-1')
                .catch((fault) => {
                    expect(fault.type).to.be('ProductListNotFoundException')
                })
        )
    })

    describe('getProductListsByIDItems', () => {
        it('should call getProductListsByIDItems successfully', () =>
            // NOTE: The cusomer model doesn't have the product lists assigned to it,
            // this has been added only  for testing purposes
            instance.getProductListsByIDItems(newCustomer.product_lists[0].id)
                .then((result) => {
                    expect(result.constructor.name).to.be('PublicProductListItemResultModel')
                })
        )
    })

    // describe('getProductListsByIDItemsByID', () => {
    //     it('should call getProductListsByIDItemsByID successfully', () => {
    //         //uncomment below and update the code to test getProductListsByIDItemsByID
    //         //instance.getProductListsByIDItemsByID(function(error) {
    //         //  if (error) throw error;
    //         //expect().to.be()
    //         //})
    //
    //     })
    // })

})
