
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaIdeticDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    thumbnailUrl? : string;
	flavorAssetUrl? : string;
}


export class KalturaIdeticDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    thumbnailUrl : string;
	flavorAssetUrl : string;

    constructor(data? : KalturaIdeticDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIdeticDistributionJobProviderData' },
				thumbnailUrl : { type : 's' },
				flavorAssetUrl : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaIdeticDistributionJobProviderData'] = KalturaIdeticDistributionJobProviderData;