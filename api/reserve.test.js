const reserve = require('./reserve');

test('responds "ok"', () => {
  const request = {}
  let responseBody
  const response = { send: v => responseBody = v }
  const next = () => {}

  reserve(request, response, next)
  expect(responseBody).toBe('ok');
});