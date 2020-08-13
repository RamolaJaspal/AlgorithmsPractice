let Character=function(name,freq){
this.name=name;
this.freq=freq
}

let list=[
    new Character("a",12),
    new Character("b",2),
    new Character("c",7),
    new Character("e",13),
    new Character("e",14),
    new Character("f",85)
]


list.sort(function(a,b){
    return a.freq-b.freq;
});

let node={data:list[0]+list[1],right:list[0],left:list[1]}

nodelist=list.map(function(obj){
    return {data:obj.freq,right:null,left:null};
})

while(nodelist.length!=1)
{   
 nodelist.sort(function(a,b){
        return a.data-b.data;
    })

    let temp={data:nodelist[0].data+nodelist[1].data,left:nodelist[0],right:nodelist[1]}

    nodelist.push(temp);
    nodelist.shift()
    nodelist.shift()
    
}

// printing the huffmancode

function printHuffmanCode(node,code)
{
    if(node.right==null && node.left==null)
    {
        console.log(node.data+":"+code)
    }
    else
    {
        printHuffmanCode(node.left,code+"0")
        printHuffmanCode(node.right,code+"1")

    }
}

printHuffmanCode(nodelist[0],"");