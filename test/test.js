const pactum = require('pactum');

it('should respond with a healthcheck', async () => {
  await pactum.spec()
    .get('https://api.sushirelay.com/v1')
    .expectStatus(200)
    .expectJson({
      "status": "up"
    })
    .expectJsonSchema({
      type: 'object',
      properties: {
        status: {
          type: 'string'
        }
      }
    })
    .expectResponseTime(350);
});