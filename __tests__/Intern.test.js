//Import intern class
const Intern = require("../lib/Intern");

test("Should return input values of getSchool() and role as Intern", () => {
    
    //Sample employee info to test code with
    const newIntern = new Intern("Tim", 5678, "Tim@gmail.com", "UC Berkley");

    //Values expected to be based off sample employee info
    expect(newIntern.getSchool()).toBe("UC Berkley");
    expect(newIntern.getRole()).toBe("Intern");
});