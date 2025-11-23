function mincost(arr)
{ 
	 if (arr.length <= 1) return 0;
    
    const ropes = [...arr];
    let cost = 0;
    
    while (ropes.length > 1) {
        ropes.sort((a, b) => a - b);      // keep smallest at front
        const sum = ropes[0] + ropes[1];
        cost += sum;
        
        // remove the two smallest and insert the combined rope
        ropes.splice(0, 2, sum);
    }
    return cost;
//write your code here
// return the min cost
  
}

module.exports=mincost;
