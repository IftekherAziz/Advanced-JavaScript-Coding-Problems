/* 
1. If ticket numbers is less than 100 , per ticket price is 100
2. If ticket numbers is more  than 100 ,but less than 200 then first 100 ticket will be 100 tk per ticket
and rest of the ticket will be 90 tk per ticket
3. If you purchase more than 200 tickets 
   first 100 ----> 100tk
   1001-200  ----> 90tk
   200+ ---------> 70tk
*/

/* 
function ticketPrice(ticketQuantity){
   const first100Rate  = 100;
   const second100Rate = 90;
   const restTicketRate = 70;
      if(ticketQuantity <= 100){
         const price = ticketQuantity * 100;
         return price;
      }
      else if(ticketQuantity <= 200){
         const first100Price = first100Rate * 100;
         const restTicketQuantity = ticketQuantity - 100;
         const restTicketPrice = restTicketQuantity * second100Rate;
         const totalPrice = first100Price + restTicketPrice;
         return totalPrice;
      }
      else{
         const first100Price = first100Price * 100;
         const second100Price = second100Price * 90;
         const restTicketQuantity = ticketQuantity - 200;
         const restTicketPrice = restTicketQuantity * restTicketRate;  
         const totalCost = first100Price + restTicketPrice + second100Price;
         return totalCost;       
      }
}

const price = (ticketPrice(120));
console.log('Total Cost for the ticket:',price);

*/

/*
function ticketPrice(ticketQuantity){
   const first100Rate  = 100;
   const second100Rate = 90;
   const restTicketRate = 70;
      if(ticketQuantity <= 100){
         const first100Price = ticketQuantity * first100Rate;
         return first100Price;
      }
      else if(ticketQuantity <= 200){
         const first100Price = 100 * first100Rate;
         const second100Price = first100Price + (ticketQuantity - 100) * second100Rate;
         return second100Price;
      }
      else{
         const restTicketPrice = first100Price+ second100Price +(ticketQuantity - 200) * restTicketRate;
         return restTicketPrice;
      }
}

const finalPrice = ticketPrice(120);
console.log(finalPrice);


*/

function ticketPrice(ticketQuantity){
   const first100Rate  = 100;
   const second100Rate = 90;
   const restTicketRate = 70;
      if(ticketQuantity <= 100){
         return ticketQuantity * first100Rate;
      }
      else if(ticketQuantity <= 200){
         return 100 * 100 + (ticketQuantity - 100) * second100Rate;
      }
      else{
         return 100 * 100 + 100 * 90 + (ticketQuantity - 200) * restTicketRate;
      }
}

const finalPrice = ticketPrice(120);
console.log(finalPrice);