const jsonObject = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  
//   for...in
  for (const key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      console.log(key, jsonObject[key]);
    }
  }
  
  