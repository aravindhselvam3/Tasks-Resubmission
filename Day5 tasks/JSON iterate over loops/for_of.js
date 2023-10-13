const jsonObject = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };

const values = Object.values(jsonObject);
for (const value of values) {
  console.log(value);
}
