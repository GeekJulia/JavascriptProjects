const input = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const reverse = reverseString(value)
    if (reverse !== value){
        alert("not a palindrome")
    }
    else{
        alert("A palindrome")
    }

    input.value = ""
}
