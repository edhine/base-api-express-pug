/**
 * Rutas Rest Pagina Principal
 * @author Edhine
 */
'use strict';

var express = require('express');
var IndexControler = require('../controllers');

var api = express.Router();

/**
 * Rest Pagina Principal
 * @method GET
 */
api.get('/', IndexControler.index);

module.exports = api;