
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileSyncDescriptor, KalturaFileSyncDescriptorArgs } from './KalturaFileSyncDescriptor';

export interface KalturaSourceFileSyncDescriptorArgs  extends KalturaFileSyncDescriptorArgs {
    actualFileSyncLocalPath? : string;
	assetId? : string;
	assetParamsId? : number;
}


export class KalturaSourceFileSyncDescriptor extends KalturaFileSyncDescriptor {

    actualFileSyncLocalPath : string;
	assetId : string;
	assetParamsId : number;

    constructor(data? : KalturaSourceFileSyncDescriptorArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSourceFileSyncDescriptor' },
				actualFileSyncLocalPath : { type : 's' },
				assetId : { type : 's' },
				assetParamsId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSourceFileSyncDescriptor'] = KalturaSourceFileSyncDescriptor;