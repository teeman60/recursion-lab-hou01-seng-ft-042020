// Code your solution here!

function printString(myString) {
    console.log(myString[0])

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length)
        printString(mySubString)
    } else {
        return true
    }
}


function reverseString(string) {
    if (string.length < 2) {
        return string 
    } else {
        return reverseString(string.substring(1)) + string[0]
    }

}


function isPalindrome(str) {
    let l = str.length
    if (l < 2) {
        return true
    } else if (str[0] === str[l - 1]) {
        return isPalindrome(str.substring(1, l - 1))
    } else return false
}


function addUpTo(arr, num) {
    return num !== 0 ? arr[num] + addUpTo(arr, --num) : arr[num]
}


function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return Math.max(arr.pop(), maxOf(arr))
    }
}


function includesNumber(arr, num) {
    if (!arr.length) {
        return false 
    } else if (arr[0] === num) {
        return true
    } else {
        return includesNumber(arr.slice(1, arr.length), num)
    }
}