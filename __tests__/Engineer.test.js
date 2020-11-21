const Engineer = require('../lib/Engineer');

test("creates engineer", () => {
    const employee = new Engineer("Amanda", 6, "amanda@gmail.com", "amandahub")

    expect(employee.name).toBe('Amanda');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
})


test('gets github', () => {
    const employee = new Engineer("Amanda", 6, "amanda@gmail.com", "amandahub");

    expect(employee.getGitHub()).toEqual(expect.stringContaining("amandahub"));
})


test('gets role of employee', () => {
    const employee = new Engineer("Amanda", 6, "amanda@gmail.com", "amandahub");
    
    expect(employee.getRole()).toEqual(expect.stringContaining("Engineer"));
})