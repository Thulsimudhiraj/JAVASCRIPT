function ReversedInt(x) {
    x = x + "";
    return x.split("").reverse().join("");
}

console.log(Number(ReversedInt(123)));