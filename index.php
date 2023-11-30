<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Poly Math</title>
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="logo-login">
            <a href="../index.html"><h1>Poly Math</h1></a>
        </div>
    </header>

    <main>
        <form action="../backend/testeLogin.php" method="POST">
            <div class="card-login">
                <h1>Login</h1>

                <div class="inputs">
                    
                    <div class="input">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="-3 0 25 20" fill="none" >
                            <path d="M18 4L10 9L2 4V2L10 7L18 2M18 0H2C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0Z" fill="#07BEB8"/>
                        </svg>
                        <input type="text" name="email" placeholder="E-mail" >
                    </div>
                
                    <div class="input">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="40" viewBox="0 0 38 40" fill="none">
                            <path d="M28.0708 11.8355H26.5083V8.92205C26.5083 4.90152 23.0083 1.63847 18.6958 1.63847C14.3833 1.63847 10.8833 4.90152 10.8833 8.92205V11.8355H9.3208C7.60205 11.8355 6.1958 13.1465 6.1958 14.7489V29.3161C6.1958 30.9185 7.60205 32.2295 9.3208 32.2295H28.0708C29.7896 32.2295 31.1958 30.9185 31.1958 29.3161V14.7489C31.1958 13.1465 29.7896 11.8355 28.0708 11.8355ZM14.0083 8.92205C14.0083 6.50391 16.1021 4.55191 18.6958 4.55191C21.2896 4.55191 23.3833 6.50391 23.3833 8.92205V11.8355H14.0083V8.92205ZM28.0708 29.3161H9.3208V14.7489H28.0708V29.3161ZM18.6958 24.9459C20.4146 24.9459 21.8208 23.6349 21.8208 22.0325C21.8208 20.4301 20.4146 19.1191 18.6958 19.1191C16.9771 19.1191 15.5708 20.4301 15.5708 22.0325C15.5708 23.6349 16.9771 24.9459 18.6958 24.9459Z" fill="#07BEB8"/>
                        </svg>
                        <input type="password" name="password" placeholder="Senha" >
                    
                    </div>

                </div>
                <div class="btn">
                    <input type="submit" name="submit" id="submit" class="btn-login" value="Login">
                    <a href="../html/cadastro.php">Não tenho uma <span>conta</span></a>
                </div>

            </div>
        </form>

    </main>
    
    <footer></footer>
</body>
</html>
