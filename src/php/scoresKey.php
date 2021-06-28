<?php
// TODO
// =>OK => Vérifier/Nettoyer les variables qui arrivent du client, il n'y en a plus 
// => Gestion d'un feedback d'erreur sur le format du userId
// =>OK=> Gestion d'un feedback d'erreur si le userId n'existe pas et qu'on demande d'enregistrer avec
// =>OK=> Placement de la variable $keypass cf post de Rémi
// => Suppression des espaces userId trop vieux, On garde 15 jours un autre délai qu'on pourra adapter,
// la routine de nettoyage serait lancée à chaque requete 
// => Problème url avec des % une fois qu'on affecte un userId

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

if ($contentType === "application/json") {
  // On reçoit les données brutes du post.
  $content = trim(file_get_contents("php://input"));
  
  // On utilise la notation fléchée pour l'accès aux données décodées du string json 
  // Si on utilise $decoded = json_decode($content,true); l'accès se fait par index de tableau array["ttt"]  
  $decoded = json_decode($content);    
  // On génère la date et l'heure
  $date = date('d/m/Y');
  setlocale(LC_TIME, 'fr_FR');
  date_default_timezone_set("Europe/Paris");
  $currentDate = utf8_encode($date);
  $currentTime = utf8_encode(strftime('%H:%M'));

  // On prévoit une variable vide avec les erreurs éventuelles
  $errors = "";
  // On récupère le booléen pour savoir si on crée un espace ou si on utilise un espace existant
  $isSubmitUserId = $decoded->isSubmitUserId;

  // Il faut créer le répertoire sur le serveur s'il n'existe pas
  // On teste une création côté serveur
  // Si c'est la création d'un nouvel espace on génère le userId ici
  // Sinon on le récupère via un fetch 
  if (!$isSubmitUserId) {
    $prof1 = chr(rand(65,90));
    $prof2 = chr(rand(65,90));
    $prof3 = chr(rand(65,90));
    // On met des chaine vide pour la classe et eleve par défaut
    $classe1 = "";
    $classe2 = "";
    $eleve1 = "";
    $eleve2 = "";        
  } else {
    $prof1 = $decoded->prof1;
    $prof2 = $decoded->prof2;
    $prof3 = $decoded->prof3;
    $classe1 = $decoded->classe1;
    $classe2 = $decoded->classe2;
    $eleve1 = $decoded->eleve1;
    $eleve2 = $decoded->eleve2;  
    // On ne crée l'espace que si les variables on on le format voulu
    // => les variables prof1,prof2 et prof3 sont des majuscules
    // => les variables classe1 et classe2 sont des caractères alphanumériques
    // => les variables eleve1 et eleve2 sont des caractères alphanumériques
    $prof = str_split($prof1.$prof2.$prof3);
    $classe = str_split($classe1.$classe2);
    $eleve = str_split($eleve1.$eleve2);
    // Un booléen pour tester si le code prof est en majuscules
    $isOkProf = true;
    $isOkClasse = true;
    $isOkEleve = true;
    $userIdLen = strlen($decoded->userId);    
    if ($userIdLen > 7) {
      $errors .= "le code doit avoir 7 caractères maximum.<br>";
    }
    if (count($prof)!=3) {
      $errors .= "Le code prof doit avoir 3 caractères.<br>"; 
    };
    if (count($classe)!=2) {
      $errors .= "Le code classe doit avoir 2 caractères.<br>"; 
    };
    if (count($eleve)!=2) {
      $errors .= "Le code eleve doit avoir 2 caractères.<br>"; 
    };

    foreach ($prof as $car) {
      if (!(ctype_upper($car))) {
        $isOkProf = false;
      } 
    }
    if (!$isOkProf) {
      $errors .= "Le code prof ne doit comporter que des lettres majuscules !<br>";
    }  
    foreach ($classe as $car) {
      if (!(ctype_alnum($car))) {
        $isOkClasse = false;      
      };
      if (ctype_alpha($car)) {
        if (!ctype_upper($car)) {
          $isOkClasse = false;
        }
      } 

    }
    if (!$isOkClasse) {
      $errors .= "Le code classe doit être alphanumerique !<br>";
      $errors .= "Les caractères alphabétiques du code classe doivent être des majuscules !<br>";
    }
    foreach ($eleve as $car) {
      if (!(ctype_alnum($car))) {
        $isOkEleve = false;      
      };
      if (ctype_alpha($car)) {
        if (!ctype_upper($car)) {
          $isOkEleve = false;
        }
      } 
    }
    if (!$isOkEleve) {
      $errors .= "Le code eleve doit être alphanumerique !<br>";
      $errors .= "Les caractères alphabétiques du code eleve doivent être des majuscules !<br>";
    }  
  }
  

  if ($errors=="") {
    $path = './resultats/'.$prof1.'/'.$prof2.'/'.$prof3;

    // On génère une nouvelle clef uniquement si l'arborescence n'existe pas
    // Sinon on récupère la clef dans le nom du fichier on verra plus tard s'il y a plusieurs fichiers
    if (!file_exists($path)) {
      if ($isSubmitUserId) {
        $errors .= "Le code prof n'existe pas - scoresKey.php <br>";
        foreach ($prof as $car) {
          if (!(ctype_upper($car))) {
            $errors .= "Le code prof ne doit comporter que des majuscules !<br>";
          } 
        }
      } else {
        mkdir($path, 0775, true);
        // On génère une clef  
        $keypass = md5(uniqid(rand(), true));
        // On crée le sous-repertoire
        mkdir($path.'/'.$keypass, 0775, true); 
      }
      // Il faut créer le dossier de stockage s'il n'existe pas à partir de la clef  
      $pathToFile = $path.'/'.$keypass;
      $url = $pathToFile;
    } else {
      if (sizeof(scandir($path))>2) {// S'il y a déjà un sous-dossier son nom est le keypass à recuperer pour les enregistrements      
        $keypass = scandir($path)[2];
      } else {
        $keypass = md5(uniqid(rand(), true));
        // On crée le sous-repertoire
        mkdir($path.'/'.$keypass, 0775, true);
      };
      // Puis on récupère les variables transmises
      // $prof1 = $decoded->prof1;
      // $prof2 = $decoded->prof2;
      // $prof3 = $decoded->prof3;
      // $classe1 = $decoded->classe1;
      // $classe2 = $decoded->classe2;
      // $eleve1 = $decoded->eleve1;
      // $eleve2 = $decoded->eleve2;
      // Il faut créer le dossier de stockage s'il n'existe pas à partir de la clef  
      $pathToFile = $path.'/'.$keypass.'/'.$classe1.$classe2;
      mkdir($path.'/'.$keypass.'/'.$classe1.$classe2, 0775, true);
      $url = "pas d'url à suivre pour les élèves !";
    };  

    // Si un utilisateur transmet un userId, on enregistre dans un fichier mais c'est inutile de gérer ce fichier ici
    // // On ouvre le fichier
    // $fp = fopen($pathToFile, 'a+');      
    // // S'il n'existe pas on crée l'entete
    // if (strlen(file_get_contents($pathToFile))==0) {
    //   fputs($fp, "idUser,idExo,nbBonnesReponse,nbQuestions,date,heure \r\n");  
    // };
    // fclose($fp);
  }

  echo json_encode(array(
    //"url" => $path.'/'.$keypass.'scores.csv',
    //"url" => $pathToFile,
    "url" => $url,
    //"userId" => $lettre1.$lettre2.$lettre3.$chiffre1.$chiffre2,
    "userId" => $prof1.$prof2.$prof3.$classe1.$classe2.$eleve1.$eleve2,
    "errors" => $errors
  ));  

  // Si json_decode échoue, le JSON est invalide.
  if(! is_array($decoded)) {

  } else {
    // On peut envoyer un message d'erreur à l'utilisateur
  }
}
?>