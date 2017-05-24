const Enumify = require('enumify');

class Locations extends Enumify.Enum {}
Locations.initEnum({
    ZARROCK: {
        pretty_name: `Zarrock`,
        explore: `test0`
    },
    UMBRIDGE: {
        pretty_name: `Umbridge`,
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
        pretty_name: `Al Khareed`,
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
        pretty_name: `Falidoor`,
        explore: `test3`
    },
    DAYNOR: {
        pretty_name: `Daynor`,
        explore: `test4`
    },
    FORT_SARIM: {
        pretty_name: `Fort Sarim`,
        explore: `test5`
    },
    GIRTHRUPE: {
        pretty_name: `Girthrupe`,
        explore: `test6`
    },
    DABERLY: {
        pretty_name: `Daberly`,
        explore: `test7`
    },
    VAS_LEGAS: {
        pretty_name: `Vas Legas`,
        explore: `test8`
    }
});

module.exports = Locations;