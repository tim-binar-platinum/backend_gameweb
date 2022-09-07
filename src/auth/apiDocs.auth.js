/**
 *  @swagger
 * /auth/login:
 *  post:
 *      tags:
 *          - auth
 *      summary: login api
 *      description: api untuk login user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           email:
 *                              type: string
 *                              example: pand@gmail.com
 *                           password:
 *                              type: string
 *                              example: Manusia090@ 
 * 
 *      responses:
 *              '200':
 *                 description: login sukses
 *                 content: 
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  accessToken: 
 *                                      type: string
 *                                      example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZnVsbG5hbWUiOiJhaG1hZCBwYW5kdSIsImVtYWlsIjoicGFuZEBnbWFpbC5jb20iLCJpYXQiOjE2NjA1MjQ4NzcsImV4cCI6MTY2MDYxMTI3N30.q-iXCojLVsnwjTGXkJqMmk4oM8PqwIff-I683uTdJwQ
 *              '404':
 *                 description: email atau password salah
 *                  
 */