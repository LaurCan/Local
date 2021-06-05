import Exercice from '../Exercice.js'
import { listeQuestionsToContenu, randint, reduireAxPlusB, choice, ecritureAlgebrique } from '../../modules/outils.js'
import { repere2, courbe2, mathalea2d, point, tracePoint, labelPoint } from '../../modules/2d.js'

export const titre = 'Equation réduite de droite et représentation graphique '

/**

*/
export default function lecturegraphiquedeaetb () {
  Exercice.call(this)
  this.titre = titre
  this.consigne = 'Equation réduite de droite et représentation graphique '
  this.nbQuestions = 3// On complète le nb de questions
  this.nbCols = 2
  this.nbColsCorr = 2
  this.tailleDiaporama = 100
  this.video = ''
  this.spacing = 1
  this.spacingCorr = 1
  this.spacingCorr = 3
  this.sup = 1

  this.nouvelleVersion = function () {
    this.listeQuestions = []
    this.listeCorrections = []
    // let typesDeQuestionsDisponibles = []
    // typesDeQuestionsDisponibles = []// On complète selon le nb de cas dans l'exo (switch)

    // const listeTypeDeQuestions = combinaisonListes(typesDeQuestionsDisponibles, this.nbQuestions)

    for (let i = 0, A, B, a, b, r, f, c, d, t, l, xA, yA, texte, texteCorr, cpt = 0;
      i < this.nbQuestions && cpt < 50;) { // on rajoute les variables dont on a besoin
      if (this.sup === 1) {
        a = randint(-5, 5) // coefficient directeur
        b = randint(-5, 5) // ordonnée à l'origine
        if (a === 0 && b === 0) {
          a = 1
        }// On évite la situation de double nullité
        r = repere2()// On définit le repère
        f = x => a * x + b// On définit la fonction affine
        c = courbe2(f, { repere: r }, 'red')// On définit l'objet qui tracera la courbe dans le repère
        texte = 'A partir de la représentation graphique de la droite ci-dessous, donner par lecture graphique son équation réduite'
        texte += mathalea2d({
          xmin: -6,
          ymin: -6,
          xmax: 6,
          ymax: 6
        }, r, f, c)// On trace le graphique
        texteCorr = 'On sait que l\'équation réduite d\'une droite non verticale est de la forme : $y= ax+b$ avec $a$ et $b$ deux réels non tous deux nuls.<br>'
        texteCorr += 'Le premier coefficient à lire graphiquement est $b$, l\'ordonnée à l\'origine de la droite.<br>'
        texteCorr += 'C\'est l\'ordonnée du point d\'intersection de la droite avec l\'axe des ordonnées.<br>'
        texteCorr += `On lit ici que le point $(0;${b}) \\in (d)$.<br>`
        texteCorr += `On peut alors conclure que l'ordonnée à l'origine est : $b=${b}$. <br>`
        texteCorr += 'On peut lire ensuite le coefficient directeur $a$ de la droite $(d)$.<br>'
        texteCorr += 'On sait que $a=\\dfrac{\\text{Dénivelé vertical}}{\\text{Déplacement horizontal}}$'
        texteCorr += `<br>En lisant le déplacement vertical correspondant à un déplacement horizontal d'une unité, on lit : <br>$a=\\dfrac{\\text{Dénivelé vertical}}{1}=${a}$`
        texteCorr += 'On peut en déduire que l\'équation réduite de la droite $(d)$ est :'

        texteCorr += `$y=${reduireAxPlusB(a, b)}$`
        texteCorr += mathalea2d({
          xmin: -6,
          ymin: -6,
          xmax: 6,
          ymax: 6
        }, r, f, c)// On trace le graphique
      }
      if (this.sup === 2) {
        a = randint(-5, 5) // coefficient directeur
        b = randint(-5, 5) // ordonnée à l'origine
        d = randint(1, 5) // coefficient directeur
        if (a === 0 && b === 0) {
          a = 1
        }// On évite la situation de double nullité
        r = repere2()// On définit le repère
        f = x => (a / d) * x + b // On définit la fonction affine
        c = courbe2(f, { repere: r }, 'red')// On définit l'objet qui tracera la courbe dans le repère
        texte = 'A partir de la représentation graphique de la droite ci-dessous, donner par lecture graphique son équation réduite'
        texte += mathalea2d({
          xmin: -6,
          ymin: -6,
          xmax: 6,
          ymax: 6
        }, r, f, c)// On trace le graphique
        texteCorr = 'On sait que l\'équation réduite d\'une droite non verticale est de la forme : $y= ax+b$ avec $a$ et $b$ deux réels non tous deux nuls.<br>'
        texteCorr += 'Le premier coefficient à lire graphiquement est $b$, l\'ordonnée à l\'origine de la droite.<br>'
        texteCorr += 'C\'est l\'ordonnée du point d\'intersection de la droite avec l\'axe des ordonnées.<br>'
        texteCorr += `On lit ici que le point $(0;${b}) \\in (d)$.<br>`
        texteCorr += `On peut alors conclure que l'ordonnée à l'origine est : $b=${b}$. <br>`
        texteCorr += 'On peut lire ensuite le coefficient directeur $a$ de la droite $(d)$.<br>'
        texteCorr += 'On sait que $a=\\dfrac{\\text{Dénivelé vertical}}{\\text{Déplacement horizontal}}$'
        texteCorr += `<br>En lisant le déplacement vertical correspondant à un déplacement horizontal d'une unité, on lit : <br>$a=\\dfrac{\\text{Dénivelé vertical}}{1}=${a}$`
        texteCorr += 'On peut en déduire que l\'équation réduite de la droite $(d)$ est :'

        texteCorr += `$y=${reduireAxPlusB(a, b)}$`
        texteCorr += mathalea2d({
          xmin: -6,
          ymin: -6,
          xmax: 6,
          ymax: 6
        }, r, f, c)// On trace le graphique
      }
      if (this.sup === 3) {
        a = randint(0, 3) * choice([-1, 1])// coefficient a de la fonction affine
        b = randint(0, 3) * choice([-1, 1])// coefficient b de la fonction affine

        if (a === 0 && b === 0) // On évite la fonction nulle
        { a = 1 }
        r = repere2()
        f = x => a * x + b
        c = courbe2(f, { repere: r })
        xA = randint(1, 3) * choice([-1, 1])// Abscisse de A
        yA = a * xA + b// Ordonnée de A

        A = point(xA, yA)
        B = point(0, b)

        t = tracePoint(A, B, 'red') // Variable qui trace les points avec une croix
        l = labelPoint(A, B)// Variable qui trace les nom s A et B
        l.color = 'red'
        texte = `Représenter graphiquement la droite $(d)$ d'équation : $(d) : y=${reduireAxPlusB(a, b)}$ <br>`
        texteCorr = 'On sait que $(d)$ est une droite.<br>'
        texteCorr += 'Il suffit donc de déterminer les coordonnées de deux points pour pouvoir la représenter.<br>'
        texteCorr += 'On sait que si $(d) : y=ax+b$, le coefficient $b$ est l\'ordonnée à l\'origine de la droite $(d)$.<br>'
        texteCorr += `On lit donc ici que $b=${b}$, donc que le point $(0;${b}) \\in (d)$.<br>`
        texteCorr += 'On cherche un deuxième point, et on prend une abscisse au hasard :<br>'
        texteCorr += `Soit $x=${xA}$ :<br>`
        texteCorr += `On calcule : $y=${a} \\times ${xA}${ecritureAlgebrique(b)}$:<br>`
        texteCorr += `On obtient : $y=${yA}$<br>`
        texteCorr += `Le point $(${xA};${yA}) \\in (d)$.<br>`
        texteCorr += mathalea2d({
          xmin: -6,
          ymin: -10,
          xmax: 6,
          ymax: 10
        }, r, c, t, l)
      }

      if (this.listeQuestions.indexOf(texte) === -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.listeQuestions.push(texte)
        this.listeCorrections.push(texteCorr)
        i++
      }
      cpt++
    }

    listeQuestionsToContenu(this)
  }
  this.besoinFormulaireNumerique = ['Types de question :', 3, '1 : Lecture de a et b valeurs entières.\n2 : Lecture de a et b valeurs fractionnaires. \n3 : Représentation graphique']
}
