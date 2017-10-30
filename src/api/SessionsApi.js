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
* Sessions service.
* @module api/SessionsApi
* @version 17.8
*/
export default class SessionsApi {

    /**
    * Constructs a new SessionsApi.
    * @alias module:api/SessionsApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }



    /**
     * Exchanges a JWT token into a new session. If the given token is valid, creates a new session, which is associated  with the authenticated or anonymous customer. All Set-Cookie headers for handling the session are applied  on the response.    Please note that this resource always creates a new session with the consequence that you have no session basket  after you do that. Once you created a session from a JWT token you can use this session and stateless OCAPI calls  using the JWT in parallel. There is no additional need to call the bridging resources again.    When a session ID is sent in with the request, the specified session is ignored. Only the incoming JWT token is  used to create a new session.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    postSessionsWithHttpInfo() {
        const postBody = null


        const pathParams = {
        }
        const queryParams = {
        }
        const headerParams = {
        }
        const formParams = {
        }

        const authNames = ['customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = null

        return this.apiClient.callApi(
        '/sessions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      )
    }

    /**
     * Exchanges a JWT token into a new session. If the given token is valid, creates a new session, which is associated  with the authenticated or anonymous customer. All Set-Cookie headers for handling the session are applied  on the response.    Please note that this resource always creates a new session with the consequence that you have no session basket  after you do that. Once you created a session from a JWT token you can use this session and stateless OCAPI calls  using the JWT in parallel. There is no additional need to call the bridging resources again.    When a session ID is sent in with the request, the specified session is ignored. Only the incoming JWT token is  used to create a new session.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    postSessions() {
        return this.postSessionsWithHttpInfo()
        .then((response_and_data) => {
            return response_and_data.data
        })
    }


}
