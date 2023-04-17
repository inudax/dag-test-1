
const barbskills = [
    {
        square: 1,
        tier: {
            name: "tier1",
            num: 1,
        },
        id: "Flay",
        talent: true,
        max: 5,
        pointsreq: 0,
        available: true,
        complete: false,
        tooltip: "Flay"
    },
    {
        square: 2,
        tier: {
            name: "tier1",
            num: 1,
        },
        id: "Frenzy",
        talent: true,
        max: 5,
        pointsreq: 0,
        available: true,
        complete: false,
        tooltip: "Frenzy"
    },
    {
        square: 3,
        tier: {
            name: "tier2",
            num: 2,
        },
        id: 'Whirwhind',
        talent: true,
        max: 5,
        pointsreq: 2,
        available: false,
        complete: false,
        dependency: function (arg) {
            if (arg === true) {
                barbskills[3].depend = undefined;
                barbskills[3].available = true;
            } else if (arg === false) {
                barbskills[3].depend = true;
                barbskills[3].available = false;
            }
        },
    },
    {
        square: 4,
        tier: {
            name: "tier2",
            num: 2,
        },
        id: 'PP',
        talent: true,
        max: 3,
        pointsreq: 2,
        available: false,
        complete: false,
    },
    {
        square: 5,
        tier: {
            name: "tier2",
            num: 2,
        },
        id: 'E-WW',
        talent: true,
        max: 1,
        pointsreq: 2,
        available: false,
        complete: false,
        depend: true,
    },
    {
        square: 6,
        tier: {
            name: "tier2",
            num: 2,
        },
        id: 'E-WW-1',
        talent: true,
        max: 1,
        pointsreq: 2,
        available: false,
        complete: false,
        depend: true,
    },
    {
        square: 7,
        tier: {
            name: "tier2",
            num: 2,
        },
        id: 'E-WW-2',
        talent: true,
        max: 1,
        pointsreq: 2,
        available: false,
        complete: false,
        depend: true,
    },
    {
        square: 8,
        tier: {
            name: "tier3",
            num: 3,
        },
        id: 'Ground Stomp',
        talent: true,
        max: 5,
        pointsreq: 6,
        available: false,
        complete: false,
    },
]

export { barbskills };