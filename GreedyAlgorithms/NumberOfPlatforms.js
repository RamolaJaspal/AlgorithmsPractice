let Train_Time_Tables = [

    { start: "9:00", End: "9:30" },
    { start: "9:15", End: "13:45" },
    { start: "10:30", End: "11:00" },
    { start: "10:45", End: "11:45" },
    
]

Train_Time_Tables.sort(function (a, b) {
    let a_time = Number((a.start.split(":")[0]) * 60 * 60) + Number((a.start.split(":")[1]) * 60);
    let b_time = Number((b.start.split(":")[0]) * 60 * 60) + Number((b.start.split(":")[1]) * 60);
    return a_time - b_time;

})
console.log(Train_Time_Tables);

let number_of_platforms=1;
let platform=[];
platform.push(Train_Time_Tables[0])
for (let i = 1; i < Train_Time_Tables.length; i++) {
    let b = Train_Time_Tables[i];
    let flag=true;
    for(let j=0;j<platform.length;j++)
    {
        let a=platform[j];
        let departure_time_of_previous_train = Number((a.End.split(":")[0]) * 60 * 60) + Number((a.End.split(":")[1]) * 60);
        let arrival_time_of_next_train = Number((b.start.split(":")[0]) * 60 * 60) + Number((b.start.split(":")[1]) * 60);
        if(departure_time_of_previous_train<=arrival_time_of_next_train)
        {
            platform[j]=Train_Time_Tables[i]
            flag=false;
            break;
        }
        
    }
    if(flag)
    {
        platform.push(Train_Time_Tables[i])
    }


}

console.log(platform)