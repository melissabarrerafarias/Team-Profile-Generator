const Employee = require("../lib/Employee");

test('creates a Employee', () => {
    const employee = new Employee('Jared', 5, 'jared@gmail.com');

    expect(employee.name).toBe('Jared');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

