const pactum = require('pactum');

it('should reject POST ', async () => {
  await pactum.spec()
    .post('https://api.sushirelay.com/v1')
    .expectStatus(200)
    .expectJson({
        "jsonrpc": "2.0",
        "error": {
            "code": 1,
            "message": "Unauthorized"
        }
    })
    .expectJsonSchema({
        "type": "object",
        "properties": {
          "jsonrpc": {
            "type": "string"
          },
          "error": {
            "type": "object",
            "properties": {
              "code": {
                "type": "integer"
              },
              "message": {
                "type": "string"
              }
            },
            "required": [
              "code",
              "message"
            ]
          }
        }
    })
    .expectResponseTime(500);
});