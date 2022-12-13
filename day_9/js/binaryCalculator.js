let result = document.getElementById("res");

function isOperator() {
    if (result.innerHTML.endsWith("+") ||
        result.innerHTML.endsWith("-") ||
        result.innerHTML.endsWith("*") ||
        result.innerHTML.endsWith("/")) {
        return true;
    }
}

function zero() {
    result.innerHTML += "0";
}

function one() {
    result.innerHTML += "1";
}

function add() {
    if (result.innerHTML.length != 0 && !isOperator()) {
        result.innerHTML += "+";
    }
}

function sub() {
    if (result.innerHTML.length != 0 && !isOperator()) {
        result.innerHTML += "-";
    }
}

function mul() {
    if (result.innerHTML.length != 0 && !isOperator()) {
        result.innerHTML += "*";
    }
}

function div() {
    if (result.innerHTML.length != 0 && !isOperator()) {
        result.innerHTML += "/";
    }
}

function clr() {
    result.innerHTML = "";
}

function eql() {

    if (!isOperator()) {
        let re_nums = /\d+/g
        let re_ops = /[\+\-\*\/]+/g

        let nums = result.innerHTML.match(re_nums); // list of numbers (number of operators + 1)
        let ops = result.innerHTML.match(re_ops); // list of operators 

        // iterate until no operators remain
        while (ops.length > 0) {

            // multiplication algorithm -> priority
            if (ops.includes("*")) {
                let ind_mul = ops.indexOf("*");
                let mul = parseInt(nums[ind_mul], 2) * parseInt(nums[ind_mul + 1], 2);
                nums.splice(ind_mul, 2);
                nums.splice(ind_mul, 0, mul.toString(2));
                ops.splice(ind_mul, 1);
            }

            // division algorithm -> priority
            else if (ops.includes("/")) {
                let ind_div = ops.indexOf("/");
                let div = Math.trunc(parseInt(nums[ind_div], 2) / parseInt(nums[ind_div + 1], 2));
                nums.splice(ind_div, 2);
                nums.splice(ind_div, 0, div.toString(2));
                ops.splice(ind_div, 1);
            }

            // addition algorithm
            else if (ops.includes("+")) {
                let ind_sum = ops.indexOf("+");
                let sum = parseInt(nums[ind_sum], 2) + parseInt(nums[ind_sum + 1], 2);
                nums.splice(ind_sum, 2);
                nums.splice(ind_sum, 0, sum.toString(2));
                ops.splice(ind_sum, 1);
            }

            // subtraction algorithm
            else {
                let ind_sub = ops.indexOf("-");
                let sub = parseInt(nums[ind_sub], 2) - parseInt(nums[ind_sub + 1], 2);
                nums.splice(ind_sub, 2);
                nums.splice(ind_sub, 0, sub.toString(2));
                ops.splice(ind_sub, 1);
            }
        }
        result.innerHTML = nums[0].toString(2);
    } else {
        alert("equation must end with a number!")
    }
}