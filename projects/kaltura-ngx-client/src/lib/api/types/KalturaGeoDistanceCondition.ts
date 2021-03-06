
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGeoCoderType } from './KalturaGeoCoderType';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';

export interface KalturaGeoDistanceConditionArgs  extends KalturaMatchConditionArgs {
    geoCoderType? : KalturaGeoCoderType;
}


export class KalturaGeoDistanceCondition extends KalturaMatchCondition {

    geoCoderType : KalturaGeoCoderType;

    constructor(data? : KalturaGeoDistanceConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGeoDistanceCondition' },
				geoCoderType : { type : 'es', subTypeConstructor : KalturaGeoCoderType, subType : 'KalturaGeoCoderType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGeoDistanceCondition'] = KalturaGeoDistanceCondition;