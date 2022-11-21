//Parent Class 
class employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
    //Return name from input
    getName () {
        return name;
    }
     //Return id from input
    getId () {
        return Id;
    }
     //Return email from input
    getEmail () {
        return email;
    }
     //Return tye of employee
    getRole () {
        return "employee";
    }
}

module.exports = employee;
