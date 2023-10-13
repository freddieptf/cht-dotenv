const findAndReplace = require('../src/dotenv');
const { expect } = require('chai');
const testJson = `
{
    "destination": {
        "base_url": "env.SYSTEM_URL",
        "auth": {
            "type": "basic",
            "username": "env.SYSTEM_USER",
            "password_key": "env.PASS_KEY"
        },
        "path": "/api/v1/referral"
    },
    "mapping": {}
}
`;

describe('find and replace', () => {
  it('replaces vars', () => {
    const env = {
      SYSTEM_URL: 'example.com',
      SYSTEM_USER: 'user',
      PASS_KEY: 'pass_key',
    };
    const content = findAndReplace(testJson, env);
    const contentStruct = JSON.parse(content);
    expect(contentStruct.destination.base_url).to.eq(env.SYSTEM_URL);
    expect(contentStruct.destination.auth).to.deep.eq({
      'type': 'basic',
      'username': env.SYSTEM_USER,
      'password_key': env.PASS_KEY,
    });
  });
});
