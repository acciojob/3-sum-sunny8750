function threeSum(arr, target) {
  //your code here
	
	let sum=0;
	for(let x of arr){
		if(arr[x]+arr[x]+arr[x]=target-1 || target+1){
			sum++;
		}
		return sum;
	}
	
}

threeSum(arr,target);
module.exports = threeSum;
