<?php

$dados = $_POST;
var_dump($dados);

include "Computador.php";

extract($_POST);

$chkAtualizado = isset($_POST['chkAtualizado']);

$novoCadastro = new Computador($txtPlaca,
        '2022-02-24 09:30:00');
$novoCadastro->Cadastrar();
