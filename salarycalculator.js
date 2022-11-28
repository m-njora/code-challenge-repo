

function salCalculator(salary, benefits){

  let gross = salary + benefits;
  let NSSF = gross * 0.06;
  let PAYE = 0
  let taxableincome = gross -(nhifRemit(gross)+NSSF)
  
  // let netCalculator = gross;
  if (gross <= 24000) {
    PAYE = (taxableincome*0.1)
  }else if (gross >= 32333){
    PAYE = (taxableincome*0.3)
  }else if (gross >= 24001) {
    PAYE = (taxableincome*0.25)
  }
  console.log('Gross salary:', gross)
  console.log('PAYE deductions:', PAYE)
  console.log('NSSF deduction:', NSSF)
  console.log('NHIF deduction:', nhifRemit(gross))
  console.log('Net Salary:', gross - PAYE)
}
//NHIF
const nhifRemit= (gross)=>{
  let NHIF = 0
  if (gross <= 5999 ){
    NHIF  = 150 }
  else if (gross <= 7999) {
    NHIF = 300
  }
  else if( gross <= 11999){
    NHIF =  400 
  }
  else if ( gross <= 14999) {
    NHIF = 500 }
  else if (gross <= 19999) {
    NHIF = 600 
  }
  else if(gross <= 24999) {
    NHIF =  750
  }
  else if( gross <= 29999){
    NHIF = 850}
  else if (gross <= 34999) {
    NHIF = 900 
  }
  else if (gross <= 39999) {
    NHIF = 950 }
  else if (gross <= 44999) {
    NHIF = 1000 
  }
  else if (gross <= 49999) {
    NHIF =  1100 }
  else if  (gross <= 59999){
    NHIF = 1200 }
  else if (gross <= 69999) {
    NHIF = 1300 }
  else if (gross <= 79999) {
    NHIF = 1400 }
  else if  (gross <= 89999) {
    NHIF = 1500 }
  else if (gross <= 99999) {
    NHIF = 1600 }
  else if (gross >= 100000) {
    NHIF = 1700 }
  return NHIF

  
        
}


salCalculator(500000, 5000);












