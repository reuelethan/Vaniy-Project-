let vanityBox = document.querySelector(".textbox");

function vanish() {
    $(vanityBox).fadeOut(3000).delay().fadeIn(3000)
}






function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


function sum(node) {
    let ans = node.value;
    for (let child of node.children) {
        ans += sum(child);
    }
    return ans
}


// reading level 
//10th grade words = 9thGrade Words!