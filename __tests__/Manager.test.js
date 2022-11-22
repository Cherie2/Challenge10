//Import manager class
const Manager = require("../lib/Manager");

test("Should return input of office number and role as Manager", () => {

    //Sample employee info to test code
    const newManager = new Manager("Claire", 111, "Claire@gmail.com", "(951) 273-7556");
    
    //Values expected to be based off sample employee info
    expect(newManager.getOfficeNumber()).toBe("(951) 273-7556");
    expect(newManager.getRole()).toBe("Manager");
});