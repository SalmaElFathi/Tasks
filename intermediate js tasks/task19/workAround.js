import Employee from './employee.js';
//import{grade,Cadre,tax,benefit,bonus,reimbursement} from './employee.js';
function getEmployeeInformation(inputSalary) {
    Employee.salary = inputSalary;
    console.log('grade: ' +Employee.payGrades);
    console.log('Cadre: ' +Employee.getCadre());
    console.log('Tax: ' + Employee.calculateTax());
    console.log('Benefits: ' + Employee.getBenefits());
    console.log('Bonus: ' + Employee.calculateBonus());
    console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
  }
  
getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);