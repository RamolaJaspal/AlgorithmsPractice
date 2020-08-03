str="ABC"

function permuatation(str,n)
{
    if(n==str.length)
    {
        console.log(str.join(''));
        return;
    }

    for(let i=n;i<str.length;i++)
    {

        let temp=str[n];
        str[n]=str[i];
        str[i]=temp;
        permuatation(str,n+1);
        temp=str[n];
        str[n]=str[i];
        str[i]=temp;
    }

}

permuatation(str.split(''),0)