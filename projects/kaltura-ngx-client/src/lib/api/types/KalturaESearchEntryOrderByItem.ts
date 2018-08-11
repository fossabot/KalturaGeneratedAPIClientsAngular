
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryOrderByFieldName } from './KalturaESearchEntryOrderByFieldName';
import { KalturaESearchOrderByItem, KalturaESearchOrderByItemArgs } from './KalturaESearchOrderByItem';

export interface KalturaESearchEntryOrderByItemArgs  extends KalturaESearchOrderByItemArgs {
    sortField? : KalturaESearchEntryOrderByFieldName;
}


export class KalturaESearchEntryOrderByItem extends KalturaESearchOrderByItem {

    sortField : KalturaESearchEntryOrderByFieldName;

    constructor(data? : KalturaESearchEntryOrderByItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryOrderByItem' },
				sortField : { type : 'es', subTypeConstructor : KalturaESearchEntryOrderByFieldName, subType : 'KalturaESearchEntryOrderByFieldName' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchEntryOrderByItem'] = KalturaESearchEntryOrderByItem;