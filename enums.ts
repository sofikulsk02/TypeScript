enum WeatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}
const temp = 12;
let currCondition = (temp: number): string => {
  return temp > 20 ? WeatherConditions.Sunny : WeatherConditions.Snowy;
};
const weather = currCondition(temp);
console.log(`the current weather is ${weather}`);

const temprature = Math.floor(Math.random() * 100);
console.log(temprature);

if (temprature > 23 && temprature < 28) console.log();
