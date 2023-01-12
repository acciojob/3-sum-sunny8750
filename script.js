[22:53, 1/12/2023] Abhi Pandey: function threeSum(arr, x) {
    let closestSum = Number.MAX_VALUE;
    for(let i = 0; i < arr.length ; i++)
    {
        for(let j =i + 1; j < arr.length; j++)
        {
            for(let k =j + 1; k < arr.length; k++)
            {
                
                if (Math.abs(x - closestSum) >
                    Math.abs(x - (arr[i] + arr[j] + arr[k])))
                    closestSum = (arr[i] + arr[j] + arr[k]);
            }
        }
    }
     
    // Return the closest sum found
 return closestSum;
}

module.exports = threeSum;