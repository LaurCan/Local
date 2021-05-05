import Exercice from '../ClasseExercice.js';
import {listeQuestionsToContenu,randint,combinaisonListes,lettreDepuisChiffre,printlatex} from '../../modules/outils.js'
export const titre = 'Utiliser la distributivité (simple ou double) et réduire'

/**
* Utiliser la simple ou la double distributivité et réduire l'expression
*
* @Auteur Rémi Angot
* 3L11-3
*/
export default function Distributivite_simple_double_reduction() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = titre;
	this.consigne = "Développer et réduire les expressions suivantes.";
	this.nbQuestions = 5;
	this.nbCols = 1;
	this.nbColsCorr = 1;
	sortieHtml ? this.spacingCorr = 2 : this.spacingCorr = 1;

	this.nouvelleVersion = function () {
		this.listeQuestions = []; // Liste de questions
		this.listeCorrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = ['cx+e(ax+b)', 'ex+(ax+b)(cx+d)', 'e+(ax+b)(cx+d)', 'e-(ax+b)(cx+d)', '(ax*b)(cx+d)', 'e(ax+b)-(d+cx)'];
		let liste_type_de_questions = combinaisonListes(type_de_questions_disponibles, this.nbQuestions); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texteCorr, a, b, c, d, e, cpt = 0; i < this.nbQuestions && cpt < 50;) {
			a = randint(-11, 11, 0);
			b = randint(-11, 11, 0);
			c = randint(-11, 11, 0);
			d = randint(-11, 11, 0);
			e = randint(-11, 11, 0);
			switch (liste_type_de_questions[i]) {
				case 'cx+e(ax+b)':
					texte = `$${lettreDepuisChiffre(i + 1)}=${printlatex(`${c}*x+(${e})*(${a}*x+(${b}))`)}$`;
					texteCorr = `$${lettreDepuisChiffre(i + 1)}=${printlatex(`${c}*x+(${e})*(${a}*x+(${b}))`)}$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`${c}*x+(${e * a})*x+(${e * b})`)}$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`${c + e * a}*x+(${e * b})`)}$`;
					break;
				case 'ex+(ax+b)(cx+d)':
					texte = `$${lettreDepuisChiffre(i + 1)}=${printlatex(`${e}*x+(${a}*x+(${b}))*(${c}x+(${d}))`)}$`;
					texteCorr = `$${lettreDepuisChiffre(i + 1)}=${printlatex(`${e}*x+(${a}*x+(${b}))*(${c}x+(${d}))`)}$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`${e}*x+(${a * c})*x^2+(${a * d})*x+(${b * c})*x+(${b * d})`)}$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`${a * c}*x^2+(${e + b * c + a * d})*x+(${b * d})`)}$`;
					break;
				case 'e+(ax+b)(cx+d)':
					texte = `$${lettreDepuisChiffre(i + 1)}=${printlatex(`${e}+(${a}*x+(${b}))*(${c}x+(${d}))`)}$`;
					texteCorr = `$${lettreDepuisChiffre(i + 1)}=${printlatex(`${e}+(${a}*x+(${b}))*(${c}x+(${d}))`)}$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`${e}+(${a * c})*x^2+(${a * d})*x+(${b * c})*x+(${b * d})`)}$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`${a * c}*x^2+(${b * c + a * d})*x+(${e + b * d})`)}$`;
					break;
				case 'e-(ax+b)(cx+d)':
					texte = `$${lettreDepuisChiffre(i + 1)}=${e}-${printlatex(`(${a}*x+(${b}))*(${c}x+(${d}))`)}$`;
					texteCorr = `$${lettreDepuisChiffre(i + 1)}=${e}-${printlatex(`(${a}*x+(${b}))*(${c}x+(${d}))`)}$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${e}-(${printlatex(`(${a * c})*x^2+(${a * d})*x+(${b * c})*x+(${b * d})`)})$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`${e}+(${-1 * a * c})*x^2+(${-1 * a * d})*x+(${-1 * b * c})*x+(${-1 * b * d})`)}$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`${-1 * a * c}*x^2+(${-1 * b * c - a * d})*x+(${e - b * d})`)}$`;
					break;
				case '(ax*b)(cx+d)':
					a = randint(-3, 3, [0]);
					b = randint(2, 3);
					texte = `$${lettreDepuisChiffre(i + 1)}=(${printlatex(`${a}*x`)}\\times${b})(${printlatex(`${c}*x+(${d})`)})$`;
					texteCorr = `$${lettreDepuisChiffre(i + 1)}=(${printlatex(`${a}*x`)}\\times${b})(${printlatex(`${c}*x+(${d})`)})$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`${a * b}*x`)}\\times(${printlatex(`${c}*x+(${d})`)})$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`${a * b * c}*x^2+(${a * b * d})*x`)}$`;
					break;
				case 'e(ax+b)-(d+cx)':
					texte = `$${lettreDepuisChiffre(i + 1)}=${e}(${printlatex(`${a}*x+(${b})`)})-(${printlatex(`${d}+(${c})*x`)})$`;
					texteCorr = texte;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`(${e * a})*x+(${e * b})`)}-(${printlatex(`${d}+(${c})*x`)})$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`(${e * a})*x+(${e * b})+(${-d})+(${-c})*x`)}$`;
					texteCorr += `<br>$\\phantom{${lettreDepuisChiffre(i + 1)}}=${printlatex(`(${e * a - c})*x+(${e * b - d})`)}$`;
					break;


			}
			if (this.listeQuestions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
				this.listeQuestions.push(texte);
				this.listeCorrections.push(texteCorr);
				i++;
			}
			cpt++;
		}
		listeQuestionsToContenu(this);
	};
}
