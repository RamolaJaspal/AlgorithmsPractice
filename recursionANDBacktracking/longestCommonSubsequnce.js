function LCS(str1,str2,m,n,matched)
{
    if(m==-1 || n==-1)
    {   
        return matched;
    }
    else if(str1[m]==str2[n])
    {
        matched=str1[m]+matched;
       return LCS(str1,str2,m-1,n-1,matched)
    }
    else{
       let x=LCS(str1,str2,m,n-1,matched)
        let y=LCS(str1,str2,m-1,n,matched)

        return (x.length>y.length)?x:y;
    }

}

console.log(LCS("ABCDGH","AEDFHR",5,5,""));