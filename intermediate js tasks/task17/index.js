 class school{
    constructor(name,level,numberOfStudents ){
        this.name=name;
        this.level=level;
        this.numberOfStudents=numberOfStudents ;
    }

    getName(){
        return this.name;
    }
    getLevel(){
        return this.level;
    }
    getNumberOfStudents(){
        return this.numberOfStudents;
    }

    setNumberOfStudents(n){
    if(typeof(n)=='number'){
        this.numberOfStudents=n;
    }
    else {return'Invalid input: numberOfStudents must be set to a Number.';}
}
   quickFacts(){
    console.log(`SCHOOL ${this.name} educates ${this.n} students at the ${this.level} school level.`);
  } 
  static pickSubstituteTeacher(substituteTeachers){
    let n=Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[n];
  }  
}

class PrimarySchool  extends school{
    constructor (name,numberOfStudents,pickupPolicy ){
        super(name,numberOfStudents);
        this.pickupPolicy=pickupPolicy;
    }
    getPickupPolicy(){
        return this.pickupPolicy;
    }
}

class Middle extends school {
    constructor(name,numberOfStudents){
        super(name,numberOfStudents);
    }
}

class HighSchool  extends school {
    constructor(name,numberOfStudents,sportsTeams ){
        super(name,numberOfStudents);
        this.sportsTeams=sportsTeams;
    }
    getSportsTeam(){
        console.log(this.sportsTeams);
    }
}
lorraineHansbury=new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts();
school.pickSubstituteTeacher('Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli');

alSmith=new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);
