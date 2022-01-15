function fat(n1){
	
    if(n1 === 1) {
        return n1;
    }
    
    return fat(n1 - 1) * n1;
}  
console.log(fat(5));