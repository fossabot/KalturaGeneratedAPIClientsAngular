
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaContextArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaContext extends KalturaObjectBase {

    

    constructor(data? : KalturaContextArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaContext' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaContext'] = KalturaContext;