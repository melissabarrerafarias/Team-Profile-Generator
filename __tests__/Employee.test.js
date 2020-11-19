const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('creates a Employee', () => {
    const employee = new Employee('Jared');

    expect(employee.name).toBe('Jared');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

