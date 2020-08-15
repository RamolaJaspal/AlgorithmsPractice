let profit_time_interval = [

    { start: 1, profit: 9 },
    { start: 3, profit: 80 },
    { start: 6, profit: 34 },
    { start: 3, profit: 22 },
    { start: 4, profit: 67 },
    { start: 2, profit: 15 },
    { start: 2, profit: 50},

]

profit_time_interval.sort(function (a, b) {
    return b.profit - a.profit;

})


let final_schedule = [];
final_schedule.push(profit_time_interval[0]);
let totaltime=profit_time_interval.length;
for(let i=1;i<totaltime;i++)
{
    if(i<profit_time_interval[i].start)
    {
        final_schedule.push(profit_time_interval[i])
    }
}

console.log(final_schedule)