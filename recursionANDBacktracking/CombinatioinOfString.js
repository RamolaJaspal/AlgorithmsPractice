str="ABCD"

function combination(str,outputstring,n)
{
    if(n==str.length)
    {
        console.log(outputstring)
        return;
    }

    combination(str,outputstring+str[n],n+1);
    combination(str,outputstring,n+1);

}
combination(str,"",0)