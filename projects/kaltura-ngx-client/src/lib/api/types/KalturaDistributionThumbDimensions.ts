
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDistributionThumbDimensionsArgs  extends KalturaObjectBaseArgs {
    width? : number;
	height? : number;
}


export class KalturaDistributionThumbDimensions extends KalturaObjectBase {

    width : number;
	height : number;

    constructor(data? : KalturaDistributionThumbDimensionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionThumbDimensions' },
				width : { type : 'n' },
				height : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionThumbDimensions'] = KalturaDistributionThumbDimensions;