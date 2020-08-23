
let str1="AGGTAB";
let str2="GXTXAYB";
let x=Array(str1.length).fill([]);
x=x.map(x=> x=Array(str2.length).fill(-1))

function LCS(str1,str2,m,n,x)
{
    if(m==-1||n==-1)
    {
        return "";
    }
    if(x[m][n]!=-1)
    {
        return x[m][n];
    }
    if(str1[m]==str2[n])
    {
        x[m][n]=LCS(str1,str2,m-1,n-1,x)+str1[m];
    }
    else
    {
        let a=LCS(str1,str2,m-1,n,x);
        let b=LCS(str1,str2,m,n-1,x)
        x[m][n]=(a.length>b.length)?a:b;
    }
    return x[m][n];


}

console.log(LCS(str1,str2,str1.length-1,str2.length-1,x))