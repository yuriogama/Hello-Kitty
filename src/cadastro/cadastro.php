
<?php

include './conn.php';

$nome = $_POST['nome'];
$email = $_POST['email'];
$tel = $_POST['tel'];

/*PROCESSAMENTO DO FORMULARIO */


//=====================================================================================================
//						Salva os dados no banco
//=====================================================================================================
$formArr = [$nome, $email, $tel];

echo json_encode($formArr);

if ($nome != null && $email != null && $tel != null) {
    $sqlinsert = "INSERT INTO mudar_para_nome_do_bd (nome, email, tel) VALUES('$nome', '$email', '$tel') ";
    $sqlinsertado = mysqli_query($conn, $sqlinsert);
} else {
}

?>