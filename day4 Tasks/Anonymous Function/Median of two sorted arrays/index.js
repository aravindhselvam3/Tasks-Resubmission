(function() {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = merged.length;
    const median = (merged[Math.floor(length / 2)] + merged[Math.ceil(length / 2)]) / 2;
    console.log(median);
  })();
  