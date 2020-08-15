let limit_on_wieght=45;
let objects=[
    {weight: 10,value:100},

    {weight: 30,value:80},

    {weight: 5,value:56},

    {weight: 20,value:87},

    {weight: 89,value:170},

    {weight: 50,value:120},
]

let knapsack=[]
objects.sort(function(a,b){
    return (b.value/b.weight)-(a.value/a.weight);
})
if(objects[0].weight<limit_on_wieght)
{
    knapsack.push(objects[0]);
}
else{
    console.log("No Solution for this")
}

let i=1;
while(knapsack.reduce((total,obj)=>{return total+obj.weight},0)<limit_on_wieght && i <objects.length)
{

    knapsack.push(objects[i]);
    i++;


}
knapsack.pop();
if(i>=objects.length)
{
    console.log("not enough objects to fill knapsack")
}
else
{ 
        console.log()
        required_weight=limit_on_wieght-knapsack.reduce((total,obj)=>{return total+obj.weight},0);
        knapsack.push({weight:required_weight,value:(required_weight*(objects[i].value/objects[i].weight))})
}

console.log(knapsack)