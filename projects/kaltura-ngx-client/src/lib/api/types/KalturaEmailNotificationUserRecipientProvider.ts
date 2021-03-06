
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaEmailNotificationRecipientProvider, KalturaEmailNotificationRecipientProviderArgs } from './KalturaEmailNotificationRecipientProvider';

export interface KalturaEmailNotificationUserRecipientProviderArgs  extends KalturaEmailNotificationRecipientProviderArgs {
    filter? : KalturaUserFilter;
}


export class KalturaEmailNotificationUserRecipientProvider extends KalturaEmailNotificationRecipientProvider {

    filter : KalturaUserFilter;

    constructor(data? : KalturaEmailNotificationUserRecipientProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationUserRecipientProvider' },
				filter : { type : 'o', subTypeConstructor : KalturaUserFilter, subType : 'KalturaUserFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEmailNotificationUserRecipientProvider'] = KalturaEmailNotificationUserRecipientProvider;