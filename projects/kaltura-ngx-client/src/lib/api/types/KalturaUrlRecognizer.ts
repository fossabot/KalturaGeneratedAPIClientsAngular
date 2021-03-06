
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUrlRecognizerArgs  extends KalturaObjectBaseArgs {
    hosts? : string;
	uriPrefix? : string;
}


export class KalturaUrlRecognizer extends KalturaObjectBase {

    hosts : string;
	uriPrefix : string;

    constructor(data? : KalturaUrlRecognizerArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlRecognizer' },
				hosts : { type : 's' },
				uriPrefix : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUrlRecognizer'] = KalturaUrlRecognizer;