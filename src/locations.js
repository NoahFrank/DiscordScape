import {Enum} from 'enumify';

class Locations extends Enum {}
Locations.initEnum([
    'ZARROCK',
    'UMBRIDGE',
    'AL_KHAREED',
    'FALIDOOR',
    'DAYNOR',
    'FORT_SARIM',
    'GIRTHRUPE',
    'DAVERLY'
]);

module.exports.Locations = Locations;