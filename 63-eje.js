function rotar(arr, k) {
    const rotaciones = k % arr.length;
    return [...arr.slice(-rotaciones), ...arr.slice(0, -rotaciones)];
}

console.log(rotar([1, 2, 3, 4, 5], 2));