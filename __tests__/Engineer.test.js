const Engineer = require('../lib/Engineer');

test("creates engineer", () => {
    const employee = new Engineer("Amanda", 6, "amanda@gmail.com", "amandahub")

    expect(employee.name).toBe('Amanda');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
})