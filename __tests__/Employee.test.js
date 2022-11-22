//Import employee class to test 
const Employee = require("../lib/Employee");

  test('This should create a new object with name, id, email, and call getRole()', () => {
    
    //Sample employee info to test code
    const newEmployee = new Employee('Tom', 1234, 'Tom@gmail.com');
    
    //Values expected to be based offsample employee info
    expect(newEmployee.name).toBe('Tom');
    expect(newEmployee.id).toBe(1234);
    expect(newEmployee.email).toBe("Tom@gmail.com");
    expect(newEmployee.getName()).toBe('Tom');
    expect(newEmployee.getId()).toBe(1234);
    expect(newEmployee.getEmail()).toBe("Tom@gmail.com");
    expect(newEmployee.getRole()).toBe("Employee");
  });

