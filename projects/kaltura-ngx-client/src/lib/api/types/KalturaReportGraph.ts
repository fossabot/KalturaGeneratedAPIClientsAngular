
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportGraphArgs  extends KalturaObjectBaseArgs {
    id? : string;
	data? : string;
}


export class KalturaReportGraph extends KalturaObjectBase {

    id : string;
	data : string;

    constructor(data? : KalturaReportGraphArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportGraph' },
				id : { type : 's' },
				data : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReportGraph'] = KalturaReportGraph;