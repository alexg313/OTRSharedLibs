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

import * as models from './models';

export interface LawfirmCaseDocument {
    "caseDocId"?: string;
    "clientDocRequirement"?: LawfirmCaseDocument.ClientDocRequirementEnum;
    "docDate"?: Date;
    "docType"?: LawfirmCaseDocument.DocTypeEnum;
    "docUrl"?: string;
    "hasClientAgreed"?: boolean;
}

export namespace LawfirmCaseDocument {
    export enum ClientDocRequirementEnum {
        NONE = <any> 'NONE',
        ACK = <any> 'ACK',
        SIGNATURE = <any> 'SIGNATURE',
        NOTARY = <any> 'NOTARY'
    }
    export enum DocTypeEnum {
        ENGAGEMENTLETTER = <any> 'ENGAGEMENT_LETTER',
        OTHERIMAGE = <any> 'OTHER_IMAGE'
    }
}