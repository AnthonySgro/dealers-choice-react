function anyNull(arr) {
    const newArr = arr.map((value) => (value === "" ? true : false));

    return newArr.includes(true);
}

module.exports = { anyNull };
