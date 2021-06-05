import Exercice from '../Exercice.js'
import { listeQuestionsToContenu, randint, abs, reduireAxPlusB, texFractionReduite, pgcd } from '../../modules/outils.js'
import { repere2, courbe2, segment, tracePoint, labelPoint, point, mathalea2d } from '../../modules/2d.js'

export const titre = 'Lecture graphique des coefficients d\'une équation réduite '

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

    for (let i = 0, a, b, r, f, c, d, s1, s2, t, l, texte, texteCorr, cpt = 0;
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
      if (this.sup === 2) { // cas du coeff directeur fractionnaire
        a = randint(-5, 5) // numérateut coefficient directeur
        b = randint(-5, 5) // ordonnée à l'origine
        d = randint(2, 5) // dénominateur coefficient directeur
        if (a === 0 && b === 0) {
          a = 1
          d = 1
        }// On évite la situation de double nullité
        r = repere2()// On définit le repère
        f = x => (a / d) * x + b // On définit la fonction affine
        c = courbe2(f, { repere: r, color: 'red' })// On définit l'objet qui tracera la courbe dans le repère

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
        texteCorr += `On lit ici que : $A(0;${b}) \\in (d)$.<br>`
        texteCorr += `On peut alors conclure que l'ordonnée à l'origine est : $b=${b}$. <br>`
        texteCorr += 'On peut lire ensuite le coefficient directeur $a$ de la droite $(d)$.<br>'
        texteCorr += 'On sait que $a=\\dfrac{\\text{Dénivelé vertical}}{\\text{Déplacement horizontal}}$'
        if (a !== 0) {
          texteCorr += '<br>On cherche un déplacement horizontal correspondant à un déplacement vertical entier.'
          texteCorr += `<br>On lit que pour un déplacement vers la droite de ${d} unités, il faut `
        }
        if (a > 0) { texteCorr += 'monter de ' }
        if (a < 0) { texteCorr += 'descendre de ' }
        if (a !== 0) {
          texteCorr += `${abs(a)} unités.`
          texteCorr += `<br>Il vient : $a=\\dfrac{${a}}{${d}}$`
          if (pgcd(a, d) !== 1) {
            texteCorr += `=${texFractionReduite(a, d)}$`
          }
        }
        if (a === 0) {
          texteCorr += '<br>La droite est horizontale, donc le coefficient directeur est nul.'
        }
        texteCorr += '<br>On peut en déduire que l\'équation réduite de la droite $(d)$ est : $y='

        if (a !== 0) { texteCorr += `${texFractionReduite(a, d)}x` }
        if (b !== 0) { texteCorr += `+ ${b}` }
        texteCorr += '$.'
        if (a > 0) {
          s1 = segment(0, b - a, -d, b - a, 'blue')
          s1.epaisseur = 4
          s2 = segment(0, b - a, 0, b, 'blue')
        }
        if (a < 0) {
          s1 = segment(0, b, d, b, 'blue')
          s1.epaisseur = 4
          s2 = segment(d, b - abs(a), d, b, 'blue')
        }
        s2.epaisseur = 4
        const A = point(0, b, 'A')
        t = tracePoint(A, 'red') // Variable qui trace les points avec une croix
        l = labelPoint(A)// Variable qui trace les nom s A et B
        l.color = 'red'
        if (a !== 0) {
          texteCorr += mathalea2d({
            xmin: -6,
            ymin: -6,
            xmax: 6,
            ymax: 6

          }, r, f, s1, s2, t, l, c)
        }// On trace le graphique
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
  this.besoinFormulaireNumerique = ['Types de question :', 2, '1 : Valeurs entières.\n2 : Valeurs fractionnaires.']
}
