const Employee = require("../lib/Employee");

test('creates a Employee', () => {
    const employee = new Employee('Jared', 5, 'jared@gmail.com');

    expect(employee.name).toBe('Jared');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});


test('gets employee name', () => {
    const employee = new Employee('Jared', 5, 'jared@gmail.com');
    expect(employee.getName()).toEqual(expect.stringContaining('Jared'));
})


test('gets employee id', () => {
    const employee = new Employee('Jared', 5, 'jared@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
})


test('gets employee email', () => {
    const employee = new Employee('Jared', 5, 'jared@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining("@gmail.com"));
})


test('gets role of employee', () => {
    const employee = new Employee('Jared', 5, 'jared@gmail.com');
    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})
