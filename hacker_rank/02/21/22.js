/*
 * Complete the 'getMaximumDistinctCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 *  3. INTEGER k
 */
// assign counter at 0
// assign competelyUnique check
// find non-unique elements in array one
// find indexes of those elements not existing in a
// while counter < k or completelyUnique check is true
    // swap a non-unique element for a element that doesn't exist in 'a'
    // check if all the numbers are unique in array
        // if they are then set completelyUnique check to true

        function getMaximumDistinctCount(a, b, k) {
            // Write your code here
            console.log('A ARRAY', a)
            console.log('B ARRAY', b)
            console.log('k', k)


            let counter = 0;
            let distinctNum = 0;
            const nonUniqueIndices = [];
            const aQueue = [];
            a.forEach((ele, i) => {
                if (aQueue.includes(ele)) {
                    nonUniqueIndices.push(i)
                    // distinctNum -= 1
                } else {
                    aQueue.push(ele)
                    distinctNum += 1
                }
            })
            console.log(nonUniqueIndices.map((ele, i) => {
                return a[ele]
            }))
            const desiredEleIndices = [];
            const desiredEleQueue = [];
            b.forEach((ele, i) => {
                if (!a.includes(ele) && !desiredEleQueue.includes(ele)) {
                    desiredEleIndices.push(i)
                    desiredEleQueue.push(ele)
                }
            })
            console.log(desiredEleIndices.map((ele, i) => {
                return b[ele]
            }))
            while( counter < k && desiredEleIndices.length && nonUniqueIndices.length) {
                const aIndexToTrade = nonUniqueIndices.pop();
                const bIndexToTrade = desiredEleIndices.pop();
                const temp = a[aIndexToTrade];
                a[aIndexToTrade] = b[bIndexToTrade];
                b[bIndexToTrade] = temp;
                counter++
                distinctNum++
            }
            console.log(distinctNum)
            return distinctNum;


        }






/*
 * Complete the 'maximumPoints' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY costs
 */
    // assign MaxScore variable value 0
    // iterrate over levels
        // skip over each level and complete the game as far as alex's money will take
            // when he runs out of money, if the score is greater than max score
                // assign maxscore the new score value

function maximumPoints(k, costs) {
    // Write your code here
    let maxScore = 0;
    let moneyUntilIndex = k;
    for (let i = 0; i < costs.length; i++) {
        if (moneyUntilIndex - costs[i] < 0) {
            maxScore = i;
            return maxScore;
        }
        let moneyUntilJIndex = moneyUntilIndex;
        for (let j= i+1; j < costs.length; j++) {
            if (moneyUntilJIndex - costs[j] < 0) {
                if (j - 1 > maxScore) maxScore = j - 1;
            }
            moneyUntilJIndex = moneyUntilJIndex - costs[j]
        }
        moneyUntilIndex = moneyUntilIndex - costs[i];
    }
    return maxScore;
}




/*
 * Complete the 'deleteProducts' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ids
 *  2. INTEGER m
 */
    // create records object
    // iterate through ids and tally each id in records to determine how many appearances it makes in the bag
    // iterate through the object and determine the greatest number of keys that can add up to m
    // return the number of remaining keys in the object
    function deleteProducts(ids, m) {
        // Write your code here
        const records = {};
        ids.forEach((ele) => {
            if (records[ele]) {
                records[ele] += 1
            } else {
                records[ele] = 1
            }
        })

    }
