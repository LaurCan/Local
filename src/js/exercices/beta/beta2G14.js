import Exercice from '../Exercice.js'
import { context } from '../../modules/context.js'
import {listeQuestionsToContenu,randint,choice, combinaisonListes,ecritureParentheseSiNegatif} from '../../modules/outils.js'
export const titre = 'Déterminer les coordonnées d’un vecteur.'

/**
 * @author Stéphane Guyon
 */
export default function calculer_coordonnees_vecteurs() {
    Exercice.call(this); // Héritage de la classe Exercice()
    this.titre = titre;

    this.nbQuestions = 2;
    this.nbCols = 2;
    this.nbColsCorr = 2;
    this.sup = 1; // 
    this.nouvelleVersion = function () {
        this.listeQuestions = []; // Liste de questions
        this.listeCorrections = []; // Liste de questions corrigées
        let typesDeQuestionsDisponibles = [1];
        let typesDeQuestions

        let listeTypeDeQuestions = combinaisonListes(typesDeQuestionsDisponibles, this.nbQuestions);
        for (let i = 0, ux, uy, xA, yA, xB, yB, texte, texteCorr, cpt = 0; i < this.nbQuestions && cpt < 50;) {
            typesDeQuestions = listeTypeDeQuestions[i];
            switch (typesDeQuestions) {
                // Cas par cas, on définit le type de nombres que l'on souhaite
                // Combien de chiffres ? Quelles valeurs ?
                case 1:


                 
                    break;
                case 2:



                    break;


            }
            if (this.listeQuestions.indexOf(texte) === -1) { // Si la question n'a jamais été posée, on en créé une autre
                this.listeQuestions.push(texte);
                this.listeCorrections.push(texteCorr);
                i++;
            }
            cpt++;
        }
        listeQuestionsToContenu(this);
    };
}
