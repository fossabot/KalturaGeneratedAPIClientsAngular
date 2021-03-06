
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchSortOrder } from './KalturaESearchSortOrder';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchOrderByItemArgs  extends KalturaObjectBaseArgs {
    sortOrder? : KalturaESearchSortOrder;
}


export class KalturaESearchOrderByItem extends KalturaObjectBase {

    sortOrder : KalturaESearchSortOrder;

    constructor(data? : KalturaESearchOrderByItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchOrderByItem' },
				sortOrder : { type : 'es', subTypeConstructor : KalturaESearchSortOrder, subType : 'KalturaESearchSortOrder' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchOrderByItem'] = KalturaESearchOrderByItem;