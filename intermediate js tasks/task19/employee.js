let Employee = {
  salary: 100000,

  payGrades: {
    entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
    midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
    seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
  },

  getCadre: function () {
    if (Employee.salary >= Employee.payGrades.entryLevel.minSalary && Employee.salary <= Employee.payGrades.entryLevel.maxSalary) {
      return 'entryLevel';
    } else if (Employee.salary >= Employee.payGrades.midLevel.minSalary && Employee.salary <= Employee.payGrades.midLevel.maxSalary) {
      return 'midLevel';
    } else return 'seniorLevel';
  },

  calculateTax: function () {
    return Employee.payGrades[Employee.getCadre()].taxMultiplier * Employee.salary;
  },

  getBenefits: function () {
    return Employee.payGrades[Employee.getCadre()].benefits.join(', ');
  },

  calculateBonus: function () {
    return .02 * Employee.salary;
  },

  reimbursementEligibility: function () {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0;
    let employeeBenefits = Employee.payGrades[Employee.getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
      totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
  }
};

export default Employee;
//export { Employee.payGrades as grade, Employee.getCadre as Cadre, Employee.calculateTax as tax, Employee.getBenefits as benefit, Employee.calculateBonus as bonus, Employee.reimbursementEligibility as reimbursement };
