
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfileLivePackager, KalturaDeliveryProfileLivePackagerArgs } from './KalturaDeliveryProfileLivePackager';

export interface KalturaDeliveryProfileLivePackagerHlsArgs  extends KalturaDeliveryProfileLivePackagerArgs {
    disableExtraAttributes? : boolean;
	forceProxy? : boolean;
}


export class KalturaDeliveryProfileLivePackagerHls extends KalturaDeliveryProfileLivePackager {

    disableExtraAttributes : boolean;
	forceProxy : boolean;

    constructor(data? : KalturaDeliveryProfileLivePackagerHlsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileLivePackagerHls' },
				disableExtraAttributes : { type : 'b' },
				forceProxy : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileLivePackagerHls'] = KalturaDeliveryProfileLivePackagerHls;