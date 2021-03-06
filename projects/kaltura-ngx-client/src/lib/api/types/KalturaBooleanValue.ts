
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaValue, KalturaValueArgs } from './KalturaValue';

export interface KalturaBooleanValueArgs  extends KalturaValueArgs {
    value? : boolean;
}


export class KalturaBooleanValue extends KalturaValue {

    value : boolean;

    constructor(data? : KalturaBooleanValueArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBooleanValue' },
				value : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBooleanValue'] = KalturaBooleanValue;