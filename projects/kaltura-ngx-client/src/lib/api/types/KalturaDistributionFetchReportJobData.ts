
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionJobData, KalturaDistributionJobDataArgs } from './KalturaDistributionJobData';

export interface KalturaDistributionFetchReportJobDataArgs  extends KalturaDistributionJobDataArgs {
    plays? : number;
	views? : number;
}


export class KalturaDistributionFetchReportJobData extends KalturaDistributionJobData {

    plays : number;
	views : number;

    constructor(data? : KalturaDistributionFetchReportJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionFetchReportJobData' },
				plays : { type : 'n' },
				views : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDistributionFetchReportJobData'] = KalturaDistributionFetchReportJobData;