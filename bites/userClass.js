//  Ch - 12 Exercise:

// file: user.js

class User {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
    getIntroduction() {
      return `Hi, my name is ${this.name}`;
    }
  }

  const userAccount = new User('Shilpa');

    console.log(userAccount.getName());

    console.log(userAccount.getIntroduction());
    
// ➜  bites git:(main) ✗ node userClass.js
// Shilpa
// Hi, my name is Shilpa


class UserBase {
    constructor(name){
        this.name = name;
    }
    count(){
        return users.length;
    }
    getNames() {
        const array = [];
        for(let i = 0; i < users.length; i++){
            array.push(users[i].getName());
        }
        return array;
    }    
    getIntroductions(){
        const array = [];
        for(let i = 0; i < users.length; i++){
            array.push(`Hi, my name is ${users[i].getName()}`)
        }
        return array;
    }
}

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

  const userBase = new UserBase(users);

  console.log(userBase.count());

  console.log(userBase.getNames());

  console.log(userBase.getIntroductions());

// o/p:
//   ➜  bites git:(main) ✗ node userClass.js
// Shilpa
// Hi, my name is Shilpa
// 3
// [ 'Uma', 'Josh', 'Ollie' ]
// [ 'Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie' ]