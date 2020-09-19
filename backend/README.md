
/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação do backend
 * PUT: Alterar uma informação do backend
 * DELETE: Deletar uma informação do backend
 */

 /**
  * Tipo de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar um único recurso (localhost:3333/users/:id)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recurso
  * 
  */

  /**
   * Instalar Driver banco SQLite.
   * 
   * Driver: Select * from users;
   * 
   * Query Builder: table('users').select('*').where()
   * 
   * utilizaremos o knex.js  : http://knexjs.org
   * instalar  $ npm install knex
   * banco     $ npm install sqlite3
   * depois iniciar o banco ( cria arquivo no projeto para configurar acessos ...): $ npx knex init
   */


