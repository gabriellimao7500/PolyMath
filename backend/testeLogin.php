<?php
session_start();

if(isset($_POST['submit']) && !empty($_POST['email']) && !empty($_POST['password'])){
    include_once('config.php');
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    // Adicionei aspas simples ao redor de $email e $password
    $sql = "SELECT * FROM usuario WHERE email = '$email' and senha = '$password'";
    $result = $conexao->query($sql);
    
    // Verifiquei se o número de linhas é igual a 0
    if(mysqli_num_rows($result) < 0){
        unset($_SESSION['email']);
        unset($_SESSION['password']);
        header('Location:../index.php');
        exit();
    }else{
        $_SESSION['email'] = $email;
        $_SESSION['password'] = $password;
        header('Location:../html/main.php');
        exit();
    }
} else {
    header('Location: ../index.php');
}
?>