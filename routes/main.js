/*********************************************************************************************
 *                        Variables de enrutamiento de peticiones REST
 *                                      @author Edhine
 ********************************************************************************************/
'use strict';

var express = require('express');
var routes = express.Router();

/*********************************************************************************************
 *                                             Rutas
 * 
 * @description => Instancia de las rutas disponibles
 ********************************************************************************************/

/** 
 * @TestRest
 * [RutaDeInicio]
 * @description Peticion De Pagina Inicial
 */
var index_routes = require('./index');
routes.use('/', index_routes);

// Exportar
module.exports = routes;