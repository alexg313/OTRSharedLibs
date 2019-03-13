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


export interface GetCaseActionTypesResponse { 
    caseActionTypes?: Array<GetCaseActionTypesResponse.CaseActionTypesEnum>;
}
export namespace GetCaseActionTypesResponse {
    export type CaseActionTypesEnum = 'CITATION_DATA_EXTRACTED' | 'REVIEWED_BY_LAWFIRM' | 'TICKET_MAILED_TO_COURT' | 'NOTICE_OF_APPEARANCE_FILED' | 'DISCOVERY_REQUESTED' | 'DISCOVERY_RECEIVED' | 'COURT_DATE_SCHEDULED' | 'OTHER';
    export const CaseActionTypesEnum = {
        CITATIONDATAEXTRACTED: 'CITATION_DATA_EXTRACTED' as CaseActionTypesEnum,
        REVIEWEDBYLAWFIRM: 'REVIEWED_BY_LAWFIRM' as CaseActionTypesEnum,
        TICKETMAILEDTOCOURT: 'TICKET_MAILED_TO_COURT' as CaseActionTypesEnum,
        NOTICEOFAPPEARANCEFILED: 'NOTICE_OF_APPEARANCE_FILED' as CaseActionTypesEnum,
        DISCOVERYREQUESTED: 'DISCOVERY_REQUESTED' as CaseActionTypesEnum,
        DISCOVERYRECEIVED: 'DISCOVERY_RECEIVED' as CaseActionTypesEnum,
        COURTDATESCHEDULED: 'COURT_DATE_SCHEDULED' as CaseActionTypesEnum,
        OTHER: 'OTHER' as CaseActionTypesEnum
    };
}