const Enumify = require('enumify');

class Locations extends Enumify.Enum {}
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

module.exports = Locations;