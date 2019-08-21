/**
 * Controlador Pagina Inicial
 * @author Edhine
 * 
 * @method GET index
 */
'use strict';

var IndexModel = require('../models/IndexModel');

/**
 * Metodo que devuelve la pagina principal
 * @param {*} req 
 * @param {*} res 
 * [NPM] [https://expressjs.com/es/guide/using-template-engines.html]
 */
function index(req, res) {
    let index = new IndexModel();
    return res.render('index', { head: index.head, body: index.body});
}

module.exports = {
    index
};