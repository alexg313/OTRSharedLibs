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
import { AddressDomain } from './addressDomain';


export interface DirectMailSendRequest { 
    mailTemplateType?: string;
    reconcileId?: string;
    reconcileType?: DirectMailSendRequest.ReconcileTypeEnum;
    toAddress?: AddressDomain;
}
export namespace DirectMailSendRequest {
    export type ReconcileTypeEnum = 'OTR_CITATION_ID' | 'OTR_LAWFIRM_ID' | 'TICKET_REFERENCE_ID';
    export const ReconcileTypeEnum = {
        OTRCITATIONID: 'OTR_CITATION_ID' as ReconcileTypeEnum,
        OTRLAWFIRMID: 'OTR_LAWFIRM_ID' as ReconcileTypeEnum,
        TICKETREFERENCEID: 'TICKET_REFERENCE_ID' as ReconcileTypeEnum
    };
}