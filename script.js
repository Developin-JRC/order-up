console.log("Hello from script.js"); //test line

//array of drink forms available
const tags = ["protein","hot brew","iced", "frozen", "shaken", "stirred", "shot"]; 

//array of drink forms available
const prices=[2.80, 3.99, 4.95, 5.89, 7, 8, 9]; //drink prices

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";
    for (let i = 0; i < tags.length; i++) {
    tagText.textContent = tagText.textContent + tags[i] + " . ";
 }

 //total starts at 0 and will grow
 let total = 0;
 for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
 }

  document.querySelector("#total").textContent = "$" +  total;

 

