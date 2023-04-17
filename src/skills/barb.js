
const barbskills = [
    {
        square: 1,
        id: "paHoly1",
        talent: true,
        max: 5,
        pointsreq: 0,
        available: true,
        complete: false,
        tooltip: "Seals of the Pure"
    },
    {
        square: 2,
        id: 'paHoly2',
        talent: true,
        max: 5,
        pointsreq: 5,
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
        line: "pa-1"
    },
    {
        square: 3,
        id: 'paHoly3',
        talent: true,
        max: 5,
        pointsreq: 10,
        available: false,
        complete: false,
        depend: true,
        line: "pa-2"
    },
]

export { barbskills };