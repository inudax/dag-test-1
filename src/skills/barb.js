
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
            min: 2,
        },
        id: 'Whirwhind',
        talent: true,
        max: 5,
        pointsreq: 2,
        available: false,
        complete: false,
        dependency: function (arg) {
            if (arg === true) {
                barbskills[5-1].depend = undefined;
                barbskills[5-1].available = true;
            } else if (arg === false) {
                barbskills[5-1].depend = true;
                barbskills[5-1].available = false;
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
        dependency: function (arg) {
            if (arg === true) {
                barbskills[6-1].depend = undefined;
                barbskills[6-1].available = true;
                barbskills[7-1].depend = undefined;
                barbskills[7-1].available = true;
            } else if (arg === false) {
                barbskills[6-1].depend = true;
                barbskills[6-1].available = false;
                barbskills[7-1].depend = true;
                barbskills[7-1].available = false;
            }
        },
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
        has_exclude: true,
        excluded: false,
        to_exclude: function (arg) {
            if (arg === true) {
                barbskills[7-1].excluded = true;
                barbskills[7-1].available = false;
            } else if (arg === false) {
                barbskills[7-1].excluded = false;
                barbskills[7-1].available = true;
            }
        },
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
        has_exclude: true,
        excluded: false,
        to_exclude: function (arg) {
            if (arg === true) {
                barbskills[6-1].excluded = true;
                barbskills[6-1].available = false;
            } else if (arg === false) {
                barbskills[6-1].excluded = false;
                barbskills[6-1].available = true;
            }
        },
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
 
 
    {
        square: 9,
        tier: {
            name: "tier3",
            num: 3,
        },
        id: 'LINKG-1',
        talent: true,
        max: 3,
        pointsreq: 6,
        available: false,
        complete: false,
        dependency: function (arg) {
            if (arg === true) {
                barbskills[11-1].depend = undefined;
                barbskills[11-1].available = true;
            } else if (arg === false) {
                barbskills[11-1].depend = true;
                barbskills[11-1].available = false;
            }
        },
    },
    {
        square: 10,
        tier: {
            name: "tier3",
            num: 3,
        },
        id: 'LINKG-2',
        talent: true,
        max: 3,
        pointsreq: 6,
        available: false,
        complete: false,
        dependency: function (arg) {
            if (arg === true) {
                barbskills[11-1].depend = undefined;
                barbskills[11-1].available = true;
                barbskills[12-1].depend = undefined;
                barbskills[12-1].available = true;
            } else if (arg === false) {
                barbskills[11-1].depend = true;
                barbskills[11-1].available = false;
                barbskills[12-1].depend = undefined;
                barbskills[12-1].available = true;
            }
        },
    },
    {
        square: 11,
        tier: {
            name: "tier3",
            num: 3,
        },
        id: 'LINKG-12',
        talent: true,
        max: 3,
        pointsreq: 6,
        available: false,
        complete: false,
        depend: true,
    },
    {
        square: 12,
        tier: {
            name: "tier3",
            num: 3,
        },
        id: 'LINKG-2-1',
        talent: true,
        max: 3,
        pointsreq: 6,
        available: false,
        complete: false,
        depend: true,
    },



    {
        square: 13,
        tier: {
            name: "tier4",
            num: 4,
        },
        id: 'ULTI-1',
        talent: true,
        max: 1,
        pointsreq: 11,
        available: false,
        complete: false,
        has_exclude: true,
        excluded: false,
        to_exclude: function (arg) {
            if (arg === true) {
                barbskills[14-1].excluded = true;
                barbskills[14-1].available = false;
                barbskills[15-1].excluded = true;
                barbskills[15-1].available = false;
            } else if (arg === false) {
                barbskills[14-1].excluded = false;
                barbskills[14-1].available = true;
                barbskills[15-1].excluded = false;
                barbskills[15-1].available = true;
            }
        },
    },
    {
        square: 14,
        tier: {
            name: "tier4",
            num: 4,
        },
        id: 'ULTI-2',
        talent: true,
        max: 1,
        pointsreq: 11,
        available: false,
        complete: false,
        has_exclude: true,
        excluded: false,
        to_exclude: function (arg) {
            if (arg === true) {
                barbskills[13-1].excluded = true;
                barbskills[13-1].available = false;
                barbskills[15-1].excluded = true;
                barbskills[15-1].available = false;
            } else if (arg === false) {
                barbskills[13-1].excluded = false;
                barbskills[13-1].available = true;
                barbskills[15-1].excluded = false;
                barbskills[15-1].available = true;
            }
        },
    },
    {
        square: 15,
        tier: {
            name: "tier4",
            num: 4,
        },
        id: 'ULTI-3',
        talent: true,
        max: 1,
        pointsreq: 11,
        available: false,
        complete: false,
        has_exclude: true,
        excluded: false,
        to_exclude: function (arg) {
            if (arg === true) {
                barbskills[13-1].excluded = true;
                barbskills[13-1].available = false;
                barbskills[14-1].excluded = true;
                barbskills[14-1].available = false;
            } else if (arg === false) {
                barbskills[13-1].excluded = false;
                barbskills[13-1].available = true;
                barbskills[14-1].excluded = false;
                barbskills[14-1].available = true;
            }
        },
    },










]

export { barbskills };