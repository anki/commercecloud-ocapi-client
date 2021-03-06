/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
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
import ApiClient from '../ApiClient'

/**
* The TermFilter model module.
* @module models/TermFilter
* @version 17.8
*/
export default class TermFilter {
    /**
    * Constructs a new <code>TermFilter</code>.
    * Document representing a term filter.
    * @alias module:models/TermFilter
    * @class
    * @param field {String} The filter field.
    * @param operator {module:models/TermFilter.OperatorEnum} The operator to compare
    * the field's values with the given ones.
    */
    constructor(field, operator) {
        /**
        * The filter field.
        * @member {String} field
        */
        this.field = field

        /**
        * The operator to compare the field's values with the given ones.
        * @member {module:models/TermFilter.OperatorEnum} operator
        */
        this.operator = operator

        /**
        * The filter values.
        * @member {Array.<Object>} values
        */
        this.values = undefined
    }

    /**
    * Constructs a <code>TermFilter</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/TermFilter} obj Optional instance to populate.
    * @return {module:models/TermFilter} The populated <code>TermFilter</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TermFilter()

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String')
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String')
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [Object])
            }
        }

        return obj
    }
}

/**
* Allowed values for the <code>operator</code> property.
* @enum {String}
* @readonly
*/
TermFilter.OperatorEnum = {

    /**
     * value: "is"
     * @const
     */
    is: 'is',

    /**
     * value: "one_of"
     * @const
     */
    one_of: 'one_of',

    /**
     * value: "is_null"
     * @const
     */
    is_null: 'is_null',

    /**
     * value: "is_not_null"
     * @const
     */
    is_not_null: 'is_not_null',

    /**
     * value: "less"
     * @const
     */
    less: 'less',

    /**
     * value: "greater"
     * @const
     */
    greater: 'greater',

    /**
     * value: "not_in"
     * @const
     */
    not_in: 'not_in',

    /**
     * value: "neq"
     * @const
     */
    neq: 'neq'
}
