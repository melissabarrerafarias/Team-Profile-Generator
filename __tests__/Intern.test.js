const Intern = require('../lib/Intern');

test("creates intern", () => {
    const employee = new Intern("George", 16, 'georgie@gmail.com', 'Santee School of Tortillas');

    expect(employee.name).toBe('George');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
})