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
 let tax = 0;
 let grandTotal = 0;
 for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
    tax = total * 0.08;
    console.log("$" + total.toFixed(2));
    grandTotal = total + tax;
    console.log("Total with tax: $" + grandTotal.toFixed(2));
 }
    document.querySelector("#total").textContent = "$" + total.toFixed(2); 
    document.querySelector("#grandTotal").textContent = "$" + grandTotal.toFixed(2);

    

 

