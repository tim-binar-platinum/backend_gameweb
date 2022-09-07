/**
 *  @swagger
 * /user/register:
 *  post:
 *      tags:
 *          - user
 *      summary: register api
 *      description: api untuk membuat user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           name:
 *                              type: string
 *                              example: ahmad pandu
 *                           email:
 *                              type: string
 *                              example: pandu@gmail.com
 *                           password:
 *                              type: string
 *                              example: Pandu@123
 *                           total_score:
 *                              type: integer
 *                              example: 10
 *                           bio:
 *                              type: string
 *                              example: Pandu@123
 *                           city:
 *                              type: string
 *                              example: Pandu@123
 *                           sosial_media_url:
 *                              type: string
 *                              example: Pandu@123
 * 
 *      responses:
 *              '200':
 *                 description: register sukses
 *                 content: 
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                   name:
 *                                      type: string
 *                                      example: ahmad pandu
 *                                   email:
 *                                      type: string
 *                                      example: pandu@gmail.com
 *                                   password:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   total_score:
 *                                      type: integer
 *                                      example: 10
 *                                   bio:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   city:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   sosial_media_url:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   is_active:
 *                                      type: string
 *                                      example: nonactive
 *              '400':
 *                 description: register gagal email sudah terdaftar
 *                  
 */

/**
 *  @swagger
 * /user/update/1:
 *  put:
 *      tags:
 *          - user
 *      summary: update user
 *      description: api untuk update user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                             type: string
 *                             example: ahmad pandu
 *                          password:
 *                             type: string
 *                             example: Pandu@123
 *                          total_score:
 *                             type: integer
 *                             example: 10
 *                          bio:
 *                             type: string
 *                             example: Pandu@123
 *                          city:
 *                             type: string
 *                             example: Pandu@123
 *                          sosial_media_url:
 *                             type: string
 *                             example: Pandu@123
 *                          is_active:
 *                             type: string
 *                             example: nonactive 
 * 
 *      responses:
 *              '200':
 *                 description: update sukses
 *                 content: 
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                   name:
 *                                      type: string
 *                                      example: ahmad pandu
 *                                   email:
 *                                      type: string
 *                                      example: pandu@gmail.com
 *                                   password:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   total_score:
 *                                      type: integer
 *                                      example: 10
 *                                   bio:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   city:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   sosial_media_url:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   is_active:
 *                                      type: string
 *                                      example: nonactive
 *              '400':
 *                 description: gagal update
 *                  
 */

/**
 * @swagger
 * /user/confirm?token=ddshdhdhdydyd:
 *  post:
 *    tags:
 *      - user
 *    summary: api confirmasi register dari email
 *    parameters:
 *        - in : query
 *          name: token
 *          required: true
 *          schema: 
 *              type: string
 *          description: konfirmasi token
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   name:
 *                      type: string
 *                      example: ahmad pandu
 *                   email:
 *                      type: string
 *                      example: pandu@gmail.com
 *                   password:
 *                      type: string
 *                      example: Pandu@123
 *                   total_score:
 *                      type: integer
 *                      example: 10
 *                   bio:
 *                      type: string
 *                      example: Pandu@123
 *                   city:
 *                      type: string
 *                      example: Pandu@123
 *                   sosial_media_url:
 *                      type: string
 *                      example: Pandu@123
 *                   is_active:
 *                      type: string
 *                      example: active
 */