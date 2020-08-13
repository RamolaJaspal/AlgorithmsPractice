let interval = [

    { start: "9:00", End: "9:30" },
    { start: "9:15", End: "9:45" },
    { start: "10:00", End: "10:45" },
    { start: "10:30:00", End: "11:30" },
    { start: "14:00", End: "15:30" },
    { start: "15:00", End: "15:30" },
    { start: "15:15", End: "16:00" },
    { start: "10:00", End: "11:00" },
    { start: "11:00", End: "12:00" },
    { start: "12:30", End: "13:30" },
    { start: "13:30", End: "14:30" },

]

interval.sort(function (a, b) {
    let a_time = Number((a.start.split(":")[0]) * 60 * 60) + Number((a.start.split(":")[1]) * 60);
    let b_time = Number((b.start.split(":")[0]) * 60 * 60) + Number((b.start.split(":")[1]) * 60);
    return a_time - b_time;

})

let final_schedule = [];
final_schedule.push(interval[0])

for (let i = 1; i < interval.length; i++) {
    let a = final_schedule[final_schedule.length - 1];
    let b = interval[i];
    let end_time_of_interval = Number((a.End.split(":")[0]) * 60 * 60) + Number((a.End.split(":")[1]) * 60);
    let start_time_of_next_interval = Number((b.start.split(":")[0]) * 60 * 60) + Number((b.start.split(":")[1]) * 60);

    if (end_time_of_interval <=start_time_of_next_interval) {
        final_schedule.push(interval[i])
    }

}

console.log(final_schedule)