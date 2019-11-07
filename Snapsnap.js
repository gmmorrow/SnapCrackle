function snapCrackle(a) {
for (let i = 1; i <= a; i++) {
    if (i % 2 > 0 & i % 5 < 1) {
    console.log("snapCrackle")
}

    else if (i % 2 > 0) {
console.log("snap")
}

else if (i % 5 < 1) {
console.log("Crackle")
}
else {console.log(i)}
}

}

snapCrackle(25)