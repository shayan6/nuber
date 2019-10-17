<?php
session_start();

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require("db.php");

$app = new \Slim\App;

$app->get('/', function (Request $request, Response $response, array $args) {

	return $response->withRedirect('Location', 'view/main.php');
});

$app->get('/rides', function (Request $request, Response $response, array $args) {
	require_once('api/database.php');

	$rows = $db->fetch("SELECT * FROM rides");
	return $response->withJson(array('status' => true, 'row' => $rows, 'message' => ''));
});

$app->get('/rides/{status}', function (Request $request, Response $response, array $args) {
	require_once('api/database.php');
	$status = $args['status'];
	$rows = $db->fetch("SELECT * FROM rides WHERE status = '$status'");
	return $response->withJson(array('status' => true, 'row' => $rows, 'message' => ''));
});

$app->run();
