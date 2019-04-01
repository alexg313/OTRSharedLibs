"use strict";
/**
 * OffTheRecord Rest Service API - Devo
 * A service to handle your traffic tickets
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
exports.__esModule = true;
var PriceMatchResponse;
(function (PriceMatchResponse) {
    var PriceMatchStatusEnum;
    (function (PriceMatchStatusEnum) {
        PriceMatchStatusEnum[PriceMatchStatusEnum["PENDING"] = 'PENDING'] = "PENDING";
        PriceMatchStatusEnum[PriceMatchStatusEnum["COMPLETE"] = 'COMPLETE'] = "COMPLETE";
        PriceMatchStatusEnum[PriceMatchStatusEnum["REJECTED"] = 'REJECTED'] = "REJECTED";
    })(PriceMatchStatusEnum = PriceMatchResponse.PriceMatchStatusEnum || (PriceMatchResponse.PriceMatchStatusEnum = {}));
})(PriceMatchResponse = exports.PriceMatchResponse || (exports.PriceMatchResponse = {}));