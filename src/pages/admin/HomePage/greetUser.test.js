import { greetUser } from './greetUser';

test('name is optional', () => {
  const greeting = greetUser();
  expect(greeting).toBe(`¡Hola! Bienvenido`);
});

describe('greet the given user', () => {
  it('user name should be in the message', () => {
    const user = 'John';
    const greeting = greetUser(user);
    expect(greeting).toContain('Hola John');
  });

  it('name should be camelcase', () => {
    const name = {
      lower: 'doe',
      expected: 'Doe',
    };
    const greeting = greetUser(name.lower);
    expect(greeting).toBe(`¡Hola ${name.expected}! Bienvenido`);
  });

  it('should only show the first name', () => {
    const user = {
      fullName: 'John Doe',
      firstName: 'John',
    };
    const greeting = greetUser(user.fullName);
    expect(greeting).toBe(`¡Hola ${user.firstName}! Bienvenido`);
  });
});
