(function() {
    const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];
    const uniqueArray = [...new Set(array)];
    console.log(uniqueArray);
  })();
  