/* 
1. Chair --> 3 cft
2. table --> 10 cft
3. Bed --> 50 cft
*/

function woodCalculator(chairQunatity, tableQunatity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = chairQunatity * perChairWood;
    const tableWoodQuantity = tableQunatity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
   
    //console.log(chairQunatity, tableQunatity, bedQuantity);

    totalWoodRequired = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWoodRequired;
}
const totalWood = woodCalculator(2, 2, 5);
console.log('Total wood required:', totalWood);