const Manager = require('../lib/Manager');

test("testing to see if Manager is created correctly", () => {
    const employee = new Manager("Kyle", 9, 'kyle@gmail.com', 7);

    expect(employee.name).toBe('Kyle');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const employee = new Manager("Kyle", 9, 'kyle@gmail.com', 7);

    expect(employee.getRole()).toEqual(expect.stringContaining('Manager'));
})