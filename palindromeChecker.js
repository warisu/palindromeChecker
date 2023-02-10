let enterKey = document.getElementById("insideText");
enterKey.addEventListener("keyup", 
    function palindrome(str, firstRun = true) {
    // remove all alphanumeric characters and replace with ""
    const testStr = firstRun ? str.toLowerCase().replace(/[^0-9a-z]/g, "") : str;
    if (testStr.length === 1) {
        return true
    }
    // check if it is of length 2
    if (testStr.length === 2) {
        return testStr[0] === testStr[1]
    }
    // check if its exceed length of 2
    if (testStr[0] === testStr.slice(-1)) {
        return palindrome(testStr.slice(1, -1), false)
    }
    // if none of the conditions is found, return this
    return false
    }
)