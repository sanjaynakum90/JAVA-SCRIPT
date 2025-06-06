

function head_rec(n){
    if(n > 0)
    {
        console.log(n)
        head_rec(n-1)
    }
}



function tail_rec(n){
    if(n>0)
    {
        tail_rec(n-1)
        console.log(n)
    }
}



function nest_rec(n)
{
    if(n > 0)
    {
        nest_rec(nest_rec(n-1))
        console.log(n)
    }
}


function tree_rec(n)
{
    if(n > 0)
    {
        tree_rec(n-1);
        console.log(n)
        tree_rec(n-1)
    }
}

tree_rec(4)


