// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);

  }
  
  const gifts = ["foreign weed", "play station", "phone"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);
   
  function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      messages.push(message);
    }
    return messages;
  }
  function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }