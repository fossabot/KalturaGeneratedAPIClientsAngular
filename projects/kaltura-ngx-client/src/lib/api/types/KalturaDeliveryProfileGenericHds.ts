
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDeliveryProfile, KalturaDeliveryProfileArgs } from './KalturaDeliveryProfile';

export interface KalturaDeliveryProfileGenericHdsArgs  extends KalturaDeliveryProfileArgs {
    pattern? : string;
	rendererClass? : string;
}


export class KalturaDeliveryProfileGenericHds extends KalturaDeliveryProfile {

    pattern : string;
	rendererClass : string;

    constructor(data? : KalturaDeliveryProfileGenericHdsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeliveryProfileGenericHds' },
				pattern : { type : 's' },
				rendererClass : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeliveryProfileGenericHds'] = KalturaDeliveryProfileGenericHds;