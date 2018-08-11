
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleResource, KalturaScheduleResourceArgs } from './KalturaScheduleResource';

export interface KalturaLiveEntryScheduleResourceArgs  extends KalturaScheduleResourceArgs {
    entryId? : string;
}


export class KalturaLiveEntryScheduleResource extends KalturaScheduleResource {

    entryId : string;

    constructor(data? : KalturaLiveEntryScheduleResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryScheduleResource' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveEntryScheduleResource'] = KalturaLiveEntryScheduleResource;