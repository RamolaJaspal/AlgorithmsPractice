
str="ABCD"

function combination(str,k)
{

    if(k==str.length)
    {  
        console.log(str)
            return;
    }
    
    for(let i=0;i<str.length;i++){
        
        combination(str.replace(str[i],""),k);

    }
   

}
combination(str,1)


