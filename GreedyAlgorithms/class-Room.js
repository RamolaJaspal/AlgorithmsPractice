
let AvailableSlots = [

    { start: "9:00", End: "9:30" },
    { start: "9:15", End: "9:45" },
    { start: "10:00", End: "10:45" },
    { start: "10:30", End: "11:30" },
    { start: "14:00", End: "15:30" },
    { start: "15:00", End: "15:30" },
    { start: "15:15", End: "16:00" },
    { start: "10:00", End: "11:00" },
    { start: "11:00", End: "12:00" },
    { start: "12:30", End: "13:30" },
    { start: "13:30", End: "14:30" },

]

AvailableSlots.sort(function (a, b) {
    let a_time = Number((a.start.split(":")[0]) * 60 * 60) + Number((a.start.split(":")[1]) * 60);
    let b_time = Number((b.start.split(":")[0]) * 60 * 60) + Number((b.start.split(":")[1]) * 60);
    return a_time - b_time;

});

classes=1;
finalslots=[AvailableSlots[0]];

for(let i=1;i<AvailableSlots.length;i++)
{
    a=finalslots[finalslots.length-1]
    b=AvailableSlots[i]
    let a_time = Number((a.End.split(":")[0]) * 60 * 60) + Number((a.End.split(":")[1]) * 60);
    let b_time = Number((b.start.split(":")[0]) * 60 * 60) + Number((b.start.split(":")[1]) * 60);

    if(a_time<b_time)
    {
        classes++;
        finalslots.push(AvailableSlots[i]);
    }

}

console.log(classes);
console.log(finalslots)
