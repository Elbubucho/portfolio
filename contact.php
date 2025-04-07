<?php 
$getData = $_POST;

if(
    !isset($getData['email'])
    || !filter_var($getData['email'], FILTER_VALIDATE_EMAIL)
    || empty($getData['message'])
    || trim($getData['message']) === ''
    || empty($getData['firstname'])
    || trim($getData['firstname']) === ''
    || empty($getData['lastname'])
    || trim($getData['lastname']) === ''
) {
    echo('Merci de remplir tous les champs du formulaire.');
    return;
}   
else {

    $nom = $_POST['firstname'];
    $prenom = $_POST['lastname'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $sujet = "Email provenant du portfolio";

    $destinataire ='valmax.sala@gmail.com';
    $contenu = " <html> <body><p>Nom : $nom</p><p> Prénom: $prenom</p><p>$email</p><p> Message : $message</p></body> </html>";

    $headers = "From: '.$destinataire\r\n"; // ceci est pour un test local, si hebergé en ligne en general contact@nom-de-domaine.fr au lieu de destinataire
    $headers .= "Content-Type: text/html; charset=utf-8 \r\n";

    

if(mail($destinataire,$sujet,$contenu,$headers)) {

            echo "Merci {$getData['lastname']}, votre message à bien été envoyé. ";
            return;
        }
        else {
            echo "Echec de l'envoi de l'email";
        }

   
}
?>