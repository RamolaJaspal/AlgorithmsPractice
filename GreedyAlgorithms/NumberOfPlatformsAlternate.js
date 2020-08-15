let Train_Time_Tables = [

    { start: "9:00", End: "9:30" },
    { start: "9:15", End: "13:45" },
    { start: "10:30", End: "11:00" },
    { start: "10:45", End: "11:45" },
    
]

platform_number_array=[]
for(let i=0;i<Train_Time_Tables.length;i++)
{
     platform_number_array.push(Train_Time_Tables[i].start+"A")
     platform_number_array.push(Train_Time_Tables[i].End+"D")
}


platform_number_array.sort(function(a,b){

    a=a.replace("A","");
    b=b.replace("D","");
    let a_time = Number((a.split(":")[0]) * 60 * 60) + Number((a.split(":")[1]) * 60);
    let b_time = Number((b.split(":")[0]) * 60 * 60) + Number((b.split(":")[1]) * 60);
    return a_time-b_time;

})


temp_array=[]
for(let i=0;i<platform_number_array.length;i++)
{
    if(platform_number_array[i].includes("A"))
    {
        temp_array.push(1)
    }
    else
    {
        temp_array.push(-1)
    }
}
temp_array.map(function(cv,index,array){
  
    if(index==0)
    {
        return cv;
    }
    else
    {   

        array[index]=cv+array[index-1]
        return array[index]
    }
},this)


number_of_platform_needed=temp_array.reduce(function(total,cv,ci,array){

    if(cv>total)
    {
        return cv;
    }
    return total;

},temp_array[0])

console.log(number_of_platform_needed)
