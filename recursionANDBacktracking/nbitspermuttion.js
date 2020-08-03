
function genBitBstrings(n,N,str=[])
{
    if(n==N)
    {
        console.log(str.join(""))
        return;
    }
    str[n]='0'
    genBitBstrings(n+1,N,str);
    str[n]='1'
    genBitBstrings(n+1,N,str);
    
}

genBitBstrings(0,2)