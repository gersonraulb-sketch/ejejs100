function unionEinter(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    
    const union = [...new Set([...arr1, ...arr2])];
    const interseccion = [...set1].filter(x => set2.has(x));
    
    return { union, interseccion };
}

console.log(unionEinter([1, 2, 3], [2, 3, 4]));