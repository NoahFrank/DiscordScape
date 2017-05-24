const Enumify = require('enumify');

class Locations extends Enumify.Enum {}
Locations.initEnum({
    ZARROCK: {
        explore: `test0`
    },
    UMBRIDGE: {
        explore:
`\`\`\`##########################################
##               UMBRIDGE               ##
##                                      ##
##  (1) Go Fishing                      ##
##  (2) Kill Goblin                     ##
##  (3) Talk to Bob                     ##
##                                      ##
##########################################\`\`\``


    },
    AL_KHAREED: {
        explore:
`\`\`\`##########################################
##              AL_KHAREED              ##
##                                      ##
##  (1) DDR                             ##
##  (2) Party Rock!                     ##
##  (3) Hit the Club                    ##
##                                      ##
##########################################\`\`\``
    },
    FALIDOOR: {
        explore: `test3`
    },
    DAYNOR: {
        explore: `test4`
    },
    FORT_SARIM: {
        explore: `test5`
    },
    GIRTHRUPE: {
        explore: `test6`
    },
    DABERLY: {
        explore: `test7`
    },
    VAS_LEGAS: {
        explore: `test8`
    }
});

module.exports = Locations;