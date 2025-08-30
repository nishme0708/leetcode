function toh(N, from, to, aux) {

    return calc(N,from,to,aux)    
    
}

function calc(n,from,to,aux,disk) {
    if(n==1) {
        console.log(`move disk ${disk} from rod ${from} to rod ${to}`)
        return 1;
    }
    let total = calc(n-1,from,aux,to,n-1) + calc(1,from,to,aux,n) + calc(n-1,aux,to,from,n-1);
    return total;
}

toh(3,1,3,2)
