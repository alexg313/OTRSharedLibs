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


export interface LawfirmDocumentTemplate { 
    clientDocRequirement?: LawfirmDocumentTemplate.ClientDocRequirementEnum;
    docDate?: Date;
    docExt?: string;
    docType?: LawfirmDocumentTemplate.DocTypeEnum;
    textProvidedByLawfirm?: string;
}
export namespace LawfirmDocumentTemplate {
    export type ClientDocRequirementEnum = 'NONE' | 'ACK' | 'SIGNATURE' | 'NOTARY';
    export const ClientDocRequirementEnum = {
        NONE: 'NONE' as ClientDocRequirementEnum,
        ACK: 'ACK' as ClientDocRequirementEnum,
        SIGNATURE: 'SIGNATURE' as ClientDocRequirementEnum,
        NOTARY: 'NOTARY' as ClientDocRequirementEnum
    };
    export type DocTypeEnum = 'ENGAGEMENT_LETTER' | 'OTHER_IMAGE';
    export const DocTypeEnum = {
        ENGAGEMENTLETTER: 'ENGAGEMENT_LETTER' as DocTypeEnum,
        OTHERIMAGE: 'OTHER_IMAGE' as DocTypeEnum
    };
}