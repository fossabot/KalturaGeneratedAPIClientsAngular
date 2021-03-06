
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEmailNotificationRecipientProvider, KalturaEmailNotificationRecipientProviderArgs } from './KalturaEmailNotificationRecipientProvider';

export interface KalturaEmailNotificationGroupRecipientProviderArgs  extends KalturaEmailNotificationRecipientProviderArgs {
    groupId? : string;
}


export class KalturaEmailNotificationGroupRecipientProvider extends KalturaEmailNotificationRecipientProvider {

    groupId : string;

    constructor(data? : KalturaEmailNotificationGroupRecipientProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationGroupRecipientProvider' },
				groupId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEmailNotificationGroupRecipientProvider'] = KalturaEmailNotificationGroupRecipientProvider;