const Engineer = require('../lib/Engineer');

test("get Engineer's github username", () => {
    const engineer = new Engineer('bob', '02', 'bob@bob.com', 'bobbob');

    expect(engineer.github).toEqual(expect.any(String));
})