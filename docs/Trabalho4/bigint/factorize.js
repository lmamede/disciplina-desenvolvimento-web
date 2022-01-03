
function factorize(n){
    let number = BigInt(n);
    primeFactors = [];

    let factor = 2n;
    let exp = 0;
    console.log(number);
    while(number > 1){
        if(number % factor == 0){
            number = number/factor;
            exp++;
        }else{
            if(exp != 0){
                primeFactors += [factor.toString()+"<sup>"+exp+"</sup>"+ " x "];
            }

            if(factor == 2n){factor++;}
            else{ factor += 2n;}
            exp = 0;
        }
    }

    if(exp != 0){
        primeFactors += [factor.toString()+"<sup>"+exp+"</sup>"];
    }

    
    return primeFactors;
}