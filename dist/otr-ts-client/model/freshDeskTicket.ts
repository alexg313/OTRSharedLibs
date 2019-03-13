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
import { FreshDeskConversation } from './freshDeskConversation';
import { FreshDeskRequester } from './freshDeskRequester';


export interface FreshDeskTicket { 
    attachments?: Array<any>;
    ccEmails?: Array<string>;
    conversation?: Array<FreshDeskConversation>;
    createdAt?: Date;
    customFields?: { [key: string]: string; };
    deleted?: boolean;
    description?: string;
    descriptionText?: string;
    dueBy?: Date;
    email?: string;
    frDueBy?: Date;
    frEscalated?: boolean;
    fwdEmails?: Array<string>;
    groupId?: number;
    id?: number;
    isEscalated?: boolean;
    name?: string;
    phone?: string;
    priority?: number;
    productId?: number;
    replyCcEmails?: Array<string>;
    requester?: FreshDeskRequester;
    requesterId?: string;
    responderId?: number;
    source?: number;
    spam?: boolean;
    status?: number;
    statusType?: FreshDeskTicket.StatusTypeEnum;
    subject?: string;
    tags?: Array<string>;
    toEmails?: Array<string>;
    type?: string;
    uniqueExternalId?: string;
    updatedAt?: Date;
}
export namespace FreshDeskTicket {
    export type StatusTypeEnum = 'OPEN' | 'PENDING' | 'RESOLVED' | 'CLOSED' | 'WAITING_ON_CUSTOMER' | 'WAITING_ON_THIRD_PARTY' | 'WAITING_ON_ATTORNEY' | 'WAITING_ON_OTR' | 'QUEUED_FOR_AUTOMATION';
    export const StatusTypeEnum = {
        OPEN: 'OPEN' as StatusTypeEnum,
        PENDING: 'PENDING' as StatusTypeEnum,
        RESOLVED: 'RESOLVED' as StatusTypeEnum,
        CLOSED: 'CLOSED' as StatusTypeEnum,
        WAITINGONCUSTOMER: 'WAITING_ON_CUSTOMER' as StatusTypeEnum,
        WAITINGONTHIRDPARTY: 'WAITING_ON_THIRD_PARTY' as StatusTypeEnum,
        WAITINGONATTORNEY: 'WAITING_ON_ATTORNEY' as StatusTypeEnum,
        WAITINGONOTR: 'WAITING_ON_OTR' as StatusTypeEnum,
        QUEUEDFORAUTOMATION: 'QUEUED_FOR_AUTOMATION' as StatusTypeEnum
    };
}