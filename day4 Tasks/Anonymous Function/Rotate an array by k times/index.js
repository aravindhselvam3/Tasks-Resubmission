(function() {
    const array = [1, 2, 3, 4, 5];
    const k = 2;
    const rotatedArray = [...array.slice(k), ...array.slice(0, k)];
    console.log(rotatedArray);
  })();
  