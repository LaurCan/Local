### Guide pour l'autoCorrection et pour l'export AMC

Plusieurs attributs de la classe Exercice() sont nécessaires pour activer la possibilité d'avoir un mode interactif.

# Tout d'abord les 'marqueurs' :
    ```js
  this.interactif = true // définit le mode dans lequel l'exercice va s'afficher.
  this.interactifReady = interactifReady // définit si l'exercice peut s'afficher en mode interactif.
  this.amcReady = amcReady // définit si l'exercice peut servir à AMC
  this.amcType = amcType // définit le type d'exercice interactif.
  ```

  interactifReady est une constante qui est à exporter pour établir la liste des exercices interactifs et utiliser le filtre.
  amcType est une constante à exporter pour compléter cette liste avec une information sur le type.

  amcType peut prendre les valeurs suivantes :

  1 : qcm avec une seule bonne réponse (évolution vers le bouton radio ?). Modèle : 6C10-2
  2 : qcm avec possibilité de plusieures bonnes réponses. Modèle : 6N43-2
  3 : question ouverte -> il n'y a pas d'interactivité l'affichage est classique par contre on peut l'exporter vers AMC en question ouverte. Modèle : 6C10-5
  4 : réponse numérique à entrer dans un formulaire texte. AmcNumeriqueChoice (voire attribut reponse). Modèle : 6C10
  5 : réponse identique au type 4 mais AMC ajoute une zone pour une réponse ouverte. Modèle : 3G30
  6 : plusieures réponses numériques (plusieurs attributs reponse, reponse2,...). Modèle : 4C21

  # La variable this.autoCorrection

  ```js
  this.autoCorrection // doit contenir un tableau d'objets avec autant d'éléments qu'il y a de répétitions de l'énoncé (this.nbQuestions).
  this.autoCorrection[0] // définit la première question
  this.autoCorrection[1] // definit la deuxième et ainsi de suite.
  ```
  Selon les types, l'objet s'adapte :

  type 1 :
  ```js
  this.autoCorrection[i] = {
      enonce: 'la question est posée ici',
      propositions: [
          {
              texte: 'ce qui est écrit à droite de la case à cocher',
              statut: // true ou false pour indiquer si c'est une bonne réponse (true),
              feedback: 'message' // qui s'affichera si la réponse est juste ou s'il n'y a qu'une erreur
          },
          {
              texte: 'deuxième proposition',
              statut: //true ou false,
              feedback: '...'
          },
          {

          } //.... autant de fois qu'il y a de propositions dans le qcm
      ],
      options: {
          ordered: true // (si les réponses doivent rester dans l'ordre ci-dessus, false si il faut le mélanger),
          lastChoice: index // (en cas de mélange, l'index à partir duquel les propositions restent à leur place, souvent le dernier choix par défaut)
      }
  }
  ```

type 2 : il est identique au type 1, à la différence près qu'il y aura peut-être plusieurs statut à true

type 3 : (uniquement pour AMC) ici un exemple pour une exercice ne produisant qu'une question (il y aura autant d'objet que this.nbQuestion>1)

```js
  this.autoCorrection = [
      { 
          enonce: 'ici la question est posée'
          propositions: [
              { 
                  texte: 'Ce qui apparaitra sur le corrigé',
                  statut: 3 // (ici c'est le nombre de ligne du cadre pour la réponse de l'élève sur AMC),
                  feedback: ''
             }
           ]
       }
    ]
```
 
type 4 : Voici un élément type (la différence se situe dans l'attribut reponse)
```js
this.autoCorrection[i] = {
        enonce: 'ici la question est posée',
        propositions: [
          {
            texte: 'ce qui est affiché dans le corrigé AMC,
            statut: // (pour l'instant il n'a pas d'utilité),
            feedback: ''
          }
        ],
        reponse: {
          texte: 'le texte affiché au dessus du formulaire numerique dans AMC', //facultatif
          valeur: nombre // obligatoire (la réponse numérique à comparer à celle de l'élève), NE PAS METTRE DE STRING à virgule ! 4.9 et non pas 4,9
          param: {
            digits: 3 // obligatoire pour AMC (le nombre de chiffres pour AMC, si digits est mis à 0, alors il sera déterminé pour coller au nombre décimal demandé),
            decimals: 0 // facultatif si il n'est pas mis, il sera mis à 0 (le nombre de chiffres après la virgule pour AMC voir ci-dessus pour digit),
            signe: false // (présence d'une case + ou - pour AMC),
            exposantNbChiffres: 0 // facultatif (présence de x10^ pour AMC si >0 c'est le nombre de chiffres pour l'exposant),
            exposantSigne: false // (présence d'une case + ou - pour l'exposant précédent),
            approx: 0 // (0 = valeur exacte attendue, sinon valeur de tolérance... voire AMC)
          }
        }
```
type 5 : idem type 3 avec présence comme pour le type 4 d'un attribut reponse.

type 6 : idem type 4 avec présence d'un autre attribut reponse2 qui fonctionne comme le reponse du type 5.

# Les fonctions
Pour gérer l'interactivité Rémi Angot a implémenté quelques fonctions dont l'appel permet de générer le code nécessaire facilement :
```js
function setReponse (exercice, i, a, {digits = 0, decimals = 0, signe = false, exposantNbChiffres = 0, exposantSigne = false, approx = 0} = {}) // cette fonction permet de fixer une réponse numérique à une exercice interactif/AMC de type 4 ou de type 5. ( à développer une fonction setReponses() qui fixent les réponses des exercices de type 6). Les trois premiers arguments sont obligatoires : l'exercice appelant (this), l'index de la question (i), une réponse numérique (a). le quatrième est facultatif et ne sert que pour AMC (des valeurs par défaut seront mises garantissant un fonctionnement correct dans la plupart des cas : la fonction d'export AMC calculera le nombre de chiffres à coder à partir de la réponse)
function ajouteChampTexte (exercice, i, { texte = '', texteApres = '', inline = true, numeric = true } = {}) // Cette fonction permet d'ajouter facilement un formulaire texte en bout d'une question pour récupérer la réponses de l'utilisateur. Les deux premiers arguments sont obligatoires.
function propositionsQcm (exercice, i) // Cette fonction va retourner un objet {texte,texteCorr} qui contient les propositions faites pour le qcm avec leur case à cocher pour l'énoncé (texte) et pour la correction (texteCorr). Si le premier est toujours utilisé, on préférera au deuxième souvent la correction classique (à réfléchir : pourquoi ne pas activer la correction classique avec le bouton 'correction détaillée' ?)

