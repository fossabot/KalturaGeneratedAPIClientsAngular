
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaReportInterval } from './KalturaReportInterval';
import { KalturaReportInputBaseFilter, KalturaReportInputBaseFilterArgs } from './KalturaReportInputBaseFilter';

export interface KalturaReportInputFilterArgs  extends KalturaReportInputBaseFilterArgs {
    keywords? : string;
	searchInTags? : boolean;
	searchInAdminTags? : boolean;
	categories? : string;
	customVar1In? : string;
	customVar2In? : string;
	customVar3In? : string;
	deviceIn? : string;
	countryIn? : string;
	regionIn? : string;
	operatingSystemFamilyIn? : string;
	browserFamilyIn? : string;
	timeZoneOffset? : number;
	interval? : KalturaReportInterval;
}


export class KalturaReportInputFilter extends KalturaReportInputBaseFilter {

    keywords : string;
	searchInTags : boolean;
	searchInAdminTags : boolean;
	categories : string;
	customVar1In : string;
	customVar2In : string;
	customVar3In : string;
	deviceIn : string;
	countryIn : string;
	regionIn : string;
	operatingSystemFamilyIn : string;
	browserFamilyIn : string;
	timeZoneOffset : number;
	interval : KalturaReportInterval;

    constructor(data? : KalturaReportInputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportInputFilter' },
				keywords : { type : 's' },
				searchInTags : { type : 'b' },
				searchInAdminTags : { type : 'b' },
				categories : { type : 's' },
				customVar1In : { type : 's' },
				customVar2In : { type : 's' },
				customVar3In : { type : 's' },
				deviceIn : { type : 's' },
				countryIn : { type : 's' },
				regionIn : { type : 's' },
				operatingSystemFamilyIn : { type : 's' },
				browserFamilyIn : { type : 's' },
				timeZoneOffset : { type : 'n' },
				interval : { type : 'es', subTypeConstructor : KalturaReportInterval, subType : 'KalturaReportInterval' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReportInputFilter'] = KalturaReportInputFilter;