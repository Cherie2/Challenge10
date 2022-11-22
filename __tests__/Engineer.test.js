//Import engineer class
const Engineer = require("../lib/Engineer");

test("Should return gitHub username and role as Engineer", () => {
   
    //Sample employee info to test code
    const newEngineer = new Engineer('Tom', 1234, 'Tom@gmail.com', 'Tom24');
    
    //Values expected to be based offsample employee info
    expect(newEngineer.getGitHub()).toBe("Tom24");
    expect(newEngineer.getRole()).toBe("Engineer");
});