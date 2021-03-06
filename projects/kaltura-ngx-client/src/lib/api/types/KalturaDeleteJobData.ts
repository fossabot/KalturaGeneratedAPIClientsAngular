
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter } from './KalturaFilter';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaDeleteJobDataArgs  extends KalturaJobDataArgs {
    filter? : KalturaFilter;
}


export class KalturaDeleteJobData extends KalturaJobData {

    filter : KalturaFilter;

    constructor(data? : KalturaDeleteJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeleteJobData' },
				filter : { type : 'o', subTypeConstructor : KalturaFilter, subType : 'KalturaFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDeleteJobData'] = KalturaDeleteJobData;