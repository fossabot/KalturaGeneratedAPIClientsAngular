
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchLanguage } from './KalturaESearchLanguage';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchLanguageItemArgs  extends KalturaObjectBaseArgs {
    eSerachLanguage? : KalturaESearchLanguage;
}


export class KalturaESearchLanguageItem extends KalturaObjectBase {

    eSerachLanguage : KalturaESearchLanguage;

    constructor(data? : KalturaESearchLanguageItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchLanguageItem' },
				eSerachLanguage : { type : 'es', subTypeConstructor : KalturaESearchLanguage, subType : 'KalturaESearchLanguage' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchLanguageItem'] = KalturaESearchLanguageItem;