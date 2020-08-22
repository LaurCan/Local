var liste_des_exercices_disponibles = {
  "CM000": Tables_additions_soustractions,
  "CM001": Tables_de_multiplications,
  "CM002": Tables_de_divisions,
  "CM003": Tables_de_multiplications_et_divisions,
  "CM004": Quatre_operations,
  "CM005": Ajouter9,
  "CM006": Soustraire9,
  "CM007": Ajouter11,
  "CM008": Soustraire11,
  "CM009": Moitie,
  "CM010": Tiers,
  "CM011": Quart,
  "CM012": Complement_a_100,
  "CM013": Complement_a_une_dizaine,
  "CM014": Double_moitie_tiers_triple,
  "CM015": Somme_de_deux_nombres_maries,
  "CM016": Diviser_par_10_100_1000,
  "CM017": Diviser_decimal_par_10_100_1000,
  "CM018": Somme_de_deux_nombres_maries_et_un_entier,
  "CM019": Le_compte_est_bonV3,
  "CM020": Le_compte_est_bonV4,
  "BetaCM021": Compte_Est_Bon,
  "6C10": Additions_soustractions_multiplications_posees,
  "6C11": Divisions_euclidiennes,
  "6C10-1": Tables_de_multiplications,
  "6C10-2": Exercice_tables_de_multiplications_et_multiples_de_10,
  "6C10-3": Exercice_tables_de_multiplications_et_decimaux,
  "6C10-4": Exercice_tables_d_additions,
  "6C13": Vocabulaire_et_operations,
  "6C20": Additionner_soustraires_decimaux,
  "6C21": Divisions_euclidiennes_niv2,
  "6C30": Multiplier_decimaux,
  "6C30-1": Multiplier_decimaux_par_10_100_1000,
  "6C31": Division_decimale,
  "6C32": Probleme_course,
  "6C33": Priorites,
  "6D10": Conversions_de_durees,
  "6D101": Heures_decimales,
  "6D11": Somme_de_durees,
  "6D12": Calculs_de_durees_ou_d_horaires,
  "6G10": Notation_segment_droite_demi_droite,
  "6G10-1": Description_segment_droite_demi_droite,
  "6G11": Tracer_des_perpendiculaires,
  "6G12": Tracer_des_paralleles,
  "6G12-1": Tracer_des_perpendiculaires_et_des_paralleles,
  "beta6G20" : Nommer_et_coder_des_polygones,
  "6G20-2": Vocabulaire_des_triangles_6e,
  "6G23-2": Tracer_triangle_2_angles,
  "6G24": Transformations_6e,
  "6G25-1": Pavages_et_reflexion,
  "6G25-2": Pavages_et_symetries,
  "6M11-1": Perimetre_ou_aire_de_carres_rectangles_triangles,
  "6M11-2": Perimetre_ou_aire_de_figures_composees,
  "6M10": Reglages_6M10,
  "6M12": Reglages_6M12,
  "6M20": Aire_de_triangles,
  "6M22": Reglages_6M22,
  "6M22-1": Perimetre_aire_disques,
  "6M22-2": Perimetre_aire_et_portions_de_disques,
  "6M23": Exercice_conversions_aires,
  "6M25": Connaitre_formules_de_perimetre_et_aires,
  "6M30": Calcul_de_volumes_6e,
  "6M31": Exercice_conversions_volumes,
  "6M31-2": Unites_de_volumes_et_de_capacite,
  "6N10-1": Exercice_numeration_entier,
  "6N10-2": Decomposition_nombre_decimal,
  "6N11": Lire_abscisse_entiere,
  "6N11-2": Placer_un_point_abscisse_entiere,
  "6N12": Exercice_6N12,
  "6N13": Exercice_6N13,
  "6N20": Exercice_fractions_decomposer,
  "6N20-2": Exercice_fractions_differentes_ecritures,
  "6N21": Lire_abscisse_fractionnaire,
  "6N23": Exercice_ecriture_decimale_a_partir_de_fraction_decimale,
  "6N23-1": Exercice_differentes_ecritures_nombres_decimaux,
  "6N24": Exercice_6N24,
  "6N24-1": Exercice_multiplier_ou_diviser_un_nombre_entier_par_10_100_1000,
  "6N30": Lire_abscisse_decimale,
  "6N30-2": Placer_points_sur_axe,
  "6N31": Comparer_decimaux,
  "6N33": Fraction_d_un_nombre,
  "6N33-1": Pourcentage_d_un_nombre,
  "6N34": Reglages_6N34,
  "6N41": Egalites_entre_fractions,
  "6N43": Criteres_de_divisibilite,
  "6N43-2": Tableau_criteres_de_divisibilite,
  "6P10": Proportionnalite_pas_proportionnalite,
  "6P11": Proportionnalite_par_linearite,
  "6P11-1": Proportionnalite_par_linearite_bis,
  "5A10": Liste_des_diviseurs_5e,
  "5A11": Premier_ou_pas_5e,
  "5A13": Exercice_decomposer_en_facteurs_premiers,
  "5C11": Traduire_une_phrase_par_une_expression,
  "5C11-1": Traduire_une_expression_par_une_phrase,
  "5C11-2": Ecrire_une_expression_mathador,
  "5C12": Calculer_une_expression_numerique,
  "5C12-1": Traduire_une_phrase_par_une_expression_et_calculer,
  "5G10": Symetrie_axiale_5e,
  "5G12": Pavages_et_demi_tour,
  "5G11": Transformations_5e,
  "5G10-1" : Symetrie_axiale_point_5e,
  "5G10-2" : Symetrie_axiale_figure_5e,
  "5G11-1" : Symetrie_centrale_point,
  "5G11-2" : Symetrie_centrale_figure,
  "5G21-1": Constructibilite_des_triangles_longueurs,
  "5G20-1": Vocabulaire_des_triangles_5e,
  "5G22": DroiteRemarquableDuTriangle,
  "5G31": Exercice_angles_triangles,
  "5G31-1": Constructibilite_des_triangles_angles,
  "5N13": Exercice_fractions_simplifier,
  "5N13-2": Egalites_entre_fractions,
  "5N110": Variation_en_pourcentages,
  "5N14": Exercice_comparer_deux_fractions,
  "5N14-2": Exercice_comparer_quatre_fractions,
  "5N20": Exercice_additionner_des_fractions_5e,
  "5N20-2": Exercice_additionner_ou_soustraire_des_fractions_5e,
  "5L10": Ecrire_une_expression_litterale,
  "5L10-1": Traduire_une_phrase_par_une_expression_litterale,
  "5L10-2": Traduire_un_programme_de_calcul,
  "5L10-3": Traduire_une_expression_litterale_par_une_phrase,
  "5L12": Reduire_une_expression_litterale,
  "5L12-1": Reduire_dinstinction_somme_produit,
  "5L13": Calculer_la_valeur_d_une_expression_litterale,
  "5L13-1": Calculer_une_expression_litterale,
  "5L13-2": Exercice_substituer,
  "5L13-3": Traduire_une_phrase_par_une_expression_litterale_et_calculer,
  "5L13-4": Calculer_une_expression_litteraleBis,
  "5L14": Tester_une_egalite,
  "5M10": Aire_du_parallelogramme,
  "5M20": Calcul_de_volumes_5e,
  "5R11": Lire_abscisse_relative,
  "5R11-2": Placer_points_sur_axe_relatifs,
  "5R12": Reperage_point_du_quart_de_plan,
  "5R12-2": Reperage_point_du_plan,
  "5R20": Exercice_additions_relatifs,
  "5R20-2": Exercice_additions_relatifs_a_trou,
  "5R20-3": Exercice_additions_de_5_relatifs, //on pourrait le corriger avec regroupement des termes de même signe
  "5R21": Exercice_soustractions_relatifs,
  "5R22": Exercice_additions_et_soustraction_de_relatifsV2,
  "5R22-2": Exercice_simplification_somme_algebrique,
  "5S13": Calculer_des_frequences,
  "5S14": Calculer_des_moyennes,
  "5S21": fonctions_probabilite1,
  "4C10-0": Signe_produit_quotient_relatifs,
  "4C10-1": Signe_produit_relatifs,
  "4C10-2": Signe_quotient_relatifs,
  "4C10-3": Exercice_multiplications_relatifs,
  "4C25-0": Problemes_additifs_fractions,
  "4C30-1": Puissances_encadrement,
  "4G40": Transformations_4e,
  "4L10": Exercice_developper,
  "4L13-0": Mettre_en_equation_sans_resoudre,
  "4L14-0": Tester_si_un_nombre_est_solution_d_une_equation,
  "4L14-1": Tester_si_un_nombre_est_solution_d_une_equation_deg1,
  "4L14-2": Tester_si_un_nombre_est_solution_d_une_equation_deg2,
  "beta4L15-0": Trouver_erreur_resol_eq_deg1,
  "4L20": Exercice_equation1,
  "4M30": Calcul_de_volumes_4e,
  "4N10": Exercice_additionner_des_fractions,
  "4N11": Exercice_additionner_ou_soustraire_des_fractions,
  "4N12": Exercice_trouver_l_inverse,
  "4N13": Exercice_multiplier_fractions,
  "4N14": Exercice_diviser_fractions,
  "4N15": Exercice_additionner_fraction_produit,
  "4N21": Puissances_d_un_relatif_1,
  "4N21-1": Puissances_d_un_relatif_2,
  "4N21-2": Puissances_de_dix,
  "4F12": Exploiter_representation_graphique,
  "4P10": Problemes_grandeurs_composees,
  "4P10-1" : Graphiques_et_proportionnalite,
  "4P20-0": Forme_litterale_introduire_une_lettre,
  "4G11": Pavages_et_translation,
  "4G20": Exercice_Pythagore,
  "4G20-1": Egalite_Pythagore,
  "4G20-2": Racine_caree_de_carres_parfaits,
  "4G21": Reciproque_Pythagore,
  "4G22": Problemes_Pythagore,
  "4G30": Thales_4eme,
  "4G31": Reciproque_Thales_4eme,
  "4G40": Exercice_Trigo_longueurs_4e,
  "4G41": Exercice_Trigo_angles_4e,
  "3A10": DivisionEuclidienne_multiplesDiviseurs_Criteres,
  "3A11": Premier_ou_pas,
  "3A11-1": Premier_ou_pas_critere_par7_par11,
  "3A11-2": Decomposition_facteurs_premiers,
  "3A11-3": Lister_Diviseurs_Par_Decomposition_facteurs_premiers,
  "3A12": Fractions_irreductibles,
  "3A13": PPCM_Engrenages,
  "3M30": Calcul_de_volumes_3e,
  "3L10": Oppose_expression,
  "3L10-1": Parentheses_precedes_de_moins_ou_plus,
  "3L11": Exercice_developper,
  "3L11-1": Double_distributivite,
  "3L11-2": Reduction_si_possible,
  "3L11-3": Distributivite_simple_double_reduction,
  "3L11-4": Factoriser_par_nombre_ou_x,
  "3L12-1": Developper_Identites_remarquables3,
  "3L12": Factoriser_Identites_remarquables3,
  "3L13": Exercice_equation1, //identique à 4L20
  "3L13-1": Exercice_equation1_2,
  "3L14": Resoudre_une_equation_produit_nul,
  "3L14-1": Resoudre_une_equation_produit_nul_niv2,
  "3L15": Resoudre_une_equation_x2_egal_A,
  "3P10": Evolutions_en_pourcentage,
  "3P10-1": Coefficient_evolution,
  "3G10-1": Transformations_du_plan_et_coordonnees,
  "3G10-2": Transformations_3e,
  "3G12": Pavages_et_rotation,
  "3G20": Exercice_Thales,
  "3G20-1": Problemes_Thales,
  "3G21": Reciproque_Thales,
  "3G22": Agrandissement_reduction,
  "3G23": TrianglesSemblables,
  "3G30": Exercice_Trigo_longueurs,
  "3G31": Exercice_Trigo_angles,
  "3F1-act": fonction_notion_vocabulaire,
  "3F12": fonctions_calculs_d_images,
  "3F12-2": Image_fonction_algebrique,
  "3F12-3": Tableau_de_valeurs,
  "3F12-4": Image_graphique,
  "3F13": Antecedent_graphique,
  "3F21": Lecture_expression_fonctions_lineaires,
  "3F21-1": Lecture_expression_fonctions_affines,
  "3S15": Calculer_des_etendues,
  "3S20": fonctions_probabilite2,
  "2N10": Existence_d_une_racine_carree,
  "2N10-1": proprietes_racine_carree,
  "2N11": Extraire_un_carre_parfait_d_une_racine_carree,
  "2N11-1": Simplifier_une_somme_de_racines_carrees,
  "2N12": Double_distributivité_avec_racine_carree,
  "2N12-1": identites_remarquables_et_racine_carree,
  "2N20": ensemble_de_nombres,
  "2N21": parite,
  "2N22": valeur_absolue,
  "2N23": valeur_absolue_et_equation,
  "2N24": intervalles_de_R,
  "2N25": union_et_intersection_intervalles_de_R,
  "2G10": Distance,
  "2G11": Milieu,
  "2G12": Modelisation_coordonnees,
  "2L10": Developper_Identites_remarquables2,
  "2L11": Factoriser_Identites_remarquables2,
  "PEA11": Passer_d_une_base_a_l_autre,
  "PEA11-1": Passer_de_la_base_12_ou_16_a_la_10,
  P001: Code_LaTeX_personnalise,
  // 'P002': LaTeX_static,
  P003: feuille_d_axes_gradues,
  cours: Questions_de_cours,
  LaTeX: Code_LaTeX_personnalise,
  // 'Perso' : HTML_personnalise,
  // 'TsvgjsKatex' : tests_SVGJS_KATEX,  
};

//Pour modifier les exercices lorsqu'ils sont en mode diaporama
var est_diaporama = false;

if (window.location.href.indexOf("cm.html") > 0) {
  est_diaporama = true;
}

//Efface de la liste des exercices disponibles tout ceux qui n'ont pas de version HTML
if (sortie_html) {
  var codeMG32 = "";
}

for (var i in liste_des_exercices_disponibles) {
  let exercice = new liste_des_exercices_disponibles[i]();
  if (sortie_html && exercice.pas_de_version_HMTL) {
    delete liste_des_exercices_disponibles[i];
  }
  if (!sortie_html && exercice.pas_de_version_LaTeX) {
    delete liste_des_exercices_disponibles[i];
  }
}

/**
 * Classe parente de tous les exercices
 *
 * @Auteur Rémi Angot
 */
function Exercice() {
  // Classe parente de tous les exercices qui seront créés
  this.titre = "";
  this.consigne = "";
  this.consigne_correction = "";
  this.liste_questions = [];
  this.liste_corrections = [];
  this.introduction = "";
  this.contenu = "";
  this.contenu_correction = "";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.spacing = 1.5;
  this.spacing_corr = 1;
  this.beamer = false;

  this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
  this.besoin_formulaire_texte = false; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
  this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];

  this.consigne_modifiable = true;
  this.nb_questions_modifiable = true;
  this.nb_cols_modifiable = true;
  this.nb_cols_corr_modifiable = true;
  this.spacing_modifiable = true;
  this.spacing_corr_modifiable = true;
  this.correction_detaillee_disponible = false;
  this.correction_detaillee = true;
  this.bouton_aide = false;
  // this.bouton_aide = modal_texte_court(numero_de_l_exercice,texte,label_bouton="Aide",icone="info circle")
  // this.bouton_aide = modal_texte_long(numero_de_l_exercice,titre,texte,label_bouton="Aide",icone="info circle")
  // this.bouton_aide = modal_youtube(numero_de_l_exercice,id_youtube,texte,label_bouton="Aide - Vidéo",icone="youtube")
  // this.bouton_aide = modal_pdf(numero_de_l_exercice,url_pdf,texte="Aide",label_bouton="Aide - PDF",icone="file pdf")
  this.pas_de_version_LaTeX = false;
  this.MG32editable = false; //pas d'interface par défaut pour les figures MG32
  this.nouvelle_version = function (numero_de_l_exercice) {};
  this.liste_packages = []; // string ou liste de string avec le nom des packages spécifiques à ajouter dans le préambule
}

function feuille_d_axes_gradues() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Tracer des droites graduées";
  this.consigne = "";
  this.nb_questions = 1;
  this.nb_questions_modifiable = true;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.spacing = 3;
  this.sup = 10;
  this.consigne_modifiable = false;
  this.nb_questions_modifiable = false;
  this.nb_cols_modifiable = false;
  this.nb_cols_corr_modifiable = false;
  this.spacing_modifiable = false;
  this.spacing_corr_modifiable = false;
  this.liste_packages = "axes_gradues";

  this.nouvelle_version = function (numero_de_l_exercice) {
    let pas;
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = ""; // Liste de questions
    this.contenu_correction = ""; // Liste de questions corrigées
    pas = parseInt(this.sup);
    for (let i = 0, id_unique, texte; i < 16; i++) {
      if (sortie_html) {
        id_unique = `${i}_${Date.now()}`;
        this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg${numero_de_l_exercice}${id_unique}`,
          "",
          6,
          1,
          pas,
          [],
          [],
          false
        );
      } else {
        //sortie Latex
        texte = Latex_reperage_sur_un_axe(2, " ", 1, pas, [], [], false);
        this.liste_questions.push(texte);
      }
    }
    if (!sortie_html)
      liste_de_question_to_contenu_sans_numero_et_sans_consigne(this);
  };
  this.besoin_formulaire_numerique = [`Nombres de parts`, 10, ""];
}

/**
 * Lire l'abscisse entière d'un point
 * @Auteur Jean-Claude Lhote et Rémi Angot
 */
function Lire_abscisse_entiere() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Lire l'abscisse entière d'un point (grands nombres)";
  this.consigne = "Lire l'abscisse de chacun des points suivants.";
  this.nb_questions = 3;
  this.nb_questions_modifiable = true;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.sup = 4;
  this.liste_packages = ["tkz-euclide"];

  this.nouvelle_version = function (numero_de_l_exercice) {
    // numero_de_l_exercice est 0 pour l'exercice 1
    let type_de_questions;
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = ""; // Liste de questions
    this.contenu_correction = ""; // Liste de questions corrigées
    if (this.sup == 4)
      type_de_questions = combinaison_listes([1, 2, 3], this.nb_questions);
    else
      type_de_questions = combinaison_listes(
        [parseInt(this.sup)],
        this.nb_questions
      );

    this.contenu = html_consigne(this.consigne);
    for (
      let i = 0,
        abs0,
        l1,
        l2,
        l3,
        x1,
        x2,
        x3,
        x11,
        x22,
        x33,
        pas1,
        pas2,
        id_unique,
        texte,
        texte_corr;
      i < this.nb_questions;
      i++
    ) {
      l1 = lettre_depuis_chiffre(i * 3 + 1);
      l2 = lettre_depuis_chiffre(i * 3 + 2);
      l3 = lettre_depuis_chiffre(i * 3 + 3);
      switch (type_de_questions[i]) {
        case 1: // Placer des entiers sur un axe (milliers)
          abs0 = randint(1, 9) * 1000;
          pas1 = 0.001;
          pas2 = 10;
          break;

        case 2: // Placer des entiers sur un axe (dizaines de mille)
          abs0 = randint(5, 15) * 10000;
          pas1 = 0.0001;
          pas2 = 10;
          break;

        case 3: // Placer des entiers sur un axe (centaines de mille)
          abs0 = randint(35, 85) * 100000;
          pas1 = 0.00001;
          pas2 = 10;
          break;
      }
      x1 = randint(0, 2);
      x2 = randint(3, 4);
      x3 = randint(5, 6);
      x11 = randint(1, 9);
      x22 = randint(1, 9);
      x33 = randint(1, 3);
      if (sortie_html) {
        id_unique = `${i}_${Date.now()}`;
        this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [
            [l1, x1, x11],
            [l2, x2, x22],
            [l3, x3, x33],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg_corr${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
      } else {
        //sortie Latex
        texte = Latex_reperage_sur_un_axe(
          2,
          abs0,
          pas1,
          pas2,
          [
            [l1, x1, x11],
            [l2, x2, x22],
            [l3, x3, x33],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        texte_corr = Latex_reperage_sur_un_axe(
          2,
          abs0,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
      }
    }
    if (!sortie_html) liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    4,
    "1 : Milliers\n2 : Dizaines de mille\n3 : Centaines de mille\n4 : Mélange",
  ];
}
/**
 * Placer un point d'abscisse entière
 * @Auteur Jean-Claude Lhote et Rémi Angot
 */
function Placer_un_point_abscisse_entiere() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Placer un point d'abscisse entière (grands nombres)";
  this.consigne = " Placer trois points sur un axe gradué.";
  this.nb_questions = 5;
  this.nb_questions_modifiable = true;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.sup = 1;
  this.type_exercice = "SVGJS";
  this.liste_packages = "tkz-euclide";

  this.nouvelle_version = function (numero_de_l_exercice) {
    // numero_de_l_exercice est 0 pour l'exercice 1
    let type_de_questions;
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = ""; // Liste de questions
    this.contenu_correction = ""; // Liste de questions corrigées
    if (this.sup == 4)
      type_de_questions = combinaison_listes([1, 2, 3], this.nb_questions);
    else
      type_de_questions = combinaison_listes(
        [parseInt(this.sup)],
        this.nb_questions
      );

    this.contenu = html_consigne(this.consigne);
    for (
      let i = 0,
        abs0,
        abs1,
        abs2,
        abs3,
        l1,
        l2,
        l3,
        x1,
        x2,
        x3,
        x11,
        x22,
        x33,
        pas1,
        pas2,
        id_unique,
        texte,
        texte_corr;
      i < this.nb_questions;
      i++
    ) {
      l1 = lettre_depuis_chiffre(i * 3 + 1);
      l2 = lettre_depuis_chiffre(i * 3 + 2);
      l3 = lettre_depuis_chiffre(i * 3 + 3);

      switch (type_de_questions[i]) {
        case 1: // Placer des entiers sur un axe (milliers)
          abs0 = randint(1, 9) * 1000;
          pas1 = 0.001;
          pas2 = 10;
          break;

        case 2: // Placer des entiers sur un axe (dizaines de mille)
          abs0 = randint(5, 15) * 10000;
          pas1 = 0.0001;
          pas2 = 10;
          break;

        case 3: // Placer des entiers sur un axe (centaines de mille)
          abs0 = randint(35, 85) * 100000;
          pas1 = 0.00001;
          pas2 = 10;
          break;
      }
      x1 = randint(0, 2);
      x2 = randint(3, 4);
      x3 = randint(5, 6);
      x11 = randint(1, 9);
      x22 = randint(1, 9);
      x33 = randint(1, 3);
      abs1 = arrondi(
        abs0 + x1 / pas1 + x11 / pas1 / pas2,
        type_de_questions[i]
      ); // le type de questions est égal au nombre de décimales.
      abs2 = arrondi(
        abs0 + x2 / pas1 + x22 / pas1 / pas2,
        type_de_questions[i]
      );
      abs3 = arrondi(
        abs0 + x3 / pas1 + x33 / pas1 / pas2,
        type_de_questions[i]
      );
      if (sortie_html) {
        texte_corr = "";
        this.contenu += `<h3> Placer les points : ${l1}(${string_nombre(
          abs1
        )}), ${l2}(${string_nombre(abs2)}), ${l3}(${string_nombre(abs3)})</h3>`;
        id_unique = `${i}_${Date.now()}`;
        this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg_corr${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
      } else {
        //sortie Latex
        texte = `{\\small Placer les points : $${l1}$(${string_nombre(
          abs1
        )}), $${l2}$(${string_nombre(abs2)}), $${l3}$(${string_nombre(
          abs3
        )})}<br>`;
        texte += Latex_reperage_sur_un_axe(
          2,
          abs0,
          pas1,
          pas2,
          [],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        texte_corr = `{\\small Les points $${l1}$(${string_nombre(
          abs1
        )}), $${l2}$(${string_nombre(abs2)}), $${l3}$(${string_nombre(
          abs3
        )}) sont placés ci dessous}<br>`;
        texte_corr += Latex_reperage_sur_un_axe(
          2,
          abs0,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
      }
    }
    if (!sortie_html) liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    4,
    "1 : Ordre de grandeur : milliers\n2 : Ordre de grandeur : dizaines de mille\n3 : centaines de mille\n4 : Mélange",
  ];
}

/**
 * Questions statiques issues d'un fichier Markdown
 *
 * Les thèmes sont des titres de niveaux 2
 *
 * suivies d'une liste qui alterne question et réponse
 * @Auteur Rémi Angot
 */
function Questions_de_cours() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Questions de cours";
  this.consigne = "";
  this.nb_questions = 3;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.consigne_modifiable = false;
  this.sup = ""; // thème des questions
  this.sup2 = "questions_de_cours.txt"; //url des questions
  this.pas_de_version_LaTeX = true;

  this.nouvelle_version = function (numero_de_l_exercice) {
    let liste_questions = []; // Liste de questions
    let liste_corrections = []; // Liste de questions corrigées
    let dictionnaire_de_questions = {};
    let dictionnaire_de_questions_pret = false;
    let contenu_HTML = "";
    let contenu_correction_HTML = "";
    $.get(this.sup2, function (txt) {
      // Récupère le fichier txt et transforme en un dictionnaire {'id_theme':[[questions],[réponses]]}
      let tableau_par_theme = txt
        .match(/##((?=[^#]).|\n)*/g)
        .map((v) => v.trim());
      // Recherche les chaines de caractères commençant par ## et ne comportant pas d'autres #
      for (let i = 0; i < tableau_par_theme.length; i++) {
        let tableau_titre = tableau_par_theme[i].match(/##.*/g);
        let questions_et_reponses = tableau_par_theme[i]
          .match(/\*((?=[^*#]).|\n)*/g)
          .map((v) => v.trim());
        // Recherche les chaines de caractères commençant par * et ne comportant pas d'autres * ou de #
        let titre = tableau_titre[0].replace("## ", "");
        // Récupère le titre du thème sans ##
        let tableau_questions = [];
        let tableau_reponses = [];
        for (let i = 0; i < questions_et_reponses.length; i++) {
          if (i % 2 == 0) {
            //rang pair => questions
            tableau_questions[i / 2] = questions_et_reponses[i].replace(
              "* ",
              ""
            );
            // Supprime les * devant chaque questions
          } else {
            //rang impair => réponses
            tableau_reponses[(i - 1) / 2] = questions_et_reponses[i].replace(
              "* ",
              ""
            );
          }
          dictionnaire_de_questions[titre] = [
            tableau_questions,
            tableau_reponses,
          ];
        }
      }

      // Je n'utilise pas this.nb_questions ou this.sup car this n'est pas clairement défini dans cette fonction
      if (exercice[numero_de_l_exercice].sup == "") {
        exercice[numero_de_l_exercice].sup = choice(
          Object.keys(dictionnaire_de_questions)
        ); // Si on n'a pas spécifié un thème, on en prend un au hasard.
      }

      let nb_questions = exercice[numero_de_l_exercice].nb_question;
      if (dictionnaire_de_questions[exercice[numero_de_l_exercice].sup]) {
        // Si le thème existe dans le dictionnaire alors on adapte le nombre de questions
        nb_questions = Math.min(
          exercice[numero_de_l_exercice].nb_questions,
          dictionnaire_de_questions[exercice[numero_de_l_exercice].sup][0]
            .length
        );
      }
      for (let i = 0; i < nb_questions; i++) {
        liste_questions.push(
          dictionnaire_de_questions[exercice[numero_de_l_exercice].sup][0][i]
        );
        liste_corrections.push(
          dictionnaire_de_questions[exercice[numero_de_l_exercice].sup][1][i]
        );
      }
      shuffle2tableaux(liste_questions, liste_corrections);
      // Mélange les questions et les réponses (sans perdre les associations)
      dictionnaire_de_questions_pret = true;
    });

    let id_unique = `${numero_de_l_exercice}_${Date.now()}`;
    if (sortie_html) {
      this.contenu = `<div id=div_exo${id_unique}></div>`;
      this.contenu_correction = `<div id=div_corr_exo${id_unique}></div>`;
    }

    if (!window.divExist) {
      window.divExist = [];
    } // Si divExist n'existe pas on le créé
    // divExist est un tableau dans lequel on stocke les listenner sur la création des div
    window.divExist[id_unique] = setInterval(function () {
      if ($(`#div_exo${id_unique}`).length && dictionnaire_de_questions_pret) {
        // Attends que le div existe et que le dictionnaire de questions soit prêt
        contenu_HTML = html_enumerate(liste_questions, this.spacing);
        contenu_correction_HTML = html_enumerate(
          liste_corrections,
          this.spacing
        );
        $(`#div_exo${id_unique}`).html(contenu_HTML); //Vide le div pour éviter les SVG en doublon
        $(`#div_corr_exo${id_unique}`).html(contenu_correction_HTML); //Vide le div pour éviter les SVG en doublon
        renderMathInElement(document.body, {
          delimiters: [
            { left: "\\[", right: "\\]", display: true },
            { left: "$", right: "$", display: false },
          ],
          throwOnError: true,
          errorColor: "#CC0000",
          strict: "warn",
          trust: false,
        });
        clearInterval(divExist[numero_de_l_exercice]); //Arrête le timer
      }
    }, 100); // Vérifie toutes les 100ms
  };
  this.besoin_formulaire_texte = ["Thème des questions", "De la forme 6M1"];
  this.besoin_formulaire2_texte = [
    "Liste des questions",
    "URL du fichier texte contenant les questions et réponses.",
  ];
}

/**
 * Lire l'abscisse décimale d'un point
 * @Auteur Jean-Claude Lhote et Rémi Angot
 */
function Lire_abscisse_decimale() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Lire l'abscisse décimale d'un point";
  this.consigne = "Lire l'abscisse de chacun des points suivants.";
  this.nb_questions = 3;
  this.nb_questions_modifiable = true;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.sup = 1;
  this.liste_packages = "tkz-euclide";

  this.nouvelle_version = function (numero_de_l_exercice) {
    // numero_de_l_exercice est 0 pour l'exercice 1
    let type_de_questions;
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = ""; // Liste de questions
    this.contenu_correction = ""; // Liste de questions corrigées
    if (this.sup == 4)
      type_de_questions = combinaison_listes([1, 2, 3], this.nb_questions);
    else
      type_de_questions = combinaison_listes(
        [parseInt(this.sup)],
        this.nb_questions
      );

    this.contenu = html_consigne(this.consigne);
    for (
      let i = 0,
        abs0,
        l1,
        l2,
        l3,
        x1,
        x2,
        x3,
        x11,
        x22,
        x33,
        pas1,
        pas2,
        id_unique,
        texte,
        texte_corr;
      i < this.nb_questions;
      i++
    ) {
      l1 = lettre_depuis_chiffre(i * 3 + 1);
      l2 = lettre_depuis_chiffre(i * 3 + 2);
      l3 = lettre_depuis_chiffre(i * 3 + 3);
      switch (type_de_questions[i]) {
        case 1: // Placer des décimaux sur un axe (1 décimale)
          abs0 = randint(0, 9);
          pas1 = 1;
          pas2 = 10;
          break;

        case 2: // Placer des décimaux sur un axe (2 décimales)
          abs0 = randint(0, 90) / 10;
          pas1 = 10;
          pas2 = 10;
          break;

        case 3: // Placer des décimaux sur un axe (3 décimales)
          abs0 = randint(0, 990) / 100;
          pas1 = 100;
          pas2 = 10;
          break;
      }
      x1 = randint(0, 2);
      x2 = randint(3, 4);
      x3 = randint(5, 6);
      x11 = randint(1, 9);
      x22 = randint(1, 9);
      x33 = randint(1, 3);
      if (sortie_html) {
        id_unique = `${i}_${Date.now()}`;
        this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [
            [l1, x1, x11],
            [l2, x2, x22],
            [l3, x3, x33],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg_corr${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
      } else {
        //sortie Latex
        texte = Latex_reperage_sur_un_axe(
          2,
          abs0,
          pas1,
          pas2,
          [
            [l1, x1, x11],
            [l2, x2, x22],
            [l3, x3, x33],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        texte_corr = Latex_reperage_sur_un_axe(
          2,
          abs0,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
      }
    }
    if (!sortie_html) liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    4,
    "1 : Un chiffre après la virgule\n2 : Deux chiffres après la virgule \n3 : Trois chiffres après la virgule\n4 : Mélange",
  ];
}
/**
 * Lire l'abscisse fractionnaire d'un point
 * @Auteur Jean-Claude Lhote et Rémi Angot
 */
function Lire_abscisse_fractionnaire() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Lire l'abscisse fractionnaire d'un point";
  this.consigne = "Lire l'abscisse de chacun des points suivants.";
  this.nb_questions = 3;
  this.nb_questions_modifiable = true;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.sup = 1;
  this.liste_packages = "tkz-euclide";

  this.nouvelle_version = function (numero_de_l_exercice) {
    // numero_de_l_exercice est 0 pour l'exercice 1
    let type_de_questions;
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = ""; // Liste de questions
    this.contenu_correction = ""; // Liste de questions corrigées
    if (this.sup == 4)
      type_de_questions = combinaison_listes([1, 2, 3], this.nb_questions);
    else
      type_de_questions = combinaison_listes(
        [parseInt(this.sup)],
        this.nb_questions
      );

    this.contenu = html_consigne(this.consigne);
    for (
      let i = 0,
        abs0,
        l1,
        l2,
        l3,
        x1,
        x2,
        x3,
        x11,
        x22,
        x33,
        pas1,
        pas2,
        id_unique,
        texte,
        texte_corr;
      i < this.nb_questions;
      i++
    ) {
      l1 = lettre_depuis_chiffre(i * 3 + 1);
      l2 = lettre_depuis_chiffre(i * 3 + 2);
      l3 = lettre_depuis_chiffre(i * 3 + 3);
      switch (type_de_questions[i]) {
        case 1: // Placer des demis aux quarts sur un axe
          abs0 = 0;
          pas1 = 1;
          pas2 = choice([2, 3, 4]);
          break;

        case 2: // Placer des cinquièmes aux neuvièmes sur un axe
          abs0 = 0;
          pas1 = 1;
          pas2 = randint(5, 9);
          break;

        case 3: // Placer des demis aux neuvièmes à partir d'un entier >=1 sur un axe
          abs0 = randint(1, 5);
          pas1 = 1;
          pas2 = randint(2, 9);
          break;
      }
      x1 = randint(0, 1);
      x2 = randint(2, 3);
      x3 = randint(4, 5);
      x11 = randint(1, pas2 - 1);
      x22 = randint(1, pas2 - 1);
      x33 = randint(1, pas2 - 1);
      if (sortie_html) {
        id_unique = `${i}_${Date.now()}`;
        this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [
            [l1, x1, x11],
            [l2, x2, x22],
            [l3, x3, x33],
          ],
          [
            [abs0 + 1 / pas1, 1, 0],
            [abs0 + 2 / pas1, 2, 0],
            [abs0 + 3 / pas1, 3, 0],
            [abs0 + 4 / pas1, 4, 0],
            [abs0 + 5 / pas1, 5, 0],
            [abs0 + 6 / pas1, 6, 0],
          ],
          false
        );
        this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg_corr${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [abs0 + 1 / pas1, 1, 0],
            [abs0 + 2 / pas1, 2, 0],
            [abs0 + 3 / pas1, 3, 0],
            [abs0 + 4 / pas1, 4, 0],
            [abs0 + 5 / pas1, 5, 0],
            [abs0 + 6 / pas1, 6, 0],
          ],
          true
        );
      } else {
        //sortie Latex
        texte = Latex_reperage_sur_un_axe(
          2,
          abs0,
          pas1,
          pas2,
          [
            [l1, x1, x11],
            [l2, x2, x22],
            [l3, x3, x33],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        texte_corr = Latex_reperage_sur_un_axe(
          2,
          abs0,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          true
        );
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
      }
    }
    if (!sortie_html) liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    4,
    "1 : Demis, tiers ou quarts avec zéro placé\n2 : Des cinquièmes aux neuvièmes avec zéro placé \n3 : Toutes les fractions précédentes mais zéro non visible\n4 : Mélange",
  ];
}

/**
 * Placer un point d'abscisse décimale
 * @Auteur Jean-Claude Lhote et Rémi Angot
 */
function Placer_points_sur_axe() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Placer un point d'abscisse décimale";
  this.consigne = " Placer trois points sur un axe gradué.";
  this.nb_questions = 5;
  this.nb_questions_modifiable = true;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.sup = 1;
  this.type_exercice = "SVGJS";
  this.liste_packages = "tkz-euclide";

  this.nouvelle_version = function (numero_de_l_exercice) {
    // numero_de_l_exercice est 0 pour l'exercice 1
    let type_de_questions;
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = ""; // Liste de questions
    this.contenu_correction = ""; // Liste de questions corrigées
    if (this.sup == 4)
      type_de_questions = combinaison_listes([1, 2, 3], this.nb_questions);
    else
      type_de_questions = combinaison_listes(
        [parseInt(this.sup)],
        this.nb_questions
      );

    this.contenu = html_consigne(this.consigne);
    for (
      let i = 0,
        abs0,
        abs1,
        abs2,
        abs3,
        l1,
        l2,
        l3,
        x1,
        x2,
        x3,
        x11,
        x22,
        x33,
        pas1,
        pas2,
        id_unique,
        texte,
        texte_corr;
      i < this.nb_questions;
      i++
    ) {
      l1 = lettre_depuis_chiffre(i * 3 + 1);
      l2 = lettre_depuis_chiffre(i * 3 + 2);
      l3 = lettre_depuis_chiffre(i * 3 + 3);

      switch (type_de_questions[i]) {
        case 1: // Placer un point sur un axe (1 décimale)
          abs0 = randint(0, 9);
          pas1 = 1;
          pas2 = 10;
          break;

        case 2: // Placer un point sur un axe (2 décimales)
          abs0 = randint(0, 90) / 10;
          pas1 = 10;
          pas2 = 10;
          break;

        case 3: // Placer un point sur un axe (3 décimales)
          abs0 = randint(0, 990) / 100;
          pas1 = 100;
          pas2 = 10;
          break;
      }
      x1 = randint(0, 2);
      x2 = randint(3, 4);
      x3 = randint(5, 6);
      x11 = randint(1, 9);
      x22 = randint(1, 9);
      x33 = randint(1, 3);
      abs1 = arrondi(
        abs0 + x1 / pas1 + x11 / pas1 / pas2,
        type_de_questions[i]
      ); // le type de questions est égal au nombre de décimales.
      abs2 = arrondi(
        abs0 + x2 / pas1 + x22 / pas1 / pas2,
        type_de_questions[i]
      );
      abs3 = arrondi(
        abs0 + x3 / pas1 + x33 / pas1 / pas2,
        type_de_questions[i]
      );

      if (sortie_html) {
        texte_corr = "";
        this.contenu += `<h3>Placer les points : ${l1}(${tex_nombrec(
          abs1
        )}), ${l2}(${tex_nombrec(abs2)}), ${l3}(${tex_nombrec(abs3)})</h3>`;
        id_unique = `${i}_${Date.now()}`;
        this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`;
        SVG_reperage_sur_un_axe(
          `div_svg_corr${numero_de_l_exercice}${id_unique}`,
          abs0,
          6,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
      } else {
        //sortie Latex
        texte = `{\\small Placer les points : $${l1}$(${tex_nombrec(
          abs1
        )}), $${l2}$(${tex_nombrec(abs2)}), $${l3}$(${tex_nombrec(abs3)})}<br>`;
        texte += Latex_reperage_sur_un_axe(
          2.4,
          abs0,
          pas1,
          pas2,
          [],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );
        texte_corr = `{\\small Les points $${l1}$(${tex_nombrec(
          abs1
        )}), $${l2}$(${tex_nombrec(abs2)}), $${l3}$(${tex_nombrec(
          abs3
        )}) sont placés ci dessus}<br>`;
        texte_corr += Latex_reperage_sur_un_axe(
          2.4,
          abs0,
          pas1,
          pas2,
          [
            [l1, x1, x11, true],
            [l2, x2, x22, true],
            [l3, x3, x33, true],
          ],
          [
            [calcul(abs0, 0), 0, 0],
            [calcul(abs0 + 1 / pas1, 0), 1, 0],
          ],
          false
        );

        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
      }
    }
    if (!sortie_html) liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    4,
    "1 : Un chiffre après la virgule\n2 : Deux chiffres après la virgule \n3 : Trois chiffres après la virgule\n4 : Mélange",
  ];
}

/**
 * Conversions de durées.
 * * 1 : H vers min ou H ou min ou Hmin vers s
 * * 2 : h vers j-h
 * * 3 : s vers HMS
 * * 4 : h vers semaines j h
 * * 5 : toutes les conversions
 * @Auteur Rémi Angot
 */
function Conversions_de_durees() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = 5;
  this.titre = "Convertir des durées";
  this.consigne = "Compléter les égalités suivantes";
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.spacing = 2;
  this.nb_questions = 5;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let liste_sous_type_de_questionv1 = combinaison_listes(
      [1, 2, 3, 4],
      this.nb_questions
    );
    let liste_sous_type_de_questionv2 = combinaison_listes(
      [0, 1, 2],
      this.nb_questions
    );
    let type_de_questions = [];
    if (this.sup < 5) {
      type_de_questions = combinaison_listes([this.sup], this.nb_questions);
    }
    if (this.sup == 5) {
      type_de_questions = combinaison_listes([1, 2, 3, 4], this.nb_questions);
    }

    for (
      let i = 0, h, m, s, j, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      if (type_de_questions[i] == 1) {
        let sous_type_de_question = liste_sous_type_de_questionv1[i];
        if (sous_type_de_question == 1) {
          h = randint(2, 11);
          texte = `$${h}~\\text{h en minute}$`;
          texte_corr = `$${h}~\\text{h} = ${h}\\times60~~\\text{min} = ${tex_nombre(
            h * 60
          )}~\\text{min}$`;
        }
        if (sous_type_de_question == 2) {
          h = choice([1, 2, 10, 20]);
          texte = `$${h}~\\text{h en secondes}$`;
          texte_corr = `$${h}~\\text{h} = ${h}\\times3~600~\\text{s} = ${tex_nombre(
            h * 3600
          )}~\\text{s}$`;
        }
        if (sous_type_de_question == 3) {
          m = randint(2, 59);
          texte = `$${m}~\\text{min en secondes}$`;
          texte_corr = `$${m}~\\text{min} = ${m}\\times60~\\text{s} = ${tex_nombre(
            m * 60
          )}~\\text{s}$`;
        }
        if (sous_type_de_question == 4) {
          h = randint(1, 2);
          m = randint(2, 59);
          texte = `$${h}~\\text{h}~${m}~\\text{min en secondes}$`;
          texte_corr = `$${h}~\\text{h}~${m}~\\text{min} = ${h}\\times3~600~\\text{s} + ${m}\\times60~\\text{s} = ${tex_nombre(
            h * 3600
          )}+${tex_nombre(m * 60)}~\\text{s} = ${tex_nombre(
            h * 3600 + m * 60
          )}~\\text{s}$`;
        }
      }
      if (type_de_questions[i] == 2) {
        j = randint(1, 6);
        h = randint(1, 23);
        texte = `$${tex_nombre(h + 24 * j)}~\\text{h en jours et heures}$`;
        texte_corr = `$${tex_nombre(
          h + 24 * j
        )}~\\text{h} = ${j}\\times24~\\text{h} + ${h}~\\text{h} = ${j}~\\text{j}~${h}~\\text{h}$`;
      }

      if (type_de_questions[i] == 3) {
        h = liste_sous_type_de_questionv2[i];
        m = randint(1, 59);
        s = randint(1, 59);
        if (h > 0) {
          texte = `$${tex_nombre(
            h * 3600 + m * 60 + s
          )}~\\text{s au format HMS}$`;
          texte_corr = `$${tex_nombre(
            h * 3600 + m * 60 + s
          )}~\\text{s} = ${tex_nombre(h * 3600)}~\\text{s}+${
            m * 60 + s
          }~\\text{s} =${h}~\\text{h}+${m}\\times60~\\text{s}+${s}~\\text{s}=${h}~\\text{h}~${m}~\\text{min}~${s}~\\text{s}$`;
        } else {
          texte = `$${tex_nombre(m * 60 + s)}~\\text{s au format HMS}$`;
          texte_corr = `$${tex_nombre(
            m * 60 + s
          )}~\\text{s} = ${m}\\times60~\\text{s}+${s}~\\text{s}=${m}~\\text{min}~${s}~\\text{s}$`;
        }
      }
      if (type_de_questions[i] == 4) {
        s = randint(1, 9); // nombre de semaines
        j = randint(1, 6);
        h = randint(1, 23);
        texte = `$${tex_nombre(
          h + 24 * j + 24 * 7 * s
        )}~\\text{h en semaines jours et heures}$`;
        if (s > 1) {
          // pour la gestion du pluriel de semaines
          texte_corr = `$${tex_nombre(h + 24 * j + 24 * 7 * s)}~\\text{h} = ${
            j + 7 * s
          }\\times24~\\text{h} + ${h}~\\text{h} = ${
            j + 7 * s
          }~\\text{j}~${h}~\\text{h} = ${s}\\times7~\\text{j} + ${j}~\\text{j}~${h}~\\text{h} = ${s}~\\text{semaines}~${j}~\\text{j}~${h}~\\text{h}$`;
        } else {
          texte_corr = `$${tex_nombre(h + 24 * j + 24 * 7 * s)}~\\text{h} = ${
            j + 7 * s
          }\\times24~\\text{h} + ${h}~\\text{h} = ${
            j + 7 * s
          }~\\text{j}~${h}~\\text{h} = ${s}\\times7~\\text{j} + ${j}~\\text{j}~${h}~\\text{h} = ${s}~\\text{semaine}~${j}~\\text{j}~${h}~\\text{h}$`;
        }
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    5,
    "1 : Conversions en s ou min\n2 : Conversions en jours-heures \n3 : Conversions en HMS\n4 : Conversions en semaines-jours-heures \n5 : Tous types de conversions",
  ];
}

/**
 * Convertir une heure décimale dans le format HMS
 *
 * La partie décimale est 25, 75 ou un seul chiffre
 * @Auteur Rémi Angot
 */
function Heures_decimales() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Utiliser les heures décimales";
  this.consigne = "Compléter les égalités suivantes";
  this.spacing = 2;
  this.nb_questions = 5;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, partie_entiere, partie_decimale, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      partie_entiere = randint(1, 12);
      partie_decimale = choice([1, 2, 3, 4, 5, 6, 7, 8, 9, 25, 75]);
      texte = `$${partie_entiere},${partie_decimale}~\\text{h}=\\dotfill$`;
      if (partie_decimale == 25) {
        texte_corr = `$${partie_entiere},${partie_decimale}~\\text{h}=${partie_entiere}~\\text{h}+\\dfrac{1}{4}~\\text{h}`;
        texte_corr += `=${partie_entiere}~\\text{h}~15~\\text{min}$`;
      } else if (partie_decimale == 75) {
        texte_corr = `$${partie_entiere},${partie_decimale}~\\text{h}=${partie_entiere}~\\text{h}+\\dfrac{3}{4}~\\text{h}`;
        texte_corr += `=${partie_entiere}~\\text{h}~45~\\text{min}$`;
      } else if (partie_decimale == 5) {
        texte_corr = `$${partie_entiere},${partie_decimale}~\\text{h}=${partie_entiere}~\\text{h}+\\dfrac{1}{2}~\\text{h}`;
        texte_corr += `=${partie_entiere}~\\text{h}~30~\\text{min}$`;
      } else {
        texte_corr = `$${partie_entiere},${partie_decimale}~\\text{h}=${partie_entiere}~\\text{h}+\\dfrac{${partie_decimale}}{10}~\\text{h}`;
        texte_corr += `=${partie_entiere}~\\text{h}+${partie_decimale}\\times6~\\text{min}=${partie_entiere}~\\text{h}~${
          partie_decimale * 6
        }~\\text{min}$`;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        if (est_diaporama) {
          texte = texte.replace("=\\dotfill", "");
        }
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
}

/**
 * Additions de durées de différents :
 * * MS+MS=1hMS sans retenue sur les s
 * * MS+MS=1hMS avec retenue
 * * HM+HM avec retenue
 * * HMS+HMS avec retenue sur les min
 * * HMS+HMS avec retenues min et s
 * @Auteur Rémi Angot
 */
function Somme_de_durees() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Additionner des durées";
  this.consigne = "Compléter les égalités suivantes";
  this.sup = 1; // 2 niveaux de difficultés
  this.spacing = 2;
  this.nb_questions = 5;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions;

    if (this.sup == 1) {
      type_de_questions = combinaison_listes([1, 3], this.nb_questions);
    } else {
      type_de_questions = combinaison_listes(
        [1, 2, 3, 4, 5],
        this.nb_questions
      );
    }
    for (
      let i = 0, h1, h2, m1, m2, s1, s2, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      if (type_de_questions[i] == 1) {
        s1 = randint(11, 39);
        s2 = randint(1, 20);
        m1 = randint(20, 59);
        m2 = randint(40, 59);
        texte = `$${m1}~\\text{min}~${s1}~\\text{s}+${m2}~\\text{min}~${s2}~\\text{s}=\\dotfill$`;
        texte_corr = `$${m1}~\\text{min}~${s1}~\\text{s}+${m2}~\\text{min}~${s2}~\\text{s}= ${
          m1 + m2
        }~\\text{min}~${s1 + s2}~\\text{s}= 1~\\text{h}~${
          m1 + m2 - 60
        }~\\text{min}~${s1 + s2}~\\text{s}$`;
      }
      if (type_de_questions[i] == 2) {
        s1 = randint(21, 39);
        s2 = randint(40, 59);
        m1 = randint(20, 59);
        m2 = randint(40, 59);
        texte = `$${m1}~\\text{min}~${s1}~\\text{s}+${m2}~\\text{min}~${s2}~\\text{s}=\\dotfill$`;
        texte_corr = `$${m1}~\\text{min}~${s1}~\\text{s}+${m2}~\\text{min}~${s2}~\\text{s}= ${
          m1 + m2
        }~\\text{min}~${s1 + s2}~\\text{s} = ${m1 + m2 + 1}~\\text{min}~${
          s1 + s2 - 60
        }~\\text{s} = 1~\\text{h}~${m1 + m2 - 60}~\\text{min}~${
          s1 + s2 - 60
        }~\\text{s}$`;
      }
      if (type_de_questions[i] == 3) {
        h1 = randint(2, 12);
        h2 = randint(2, 11);
        m1 = randint(30, 50);
        m2 = randint(30, 50);
        texte = `$${h1}~\\text{h}~${m1}~\\text{min}+${h2}~\\text{h}~${m2}~\\text{min}=\\dotfill$`;
        texte_corr = `$${h1}~\\text{h}~${m1}~\\text{min}+${h2}~\\text{h}~${m2}~\\text{min}= ${
          h1 + h2
        }~\\text{h}~${m1 + m2}~\\text{min} = ${h1 + h2 + 1}~\\text{h}~${
          m1 + m2 - 60
        }~\\text{min}$`;
      }
      if (type_de_questions[i] == 4) {
        h1 = randint(2, 12);
        h2 = randint(2, 11);
        m1 = randint(30, 50);
        m2 = randint(30, 50);
        s1 = randint(2, 55);
        s2 = randint(1, 60 - s1 - 1);
        texte = `$${h1}~\\text{h}~${m1}~\\text{min}~${s1}~\\text{s}+${h2}~\\text{h}~${m2}~\\text{min}~${s2}~\\text{s}=\\dotfill$`;
        texte_corr = `$${h1}~\\text{h}~${m1}~\\text{min}~${s1}~\\text{s}+${h2}~\\text{h}~${m2}~\\text{min}~${s2}~\\text{s}= ${
          h1 + h2
        }~\\text{h}~${m1 + m2}~\\text{min}~${s1 + s2}~\\text{s} = ${
          h1 + h2 + 1
        }~\\text{h}~${m1 + m2 - 60}~\\text{min}~${s1 + s2}~\\text{s}$`;
      }
      if (type_de_questions[i] == 5) {
        h1 = randint(2, 12);
        h2 = randint(2, 11);
        m1 = randint(30, 50);
        m2 = randint(30, 50);
        s1 = randint(2, 55);
        s2 = randint(60 - s1, 59);
        texte = `$${h1}~\\text{h}~${m1}~\\text{min}~${s1}~\\text{s}+${h2}~\\text{h}~${m2}~\\text{min}~${s2}~\\text{s}=\\dotfill$`;
        texte_corr = `$${h1}~\\text{h}~${m1}~\\text{min}~${s1}~\\text{s}+${h2}~\\text{h}~${m2}~\\text{min}~${s2}~\\text{s}=`;
        texte_corr += ` ${h1 + h2}~\\text{h}~${m1 + m2}~\\text{min}~${
          s1 + s2
        }~\\text{s} = ${h1 + h2}~\\text{h}~${m1 + m2 + 1}~\\text{min}~${
          s1 + s2 - 60
        }~\\text{s} =${h1 + h2 + 1}~\\text{h}~${m1 + m2 + 1 - 60}~\\text{min}~${
          s1 + s2 - 60
        }~\\text{s}$`;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        if (est_diaporama) {
          texte = texte.replace("=\\dotfill", "");
        }
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ["Niveau de difficulté", 2]; //"1 : Additions simples\n2 : Additions avec d'éventuelles conversions"]
}

/**
 * Problèmes où il faut calculer la durée d'un évèbement ou un horaire.
 * Paramétrage possible :
 * * 1 : calculs de durées
 * * 2 : calculer l'heure de début
 * * 3 : calculer l'heure de fin
 * * 4 : mélange des 3 types précédents
 * @Auteur Rémi Angot
 */
function Calculs_de_durees_ou_d_horaires() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Calculer des durées ou déterminer un horaire";
  this.consigne = "";
  this.sup = 4;
  this.spacing = 2;
  this.nb_questions = 3;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    const type_de_contexte = combinaison_listes(
      [1, 2, 3, 4, 5],
      this.nb_questions
    );
    let type_de_questions; // 1 : calcul de durées // 2 : calcul de l'horaire de début // 3 : calcul de l'horaire de fin // 4 : mélange

    if (this.sup < 4) {
      // que des questions de niveau 1 ou que des questions de niveau 2
      type_de_questions = combinaison_listes([this.sup], this.nb_questions);
    } else {
      // un mélange équilibré de questions
      type_de_questions = combinaison_listes([1, 2, 3], this.nb_questions);
    }

    for (
      let i = 0, d1, h1, m1, d2, h2, m2, d, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      //d1 : heure de début (h1 heures m1 min)
      //d2 : heure de fin (h2 heures m2 min)
      //d : durée
      if (type_de_contexte[i] == 1) {
        h1 = randint(20, 22);
        m1 = randint(35, 58);
        d1 = h1 * 60 + m1;
        h2 = h1 + 2;
        m2 = randint(1, m1); // pour s'assurer qu'il y a une retenue dans d2-d1
        d2 = h2 * 60 + m2;
        d = d2 - d1;
        d1 = minToHoraire(d1);
        d2 = minToHoraire(d2);
        d = minToHour(d);

        if (type_de_questions[i] == 1) {
          texte = `La diffusion d'un film commence à ${d1} et se termine à ${d2}. Combien de temps a duré ce film ?`;
          texte_corr = `${d2} - ${d1} = ${d}`;
          texte_corr += "<br>";
          texte_corr += `Le film dure ${d}.`;
        }
        if (type_de_questions[i] == 2) {
          texte = `Un film dure ${d} et commence à ${d1}. À quelle heure se terminera-t-il ?`;
          texte_corr = `${d1} + ${d} = ${d2}`;
          texte_corr += "<br>";
          texte_corr += `Le film terminera à ${d2}.`;
        }
        if (type_de_questions[i] == 3) {
          texte = `Un film de ${d} termine à ${d2}. À quelle heure a-t-il commencé ?`;
          texte_corr = `${d2} - ${d} = ${d1}`;
          texte_corr += "<br>";
          texte_corr += `Le film a commencé à ${d1}.`;
        }
      }

      if (type_de_contexte[i] == 2) {
        h1 = randint(20, 23);
        m1 = randint(35, 58);
        d1 = h1 * 60 + m1;
        h2 = h1 + 1;
        m2 = randint(1, m1); // pour s'assurer qu'il y a une retenue dans d2-d1
        d2 = h2 * 60 + m2;
        d = d2 - d1;
        while (d < 27 || d > 75 || d == 60) {
          h1 = randint(20, 23);
          m1 = randint(35, 58);
          d1 = h1 * 60 + m1;
          h2 = h1 + 2;
          m2 = randint(1, m1); // pour s'assurer qu'il y a une retenue dans d2-d1
          d2 = h2 * 60 + m2;
          d = d2 - d1;
        }
        d1 = minToHoraire(d1);
        d2 = minToHoraire(d2);
        d = minToHour(d);

        if (type_de_questions[i] == 1) {
          texte = `Sur son service de streaming favori, ${prenom()} commence à regarder une série à ${d1} et celle-ci se termine à ${d2}. Combien de temps a duré l'épisode ?`;
          texte_corr = `${d2} - ${d1} = ${d}`;
          texte_corr += "<br>";
          texte_corr += `La série a duré ${d}.`;
        }
        if (type_de_questions[i] == 2) {
          texte = `${prenom()} allume son ordinateur à ${d1} pour regarder une série de ${d}. À quelle heure la série s'achèvera-t-elle ?`;
          texte_corr = `${d1} + ${d} = ${d2}`;
          texte_corr += "<br>";
          texte_corr += `La série s'achèvera à ${d2}.`;
        }
        if (type_de_questions[i] == 3) {
          texte = `${prenom()} termine de regarder une série de ${d} à ${d2}. À quelle la série a-t-elle commencé ?`;
          texte_corr = `${d2} - ${d} = ${d1}`;
          texte_corr += "<br>";
          texte_corr += `Elle a commencé à ${d1}.`;
        }
      }

      if (type_de_contexte[i] == 3) {
        h1 = randint(8, 21);
        m1 = randint(1, 58);
        d1 = h1 * 60 + m1;
        h2 = h1 + randint(1, 2);
        m2 = randint(1, 59); // pas forcément de retenue dans d2-d1
        d2 = h2 * 60 + m2;
        d = d2 - d1;
        d1 = minToHoraire(d1);
        d2 = minToHoraire(d2);
        d = minToHour(d);

        if (type_de_questions[i] == 1) {
          texte = `Une émission télévisée est diffusée de ${d1} à ${d2}. Combien de temps dure-t-elle ?`;
          texte_corr = `${d2} - ${d1} = ${d}`;
          texte_corr += "<br>";
          texte_corr += `L'émission dure ${d}.`;
        }
        if (type_de_questions[i] == 2) {
          texte = `Une émission télévisée de ${d} commence à ${d1}. À quelle heure s'achèvera-t-elle ?`;
          texte_corr = `${d1} + ${d} = ${d2}`;
          texte_corr += "<br>";
          texte_corr += `L'émission s'achèvera à ${d2}.`;
        }
        if (type_de_questions[i] == 3) {
          texte = `${prenom()} termine de regarder une émission de ${d} à ${d2}. À quelle heure l'émission a-t-elle commencé ?`;
          texte_corr = `${d2} - ${d} = ${d1}`;
          texte_corr += "<br>";
          texte_corr += `L'émission a commencé à ${d1}.`;
        }
      }

      if (type_de_contexte[i] == 4) {
        h1 = randint(13, 16);
        m1 = randint(1, 58);
        d1 = h1 * 60 + m1;
        h2 = h1 + randint(1, 2);
        m2 = randint(1, 58); // pas forcément de retenue dans d2-d1
        d2 = h2 * 60 + m2;
        d = d2 - d1;
        while (d < 27 || d > 75 || d == 60) {
          h1 = randint(13, 16);
          m1 = randint(35, 58);
          d1 = h1 * 60 + m1;
          h2 = h1 + randint(1, 2);
          m2 = randint(1, m1); // pour s'assurer qu'il y a une retenue dans d2-d1
          d2 = h2 * 60 + m2;
          d = d2 - d1;
        }
        d1 = minToHoraire(d1);
        d2 = minToHoraire(d2);
        d = minToHour(d);

        if (type_de_questions[i] == 1) {
          texte = `Un papa regarde la compétition de gymnastique de sa fille  de ${d1} à ${d2}. Calculer la durée de cette compétition.`;
          texte_corr = `${d2} - ${d1} = ${d}`;
          texte_corr += "<br>";
          texte_corr += `La compétition dure ${d}.`;
        }
        if (type_de_questions[i] == 2) {
          texte = `Une compétition de gymnastique commence à ${d1} et dure ${d}. À quelle heure sera-t-elle terminée ?`;
          texte_corr = `${d1} + ${d} = ${d2}`;
          texte_corr += "<br>";
          texte_corr += `La compétition terminera à ${d2}.`;
        }
        if (type_de_questions[i] == 3) {
          texte = `Une compétition de gymnastique qui se termine à ${d2} a duré ${d}. À quelle heure a-t-elle commencé.`;
          texte_corr = `${d2} - ${d} = ${d1}`;
          texte_corr += "<br>";
          texte_corr += `La compétition a commencé à ${d1}.`;
        }
      }

      if (type_de_contexte[i] == 5) {
        h1 = randint(8, 15);
        m1 = randint(25, 58);
        d1 = h1 * 60 + m1;
        h2 = h1 + randint(2, 5);
        m2 = randint(1, m1); // pour s'assurer qu'il y a une retenue dans d2-d1
        d2 = h2 * 60 + m2;
        d = d2 - d1;
        while (d < 27 || d > 75 || d == 60) {
          h1 = randint(20, 23);
          m1 = randint(35, 58);
          d1 = h1 * 60 + m1;
          h2 = h1 + 2;
          m2 = randint(1, m1); // pour s'assurer qu'il y a une retenue dans d2-d1
          d2 = h2 * 60 + m2;
          d = d2 - d1;
        }
        d1 = minToHoraire(d1);
        d2 = minToHoraire(d2);
        d = minToHour(d);

        if (type_de_questions[i] == 1) {
          texte = `Un train part à ${d1} et arrive à destination à ${d2}. Calculer la durée du trajet.`;
          texte_corr = `${d2} - ${d1} = ${d}`;
          texte_corr += "<br>";
          texte_corr += `Le trajet dure ${d}.`;
        }
        if (type_de_questions[i] == 2) {
          texte = `${prenomF()} monte dans le train à ${d1} pour un trajet qui doit durer ${d}. À quelle heure arrivera-t-elle ?`;
          texte_corr = `${d1} + ${d} = ${d2}`;
          texte_corr += "<br>";
          texte_corr += `Elle arrivera à ${d2}.`;
        }
        if (type_de_questions[i] == 3) {
          texte = `Un train arrive en gare à ${d2} après un trajet de ${d}. À quelle heure le voyage a-t-il commencé ?`;
          texte_corr = `${d2} - ${d} = ${d1}`;
          texte_corr += "<br>";
          texte_corr += `Le voyage a commencé à ${d1}.`;
        }
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    4,
    "1 : Calcul de durée\n2 : Calcul de l'horaire de fin\n3 : Calcul de l'horaire de début\n4 : 3 types de questions",
  ];
}

/**
 * Additions et/ou soustractions classique et/ou à trou.
 *
 * Par défaut c'est un mélange d'additions, soustractions avec et sans trou avec des nombres jusqu'à 20.
 * @Auteur Rémi Angot
 */
function Tables_additions_soustractions() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = 20;
  this.sup2 = 6; // additions|additions à trous|soustractions|soustractions à trous|mélange sans trou|mélange avec trou
  this.titre = "Additions et de soustractions";
  this.consigne = "Calculer";
  this.spacing = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let liste_type_de_questions = [];
    if (this.sup2 == 1) {
      liste_type_de_questions = combinaison_listes(
        ["addition"],
        this.nb_questions
      );
    }
    if (this.sup2 == 2) {
      liste_type_de_questions = combinaison_listes(
        ["addition_a_trou"],
        this.nb_questions
      );
    }
    if (this.sup2 == 3) {
      liste_type_de_questions = combinaison_listes(
        ["soustraction"],
        this.nb_questions
      );
    }
    if (this.sup2 == 4) {
      liste_type_de_questions = combinaison_listes(
        ["soustraction_a_trou"],
        this.nb_questions
      );
    }
    if (this.sup2 == 5) {
      liste_type_de_questions = combinaison_listes(
        ["addition", "soustraction"],
        this.nb_questions
      );
    }
    if (this.sup2 == 6) {
      liste_type_de_questions = combinaison_listes(
        ["addition", "addition_a_trou", "soustraction", "soustraction_a_trou"],
        this.nb_questions
      );
    }
    for (let i = 0, a, b, texte, texte_corr; i < this.nb_questions; i++) {
      a = randint(2, this.sup);
      b = randint(2, this.sup);

      switch (liste_type_de_questions[i]) {
        case "addition":
          texte = `$${a} + ${b} = \\dotfill$`;
          texte_corr = `$${a} + ${b} = ${a + b}$`;
          break;
        case "addition_a_trou":
          texte = `$${a} + \\ldots\\ldots = ${a + b}$`;
          texte_corr = `$${a} + ${mise_en_evidence(b)} = ${a + b}$`;
          break;
        case "soustraction":
          if (a == b) {
            a = randint(2, this.sup, b);
          }
          if (a < b) {
            b = [a, (a = b)][0]; //échange les variables a et b
          }
          texte = `$${a} - ${b} = \\dotfill$`;
          texte_corr = `$${a} - ${b} = ${a - b}$`;
          break;
        case "soustraction_a_trou":
          if (a == b) {
            a = randint(2, this.sup, b);
          }
          if (a < b) {
            b = [a, (a = b)][0]; //échange les variables a et b
          }
          texte = `$${a} - \\ldots\\ldots = ${a - b}$`;
          texte_corr = `$${a} - ${mise_en_evidence(b)} = ${a - b}$`;
          break;
      }

      if (est_diaporama) {
        texte = texte.replace("= \\dotfill", "");
      }
      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ["Valeur maximale", 9999]; // Texte, tooltip
  this.besoin_formulaire2_numerique = [
    "Style de questions",
    6,
    "1 : Additions\n2: Additions à trous\n3: Soustractions\n4 : Soustractions à trous\n5 : Additions et soustractions \n6 : Additions et soustractions avec ou sans trous",
  ];
}

/**
 * Tables de multiplications classiques, à trou ou un mélange des deux.
 *
 * Par défaut ce sont les tables de 2 à 9 mais on peut choisir les tables que l'on veut
 * @Auteur Rémi Angot
 */
function Tables_de_multiplications(tables_par_defaut = "2-3-4-5-6-7-8-9") {
  //Multiplier deux nombres
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = tables_par_defaut;
  this.sup2 = 1; // classique|a_trous|melange
  this.titre = "Tables de multiplications";
  this.consigne = "Calculer";
  this.spacing = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    if (!this.sup) {
      // Si aucune table n'est saisie
      this.sup = "2-3-4-5-6-7-8-9";
    }
    let tables = [];
    if (typeof this.sup == "number") {
      // Si c'est un nombre c'est qu'il y a qu'une seule table
      tables[0] = this.sup;
    } else {
      tables = this.sup.split("-"); // Sinon on créé un tableau à partir des valeurs séparées par des -
    }
    let couples = creer_couples(
      tables,
      [2, 3, 4, 5, 6, 7, 8, 9, 10],
      this.nb_questions
    ); //Liste tous les couples possibles (2,3)≠(3,2)
    var type_de_questions = "a_trous";
    for (let i = 0, a, b, texte, texte_corr; i < this.nb_questions; i++) {
      a = couples[i][0];
      b = couples[i][1];
      if (this.sup2 == 1) {
        type_de_questions = "classique";
      } else if (this.sup2 == 2) {
        type_de_questions = "a_trous";
      } else {
        type_de_questions = choice(["classique", "a_trous"]);
      }
      if (type_de_questions == "classique") {
        // classique
        if (choice([true, false])) {
          texte = `$ ${tex_nombre(a)} \\times ${tex_nombre(b)} = \\dotfill$`;
          texte_corr = `$ ${tex_nombre(a)} \\times ${tex_nombre(
            b
          )} = ${tex_nombre(a * b)}$`;
        } else {
          texte = `$ ${tex_nombre(b)} \\times ${tex_nombre(a)} = \\dotfill$`;
          texte_corr = `$ ${tex_nombre(b)} \\times ${tex_nombre(
            a
          )} = ${tex_nombre(a * b)}$`;
        }
      } else {
        // a trous
        if (tables.length > 2) {
          // Si pour le premier facteur il y a plus de 2 posibilités on peut le chercher
          texte = choice([
            "$ " + a + " \\times \\ldots\\ldots = " + a * b + " $",
            "$ \\ldots\\ldots" + " \\times " + b + " = " + a * b + " $",
          ]);
        } else {
          // Sinon on demande forcément le 2e facteur
          texte = "$ " + a + " \\times \\ldots\\ldots = " + a * b + " $";
        }

        texte_corr = "$ " + a + " \\times " + b + " = " + a * b + " $";
      }
      if (est_diaporama) {
        texte = texte.replace("= \\dotfill", "");
      }
      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_texte = [
    "Choix des tables",
    "Nombres séparés par des tirets",
  ]; // Texte, tooltip
  this.besoin_formulaire2_numerique = [
    "Style de questions",
    3,
    "1 : Classique\n2: À trous\n3: Mélangé",
  ];
}

/**
 * Tables de divisions classiques, à trou ou un mélange des deux.
 *
 * Par défaut ce sont les tables de 2 à 9 mais on peut choisir les tables que l'on veut
 * @Auteur Rémi Angot
 */
function Tables_de_divisions(tables_par_defaut = "2-3-4-5-6-7-8-9") {
  //Diviser deux nombres
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = tables_par_defaut;
  this.sup2 = 1; // classique|a_trous|melange
  this.titre = "Tables de divisions";
  this.consigne = "Calculer";
  this.spacing = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    if (!this.sup) {
      // Si aucune table n'est saisie
      this.sup = "2-3-4-5-6-7-8-9";
    }
    let tables = [];
    if (typeof this.sup == "number") {
      // Si c'est un nombre c'est qu'il y a qu'une seule table
      tables[0] = this.sup;
    } else {
      tables = this.sup.split("-"); // Sinon on créé un tableau à partir des valeurs séparées par des -
    }
    let couples = creer_couples(
      tables,
      [2, 3, 4, 5, 6, 7, 8, 9, 10],
      this.nb_questions
    ); //Liste tous les couples possibles (2,3)≠(3,2)
    let liste_type_de_questions = combinaison_listes(
      ["classique", "a_trous"],
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    var type_de_questions = "a_trous";
    for (let i = 0, a, b, texte, texte_corr; i < this.nb_questions; i++) {
      a = couples[i][0];
      b = couples[i][1];
      if (this.sup2 == 1) {
        type_de_questions = "classique";
      } else if (this.sup2 == 2) {
        type_de_questions = "a_trous";
      } else {
        type_de_questions = liste_type_de_questions[i];
      }
      if (type_de_questions == "classique") {
        // classique
        texte = "$ " + a * b + " \\div " + a + " = \\dotfill $";
      } else {
        // a trous
        if (choice([true, false])) {
          texte = `$ ${a * b} \\div \\ldots\\ldots = ${b}$`;
        } else {
          texte = `$ \\ldots\\ldots \\div ${a}  = ${b}$`;
        }
      }
      texte_corr = `$ ${a * b} \\div ${a} = ${b}$`;
      if (est_diaporama) {
        texte = texte.replace("= \\dotfill", "");
      }
      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_texte = [
    "Choix des tables",
    "Nombres séparés par des tirets",
  ]; // Texte, tooltip
  this.besoin_formulaire2_numerique = [
    "Style de questions",
    3,
    "1 : Classique\n2: À trous\n3: Mélangé",
  ];
}

/**
 * Tables de multiplications et de divisions classiques, à trou ou un mélange des deux.
 *
 * Par défaut ce sont les tables de 2 à 9 mais on peut choisir les tables que l'on veut
 * @Auteur Rémi Angot
 */
function Tables_de_multiplications_et_divisions(
  tables_par_defaut = "2-3-4-5-6-7-8-9"
) {
  //Multiplier ou diviser deux nombres
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = tables_par_defaut;
  this.sup2 = 1; // classique|a_trous|melange
  this.titre = "Tables de multiplications et de divisions";
  this.consigne = "Calculer";
  this.spacing = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    if (!this.sup) {
      // Si aucune table n'est saisie
      this.sup = "2-3-4-5-6-7-8-9";
    }
    let tables = [];
    if (typeof this.sup == "number") {
      // Si c'est un nombre c'est qu'il y a qu'une seule table
      tables[0] = this.sup;
    } else {
      tables = this.sup.split("-"); // Sinon on créé un tableau à partir des valeurs séparées par des ;
    }
    let couples = creer_couples(
      tables,
      [2, 3, 4, 5, 6, 7, 8, 9, 10],
      this.nb_questions
    ); //Liste tous les couples possibles (2,3)≠(3,2)
    let liste_type_de_questions = combinaison_listes(
      ["classique", "a_trous"],
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let operation = combinaison_listes(["x", "div"], this.nb_questions); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let type_de_questions;
    for (let i = 0, a, b, texte, texte_corr; i < this.nb_questions; i++) {
      a = couples[i][0];
      b = couples[i][1];
      if (this.sup2 == 1) {
        type_de_questions = "classique";
      } else if (this.sup2 == 2) {
        type_de_questions = "a_trous";
      } else {
        type_de_questions = liste_type_de_questions[i];
      }

      if (operation[i] == "x") {
        if (type_de_questions == "classique") {
          // classique
          texte = "$ " + a + " \\times " + b + " = \\dotfill $";
          texte_corr = "$ " + a + " \\times " + b + " = " + a * b + " $";
        } else {
          // a trous
          if (tables.length > 2) {
            // Si pour le premier facteur il y a plus de 2 posibilités on peut le chercher
            texte = choice([
              "$ " + a + " \\times \\ldots\\ldots = " + a * b + " $",
              "$ \\ldots\\ldots" + " \\times " + b + " = " + a * b + " $",
            ]);
          } else {
            // Sinon on demande forcément le 2e facteur
            texte = "$ " + a + " \\times \\ldots\\ldots = " + a * b + " $";
          }

          texte_corr = "$ " + a + " \\times " + b + " = " + a * b + " $";
        }
      } else {
        if (type_de_questions == "classique") {
          // classique
          texte = "$ " + a * b + " \\div " + b + " = \\dotfill $";
        } else {
          // a trous
          if (choice([true, false])) {
            texte = `$ ${a * b} \\div \\ldots\\ldots = ${a}$`;
          } else {
            texte = `$ \\ldots\\ldots \\div ${b}  = ${a}$`;
          }
        }
        texte_corr = `$ ${a * b} \\div ${b} = ${a}$`;
      }
      if (est_diaporama) {
        texte = texte.replace("= \\dotfill", "");
      }
      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_texte = [
    "Choix des tables",
    "Nombres séparés par des tirets",
  ]; // Texte, tooltip
  this.besoin_formulaire2_numerique = [
    "Style de questions",
    3,
    "1 : Classique\n2: À trous\n3: Mélangé",
  ];
}

/**
 * Mélange équitable d'additions, de soustractions, de multiplications et de divisions
 *
 * * Niveau 1 Addition 2 chiffres + 1 chiffre, soustraction 2 chiffres - 1 chiffre, tables de 2 à 5
 * * Niveau 2 Addition 2 chiffres + 2 chiffres ne dépassant pas 100, soustraction dont le résultat est entre 11 et 19, tables de 6 à 9
 * * Niveau 3 Addition 2 chiffre + 2 chiffres dépassant 100, soustraction dont le résultat est entre 21 et 39, table de 7, 8, 11 ou 12,
 * @Auteur Rémi Angot
 */
function Quatre_operations() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Les quatre opérations";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1; // niveau de difficulté
  this.liste_packages = "xlop";

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = range1(4);
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1: // addition
          if (this.sup == 1) {
            a = randint(11, 89);
            b = randint(2, 9);
          }
          if (this.sup == 2) {
            a = randint(11, 69);
            b = randint(11, 29);
          }
          if (this.sup == 3) {
            a = randint(11, 89);
            b = randint(110 - a, 110 - a + 50);
          }
          texte = `$${a}+${b}$`;
          texte_corr = `$${a}+${b}=${a + b}$`;
          break;
        case 2: // soustraction
          if (this.sup == 1) {
            a = randint(11, 89);
            b = randint(2, 9);
          }
          if (this.sup == 2) {
            a = randint(20, 89);
            b = randint(a - 19, a - 11);
          }
          if (this.sup == 3) {
            a = randint(40, 89);
            b = randint(a - 39, a - 21);
          }
          texte = `$${a}-${b}$`;
          texte_corr = `$${a}-${b}=${a - b}$`;
          break;
        case 3: // multiplication
          if (this.sup == 1) {
            a = randint(2, 5);
            b = randint(2, 9);
          }
          if (this.sup == 2) {
            a = randint(6, 9);
            b = randint(6, 9);
          }
          if (this.sup == 3) {
            a = choice([7, 8, 11, 12]);
            b = randint(2, 9);
          }
          texte = `$${a}\\times${b}$`;
          texte_corr = `$${a}\\times${b}=${a * b}$`;
          break;
        case 4: // division
          if (this.sup == 1) {
            a = randint(2, 5);
            b = randint(2, 9);
          }
          if (this.sup == 2) {
            a = randint(6, 9);
            b = randint(6, 9);
          }
          if (this.sup == 3) {
            a = choice([7, 8, 11, 12]);
            b = randint(2, 9);
          }
          texte = `$${a * b}\\div${a}$`;
          texte_corr = `$${a * b}\\div${a}=${b}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ["Niveau de difficulté", 3];
}

/**
 * Un nombre à 2 chiffres (non multiple de 10) + 9
 * @Auteur Rémi Angot
 */
function Ajouter9() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Ajouter 9";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.bouton_aide = modal_texte_court(
      numero_de_l_exercice,
      "Ajouter 9 revient à ajouter 10 et à soustraire 1."
    );
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = randint(0, 9) * 10 + randint(1, 9);
      texte = `$${a}+9$`;
      texte_corr = `$${a}+9=${a + 9}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Un nombre à 2 chiffres ne terminant pas par 9 - 9
 * @Auteur Rémi Angot
 */
function Soustraire9() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Soustraire 9";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = randint(1, 9) * 10 + randint(0, 8);
      texte = `$${a}-9$`;
      texte_corr = `$${a}-9=${a - 9}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Un nombre à 2 chiffres non multiple de 10 + 11
 * @Auteur Rémi Angot
 */
function Ajouter11() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Ajouter 11";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = randint(0, 9) * 10 + randint(1, 9);
      texte = `$${a}+11$`;
      texte_corr = `$${a}+11=${a + 11}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Un nombre à 2 chiffres -11
 * @Auteur Rémi Angot
 */
function Soustraire11() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Soustraire 11";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = [1, 1, 1, 1, 2];
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      if (liste_type_de_questions[i] == 1) {
        a = randint(12, 99);
      } else {
        a = randint(2, 9) * 10;
      }

      texte = `$${a}-11$`;
      texte_corr = `$${a}-11=${a - 11}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Somme de deux nombres dont les chiffres des unités sont des compléments à 10
 * @Auteur Rémi Angot
 */
function Somme_de_deux_nombres_maries() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Somme de deux nombres mariés";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, u1, u2, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      u1 = randint(1, 9);
      u2 = 10 - u1;
      a = randint(1, 9) * 10 + u1;
      b = randint(1, 9) * 10 + u2;

      texte = `$${a}+${b}$`;
      texte_corr = `$${a}+${b}=${a + b}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Somme de 3 nombres dont 2 ont des chiffres des unités compléments à 10
 * @Auteur Rémi Angot
 */
function Somme_de_deux_nombres_maries_et_un_entier() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Somme de deux nombres mariés et un entier";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = [1, 2];
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, c, u1, u2, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      u1 = randint(1, 9);
      u2 = 10 - u1;
      a = randint(1, 4) * 10 + u1;
      b = randint(1, 4) * 10 + u2;
      c = randint(1, 100 - a - b);

      switch (liste_type_de_questions[i]) {
        case 1:
          texte = `$${a}+${b}+${c}$`;
          texte_corr = `$${a}+${b}+${c}=${a + b + c}$`;
          break;
        case 2:
          texte = `$${a}+${c}+${b}$`;
          texte_corr = `$${a}+${c}+${b}=${a + b + c}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}
function Vocabulaire_et_operations() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Traduire des phrases en calculs et réciproquement";
  this.consigne = "";
  this.nb_questions = 5;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 4;
  this.sup2 = false;

  this.nouvelle_version = function (numero_de_l_exercice) {
    let decimal;
    let expf, expn, expc, resultats;
    let type_de_questions_disponibles;
    if (this.sup < 4) type_de_questions_disponibles = [parseInt(this.sup)];
    else type_de_questions_disponibles = [1, 2, 3];
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    );
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    if (this.sup2) decimal = 10 ** randint(1, 2);
    else decimal = 1;

    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      resultats = Choisir_expression_numerique(1, decimal);
      expf = resultats[0];
      expn = resultats[1];
      expc = resultats[2];
      texte = ``;
      texte_corr = ``;
      switch (liste_type_de_questions[i]) {
        case 1:
          texte +=
            num_alpha(i) +
            `Traduire la phrase par un calcul (il n’est pas demandé d’effectuer ce calcul) : `;
          expf = `l` + expf.substring(1);
          texte += `${expf}.`;
          texte_corr += num_alpha(i) + `${expf} s'écrit ${expn}.`;
          break;
        case 2:
          if (expn.indexOf("ou") > 0)
            expn = expn.substring(0, expn.indexOf("ou")); // on supprime la deuxième expression fractionnaire
          texte +=
            num_alpha(i) + `Traduire le calcul par une phrase en français : `;
          texte += `${expn}`;
          expf = `l` + expf.substring(1);
          texte_corr += num_alpha(i) + `${expn} est ${expf}.`;
          break;
        case 3:
          texte +=
            num_alpha(i) +
            `Traduire la phrase par un calcul et effectuer ce calcul : `;
          expf = `l` + expf.substring(1);
          texte += `${expf}.`;
          expf = `L` + expf.substring(1);
          texte_corr += num_alpha(i) + `${expf} s'écrit ${expn}.<br>`;
          texte_corr += `${expc}.`;
          break;
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu_sans_numero(this);
  };
  this.besoin_formulaire_numerique = [
    "Type de questions",
    4,
    "1 : Phrase -> Calcul\n 2 : Calcul -> Phrase\n 3 : Phrase -> Calcul + résultat\n 4 : Mélange",
  ];
  this.besoin_formulaire2_case_a_cocher = ["Décimaux", false];
}

function Compte_Est_Bon() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre =
    "Atteindre le résultat souhaité avec 6 nombres et les 4 opérations";
  this.consigne =
    "Trouve le résultat en utilisant les quatre opérations et les nombres du tirage (une seule fois).";
  this.nb_questions = 5;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1; // niveau de calcul souhaité

  this.nouvelle_version = function (numero_de_l_exercice) {
    let type_de_questions, a, b, c, d, e, f, cible, tirage, choix;
    if (!this.sup) {
      // Si rien n'est saisi
      type_de_questions = combinaison_listes([1, 2, 3], this.nb_questions);
    } else {
      if (typeof this.sup == "number") {
        // Si c'est un nombre c'est qu'il y a qu'une seule grandeur
        type_de_questions = combinaison_listes(
          [parseInt(this.sup)],
          this.nb_questions
        );
      } else {
        type_de_questions = this.sup.split("-"); // Sinon on créé un tableau à partir des valeurs séparées par des -
        for (let i = 0; i < type_de_questions.length; i++)
          type_de_questions[i] = parseInt(type_de_questions[i]);
        this.nb_questions = type_de_questions.length;
      }
    }
    choix = combinaison_listes(range1(5), this.nb_questions);
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (type_de_questions[i]) {
        case 1:
          a = randint(2, 9);
          b = randint(2, 8, a);
          c = randint(1, 9, [a, b]);
          d = randint(1, 9, [a, b, c]);
          switch (choix[i]) {
            case 1:
              cible = calcul(a * 100 + b * 10 + c + d);
              tirage = shuffle([100, 10, a, b, c, d]);
              texte_corr = `Le compte est bon : $${cible}=100\\times${a}+10\\times${b}+${c}+${d}$`;
              break;
            case 2:
              cible = calcul(a * 100 + b * 10 + c - d);
              tirage = shuffle([100, 10, a, b, c, d]);
              texte_corr = `Le compte est bon : $${cible}=100\\times${a}+10\\times${b}+${c}-${d}$`;
              break;
            case 3:
              cible = calcul(a * 100 - b * 10 + c + d);
              tirage = shuffle([100, 10, a, b, c, d]);
              texte_corr = `Le compte est bon : $${cible}=100\\times${a}-10\\times${b}+${c}+${d}$`;
              break;
            case 4:
              cible = calcul(a * 100 - b * 10 + c - d);
              tirage = shuffle([100, 10, a, b, c, d]);
              texte_corr = `Le compte est bon : $${cible}=100\\times${a}-10\\times${b}+${c}-${d}$`;
              break;
            default:
              cible = calcul(a * 100 + (b + c) * 10 + d);
              tirage = shuffle([100, 10, a, b, c, d]);
              texte_corr = `Le compte est bon : $${cible}=100\\times${a}+10\\times(${b}+${c})+${d}$`;
          }
          break;

        case 2:
          a = randint(3, 9);
          b = randint(3, 8, a);
          c = randint(3, 9, [a, b]);
          switch (choix[i]) {
            case 1:
              cible = calcul(a * 100 + b * 10 + c);
              tirage = shuffle([50, 50, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=(50+50)\\times${a}+10\\times${b}+${c}$`;
              break;
            case 2:
              cible = calcul(a * 100 + b * 10 - c);
              tirage = shuffle([50, 50, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=(50+50)\\times${a}+10\\times${b}-${c}$`;
              break;
            case 3:
              cible = calcul(a * 100 - b * 10 + c);
              tirage = shuffle([50, 50, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=(50+50)\\times${a}-10\\times${b}+${c}$`;
              break;
            case 4:
              cible = calcul(a * 100 - b * 10 - c);
              tirage = shuffle([50, 2, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=2\\times50\\times${a}-10\\times${b}-${c}$`;
              break;
            default:
              cible = calcul(a * 100 + b * 10 - c);
              tirage = shuffle([25, 4, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=4\\times25\\times${a}+10\\times${b}-${c}$`;
          }
          break;
        case 3:
          a = randint(2, 5);
          b = randint(3, 8, a);
          c = randint(3, 9, [a, b]);
          switch (choix[i]) {
            case 1:
              cible = calcul(a * (100 + b * 10) + c);
              tirage = shuffle([50, 2, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=${a}\\times(50\\times2+10\\times${b})+${c}$`;
              break;
            case 2:
              cible = calcul(a * (100 + b * 10) - c);
              tirage = shuffle([50, 2, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=${a}\\times(50\\times2+10\\times${b})-${c}$`;
              break;
            case 3:
              cible = calcul(a * (100 + b * 10) + c);
              tirage = shuffle([25, 4, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=${a}\\times(25\\times4+10\\times${b})+${c}$`;
              break;
            case 4:
              cible = calcul(a * (100 + b * 10) - c);
              tirage = shuffle([25, 4, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=${a}\\times(25\\times4+10\\times${b})-${c}$`;
              break;
            default:
              cible = calcul(a * (100 + b * 10) + c);
              tirage = shuffle([25, 75, 10, a, b, c]);
              texte_corr = `Le compte est bon : $${cible}=${a}\\times((25+75)+10\\times${b})+${c}$`;
          }
          break;
      }
      texte = `Voici le tirage : `;
      for (let i = 0; i < 5; i++) texte += `${tirage[i]} ; `;
      texte += `${tirage[5]}.<br>`;
      texte += `Et le nombre à trouver est : ${cible}.`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_texte = [
    "Niveaux de difficultés)",
    "Nombres séparés par des tirets",
  ]; // Texte, tooltip
}
/*
function LeVraiCompteEstBon(){ //en construction
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Générateur de \"Le compte est bon\"";
	this.consigne = "Écrire un calcul égal au nombre cible en utilisant les nombres du tirage.";
	this.nb_questions = 1;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;
	this.sup="1-2-3-4-5-6";
	var max_solution=70;
	
	this.nouvelle_version = function(numero_de_l_exercice){
		let tirage,tirage2,tirage3,tirage4,tirage5,N1,N2,N3,N4,N5,N6,R1,R2,R3,R4,R5,op1,op2,op3,op4,op5
		if (!this.sup) tirage = [1,2,3,4,5,6]
		else tirage = this.sup.split("-");
		let cible=124;
		for (let i=0;i<6;i++) tirage[i]=parseInt(tirage[i])
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let calculs=[[],[],[],[],[]],operations=['+','*','-','/','opp+','inv*'],solutions=[[]],liste_index_solution
		let nb_operande=tirage.length
		let index=0
		for (let i=0;i<tirage.length;i++) {  // première opération : N1 op N2 = R1 
			N1=tirage[i]
			for (let op=0;op<operations.length;op++) {
				for (let j=0;j<tirage.length;j++) {
					if (j!=i) {
						N2=tirage[j]
						// On push les index et non les nombres et les opérations seul le résultat est un nombre
						if (op==0&&j>i) calculs[index].push([i,op,j,calcul(N1+N2)]) // On évite les doublons une fois calculé a+b, on ne fait pas b+a (j>i)
						if (op==1&&j>i) calculs[index].push([i,op,j,calcul(N1*N2)]) // idem
						if (op==2&& N1>N2) calculs[index].push([i,op,j,calcul(N1-N2)]) // si on peut calculer a-b, on ne pourra pas calculer b-a (négatif)
						if (op==3&& estentier(calcul(N1/N2))) calculs[index].push([i,op,j,calcul(N1/N2)]) // si on peut calculer a/b, on ne pourra pas calculer b/a (non entier)
						// pas de soustraction opposée ni de division inversée, les couples (a,b) et (b,a) sont tous là donc ce serait redondant
						if (calculs[index][calculs[index].length-1][3]==cible) { // si le résultat est la cible, alors on transfert le calcul dans solutions et on le retire des calculs
							solutions.push(calculs[index].pop())
						}
					}
				}
			}
		}
		alert('premier niveau passé')
	
		index++	// on passe au deuxième niveau.
		for (let i=0;i<calculs[index-1].length;i++) { // chaque calcul de niveau 1 opération peut générer des calculs de niveau 2 opérations
			N1=calculs[index-1][i][0]; // index de N1 dans le tirage
			N2=calculs[index-1][i][2]; // index de N2 dans le tirage
			R1=calculs[index-1][i][3]; // résultat de N1 op1 N2
			op1=calculs[index-1][i][1]; // index de op1 dans operations
			tirage2=range(5,[N1,N2])
			for (let k=0;k<tirage2.length;k++) tirage2[k]=parseInt(tirage2[k])
			for (let op=0;op<operations.length;op++) {
				for (let j in tirage2) {
					// on va prendre N3 autre que N1 et N2 qui ont déjà été utilisés
						N3=tirage[j];
						if (op==0) calculs[index].push([N1,op1,N2,R1,op,parseInt(j),calcul(N3+R1)])
						if (op==1) calculs[index].push([N1,op1,N2,R1,op,parseInt(j),calcul(N3*R1)])
						if (op==2&&R1>N3) calculs[index].push([N1,op1,N2,R1,op,parseInt(j),calcul(R1-N3)])
						if (op==3&& estentier(R1/N3)) calculs[index].push([N1,op1,N2,R1,op,parseInt(j),calcul(R1/N3)])
						if (op==4&& N3>R1) calculs[index].push([N1,op1,N2,R1,op,parseInt(j),calcul(N3-R1)])
						if (op==4&& estentier(N3/R1)) calculs[index].push([N1,op1,N2,R1,op,parseInt(j),calcul(N3/R1)])
						if (calculs[index][calculs[index].length-1][6]==cible) { // si le résultat est la cible, alors on transfert le calcul dans solutions et on le retire des calculs
							solutions.push(calculs[index].pop())
						}
				}
			}
		}
		alert('deuxième niveau passé')
	
		index++ // vers l'infini et au delà ! 3ème niveau !
		for (let i=0;i<calculs[index-1].length;i++) { // chaque calcul de niveau 2 opérations peut générer des calculs de niveau 3 opérations
			N1=calculs[index-1][i][0]; // index de N1 dans le tirage
			N2=calculs[index-1][i][2]; // index de N2 dans le tirage
			R1=calculs[index-1][i][3]; // résultat de N1 op1 N2
			op1=calculs[index-1][i][1]; // index de op1 dans operations
			N3=calculs[index-1][i][5];
			op2=calculs[index-1][i][4];
			R2=calculs[index-1][i][6];
			tirage3=range(5,[N1,N2,N3])
			for (let k=0;k<tirage3.length;k++) tirage3[k]=parseInt(tirage2[k])
				for (let op=0;op<operations.length;op++) {
					for (let j in tirage3) {
						N4=tirage[j];
						if (op==0) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op,parseInt(j),calcul(N4+R2)])
						if (op==1) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op,parseInt(j),calcul(N4*R2)])
						if (op==2&&R2>N4) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op,parseInt(j),calcul(R2-N4)])
						if (op==3&& estentier(R2/N4)) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op,parseInt(j),calcul(R2/N4)])
						if (op==4&& N4>R2) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op,parseInt(j),calcul(N4-R2)])
						if (op==4&& estentier(N4/R2)) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op,parseInt(j),calcul(N4/R2)])
						if (calculs[index][calculs[index].length-1][9]==cible) { // si le résultat est la cible, alors on transfert le calcul dans solutions et on le retire des calculs
							solutions.push(calculs[index].pop())
						}
					}
				}
			}
		
		alert('troisième niveau passé')

		index++ //là ça devient lourd ! 
		for (let i=0;i<calculs[index-1].length;i++) { // chaque calcul de niveau 3 opérations peut générer des calculs de niveau 4 opérations
			N1=calculs[index-1][i][0]; // index de N1 dans le tirage
			N2=calculs[index-1][i][2]; // index de N2 dans le tirage
			R1=calculs[index-1][i][3]; // résultat de N1 op1 N2
			op1=calculs[index-1][i][1]; // index de op1 dans operations
			N3=calculs[index-1][i][5];
			op2=calculs[index-1][i][4];
			R2=calculs[index-1][i][6];
			N4=calculs[index-1][i][8];
			op3=calculs[index-1][i][7];
			R3=calculs[index-1][i][9];
			tirage4=range(5,[N1,N2,N3,N4])
			tirage4[0]=parseInt(tirage2[0])
			tirage4[1]=parseInt(tirage2[1])
			
			for (let op=0;op<operations.length;op++) {
				for (let j in tirage4) {
						N5=tirage[j];
						if (op==0) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op3,N4,R3,op,parseInt(j),calcul(N5+R3)])
						if (op==1) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op3,N4,R3,op,parseInt(j),calcul(N5*R3)])
						if (op==2&&R3>N5) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op3,N4,R3,op,parseInt(j),calcul(R3-N5)])
						if (op==3&& estentier(R3/N5)) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op3,N4,R3,op,parseInt(j),calcul(R3/N5)])
						if (op==4&& N5>R3) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op3,N4,R3,op,parseInt(j),calcul(N5-R3)])
						if (op==4&& estentier(N5/R3)) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op3,N4,R3,op,parseInt(j),calcul(N5/R3)])
						if (calculs[index][calculs[index].length-1][12]==cible) { // si le résultat est la cible, alors on transfert le calcul dans solutions et on le retire des calculs
							solutions.push(calculs[index].pop())
						}
					}
			}
		}
		alert('quatrième niveau passé')
	
		index++
		for (let i=0;i<calculs[index-1].length;i++) { // chaque calcul de niveau 3 opérations peut générer des calculs de niveau 4 opérations
			N1=calculs[index-1][i][0]; // index de N1 dans le tirage
			N2=calculs[index-1][i][2]; // index de N2 dans le tirage
			R1=calculs[index-1][i][3]; // résultat de N1 op1 N2
			op1=calculs[index-1][i][1]; // index de op1 dans operations
			N3=calculs[index-1][i][5];
			op2=calculs[index-1][i][4];
			R2=calculs[index-1][i][6];
			N4=calculs[index-1][i][8];
			op3=calculs[index-1][i][7];
			R3=calculs[index-1][i][9];
			N5=calculs[index-1][i][11];
			op4=calculs[index-1][i][10];
			R4=calculs[index-1][i][12];
			tirage5=range(5,[N1,N2,N3,N4,N5])
			tirage5[0]=parseInt(tirage5[0])
			for (let op=0;op<operations.length;op++) {
				for (let j in tirage5) {
						N6=tirage[j];
						if (op==0) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op3,N4,R3,op4,N5,R4,op,parseInt(j),calcul(N6+R4)])
						if (op==1) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op3,N4,R3,op4,N5,R4,op,parseInt(j),calcul(N6*R4)])
						if (op==2&&R4>N6) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op3,N4,R3,op4,N5,R4,op,parseInt(j),calcul(R4-N6)])
						if (op==3&& estentier(R4/N6)) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op3,N4,R3,op4,N5,R4,op,parseInt(j),calcul(R4/N6)])
						if (op==4&& N6>R4) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op3,N4,R3,op4,N5,R4,op,parseInt(j),calcul(N6-R4)])
						if (op==4&& estentier(N6/R4)) calculs[index].push([N1,op1,N2,R1,op2,N3,R2,op3,N4,R3,op4,N5,R4,op,parseInt(j),calcul(N6/R4)])
						if (calculs[index][calculs[index].length-1][15]==cible) { // si le résultat est la cible, alors on transfert le calcul dans solutions et on le retire des calculs
							solutions.push(calculs[index].pop())
						}
					}
			}
		}
		for (let i = 0, texte, texte_corr,cpt=0; i < this.nb_questions && cpt<50; ) {
			solution_mathador=Trouver_solution_mathador(min_solution,max_solution)
			tirage=solution_mathador[0]
			solution=solution_mathador[1]
			expression=solution_mathador[3]

			texte=`Le tirage est le suivant : $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ <br>La cible est : $${solution}$`
			texte_corr=`Pour le tirage $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ et pour la cible $${solution}$, la solution est : $${expression}=${solution}$ `
			texte_corr+=`ou $${solution_mathador[4]}$.<br>`
			texte_corr+=`En effet : <br>`
			for (let i=0;i<4;i++) {
				texte_corr+=`$${solution_mathador[2][i]}$<br>`
			}
						if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
							this.liste_questions.push(texte);
							this.liste_corrections.push(texte_corr);
							i++;
						}		
			cpt++;	
		}
	// liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_texte = ['Choix des nombres du tirage (de aucun à cinq)','Nombres séparés par des tirets'] // Texte, tooltip
}
*/

/**
 * Générateur de tirages pour un compte est bon avec en correction la solution mathador (4 opérations différentes).
 * @Auteur Jean-Claude Lhote
 */

function Le_compte_est_bonV3() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = 'Générateur de "Le compte est bon"';
  this.consigne =
    "Écrire un calcul égal au nombre cible en utilisant les 5 nombres, 4 opérations différentes et éventuellement des parenthèses.";
  this.nb_questions = 5;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 30;
  this.sup2 = 70;
  var max_solution = 70;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let solution_mathador = [];
    let tirage, solution, expression;
    let min_solution = parseInt(this.sup);
    max_solution = parseInt(this.sup2);
    if (min_solution > max_solution) {
      min_solution = max_solution;
      this.sup = this.sup2;
    }
    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      solution_mathador = Trouver_solution_mathador(min_solution, max_solution);
      tirage = solution_mathador[0];
      solution = solution_mathador[1];
      expression = solution_mathador[3];

      texte = `Le tirage est le suivant : $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ <br>La cible est : $${solution}$`;
      texte_corr = `Pour le tirage $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ et pour la cible $${solution}$, la solution est : $${expression}=${solution}$ `;
      texte_corr += `ou $${solution_mathador[4]}$.<br>`;
      texte_corr += `En effet : <br>`;
      for (let i = 0; i < 4; i++) {
        texte_corr += `$${solution_mathador[2][i]}$<br>`;
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ["Limite inférieure", max_solution];
  this.besoin_formulaire2_numerique = ["Limite supérieure", 100];
}
/**
 * @Auteur Jean-Claude Lhote
 *
 * Dans cette version, il est possible de choisir 1,2,3,4 ou 5 nombres du tirage et de contraindre la cible entre deux valeurs
 */
function Le_compte_est_bonV4() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = 'Générateur de "Le compte est bon" version semi-aléatoire';
  this.consigne =
    "Écrire un calcul égal au nombre cible en utilisant les 5 nombres, 4 opérations différentes et éventuellement des parenthèses.";
  this.nb_questions = 1;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let solution_mathador = [];
    let tirage, solution, expression, min, max, texte, texte_corr;
    let minmax = [];
    let a, b, c, d, e;
    if (!this.sup2) {
      // Si rien n'est saisi
      min = 0;
      max = 100;
    } else {
      if (typeof this.sup2 == "number") {
        // Si c'est un nombre c'est qu'il y a qu'une seule grandeur
        min = 0;
        max = this.sup2;
      } else {
        minmax = this.sup2.split("-"); // Sinon on créé un tableau à partir des valeurs séparées par des -
        min = minmax[0];
        max = minmax[1];
      }
    }
    if (!this.sup) {
      // Si rien n'est saisi
      solution_mathador = Trouver_solution_mathador(min, max);
    } else {
      if (typeof this.sup == "number") {
        // Si c'est un nombre c'est qu'il y a qu'une seule grandeur
        solution_mathador = Trouver_solution_mathador(min, max, this.sup);
      } else {
        tirage = this.sup.split("-"); // Sinon on créé un tableau à partir des valeurs séparées par des -
        for (let i = 0; i < tirage.length; i++) tirage[i] = parseInt(tirage[i]);
        solution_mathador = Trouver_solution_mathador(min, max, ...tirage);
      }
    }

    tirage = solution_mathador[0];
    solution = solution_mathador[1];
    expression = solution_mathador[3];

    texte = `Le tirage est le suivant : $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ <br>La cible est : $${solution}$`;
    texte_corr = `Pour le tirage $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ et pour la cible $${solution}$, la solution est : $${expression}=${solution}$ `;
    texte_corr += `ou $${solution_mathador[4]}$.<br>`;
    texte_corr += `En effet : <br>`;
    for (let i = 0; i < 4; i++) {
      texte_corr += `$${solution_mathador[2][i]}$<br>`;
    }
    this.liste_questions.push(texte);
    this.liste_corrections.push(texte_corr);

    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_texte = [
    "Choix des nombres du tirage (de aucun à cinq)",
    "Nombres séparés par des tirets",
  ]; // Texte, tooltip
  this.besoin_formulaire2_texte = [
    "Intervalle pour la cible (ou rien pour cible non contrainte)",
    "Minimum-Maximum (éviter de trop contraindre la cible, cela peut bloquer le programme)",
  ]; // Texte, tooltip

  // this.besoin_formulaire2_numerique = ['Limite supérieure',100];
}
/**
 * @Auteur Jean-Claude Lhote
 * @param {number} min Valeur minimum pour la solution
 * @param {number} max Valeur maximum pour la solution
 * Cette fonction produit aléatoirement un tirage de 5 nombres, une solution, un tableau contenant les calculs successifs, une chaine contenant l'expression mathador correspondante
 * @returns {array} [tirage=[a,b,c,d,e],solution (compris entre min et max),operations_successives=[string1,string2,string3,string4,string5],expression]
 * les string1 à 5 ainsi que l'expresion sont ) mettre en mode maths.
 */
function Trouver_solution_mathador(
  min,
  max,
  A = 1,
  B = 4,
  C = 8,
  D = 3,
  E = 5
) {
  let eureka,
    a,
    b,
    c,
    d,
    e,
    tirage,
    nombres_restants,
    operations_restantes,
    expression_en_cours_f,
    expression_en_cours_d,
    op,
    part1_f,
    part2_f,
    part1_d,
    part2_d,
    operations_successives = [],
    solution;
  let liste_choix = [
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    6,
    6,
    6,
    6,
    7,
    7,
    8,
    8,
    8,
    8,
    9,
    9,
    9,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  eureka = false;
  let nb_determines = arguments.length - 2;
  while (eureka == false) {
    tirage = [];

    if (nb_determines < 1) a = parseInt(choice(liste_choix));
    else a = A;
    if (nb_determines < 2)
      b = parseInt(choice(liste_choix, [13, 14, 15, 16, 17, 18, 19, 20, a]));
    else b = B;
    if (nb_determines < 3)
      c = parseInt(
        choice(liste_choix, [12, 13, 14, 15, 16, 17, 18, 19, 20, a, b])
      );
    else c = C;
    if (nb_determines < 4)
      d = parseInt(
        choice(liste_choix, [12, 13, 14, 15, 16, 17, 18, 19, 20, b, c])
      );
    else d = D;
    if (nb_determines < 5)
      e = parseInt(choice(liste_choix, [12, 13, 14, 15, 16, 17, 18, 19, 20]));
    else e = E;
    tirage.push(a, b, c, d, e);
    nombres_restants = shuffle(tirage);
    operations_restantes = ["\\times", "+", "-", "\\div"];
    operations_restantes = shuffle(operations_restantes);
    expression_en_cours_f = [
      `${nombres_restants[0]}`,
      `${nombres_restants[1]}`,
      `${nombres_restants[2]}`,
      `${nombres_restants[3]}`,
      `${nombres_restants[4]}`,
    ];
    expression_en_cours_d = [
      `${nombres_restants[0]}`,
      `${nombres_restants[1]}`,
      `${nombres_restants[2]}`,
      `${nombres_restants[3]}`,
      `${nombres_restants[4]}`,
    ];

    while (nombres_restants.length > 1) {
      b = nombres_restants.pop();
      a = nombres_restants.pop();
      part2_f = expression_en_cours_f.pop();
      part1_f = expression_en_cours_f.pop();
      part2_d = expression_en_cours_d.pop();
      part1_d = expression_en_cours_d.pop();

      op = operations_restantes.pop();
      if (op == "\\times") {
        c = a * b;
        expression_en_cours_f.push(`${part1_f}${op}${part2_f}`);
        expression_en_cours_d.push(`${part1_d}${op}${part2_d}`);
        nombres_restants.push(c);
      } else if (op == "\\div") {
        if (a % b == 0) {
          c = a / b;
          if (part1_f[0] == "\\") {
            part1_f = part1_f.substring(6, part1_f.length);
            part1_f = part1_f.substring(0, part1_f.length - 7);
          }
          if (part2_f[0] == "\\") {
            part2_f = part2_f.substring(6, part2_f.length);
            part2_f = part2_f.substring(0, part2_f.length - 7);
          }
          expression_en_cours_f.push(`\\dfrac{${part1_f}}{${part2_f}}`);
          expression_en_cours_d.push(`${part1_d}${op}${part2_d}`);
          nombres_restants.push(c);
        } else break;
      } else if (op == "-") {
        if (a > b) {
          c = a - b;
          expression_en_cours_f.push(
            `\\left(${part1_f}${op}${part2_f}\\right)`
          );
          expression_en_cours_d.push(
            `\\left(${part1_d}${op}${part2_d}\\right)`
          );
          nombres_restants.push(c);
        } else break;
      } else if (op == "+") {
        c = a + b;
        if (part2_f.substring(0, 2) == "\\l") {
          part2_f = part2_f.substring(6, part2_f.length);
          part2_f = part2_f.substring(0, part2_f.length - 7);
        }
        expression_en_cours_f.push(`\\left(${part1_f}${op}${part2_f}\\right)`);
        if (part2_d.substring(0, 2) == "\\l") {
          part2_d = part2_d.substring(6, part2_d.length);
          part2_d = part2_d.substring(0, part2_d.length - 7);
        }
        expression_en_cours_d.push(`\\left(${part1_d}${op}${part2_d}\\right)`);
        nombres_restants.push(c);
      }
      operations_successives.push(`${a}` + op + `${b}=${c}`);
    }

    if (nombres_restants.length == 1 && operations_restantes.length == 0) {
      solution = nombres_restants[0];
      if (solution >= min && solution <= max) {
        eureka = true;
        if (
          expression_en_cours_f[0][0] == "\\" &&
          expression_en_cours_f[0][1] == `l`
        ) {
          expression_en_cours_f[0] = expression_en_cours_f[0].substring(
            6,
            expression_en_cours_f[0].length
          );
          expression_en_cours_f[0] = expression_en_cours_f[0].substring(
            0,
            expression_en_cours_f[0].length - 7
          );
        }
        if (
          expression_en_cours_d[0][0] == "\\" &&
          expression_en_cours_d[0][1] == `l`
        ) {
          expression_en_cours_d[0] = expression_en_cours_d[0].substring(
            6,
            expression_en_cours_d[0].length
          );
          expression_en_cours_d[0] = expression_en_cours_d[0].substring(
            0,
            expression_en_cours_d[0].length - 7
          );
        }
        return [
          tirage,
          solution,
          operations_successives,
          expression_en_cours_f,
          expression_en_cours_d,
        ];
      } else operations_successives = [];
    } else operations_successives = [];
  }
}

/**
 * Le nombre de dizaines, centaines et milliers étant donné, il faut écrire le nombre.
 *
 * 2 fois sur 5 il y a chevauchement entre les classes
 * @Auteur Rémi Angot
 */
function Exercice_numeration_entier() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre =
    "Écrire un nombre à partir de son nombre de dizaines, de centaines, de milliers...";
  this.consigne = "Écrire en chiffres chacun des nombres.";
  this.nb_questions = 5;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = [1, 2]; // sans chevauchement ou avec chevauchement
    let liste_type_de_questions = combinaison_listes(
      [1, 1, 1, 2, 2],
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, rang_a, rang_b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = randint(2, 8) * 10 + randint(1, 5);
      b = randint(2, 8) * 10 + randint(1, 5);
      let rangs = [
        "unités",
        "dizaines",
        "centaines",
        "milliers",
        "dizaines de mille",
        "centaines de mille",
        "millions",
      ];
      rang_a = randint(0, 2);
      if (liste_type_de_questions[i] == 1) {
        rang_b = randint(rang_a + 2, 6);
      } else {
        rang_b = rang_a + 1;
      }

      texte = `$\\text{${b}  ${rangs[rang_b]} et ${a} ${rangs[rang_a]}}$`;
      texte_corr = `$${b} \\text{ ${rangs[rang_b]} et }${a} \\text{ ${
        rangs[rang_a]
      } : } ${tex_nombre(
        b * Math.pow(10, rang_b) + a * Math.pow(10, rang_a)
      )}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Des questions sur le nombre ou le chiffre de centaines, de dizaines, de dixièmes, de centièmes...
 * @Auteur Rémi Angot
 */
function Decomposition_nombre_decimal() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Décomposer un nombre décimal (nombre de..., chiffre de...)";
  this.consigne = "Compléter les phrases suivantes.";
  this.nb_questions = 5;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = [
      1,
      2,
      choice([3, 4, 5]),
      choice([6, 7, 8]),
      choice([9, 10]),
      choice([11, 12]),
    ]; // sans chevauchement ou avec chevauchement
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let m = randint(1, 9); // le nombre sera le même pour tout l'exercice
    let c = randint(0, 9, [m]);
    let d = randint(0, 9, [m, c]);
    let u = randint(0, 9, [m, c, d]);
    let di = randint(0, 9, [m, c, d, u]);
    let ci = randint(0, 9, [m, c, d, u, di]);
    let mi = randint(1, 9, [m, c, d, u, di, ci]);
    let n =
      m.toString() +
      "" +
      c.toString() +
      d.toString() +
      u.toString() +
      "," +
      di.toString() +
      ci.toString() +
      mi;
    //calcul ne semble pas marcher avec 7 chiffres significatifs
    this.consigne = `On considère le nombre $${n}$. Compléter les phrases suivantes.`;
    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1:
          texte = "La partie entière de ce nombre est : ";
          texte_corr =
            texte + `$${tex_nombrec(m * 1000 + c * 100 + d * 10 + u)}$`;
          break;
        case 2:
          texte = "La partie décimale de ce nombre est : ";
          texte_corr =
            texte + `$${tex_nombrec(di / 10 + ci / 100 + mi / 1000)}$`;
          break;
        case 3:
          texte = "Le chiffre des dizaines de ce nombre est : ";
          texte_corr = texte + `$${d}$`;
          break;
        case 4:
          texte = "Le chiffre des centaines de ce nombre est : ";
          texte_corr = texte + `$${c}$`;
          break;
        case 5:
          texte = "Le chiffre des miliers de ce nombre est : ";
          texte_corr = texte + `$${m}$`;
          break;
        case 6:
          texte = "Le chiffre des dixièmes de ce nombre est : ";
          texte_corr = texte + `$${di}$`;
          break;
        case 7:
          texte = "Le chiffre des centièmes de ce nombre est : ";
          texte_corr = texte + `$${ci}$`;
          break;
        case 8:
          texte = "Le chiffre des millièmes de ce nombre est : ";
          texte_corr = texte + `$${mi}$`;
          break;
        case 9:
          texte = "Le nombre de dizaines de ce nombre est : ";
          texte_corr = texte + `$${tex_nombrec(d + c * 10 + m * 100)}$`;
          break;
        case 10:
          texte = "Le nombre de centaines de ce nombre est : ";
          texte_corr = texte + `$${tex_nombrec(c + m * 10)}$`;
          break;
        case 11:
          texte = "Le nombre de dixièmes de ce nombre est : ";
          texte_corr =
            texte +
            `$${tex_nombrec(di + u * 10 + d * 100 + c * 1000 + m * 10000)}$`;
          break;
        case 12:
          texte = "Le nombre de centièmes de ce nombre est : ";
          texte_corr =
            texte +
            `$${tex_nombrec(
              ci + di * 10 + u * 100 + d * 1000 + c * 10000 + m * 100000
            )}$`;
          break;
      }

      texte_corr += ".";
      texte += "\\ldots";
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * 100-...=
 * @Auteur Rémi Angot
 */
function Complement_a_100() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Complément à 100";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = randint(11, 89);
      texte = `$100-${a}$`;
      texte_corr = `$100-${a}=${100 - a}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Une soustraction dont le premier terme est un multiple de 10
 * @Auteur Rémi Angot
 */
function Complement_a_une_dizaine() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Complément à une dizaine";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = randint(2, 9) * 10;
      b = randint(2, a - 11);
      texte = `$${a}-${b}$`;
      texte_corr = `$${a}-${b}=${a - b}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Division d'un entier par 10, 100, 1000
 * @Auteur Rémi Angot
 */
function Diviser_par_10_100_1000() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Diviser un entier par 10, 100 ou 1000";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = choice([randint(1, 9), randint(11, 99), randint(101, 999)]);
      b = choice([10, 100, 1000]);
      texte = `$${tex_nombre(a)}\\div${tex_nombre(b)}$`;
      texte_corr = `$${tex_nombre(a)}\\div${tex_nombre(b)}=${tex_nombrec(
        a / b
      )}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
}

/**
 * Un entier à un 1 ou 2 chiffres, un nombre décimal avec une partie décimale à un ou 2 chiffres à diviser par 10, 100 ou 1000
 * @Auteur Rémi Angot
 */
function Diviser_decimal_par_10_100_1000() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Diviser un nombre décimal par 10, 100 ou 1000";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = choice([
        randint(1, 9),
        randint(11, 99),
        calcul(randint(11, 99) / 10),
        calcul(randint(101, 999) / 100),
        calcul(randint(1, 9) / 10),
      ]);
      b = choice([10, 100, 1000]);
      texte = `$${tex_nombre(a)}\\div${tex_nombre(b)}$`;
      texte_corr = `$${tex_nombre(a)}\\div${tex_nombre(b)}=${tex_nombrec(
        a / b
      )}$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Calculer la moitié d'un nombre pair, d'un impair inférieur à 20, d'un multiple de 200, d'un nombre de la forme a00 avec a impair, d'un nombre de la forme
 *  a,b avec a et b pairs ou 1xx avec xx un nombre pair
 * @Auteur Rémi Angot
 */
function Moitie() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Moitié";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1; // niveau de difficulté

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = range1(6);
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1: // Table de 2
          a = randint(2, 9);
          texte = `$\\text{La moitié de }${a * 2}$`;
          texte_corr = `$\\text{La moitié de }${a * 2} \\text{ est } ${a}$`;
          break;
        case 2: // Impair inférieur à 20
          a = randint(2, 9);
          texte = `$\\text{La moitié de }${a * 2 + 1}$`;
          texte_corr = `$\\text{La moitié de }${
            a * 2 + 1
          } \\text{ est } ${tex_nombrec(a + 5 / 10)}$`;
          break;
        case 3: // Table de 200
          a = randint(2, 9);
          texte = `$\\text{La moitié de }${tex_nombre(a * 2 * 100)}$`;
          texte_corr = `$\\text{La moitié de }${tex_nombre(
            a * 2 * 100
          )} \\text{ est } ${tex_nombre(a * 100)}$`;
          break;
        case 4: // a00 avec a impair
          a = randint(2, 9);
          texte = `$\\text{La moitié de }${tex_nombre((a * 2 + 1) * 100)}$`;
          texte_corr = `$\\text{La moitié de }${tex_nombre(
            (a * 2 + 1) * 100
          )} \\text{ est } ${tex_nombre(a * 100 + 50)}$`;
          break;
        case 5: // a,b avec a et b pairs
          a = randint(2, 9);
          b = randint(2, 9);
          texte = `$\\text{La moitié de }${tex_nombrec(
            a * 2 + (b * 2) / 100
          )}$`;
          texte_corr = `$\\text{La moitié de }${tex_nombrec(
            a * 2 + (b * 2) / 100
          )} \\text{ est } ${tex_nombrec(a + b / 100)}$`;
          break;
        case 6: // 1xx avec xx un nombre pair
          a = randint(2, 9);
          texte = `$\\text{La moitié de }${100 + a * 2}$`;
          texte_corr = `$\\text{La moitié de }${100 + a * 2} \\text{ est } ${
            50 + a
          }$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Calculer le tiers d'un multiple de 3, d'un multiple de 300, d'un multiple de 30 ou d'un nombre a,b avec a et b multiples de 3
 * @Auteur Rémi Angot
 */
function Tiers() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Tiers";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1; // niveau de difficulté

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = range1(4);
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1: // Table de 3
          a = randint(2, 9);
          texte = `$\\text{Le tiers de }${a * 3}$`;
          texte_corr = `$\\text{Le tiers de }${a * 3} \\text{ est } ${a}$`;
          break;
        case 2: // Table de 300
          a = randint(2, 9);
          texte = `$\\text{Le tiers de }${tex_nombre(a * 3 * 100)}$`;
          texte_corr = `$\\text{Le tiers de }${tex_nombre(
            a * 3 * 100
          )} \\text{ est } ${tex_nombre(a * 100)}$`;
          break;
        case 3: // Table de 30
          a = randint(2, 9);
          texte = `$\\text{Le tiers de }${tex_nombre(a * 3 * 10)}$`;
          texte_corr = `$\\text{Le tiers de }${tex_nombre(
            a * 3 * 10
          )} \\text{ est } ${tex_nombre(a * 10)}$`;
          break;
        case 4: // a,b avec a et b divisibles par 3
          a = randint(2, 9);
          b = randint(2, 9);
          texte = `$\\text{Le tiers de }${tex_nombrec(a * 3 + (b * 3) / 100)}$`;
          texte_corr = `$\\text{Le tiers de }${tex_nombrec(
            a * 3 + (b * 3) / 100
          )} \\text{ est } ${tex_nombrec(a + b / 100)}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Calculer le quart d'un multiple de 4, d'un impair, d'un multiple de 400, d'un multiple de 40, d'un nombre a,b avec a et b multiples de 4
 * @Auteur Rémi Angot
 */
function Quart() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Quart";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1; // niveau de difficulté

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = range1(5);
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1: // Table de 4
          a = randint(2, 9);
          texte = `$\\text{Le quart de }${a * 4}$`;
          texte_corr = `$\\text{Le quart de }${a * 4} \\text{ est } ${a}$`;
          break;
        case 2: // Impair
          a = randint(2, 9);
          b = choice([1, 2, 3]);
          texte = `$\\text{Le quart de }${a * 4 + b}$`;
          texte_corr = `$\\text{Le quart de }${
            a * 4 + b
          } \\text{ est } ${tex_nombrec(a + b / 4)}$`;
          break;
        case 3: // Table de 400
          a = randint(2, 9);
          texte = `$\\text{Le quart de }${tex_nombre(a * 4 * 100)}$`;
          texte_corr = `$\\text{Le quart de }${tex_nombre(
            a * 4 * 100
          )} \\text{ est } ${tex_nombre(a * 100)}$`;
          break;
        case 4: // Table de 40
          a = randint(2, 9);
          texte = `$\\text{Le quart de }${tex_nombre(a * 4 * 10)}$`;
          texte_corr = `$\\text{Le quart de }${tex_nombre(
            a * 4 * 10
          )} \\text{ est } ${tex_nombre(a * 10)}$`;
          break;
        case 5: // a,b avec a et b divisibles par 4
          a = randint(2, 9);
          b = randint(2, 9);
          texte = `$\\text{Le quart de }${tex_nombrec(a * 4 + (b * 4) / 100)}$`;
          texte_corr = `$\\text{Le quart de }${tex_nombrec(
            a * 4 + (b * 4) / 100
          )} \\text{ est } ${tex_nombrec(a + b / 100)}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Calculer le double ou le triple d'un nombre, calculer la moitié d'un nombre pair ou le tiers d'un multiple de 3
 * @Auteur Rémi Angot
 */
function Double_moitie_tiers_triple() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Double, moitié, tiers, triple";
  this.consigne = "Calculer";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup = 1; // niveau de difficulté

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = range1(4);
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, a, b, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1: // Double
          a = randint(2, 9);
          texte = `$\\text{Le double de }${a}$`;
          texte_corr = `$\\text{Le double de }${a} \\text{ est } ${a * 2}$`;
          break;
        case 2: // Moitié
          a = randint(2, 9) * 2;
          texte = `$\\text{La moitié de }${a * 2}$`;
          texte_corr = `$\\text{La moitié de }${a * 2} \\text{ est } ${a}$`;
          break;
        case 3: // Triple
          a = randint(2, 9);
          texte = `$\\text{Le triple de }${a}$`;
          texte_corr = `$\\text{Le triple de }${a} \\text{ est } ${a * 3}$`;
          break;
        case 4: // Tiers
          a = randint(2, 9);
          texte = `$\\text{Le tiers de }${a * 3}$`;
          texte_corr = `$\\text{Le tiers de }${a * 3} \\text{ est } ${a}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Les 2 facteurs peuvent terminer par aucun, 1, 2 ou 3 zéros
 * @Auteur Rémi Angot
 */
function Exercice_tables_de_multiplications_et_multiples_de_10(
  tables_par_defaut = "2-3-4-5-6-7-8-9"
) {
  //Multiplier deux nombres
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = tables_par_defaut;
  this.titre = "Tables de multiplications et multiples de 10";
  this.consigne = "Calculer";
  this.spacing = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    if (!this.sup) {
      // Si aucune table n'est saisie
      this.sup = "2-3-4-5-6-7-8-9";
    }
    let tables = [];
    if (typeof this.sup == "number") {
      // Si c'est un nombre c'est qu'il y a qu'une seule table
      tables[0] = this.sup;
    } else {
      tables = this.sup.split("-"); // Sinon on créé un tableau à partir des valeurs séparées par des ;
    }
    let couples = creer_couples(
      tables,
      [2, 3, 4, 5, 6, 7, 8, 9, 10],
      this.nb_questions
    ); //Liste tous les couples possibles (2,3)≠(3,2)
    for (
      let i = 0, a, b, k1, k2, texte, texte_corr, melange;
      i < this.nb_questions;
      i++
    ) {
      a = couples[i][0];
      b = couples[i][1];
      if (a > 1) {
        k1 = choice([1, 10, 100, 1000]);
      } else {
        k1 = choice([10, 100, 1000]);
      }
      k2 = choice([1, 10, 100, 1000]);
      a = k1 * a;
      b = k2 * b;
      melange = randint(0, 1);
      if (melange == 1) {
        // échange a et b pour que les multiplications ne soient pas toujours dans le même ordre (surtout lorsque tables n'a qu'un seul élément)
        let c = a;
        a = b;
        b = c;
      }

      texte =
        "$ " + tex_nombre(a) + " \\times " + tex_nombre(b) + " = \\dotfill $";
      texte_corr =
        "$ " +
        tex_nombre(a) +
        " \\times " +
        tex_nombre(b) +
        " = " +
        tex_nombre(a * b) +
        " $";
      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_texte = [
    "Choix des tables",
    "Nombres séparés par des tirets",
  ]; // Texte, tooltip
}

/**
 * Multiplier deux nombres décimaux
 * @Auteur Rémi Angot
 */
function Exercice_tables_de_multiplications_et_decimaux(
  tables_par_defaut = "2-3-4-5-6-7-8-9"
) {
  //Multiplier deux nombres
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = tables_par_defaut;
  this.titre = "Tables de multiplications et nombres décimaux";
  this.consigne = "Calculer";
  this.spacing = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    if (!this.sup) {
      // Si aucune table n'est saisie
      this.sup = "2-3-4-5-6-7-8-9";
    }
    let tables = [];
    if (typeof this.sup == "number") {
      // Si c'est un nombre c'est qu'il y a qu'une seule table
      tables[0] = this.sup;
    } else {
      tables = this.sup.split("-"); // Sinon on créé un tableau à partir des valeurs séparées par des ;
    }
    let couples = creer_couples(
      tables,
      [2, 3, 4, 5, 6, 7, 8, 9, 10],
      this.nb_questions
    ); //Liste tous les couples possibles (2,3)≠(3,2)
    for (
      let i = 0, a, b, k1, k2, couple, texte, texte_corr;
      i < this.nb_questions;
      i++
    ) {
      a = couples[i][0];
      b = couples[i][1];
      couple = choice([
        [1, 10],
        [1, 100],
        [1, 1000],
        [10, 100],
        [10, 1000],
        [100, 100],
        [100, 1000],
      ]);
      k1 = couple[0];
      k2 = couple[1];
      a = Algebrite.eval(a / k1);
      b = Algebrite.eval(b / k2);
      if (a == 1) {
        a = 0.01;
      }
      if (b == 1) {
        b = 0.1;
      }
      texte =
        "$ " + tex_nombre(a) + " \\times " + tex_nombre(b) + " = \\dotfill $";
      texte_corr =
        "$ " +
        tex_nombre(a) +
        " \\times " +
        tex_nombre(b) +
        " = " +
        tex_nombre(Algebrite.eval(a * b)) +
        " $";
      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_texte = [
    "Choix des tables",
    "Nombres séparés par des tirets",
  ]; // Texte, tooltip
}

/**
 * Additionner deux entiers
 * @Auteur Rémi Angot
 */
function Exercice_tables_d_additions(max = 20) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Addition de deux entiers";
  this.consigne = "Calculer";
  this.sup = max; // Le paramètre accessible à l'utilisateur sera la valeur maximale
  this.spacing = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    for (
      let i = 0, a, b, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = randint(2, this.sup);
      b = randint(2, this.sup);
      texte = "$ " + tex_nombre(a) + " + " + tex_nombre(b) + " = \\dotfill $";
      texte_corr =
        "$ " +
        tex_nombre(a) +
        " + " +
        tex_nombre(b) +
        " = " +
        tex_nombre(a + b) +
        " $";
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ["Valeur maximale", 99999];
}

/**
 * Simplifier une fraction, le facteur commun est inférieur à une valeur donnée en paramètre qui est 11 par défaut
 * @Auteur Rémi Angot
 */
function Exercice_fractions_simplifier(max = 11) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = max; // Correspond au facteur commun
  this.titre = "Simplification de fractions";
  this.consigne = "Simplifier les fractions suivantes.";
  this.spacing = 2;
  this.spacing_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    liste_fractions = [
      [1, 2],
      [1, 3],
      [2, 3],
      [1, 4],
      [3, 4],
      [1, 5],
      [2, 5],
      [3, 5],
      [4, 5],
      [1, 6],
      [5, 6],
      [1, 7],
      [2, 7],
      [3, 7],
      [4, 7],
      [5, 7],
      [6, 7],
      [1, 8],
      [3, 8],
      [5, 8],
      [7, 8],
      [1, 9],
      [2, 9],
      [4, 9],
      [5, 9],
      [7, 9],
      [8, 9],
      [1, 10],
      [3, 10],
      [7, 10],
      [9, 10],
    ]; // Couples de nombres premiers entre eux
    for (
      let i = 0, fraction, a, b, texte, texte_corr, cpt = 0;
      i < this.nb_questions;
      i++
    ) {
      fraction = choice(liste_fractions); //
      a = fraction[0];
      b = fraction[1];
      k = randint(2, this.sup);
      enleve_element(liste_fractions, fraction); // Il n'y aura pas 2 fois la même réponse
      texte =
        "$ " +
        tex_fraction(k * a, k * b) +
        " = " +
        tex_fraction("\\phantom{00000000000000}", "") +
        " = " +
        tex_fraction("\\phantom{0000}", "") +
        " $";
      texte_corr =
        "$ " +
        tex_fraction(k * a, k * b) +
        " = " +
        tex_fraction(k + " \\times " + a, k + " \\times " + b) +
        " = " +
        tex_fraction(a, b) +
        " $";
      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
    }
    liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
  };
  this.besoin_formulaire_numerique = [
    "Valeur maximale du facteur commun",
    99999,
  ];
}

/**
 * Écrire une fraction avec un nouveau dénominateur qui est un multiple de son dénominateur (ce multiple est inférieur à une valeur maximale de 11 par défaut)
 * @Auteur Rémi Angot
 */
function Egalites_entre_fractions() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = 11; // Correspond au facteur commun
  this.titre = "Égalités entre fractions simples";
  this.consigne = "Compléter les égalités.";
  this.spacing = 2;
  this.spacing_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    liste_fractions = [
      [1, 2],
      [1, 3],
      [2, 3],
      [1, 4],
      [3, 4],
      [1, 5],
      [2, 5],
      [3, 5],
      [4, 5],
      [1, 6],
      [5, 6],
      [1, 7],
      [2, 7],
      [3, 7],
      [4, 7],
      [5, 7],
      [6, 7],
      [1, 8],
      [3, 8],
      [5, 8],
      [7, 8],
      [1, 9],
      [2, 9],
      [4, 9],
      [5, 9],
      [7, 9],
      [8, 9],
      [1, 10],
      [3, 10],
      [7, 10],
      [9, 10],
    ]; // Couples de nombres premiers entre eux
    let liste_type_de_questions = combinaison_listes(
      [1, 1, 1, 1, 2],
      this.nb_questions
    );
    for (
      let i = 0, fraction, a, b, c, d, k, texte, texte_corr, cpt = 0;
      i < this.nb_questions;
      i++
    ) {
      if (liste_type_de_questions[i] == 1) {
        // égalité entre 2 fractions
        fraction = choice(liste_fractions); //
        a = fraction[0];
        b = fraction[1];
        k = randint(2, this.sup);
        c = k * a;
        d = k * b;
        enleve_element(liste_fractions, fraction); // Il n'y aura pas 2 fois la même fraction de départ
        texte = `$${tex_fraction(a, b)} = ${tex_fraction(
          "\\phantom{00000000000000}",
          "\\phantom{00000000000000}"
        )} = ${tex_fraction("\\phantom{0000}", d)}$`;
        texte_corr = `$${tex_fraction(a, b)} = ${tex_fraction(
          a + mise_en_evidence("\\times" + k),
          b + mise_en_evidence("\\times" + k)
        )} = ${tex_fraction(c, d)}$`;
      } else {
        //écrire un entier sous la forme d'une fraction
        a = randint(1, 9);
        d = randint(2, 9);
        c = a * d;
        texte = `$${a} = ${tex_fraction(
          "\\phantom{00000000000000}",
          "\\phantom{00000000000000}"
        )} = ${tex_fraction("\\phantom{0000}", d)}$`;
        texte_corr = `$${a} = \\dfrac{${a}}{1} =${tex_fraction(
          a + mise_en_evidence("\\times" + d),
          "1" + mise_en_evidence("\\times" + d)
        )} = ${tex_fraction(c, d)}$`;
      }

      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ["Valeur maximale du facteur commun", 99];
}

/**
 * Un nombre est-il divisible par :
 *
 * * 2, 5, 10 ?
 * * 3, 9 ?
 * * 2, 3, 5, 9, 10 ?
 * * 2, 3, 5, 9, 10  et un autre nombre qui peut être 7, 13, 17, ou 19 ?
 * @Auteur Rémi Angot
 */
function Criteres_de_divisibilite() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = 4; // Correspond au facteur commun
  this.titre = "Critères de divisibilité";
  this.consigne = "Répondre aux questions suivantes en justifiant.";
  this.spacing = 2;
  this.spacing_corr = 1;
  this.nb_questions = 5;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let liste_des_exercices_disponibles;
    if (this.sup == 1) {
      liste_des_exercices_disponibles = [2, 5, 10];
    }
    if (this.sup == 2) {
      liste_des_exercices_disponibles = [3, 9];
    }
    if (this.sup == 3) {
      liste_des_exercices_disponibles = [2, 3, 5, 9, 10];
    }
    if (this.sup > 3) {
      liste_des_exercices_disponibles = [2, 3, 5, 9, 10, "autre"];
    }
    let liste_type_de_questions = combinaison_listes(
      liste_des_exercices_disponibles,
      this.nb_questions
    );
    for (
      let i = 0, fraction, n, u, texte, texte_corr, somme_string, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 2:
          u = randint(1, 2);
          n = randint(10, 999) * 10 + u;
          texte = `$${tex_nombre(n)}$ est-il divisible par $2$ ?`;
          if (u % 2 == 0) {
            texte_corr = `Le chiffre des unités de $${tex_nombre(
              n
            )}$ est $${u}$ donc $${tex_nombre(n)}$ est divisible par $2$.`;
          } else {
            texte_corr = `Le chiffre des unités de $${tex_nombre(
              n
            )}$ est $${u}$ donc $${tex_nombre(
              n
            )}$ n'est pas divisible par $2$.`;
          }
          break;

        case 3:
          n = choice([randint(100, 999), randint(10000, 99999)]).toString(); // transformé en string pour avoir accès aux chiffres
          somme_string = somme_des_chiffre(n);
          texte = `$${tex_nombre(n)}$ est-il divisible par $3$ ?`;
          if (calcul(somme_string) % 3 == 0) {
            texte_corr = `$${somme_string}=${calcul(somme_string)}=3\\times${
              calcul(somme_string) / 3
            }$<br>`;
            texte_corr += `La somme des chiffres de $${tex_nombre(
              n
            )}$ est divisible par $3$ donc $${tex_nombre(
              n
            )}$ est divisible par $3$.`;
          } else {
            texte_corr = `$${somme_string}=${calcul(somme_string)}=3\\times${
              (calcul(somme_string) - (calcul(somme_string) % 3)) / 3
            }+${calcul(somme_string) % 3}$<br>`;
            texte_corr += `La somme des chiffres de $${tex_nombre(
              n
            )}$ n'est pas divisible par $3$ donc $${tex_nombre(
              n
            )}$ n'est pas divisible par $3$.`;
          }
          break;

        case 9:
          n = choice([randint(100, 999), randint(10000, 99999)]).toString(); // transformé en string pour avoir accès aux chiffres
          somme_string = somme_des_chiffre(n);
          texte = `$${tex_nombre(n)}$ est-il divisible par $9$ ?`;
          if (calcul(somme_string) % 9 == 0) {
            texte_corr = `$${somme_string}=${calcul(somme_string)}=9\\times${
              calcul(somme_string) / 9
            }$<br>`;
            texte_corr += `La somme des chiffres de $${tex_nombre(
              n
            )}$ est divisible par $9$ donc $${tex_nombre(
              n
            )}$ est divisible par $9$.`;
          } else {
            texte_corr = `$${somme_string}=${calcul(somme_string)}=9\\times${
              (calcul(somme_string) - (calcul(somme_string) % 9)) / 9
            }+${calcul(somme_string) % 9}$<br>`;
            texte_corr += `La somme des chiffres de $${tex_nombre(
              n
            )}$ n'est pas divisible par $9$ donc $${tex_nombre(
              n
            )}$ n'est pas divisible par $9$.`;
          }
          break;

        case 5:
          u = choice([randint(1, 9, [0, 5]), randint(1, 9, [0, 5]), 5, 0]); // 1 fois sur 2 ça sera divisible par 5
          n = randint(10, 9999) * 10 + u;
          texte = `$${tex_nombre(n)}$ est-il divisible par $5$ ?`;
          if (u % 5 == 0) {
            texte_corr = `Le chiffre des unités de $${tex_nombre(
              n
            )}$ est $${u}$ donc $${tex_nombre(n)}$ est divisible par $5$.`;
          } else {
            texte_corr = `Le chiffre des unités de $${tex_nombre(
              n
            )}$ est $${u}$ donc $${tex_nombre(
              n
            )}$ n'est pas divisible par $5$.`;
          }
          break;

        case 10:
          u = choice([randint(1, 9), 0]); // 1 fois sur 2 ça sera divisible par 10
          n = randint(10, 9999) * 10 + u;
          texte = `$${tex_nombre(n)}$ est-il divisible par $10$ ?`;
          if (u == 0) {
            texte_corr = `Le chiffre des unités de $${tex_nombre(
              n
            )}$ est $${u}$ donc $${tex_nombre(n)}$ est divisible par $10$.`;
          } else {
            texte_corr = `Le chiffre des unités de $${tex_nombre(
              n
            )}$ est $${u}$ donc $${tex_nombre(
              n
            )}$ n'est pas divisible par $10$.`;
          }
          break;

        case "autre":
          n = randint(100, 999);
          u = choice([7, 7, 7, 7, 13, 17, 19]);
          if (u == 7) {
            n = choice(
              [randint(10, 99) * 10 + 7],
              7 * randint(11, 99),
              randint(100, 999)
            ); //un nombre qui se termine par 7, un divisible par 7, un au hasard
          } else {
            n = choice(
              [randint(10, 99) * 100 + u],
              u * randint(11, 99),
              randint(100, 999)
            ); //un nombre qui se termine par u, un divisible par u, un au hasard
          }
          texte = `$${tex_nombre(n)}$ est-il divisible par $${u}$ ?`;
          texte_corr = `On ne connait pas de critère de divisibilité par $${u}$, on calcule donc la division euclidienne de $${tex_nombre(
            n
          )}$ par $${u}$.<br>`;
          if (n % u == 0) {
            texte_corr += `$${tex_nombre(n)}=${u}\\times${tex_nombre(
              n / u
            )}$<br>`;
            texte_corr += `Le reste de la division euclidienne est nul donc $${tex_nombre(
              n
            )}$ est divisible par $${u}$.`;
          } else {
            texte_corr += `$${tex_nombre(n)}=${u}\\times${(n - (n % u)) / u}+${
              n % u
            }$<br>`;
            texte_corr += `Le reste de la division euclidienne n'est pas nul donc $${tex_nombre(
              n
            )}$ n'est pas divisible par $${u}$.`;
          }

          break;
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Choix des questions",
    4,
    "1 : Critères de divisibilité par 2, 5, 10\n\
2 : Critères de divisibilité par 3,9\n3 : Critères de divisibilité par 2, 3, 5, 9, 10\n4 : Avec ou sans critère de divisibilité",
  ];
}

/**
 * Un nombre est-il divisible par 2, 3, 5, 9 ?
 *
 *
 * @Auteur Rémi Angot
 */
function Tableau_criteres_de_divisibilite() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = 4; // Correspond au facteur commun
  this.titre = "Critères de divisibilité";
  this.consigne =
    "Compléter le tableau en mettant oui ou non dans chaque case.";
  this.spacing = 1;
  this.spacing_corr = 1;
  this.nb_questions = 5;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let liste_des_nombres_possibles = [
      "div2",
      "div3",
      "div39",
      "div5",
      "div25",
      "div23",
      "div239",
      "div35",
      "div2359",
      "divrien",
    ];
    // divisible par 2, divisible par 3, divisible par 3 et 9...

    let liste_des_types_de_nombres = combinaison_listes(
      liste_des_nombres_possibles,
      this.nb_questions
    );
    let tableau_de_nombres = [];
    let tableau_de_nombres_avec_correction = [];
    let liste_de_facteurs = [
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97,
      101,
      103,
      107,
      109,
      113,
      127,
      131,
      137,
      139,
      149,
      151,
      157,
      163,
      167,
      173,
      179,
      181,
      191,
      193,
      197,
      199,
      211,
      223,
      227,
      229,
      233,
      239,
      241,
      251,
      257,
      263,
      269,
      271,
      277,
      281,
      283,
      293,
    ];
    for (let i = 0; i < this.nb_questions; i++) {
      switch (liste_des_types_de_nombres[i]) {
        case "div2":
          tableau_de_nombres[i] = 2 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} & \\text{non} \\\\`;
          break;
        case "div3":
          tableau_de_nombres[i] = 3 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} \\\\`;
          break;
        case "div39":
          tableau_de_nombres[i] = 9 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} & \\color{blue} \\text{oui} \\\\`;
          break;
        case "div5":
          tableau_de_nombres[i] = 5 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\text{non} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} \\\\`;
          break;
        case "div25":
          tableau_de_nombres[i] = 10 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\color{blue} \\text{oui} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} \\\\`;
          break;
        case "div23":
          tableau_de_nombres[i] = 6 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\color{blue} \\text{oui} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} \\\\`;
          break;
        case "div239":
          tableau_de_nombres[i] = 18 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\color{blue} \\text{oui} & \\color{blue} \\text{oui} & \\text{non} & \\color{blue} \\text{oui} \\\\`;
          break;
        case "div35":
          tableau_de_nombres[i] = 15 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\text{non} & \\color{blue} \\text{oui} & \\color{blue} \\text{oui} & \\text{non} \\\\`;
          break;
        case "div2359":
          tableau_de_nombres[i] = 90 * choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} & \\text{non} \\\\`;
          break;
        case "divrien":
          tableau_de_nombres[i] = choice(liste_de_facteurs);
          tableau_de_nombres_avec_correction[i] = `${tex_nombre(
            tableau_de_nombres[i]
          )} & \\text{non} & \\text{non} & \\text{non} & \\text{non} \\\\`;
          break;
      }
    }

    if (sortie_html) {
      texte = `$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|c|}\n`;
    } else {
      texte = `$\\begin{array}{|l|c|c|c|c|}\n`;
    }

    texte += `\\hline\n`;
    texte += `\\text{... est divisible} & \\text{par }2 & \\text{par }3 & \\text{par }5 & \\text{par }9\\\\\n`;
    texte += `\\hline\n`;
    for (var i = 0; i < this.nb_questions; i++) {
      texte += `${tex_nombre(tableau_de_nombres[i])} & & & & \\\\\n`;
      texte += `\\hline\n`;
    }

    texte += `\\end{array}\n$`;

    if (sortie_html) {
      texte_corr = `$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|c|}\n`;
    } else {
      texte_corr = `$\\begin{array}{|l|c|c|c|c|}\n`;
    }
    texte_corr += `\\hline\n`;
    texte_corr += `\\text{... est divisible} & \\text{par }2 & \\text{par }3 & \\text{par }5 & \\text{par }9\\\\\n`;
    texte_corr += `\\hline\n`;
    for (var i = 0; i < this.nb_questions; i++) {
      texte_corr += tableau_de_nombres_avec_correction[i];
      texte_corr += `\\hline\n`;
    }

    texte_corr += `\\end{array}$\n`;

    this.liste_questions.push(texte);
    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu_sans_numero(this);
  };
}

/**
 * Exercice sur la notion de proportionnalité (ou pas)
 * @Auteur Jean-Claude Lhote
 */
function Proportionnalite_pas_proportionnalite() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Reconnaître une situation de proportionnalité";
  this.consigne = "Répondre aux questions posées en justifiant";
  this.spacing = 1.5;
  this.spacing_corr = 1.5;
  this.nb_questions = 5;
  this.nb_cols_corr = 1;
  this.nb_cols = 1;
  this.nb_cols_modifiable = false;
  this.nb_cols_corr_modifiable = false;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let liste_index_disponibles = [0, 1, 2, 3, 4];
    let liste_index = combinaison_listes(
      liste_index_disponibles,
      this.nb_questions
    );
    let liste_choix_disponibles = [1, 2, 3, 4, 5, 6];
    let liste_choix = combinaison_listes(
      liste_choix_disponibles,
      this.nb_questions
    );
    let liste_de_lieux = [
      "dans un magasin de bricolage",
      "dans une animalerie",
      "au supermarché local",
      "à l'épicerie",
      "dans la boutique du musée",
    ];
    let liste_de_choses = [[]];
    let liste_de_prix_unit = [[]];
    let tirages = [[]];
    let index3 = [];
    let villes = ["Moscou", "Berlin", "Paris", "Bruxelles", "Rome", "Belgrade"];
    let verbes = [
      "double",
      "triple",
      "quadruple",
      "est multiplié par 5",
      "est multiplié par 6",
    ];
    liste_de_choses[0] = [
      "articles",
      "outils",
      "accessoires",
      "pièces d'outillage",
      "pinceaux",
      "ampoules",
      "tournevis",
      "spatules",
      "raccords de tuyaux",
    ];
    liste_de_choses[1] = [
      "poissons rouges",
      "canetons",
      "perruches",
      "phasmes",
      "colliers anti-puces",
      "souris",
      "lapereaux",
      "paquets de graines",
    ];
    liste_de_choses[2] = [
      "sets de tables",
      "verres",
      "assiettes",
      "os à macher",
      "dosettes de café",
      "packs de lait",
      "paquets de pâtes",
    ];
    liste_de_choses[3] = [
      "mangues",
      "ananas",
      "fruits de la passion",
      "melons",
      "paquets de madeleines de Commercy",
      "bergamottes",
      "bredeles",
      "pots de cancoillotte",
    ];
    liste_de_choses[4] = [
      "cartes",
      "livres",
      "gravures",
      "puzzles",
      "maquettes",
      "roches",
      "jeux de société",
    ];
    liste_de_prix_unit[0] = [5, 4, 1.25, 3, 0.5, 1.5, 2, 6, 4.5];
    liste_de_prix_unit[1] = [1.5, 7, 20, 2.5, 25, 2, 15, 8];
    liste_de_prix_unit[2] = [1.25, 1.5, 2, 0.5, 5, 4.5, 3];
    liste_de_prix_unit[3] = [2, 2.5, 1.25, 1.5, 4, 7, 12, 3];
    liste_de_prix_unit[4] = [0.5, 5, 7, 13.5, 10, 15, 20];

    for (
      let i = 0,
        x,
        y,
        z,
        pu,
        n,
        p,
        somme,
        prenoms,
        index1,
        index2,
        objet,
        met,
        choix,
        texte,
        texte_corr,
        cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_choix[i]) {
        case 1:
          index1 = liste_index[i];
          prenoms = [prenomF(), prenomM()];
          index2 = randint(0, liste_de_choses[index1].length - 1);
          objet = liste_de_choses[index1][index2];
          pu =
            liste_de_prix_unit[index1][index2] *
            (1 + randint(1, 2) * 0.2 * randint(-1, 1));
          y = randint(2, 5);
          somme = calcul(y * pu, 2);
          p = y * randint(2, 5);
          z = calcul(p * pu, 2);
          texte = `${prenoms[0]} achète ${liste_de_lieux[index1]} des ${objet}. `;
          texte += `Elle  repart avec ${y} ${objet} pour $${tex_prix(
            somme
          )}$€. ${
            prenoms[1]
          } achète quant à lui, au même endroit ${p} ${objet} pour $${tex_prix(
            z
          )}$€.<br>`;
          texte += `Le prix des ${objet} est-il proportionnel à la quantité achetée  ?<br>`;
          texte_corr = `${prenoms[0]} dépense $${mise_en_evidence(
            tex_prix(somme),
            "blue"
          )}$€.<br>`;
          texte_corr = `${prenoms[1]} a acheté  $${mise_en_evidence(
            tex_nombre(p / y)
          )}$ fois la quantité des ${objet} achetée par ${
            prenoms[0]
          } pour $${mise_en_evidence(
            tex_prix(somme),
            "blue"
          )}$€.<br>Il a payé $${tex_prix(z)}$€ $=${mise_en_evidence(
            tex_nombrec(p / y)
          )}\\times${mise_en_evidence(tex_prix(somme), "blue")}$€.<br>`;
          texte_corr += `A l'aide de ces données, on constate que le prix des ${objet} et leur quantité sont tous les deux multipliés par le même nombre, donc ces deux grandeurs sont proportionnelles.<br>`;
          break;
        case 2:
          index1 = liste_index[i];
          prenoms = [prenomF(), prenomM()];
          index2 = randint(0, liste_de_choses[index1].length - 1);
          objet = liste_de_choses[index1][index2];
          pu =
            liste_de_prix_unit[index1][index2] *
            (1 + randint(1, 2) * 0.2 * randint(-1, 1));
          y = randint(2, 5);
          somme = calcul(y * pu, 2);
          pu -= 0.1;
          p = y * randint(2, 5);
          z = calcul(p * pu, 2);
          texte = `${prenoms[0]} achète ${liste_de_lieux[index1]} des ${objet}. `;
          texte += `Elle a obtenu ${y} ${objet} pour $${tex_prix(somme)}$€. ${
            prenoms[1]
          } achète quant à lui, au même endroit ${p} ${objet} pour $${tex_prix(
            z
          )}$€.<br>`;
          texte += `Le prix des ${objet} est-il proportionnel à la quantité achetée  ?<br>`;
          texte_corr = `${prenoms[0]} dépense $${mise_en_evidence(
            tex_prix(somme),
            "blue"
          )}$€.<br>`;
          texte_corr = `${prenoms[1]} a acheté  $${mise_en_evidence(
            tex_nombrec(p / y)
          )}$ fois la quantité des ${objet} achetée par ${
            prenoms[0]
          } pour $${mise_en_evidence(
            tex_prix(somme),
            "blue"
          )}$€.<br>Il a payé $${tex_prix(z)}$€.<br>Mais $${mise_en_evidence(
            tex_nombrec(p / y)
          )}\\times${mise_en_evidence(tex_prix(somme), "blue")}$€ $=${tex_prix(
            calcul((p * somme) / y)
          )}$€.<br>`;
          texte_corr += `À l'aide de ces données, on constate que le prix unitaire des ${objet} n'est pas le même pour ${prenoms[0]} qui en a acheté $${y}$ que pour ${prenoms[1]} qui en a acheté ${p}, donc ces deux grandeurs ne sont pas proportionnelles.<br>`;
          break;
        case 3:
          prenoms = [prenomF(), prenomM()];
          x = randint(5, 20);
          y = randint(5, 20, x) * 100;
          x = x * 100;
          n = arrondi(calcul((x / 60) * (1 + randint(0, 2) * 0.2)), 0);
          p = arrondi(calcul((y / 60) * (1 + randint(0, 2) * 0.2)), 0);
          index1 = calcul(x / n); //vitesse fille
          index2 = calcul(y / p); //vitesse garçon

          texte = `${prenoms[0]} habite à ${x} m du collège. Elle met ${n} minutes pour s'y rendre depuis chez elle.<br>`;
          texte += `${prenoms[1]}, lui, habite à ${tex_nombre(
            y
          )} m du collège. Il met ${p} minutes pour s'y rendre depuis chez lui.<br>`;
          texte += `Le temps mis pour venir au collège est-il proportionnel à la distance du foyer au collège ?<br>`;
          texte_corr = `${
            prenoms[0]
          } parcourt chaque minute environ ${tex_nombrec(
            arrondi(index1, 1)
          )} m.<br>`;
          texte_corr += `${
            prenoms[1]
          } parcourt chaque minute environ ${tex_nombrec(
            arrondi(index2, 1)
          )} m.<br>`;
          if (index1 == index2)
            texte_corr += `Pour ces deux élèves le temps mis et la distance parcourue sont proportionnelles (si l'on compare leur vitesse moyenne)`;
          else
            texte_corr += `Pour ces deux élèves le temps mis et la distance parcourue ne sont pas proportionnelles (si l'on compare leur vitesse moyenne).<br>`;
          break;
        case 4:
          prenoms = [prenomF(), prenomM()];
          x = randint(5, 20);
          y = x + randint(25, 35);
          texte = `${prenoms[0]} vient d'avoir ${x} ans cette année. Son père ${prenoms[1]} vient de fêter  son ${y}ème anniversaire.<br>`;
          texte += `L'âge de son père est-il proportionnel à l'âge de ${prenoms[0]} ?<br>`;
          texte_corr = `Aujourd'hui la différence d'âge entre ${
            prenoms[0]
          } et ${prenoms[1]} est de ${y - x} ans.<br>`;
          texte_corr += `Dans ${x} années, ${prenoms[0]} aura ${
            2 * x
          } ans, c'est à dire le double d'aujourd'hui.<br>`;
          texte_corr += `Son père ${prenoms[1]} aura ${
            x + y
          } ans cette année-là.<br>Quand l'âge de ${
            prenoms[0]
          } double, l'âge de ${prenoms[1]} ne double pas, donc l'âge de ${
            prenoms[0]
          } et l'âge de son père ne sont pas propotionnels.<br>`;
          break;
        case 5:
          index1 = randint(0, 5);
          index2 = randint(0, 4);
          texte = `Une épidémie se répand dans la ville de ${villes[index1]}.<br>`;
          texte += `Le nombre de malades ${verbes[index2]} tous les ${
            index2 + 2
          } jours.<br>`;
          texte += `Le nombre de malades est-il proportionnel au nombre de jours passés depuis le début de l'épidémie ?<br>`;
          texte_corr = `Admettons qu'il y ait 10 malades le premier jour. Le ${
            1 + 2 + index2
          }ème jour il y aura $10 \\times ${index2 + 2} = ${
            10 * (index2 + 2)
          }$ malades.<br>`;
          texte_corr += `Entre le premier jour et le ${
            3 + index2
          }ème jour, le nombre de malades est multiplié par ${
            index2 + 2
          } mais le nombre de jours est multiplié par ${3 + index2}.<br>`;
          texte_corr += `Donc le nombre de malades n'est pas proportionnel au nombre de jours passés.<br>`;
          break;
        case 6:
          prenoms = [prenomF(), prenomM()];
          index1 = randint(0, 5);
          objet = liste_de_choses[4][index1];
          index2 = randint(0, 4);
          pu =
            liste_de_prix_unit[4][index1] *
            (1 + randint(1, 2) * 0.2 * randint(-1, 1));
          n = randint(2, 6);
          p = randint(0, 3);
          tirages[0] = [n, n * pu];
          tirages[1] = [n + 1, (n + 1) * pu];
          tirages[2] = [2 * n + 1, (2 * n + 1) * pu];
          tirages[3] = [3 * n + 3, (3 * n + 3) * pu];
          met = choice([true, false]);
          if (!met) tirages[p][1] -= 0.1;
          texte = `${prenoms[1]} relève les prix des ${objet} sur un catalogue par correspondance en fonction de la quantité saisie dans le panier<br>`;
          texte += `Il note les prix dans le tableau suivant :<br> <br>`;
          texte += `$\\def\\arraystretch{1.5}\\begin{array}{|c`; // construction du tableau des effectifs en un seul morceau
          for (let j = 0; j <= tirages.length; j++) texte += `|c`;
          texte += `|}\\hline  \\text{${objet}}`;
          for (let j = 0; j < tirages.length; j++) texte += `&${tirages[j][0]}`;
          texte += `\\\\\\hline \\text{Prix (en €})`;
          for (let j = 0; j < tirages.length; j++)
            texte += `&${tex_prix(arrondi(tirages[j][1], 2))}`;
          texte += `\\\\\\hline\\end{array}$<br> <br>`;
          texte += `Le prix des ${objet} est-il proportionnel à la quatité achetée ?<br>`;
          texte_corr = `Il faut calculer le prix unitaire des ${objet} dans chaque cas de figure :<br><br>`;
          if (met) index3 = range(3);
          else index3 = range(3, [p]);
          texte_corr += `$`;
          for (let j = 0; j < index3.length; j++) {
            texte_corr += `\\dfrac{${tex_prix(
              arrondi(tirages[index3[j]][1], 2)
            )}}{${tirages[index3[j]][0]}}=`;
          }
          texte_corr += `${tex_prix(pu)}$<br><br>`;
          if (!met) {
            texte_corr += `Mais $\\dfrac{${tex_prix(
              arrondi(tirages[p][1], 2)
            )}}{${tirages[p][0]}}=${tex_prix(
              arrondi(calcul(tirages[p][1] / tirages[p][0]), 2)
            )}$€/${objet.substring(0, objet.length - 1)}<br>`;
            texte_corr += `Le prix des ${objet} n'est pas proportionnel à leur nombre.<br>`;
          } else {
            texte_corr += `Le prix des ${objet} est bien proportionnel à leur nombre.<br>`;
          }
          break;
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
  };
}

/**
 * On donne une relation de proportionnalité du type n objets coûtent x€ et on demande le prix de y objets
 * et le nombre d'objets qu'on peut acheter avec z€.
 * @Auteur Jean-Claude Lhote
 */
function Proportionnalite_par_linearite() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre =
    "Résoudre des problèmes de proportionnalité en utilisant la linéarité simple";
  this.consigne = "Répondre aux questions posées en justifiant";
  sortie_html ? (this.spacing = 2) : (this.spacing = 1);
  sortie_html ? (this.spacing_corr = 2) : (this.spacing_corr = 1);
  this.nb_questions = 5;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let liste_index_disponibles = [0, 1, 2, 3, 4];
    let liste_index = combinaison_listes(
      liste_index_disponibles,
      this.nb_questions
    );
    let liste_de_lieux = [
      "dans un magasin de bricolage",
      "dans une animalerie",
      "au supermarché local",
      "à l'épicerie",
      "dans la boutique du musée",
    ];
    let liste_de_choses = [[]];
    let liste_de_prix_unit = [[]];
    liste_de_choses[0] = [
      "articles",
      "outils",
      "accessoires",
      "pièces d'outillage",
      "pinceaux",
      "ampoules",
      "tournevis",
      "spatules",
      "raccords de tuyaux",
    ];
    liste_de_choses[1] = [
      "poissons rouges",
      "cannetons",
      "perruches",
      "phasmes",
      "colliers anti-puces",
      "souris",
      "lapereaux",
      "paquets de graines",
    ];
    liste_de_choses[2] = [
      "sets de tables",
      "verres",
      "assiettes",
      "os à macher",
      "dosettes de café",
      "packs de lait",
      "paquets de pâtes",
    ];
    liste_de_choses[3] = [
      "mangues",
      "ananas",
      "fruits de la passion",
      "melons",
      "paquets de madeleines de Commercy",
      "bergamottes",
      "bredeles",
      "pots de cancoillotte",
    ];
    liste_de_choses[4] = [
      "cartes",
      "livres",
      "gravures",
      "puzzles",
      "maquettes",
      "roches",
      "jeux de société",
    ];
    liste_de_prix_unit[0] = [5, 4, 1.25, 3, 0.5, 1.5, 2, 6, 4.5];
    liste_de_prix_unit[1] = [1.5, 7, 20, 2.5, 25, 2, 15, 8];
    liste_de_prix_unit[2] = [1.25, 1.5, 2, 0.5, 5, 4.5, 3];
    liste_de_prix_unit[3] = [2, 2.5, 1.25, 1.5, 4, 7, 12, 3];
    liste_de_prix_unit[4] = [0.5, 5, 7, 13.5, 10, 15, 20];
    for (
      let i = 0,
        x,
        y,
        z,
        pu,
        n,
        p,
        somme,
        prenoms,
        index1,
        index2,
        objet,
        met,
        texte,
        texte_corr,
        cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      index1 = liste_index[i];
      prenoms = [prenomF(), prenomM()];
      index2 = randint(0, liste_de_choses[index1].length - 1);
      objet = liste_de_choses[index1][index2];
      pu =
        liste_de_prix_unit[index1][index2] *
        (1 + randint(1, 2) * 0.2 * randint(-1, 1));
      n = randint(3, 6);
      y = n * randint(2, 5);
      x = calcul(n * pu, 2);
      somme = calcul(y * pu, 2);
      met = false;
      while (met == false) {
        p = n * randint(2, 5);
        if (p != y) met = true;
      }
      z = calcul(p * pu, 2);

      texte = `${prenoms[0]} a repéré ${liste_de_lieux[index1]} des ${objet} qui l\'intéressent.<br> `;
      texte += `Elle lit que ${n} ${objet} coûtent ${tex_prix(x)} €. `;
      texte += `Elle veut en acheter ${y}.<br> Combien va-t-elle dépenser ?<br>`;
      texte_corr = `${y} ${objet}, c'est ${texte_en_couleur(
        tex_nombrec(y / n)
      )} fois ${texte_en_couleur(
        n,
        "blue"
      )} ${objet}.<br> Si ${texte_en_couleur(
        n,
        "blue"
      )} ${objet} coûtent ${tex_prix(x)} €, alors ${texte_en_couleur(
        tex_nombrec(y / n)
      )} fois ${texte_en_couleur(
        n,
        "blue"
      )} ${objet} coutent ${texte_en_couleur(
        tex_nombrec(y / n)
      )} fois ${tex_prix(x)} €.<br>`;
      texte_corr += `Donc ${prenoms[0]} dépensera ${texte_en_couleur(
        tex_nombrec(y / n)
      )} $\\times$ ${tex_prix(x)} € = ${tex_prix(somme)} €.<br>`;
      texte += `${
        prenoms[1]
      } veut lui aussi acheter ces ${objet}. Il dispose de ${tex_prix(
        z
      )} €.<br> Combien peut-il en acheter ?<br>`;
      texte_corr += `${tex_prix(z)} €, c'est ${texte_en_couleur(
        tex_nombrec(z / x)
      )} fois ${tex_prix(x)} €.<br> Si avec ${tex_prix(
        x
      )} € on peut acheter ${texte_en_couleur(
        n,
        "blue"
      )} ${objet}, alors avec ${texte_en_couleur(
        tex_nombrec(z / x)
      )} fois ${tex_prix(x)} €, on peut acheter ${texte_en_couleur(
        tex_nombrec(z / x)
      )} fois ${texte_en_couleur(n, "blue")} ${objet}.<br>`;
      texte_corr += `Donc ${prenoms[1]} pourra acheter ${texte_en_couleur(
        tex_nombrec(z / x)
      )} $\\times$ ${texte_en_couleur(n, "blue")} = ${p} ${objet}.<br>`;
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
  };
}

/**
 * Décomposer une fraction (partie entière + fraction inférieure à 1) puis donner l'écriture décimale.
 * @Auteur Rémi Angot
 */
function Exercice_fractions_differentes_ecritures() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre =
    "Décomposer une fraction (partie entière + fraction inférieure à 1) puis donner l'écriture décimale.";
  this.consigne =
    "Écrire sous la forme de la somme d'un nombre entier et d'une fraction inférieure à 1 puis donner l'écriture décimale";
  this.spacing = 2;
  this.spacing_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    liste_fractions = [
      [1, 2, ",5"],
      [1, 4, ",25"],
      [3, 4, ",75"],
      [1, 5, ",2"],
      [2, 5, ",4"],
      [3, 5, ",6"],
      [4, 5, ",8"],
      [1, 8, ",125"],
      [3, 8, ",375"],
      [1, 10, ",1"],
      [3, 10, ",3"],
      [7, 10, ",7"],
      [9, 10, ",9"],
    ]; // Fractions irréductibles avec une écriture décimale exacte
    liste_fractions1 = [
      [1, 2, ",5"],
      [1, 4, ",25"],
      [3, 4, ",75"],
      [1, 8, ",125"],
    ];
    liste_fractions1.push(
      choice([
        [1, 10, ",1"],
        [2, 10, ",2"],
        [3, 10, ",3"],
        [7, 10, ",7"],
        [9, 10, ",9"],
      ])
    );
    liste_fractions1.push(
      choice([
        [1, 5, ",2"],
        [2, 5, ",4"],
        [3, 5, ",6"],
        [4, 5, ",8"],
      ])
    ); // liste_fractions pour les 6 premières questions
    for (
      let i = 0, cpt = 0, fraction, a, b, c, n, texte, texte_corr;
      i < this.nb_questions && cpt < 50;

    ) {
      if (i < 6) {
        fraction = choice(liste_fractions1);
        enleve_element(liste_fractions1, fraction);
      } else {
        fraction = choice(liste_fractions);
      }
      //
      c = fraction[0];
      b = fraction[1];
      n = randint(1, 4);
      a = n * b + c;
      ed = n + fraction[2];
      enleve_element(liste_fractions, fraction); // Il n'y aura pas 2 fois la même partie décimale
      texte =
        "$ " +
        tex_fraction(a, b) +
        " = \\phantom{0000} + " +
        tex_fraction("\\phantom{00000000}", "") +
        " =  $";
      texte_corr =
        "$ " +
        tex_fraction(a, b) +
        " = " +
        n +
        "+" +
        tex_fraction(c, b) +
        " = " +
        ed +
        " $";

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
  };
}

/**
 * @Auteur Rémi Angot
 */
function Exercice_fractions_decomposer() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre =
    "Décomposer une fraction (partie entière + fraction inférieure à 1).";
  this.consigne =
    "Écrire sous la forme de la somme d'un nombre entier et d'une fraction inférieure à 1.";
  this.spacing = 2;
  this.spacing_corr = 2;
  this.sup = false; // Donner l'écriture décimale

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    liste_fractions = [
      [1, 2, ",5"],
      [1, 4, ",25"],
      [3, 4, ",75"],
      [1, 5, ",2"],
      [2, 5, ",4"],
      [3, 5, ",6"],
      [4, 5, ",8"],
      [1, 8, ",125"],
      [3, 8, ",375"],
      [1, 10, ",1"],
      [3, 10, ",3"],
      [7, 10, ",7"],
      [9, 10, ",9"],
    ]; // Fractions irréductibles avec une écriture décimale exacte
    liste_fractions1 = [
      [1, 2, ",5"],
      [1, 4, ",25"],
      [3, 4, ",75"],
      [1, 8, ",125"],
    ];
    liste_fractions1.push(
      choice([
        [1, 10, ",1"],
        [2, 10, ",2"],
        [3, 10, ",3"],
        [7, 10, ",7"],
        [9, 10, ",9"],
      ])
    );
    liste_fractions1.push(
      choice([
        [1, 5, ",2"],
        [2, 5, ",4"],
        [3, 5, ",6"],
        [4, 5, ",8"],
      ])
    ); // liste_fractions pour les 6 premières questions
    for (
      let i = 0, fraction, a, b, c, n, texte, texte_corr;
      i < this.nb_questions;
      i++
    ) {
      if (i < 6) {
        fraction = choice(liste_fractions1);
        enleve_element(liste_fractions1, fraction);
      } else {
        fraction = choice(liste_fractions);
      }
      //
      c = fraction[0];
      b = fraction[1];
      n = randint(1, 4);
      a = n * b + c;
      ed = n + fraction[2];
      enleve_element(liste_fractions, fraction); // Il n'y aura pas 2 fois la même partie décimale
      texte =
        "$ " +
        tex_fraction(a, b) +
        " = \\phantom{0000} + " +
        tex_fraction("\\phantom{00000000}", "") +
        " $";
      texte_corr =
        "$ " + tex_fraction(a, b) + " = " + n + "+" + tex_fraction(c, b) + " $";
      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
    }
    liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
  };
}

/**
 * Conversions de longueur en utilisant le préfixe pour déterminer la multiplication ou division à faire.
 *
 * * 1 : De dam, hm, km vers m
 * * 2 : De dm, cm, mm vers m
 * * 3 : Conversions en mètres
 * * 4 : Toutes les conversions de longueurs
 * * Paramètre supplémentaire : utiliser des nombres décimaux (par défaut tous les nombres sont entiers)
 * @Auteur Rémi Angot
 */
function Exercice_conversions_de_longueurs(niveau = 1) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = niveau; // Niveau de difficulté de l'exercice
  this.sup2 = false; // Avec des nombres décimaux ou pas
  this.titre = "Conversions de longueurs";
  this.consigne = "Compléter";
  this.spacing = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let prefixe_multi = [
      [" da", 10],
      [" h", 100],
      [" k", 1000],
    ];
    let prefixe_div = [
      [" d", 10],
      [" c", 100],
      [" m", 1000],
    ];
    let unite = "m";
    let liste_unite = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
    let liste_de_k = combinaison_listes([0, 1, 2], this.nb_questions);
    for (
      let i = 0,
        a,
        k,
        div,
        resultat,
        type_de_questions,
        texte,
        texte_corr,
        cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      // On limite le nombre d'essais pour chercher des valeurs nouvelles
      if (this.sup < 5) {
        type_de_questions = this.sup;
      } else {
        type_de_questions = randint(1, 4);
      }
      // k = randint(0,2); // Choix du préfixe
      k = liste_de_k[i]; //Plutôt que de prendre un préfix au hasard, on alterne entre 10,100 et 1000
      if (type_de_questions == 1) {
        // niveau 1
        div = false; // Il n'y aura pas de division
      } else if (type_de_questions == 2) {
        // niveau 2
        div = true; // Avec des divisions
      } else {
        div = choice([true, false]); // Avec des multiplications ou des divisions
      }

      if (this.sup2) {
        // Si la case pour les nombres décimaux est cochée
        a = choice([
          arrondi(randint(1, 19) + randint(1, 9) / 10, 1),
          arrondi(randint(1, 9) / 10, 1),
          arrondi(randint(1, 9) / 100, 2),
          arrondi(randint(1, 9) + randint(1, 9) / 10 + randint(1, 9) / 100, 2),
        ]);
        // XX,X 0,X 0,0X X,XX
      } else {
        a = choice([
          randint(1, 9),
          randint(1, 9) * 10,
          randint(1, 9) * 100,
          randint(1, 9) * 10 + randint(1, 9),
        ]);
        // X, X0, X00, XX
      }

      if (!div && type_de_questions < 4) {
        // Si il faut multiplier pour convertir

        resultat = Algebrite.eval(a * prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
        texte =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_multi[k][0] + unite) +
          " = \\dotfill " +
          tex_texte(unite) +
          "$";

        texte_corr =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_multi[k][0] + unite) +
          " =  " +
          tex_nombre(a) +
          "\\times" +
          tex_nombre(prefixe_multi[k][1]) +
          tex_texte(unite) +
          " = " +
          tex_nombre(resultat) +
          tex_texte(unite) +
          "$";
      } else if (div && type_de_questions < 4) {
        resultat = Algebrite.eval(a / prefixe_div[k][1]).toString(); // Attention aux notations scientifiques pour 10e-8
        texte =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          " = \\dotfill " +
          tex_texte(unite) +
          "$";
        texte_corr =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          " =  " +
          tex_nombre(a) +
          "\\div" +
          tex_nombre(prefixe_div[k][1]) +
          tex_texte(unite) +
          " = " +
          tex_nombre(resultat) +
          tex_texte(unite) +
          "$";
      } else {
        // pour type de question = 4
        let unite1 = randint(0, 3);
        let ecart = randint(1, 2); // nombre de multiplication par 10 pour passer de l'un à l'autre
        if (ecart > 4 - unite1) {
          ecart = 4 - unite1;
        }
        let unite2 = unite1 + ecart;
        if (randint(0, 1) > 0) {
          resultat = Algebrite.eval(a * Math.pow(10, ecart));
          texte =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite[unite2]) +
            " = \\dotfill " +
            tex_texte(liste_unite[unite1]) +
            "$";
          texte_corr =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite[unite2]) +
            " =  " +
            tex_nombre(a) +
            "\\times" +
            tex_nombre(Math.pow(10, ecart)) +
            tex_texte(liste_unite[unite1]) +
            " = " +
            tex_nombre(resultat) +
            tex_texte(liste_unite[unite1]) +
            "$";
        } else {
          resultat = Algebrite.eval(a / Math.pow(10, ecart));
          texte =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite[unite1]) +
            " = \\dotfill " +
            tex_texte(liste_unite[unite2]) +
            "$";
          texte_corr =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite[unite1]) +
            " =  " +
            tex_nombre(a) +
            "\\div" +
            tex_nombre(Math.pow(10, ecart)) +
            tex_texte(liste_unite[unite2]) +
            " = " +
            tex_nombre(resultat) +
            tex_texte(liste_unite[unite2]) +
            "$";
        }
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        if (est_diaporama) {
          texte = texte.replace("= \\dotfill", "\\text{ en }");
        }
        if (sortie_html) {
          texte = texte.replace(
            "\\dotfill",
            "................................................"
          );
        }
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    4,
    "1 : De dam, hm, km vers m\n\
2 : De dm, cm, mm vers m\n3 : Conversions en mètres\n4 : Toutes les conversions de longueurs",
  ];
  this.besoin_formulaire2_case_a_cocher = ["Avec des nombres décimaux"];
}

/**
 * Conversions  mètres, litres, grammes, octets (et euros pour la version LaTeX) en utilisant le préfixe pour déterminer la multiplication ou division à faire.
 *
 * * 1 : De da, h, k vers l'unité de référence
 * * 2 : De d, c, m vers l'unité de référence
 * * 3 : Multiplications ou divisions vers l'unité de référence
 * * 4 : Conversions d'octets
 * * 5 : Un mélange de toutes les conversions
 * * Paramètre supplémentaire : utiliser des nombres décimaux (par défaut tous les nombres sont entiers)
 * @Auteur Rémi Angot
 */
function Exercice_conversions(niveau = 1) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = niveau; // Niveau de difficulté de l'exercice
  this.sup2 = false; // Avec des nombres décimaux ou pas
  this.titre =
    "Conversions de longueurs, masses, contenance, prix ou unités informatiques";
  this.consigne = "Compléter";
  this.spacing = 2;
  this.correction_avec_des_fractions = false;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let prefixe_multi = [
      ["da", 10],
      ["h", 100],
      ["k", 1000],
    ]; //['M',1000000],['G',1000000000],['T',1000000000000]];
    let prefixe_div = [
      ["d", 10],
      ["c", 100],
      ["m", 1000],
    ]; //['$\\mu{}$',1000000]];
    for (
      let i = 0,
        a,
        k,
        div,
        resultat,
        unite,
        type_de_questions,
        texte,
        texte_corr,
        liste_unite_info,
        cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      // On limite le nombre d'essais pour chercher des valeurs nouvelles
      if (this.sup < 5) {
        type_de_questions = this.sup;
      } else {
        type_de_questions = randint(1, 4);
      }
      k = randint(0, 2); // Choix du préfixe
      if (type_de_questions == 1) {
        // niveau 1
        div = false; // Il n'y aura pas de division
      } else if (type_de_questions == 2) {
        // niveau 2
        div = true; // Avec des divisions
      } else if (type_de_questions == 3) {
        div = choice([true, false]); // Avec des multiplications ou des divisions
      } else if (type_de_questions == 4) {
        liste_unite_info = ["o", "ko", "Mo", "Go", "To"];
      }

      if (this.sup2) {
        // Si la case pour les nombres décimaux est cochée
        a = choice([
          arrondi(randint(1, 19) + randint(1, 9) / 10, 1),
          arrondi(randint(1, 9) / 10, 1),
          arrondi(randint(1, 9) / 100, 2),
          arrondi(randint(1, 9) + randint(1, 9) / 10 + randint(1, 9) / 100, 2),
        ]);
        // XX,X 0,X 0,0X X,XX
      } else {
        a = choice([
          randint(1, 9),
          randint(1, 9) * 10,
          randint(1, 9) * 100,
          randint(1, 9) * 10 + randint(1, 9),
        ]);
        // X, X0, X00, XX
      }

      if (!div && type_de_questions < 4) {
        // Si il faut multiplier pour convertir
        if (k < 2) {
          // Choix de l'unité
          unite = choice(["m", "L", "g"]);
        } else if (k == 2) {
          if (sortie_html) {
            unite = choice(["m", "L", "g"]); // pas de signe € pour KaTeX
          } else {
            unite = choice(["m", "L", "g", "€"]);
          }
        } else {
          unite = "o";
        }
        resultat = Algebrite.eval(a * prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
        texte =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_multi[k][0] + unite) +
          " = \\dotfill " +
          tex_texte(unite) +
          "$";
        texte_corr =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_multi[k][0] + unite) +
          " =  " +
          tex_nombre(a) +
          "\\times" +
          tex_nombre(prefixe_multi[k][1]) +
          tex_texte(unite) +
          " = " +
          tex_nombre(resultat) +
          tex_texte(unite) +
          "$";
      } else if (
        div &&
        type_de_questions < 4 &&
        this.correction_avec_des_fractions
      ) {
        unite = choice(["m", "L", "g"]);
        resultat = Algebrite.eval(a / prefixe_div[k][1]).toString(); // Attention aux notations scientifiques pour 10e-8
        texte =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          " = \\dotfill " +
          tex_texte(unite) +
          "$";
        texte_corr =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          " =  " +
          tex_fraction(tex_nombre(a), tex_nombre(prefixe_div[k][1])) +
          tex_texte(unite) +
          " = " +
          tex_nombre(resultat) +
          tex_texte(unite) +
          "$";
      } else if (div && type_de_questions < 4) {
        unite = choice(["m", "L", "g"]);
        resultat = Algebrite.eval(a / prefixe_div[k][1]).toString(); // Attention aux notations scientifiques pour 10e-8
        texte =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          " = \\dotfill " +
          tex_texte(unite) +
          "$";
        texte_corr =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          " =  " +
          tex_nombre(a) +
          "\\div" +
          tex_nombre(prefixe_div[k][1]) +
          tex_texte(unite) +
          " = " +
          tex_nombre(resultat) +
          tex_texte(unite) +
          "$";
      } else {
        // pour type de question = 4
        let unite1 = randint(0, 3);
        let ecart = randint(1, 2); // nombre de multiplication par 1000 pour passer de l'un à l'autre
        if (ecart > 4 - unite1) {
          ecart = 4 - unite1;
        }
        let unite2 = unite1 + ecart;
        if (randint(0, 1) > 0) {
          resultat = Algebrite.eval(a * Math.pow(10, 3 * ecart));
          texte =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite_info[unite2]) +
            " = \\dotfill " +
            tex_texte(liste_unite_info[unite1]) +
            "$";
          texte_corr =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite_info[unite2]) +
            " =  " +
            tex_nombre(a) +
            "\\times" +
            tex_nombre(Math.pow(10, 3 * ecart)) +
            tex_texte(liste_unite_info[unite1]) +
            " = " +
            tex_nombre(resultat) +
            tex_texte(liste_unite_info[unite1]) +
            "$";
        } else {
          resultat = Algebrite.eval(a / Math.pow(10, 3 * ecart));
          texte =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite_info[unite1]) +
            " = \\dotfill " +
            tex_texte(liste_unite_info[unite2]) +
            "$";
          texte_corr =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite_info[unite1]) +
            " =  " +
            tex_nombre(a) +
            "\\div" +
            tex_nombre(Math.pow(10, 3 * ecart)) +
            tex_texte(liste_unite_info[unite2]) +
            " = " +
            tex_nombre(resultat) +
            tex_texte(liste_unite_info[unite2]) +
            "$";
        }
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        if (est_diaporama) {
          texte = texte.replace("= \\dotfill", "\\text{ en }");
        }
        if (sortie_html) {
          texte = texte.replace(
            "\\dotfill",
            "................................................"
          );
        }
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    5,
    "1 : De da, h, k vers l'unité de référence\n\
2 : De d, c, m vers l'unité de référence\n3 : Multiplications ou divisions vers l'unité de référence\n4 : Conversions avec les octets\n5: Toutes les conversions",
  ];
  this.besoin_formulaire2_case_a_cocher = ["Avec des nombres décimaux"];
}

/**
 * Conversions d'aires en utilisant le préfixe pour déterminer la multiplication ou division à faire.
 *
 * Dans la correction, on montre que l'on multiplie ou divisie à 2 reprises par le coefficient donné par le préfixe
 *
 * * 1 : De dam², hm², km² vers m²
 * * 2 : De dm², cm², mm² vers m²
 * * 3 : Conversions en mètres-carrés
 * * 4 : Conversions avec des multiplications ou des divisions
 * * 5 : Conversions avec des ares, des centiares et des hectares
 * * 6 : Un mélange de toutes les conversions
 * * Paramètre supplémentaire : utiliser des nombres décimaux (par défaut tous les nombres sont entiers)
 * @Auteur Rémi Angot
 */
function Exercice_conversions_aires(niveau = 1) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = niveau; // Niveau de difficulté de l'exercice
  this.sup2 = false; // Avec des nombres décimaux ou pas
  this.titre = "Conversions d'aires";
  this.consigne = "Compléter";
  this.spacing = 2;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let prefixe_multi = [
      [" da", "\\times10\\times10", 100],
      [" h", "\\times100\\times100", 10000],
      [" k", "\\times1~000\\times1~000", 1000000],
    ];
    let prefixe_div = [
      [" d", "\\div10\\div10", 100],
      [" c", "\\div100\\div100", 10000],
      [" m", "\\div1~000\\div1~000", 1000000],
    ];
    let unite = "m";
    let liste_unite = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
    let liste_de_k = combinaison_listes([0, 1, 2], this.nb_questions);
    for (
      let i = 0,
        a,
        k,
        div,
        resultat,
        type_de_questions,
        texte,
        texte_corr,
        liste_unite_info,
        cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      // On limite le nombre d'essais pour chercher des valeurs nouvelles
      if (this.sup < 6) {
        type_de_questions = this.sup;
      } else {
        type_de_questions = randint(1, 5);
      }
      // k = randint(0,2); // Choix du préfixe
      k = liste_de_k[i];
      if (type_de_questions == 1) {
        // niveau 1
        div = false; // Il n'y aura pas de division
      } else if (type_de_questions == 2) {
        // niveau 2
        div = true; // Avec des divisions
      } else if (type_de_questions == 3) {
        div = choice([true, false]); // Avec des multiplications ou des divisions
      } else if (type_de_questions == 4) {
        div = choice([true, false]); // Avec des multiplications ou des divisions sans toujours revenir au m^2
      }

      if (this.sup2) {
        // Si la case pour les nombres décimaux est cochée
        a = choice([
          arrondi(randint(1, 19) + randint(1, 9) / 10, 1),
          arrondi(randint(1, 9) / 10, 1),
          arrondi(randint(1, 9) / 100, 2),
          arrondi(randint(1, 9) + randint(1, 9) / 10 + randint(1, 9) / 100, 2),
        ]);
        // XX,X 0,X 0,0X X,XX
      } else {
        a = choice([
          randint(1, 9),
          randint(1, 9) * 10,
          randint(1, 9) * 100,
          randint(1, 9) * 10 + randint(1, 9),
        ]);
        // X, X0, X00, XX
      }

      if (!div && type_de_questions < 4) {
        // Si il faut multiplier pour convertir

        prefixe_multi = [
          [" da", "\\times10\\times10", 100],
          [" h", "\\times100\\times100", 10000],
          [" k", "\\times1~000\\times1~000", 1000000],
        ]; // On réinitialise cette liste qui a pu être modifiée dans le cas des ares
        resultat = Algebrite.eval(a * prefixe_multi[k][2]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
        texte =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_multi[k][0] + unite) +
          "^2" +
          " = \\dotfill " +
          tex_texte(unite) +
          "^2" +
          "$";
        texte_corr =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_multi[k][0] + unite) +
          "^2" +
          " =  " +
          tex_nombre(a) +
          prefixe_multi[k][1] +
          tex_texte(unite) +
          "^2" +
          " = " +
          tex_nombre(resultat) +
          tex_texte(unite) +
          "^2" +
          "$";
      } else if (div && type_de_questions < 4) {
        prefixe_div = [
          [" d", "\\div10\\div10", 100],
          [" c", "\\div100\\div100", 10000],
          [" m", "\\div1~000\\div1~000", 1000000],
        ];
        k = randint(0, 1); // Pas de conversions de mm^2 en m^2 avec des nombres décimaux car résultat inférieur à 10e-8
        resultat = Algebrite.eval(a / prefixe_div[k][2]).toString(); // Attention aux notations scientifiques pour 10e-8
        texte =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          "^2" +
          " = \\dotfill " +
          tex_texte(unite) +
          "^2" +
          "$";
        texte_corr =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          "^2" +
          " =  " +
          tex_nombre(a) +
          prefixe_div[k][1] +
          tex_texte(unite) +
          "^2" +
          " = " +
          tex_nombre(resultat) +
          tex_texte(unite) +
          "^2" +
          "$";
      } else if (type_de_questions == 4) {
        let unite1 = randint(0, 3);
        let ecart = randint(1, 2); // nombre de multiplication par 10 pour passer de l'un à l'autre
        if (ecart > 4 - unite1) {
          ecart = 4 - unite1;
        }
        let unite2 = unite1 + ecart;
        if (randint(0, 1) > 0) {
          resultat = Algebrite.eval(a * Math.pow(10, 2 * ecart));
          texte =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite[unite2]) +
            "^2" +
            " = \\dotfill " +
            tex_texte(liste_unite[unite1]) +
            "^2" +
            "$";
          texte_corr =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite[unite2]) +
            "^2" +
            " =  " +
            tex_nombre(a) +
            "\\times" +
            tex_nombre(Math.pow(10, 2 * ecart)) +
            tex_texte(liste_unite[unite1]) +
            "^2" +
            " = " +
            tex_nombre(resultat) +
            tex_texte(liste_unite[unite1]) +
            "^2" +
            "$";
        } else {
          resultat = Algebrite.eval(a / Math.pow(10, 2 * ecart));
          texte =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite[unite1]) +
            "^2" +
            " = \\dotfill " +
            tex_texte(liste_unite[unite2]) +
            "^2" +
            "$";
          texte_corr =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite[unite1]) +
            "^2" +
            " =  " +
            tex_nombre(a) +
            "\\div" +
            tex_nombre(Math.pow(10, 2 * ecart)) +
            tex_texte(liste_unite[unite2]) +
            "^2" +
            " = " +
            tex_nombre(resultat) +
            tex_texte(liste_unite[unite2]) +
            "^2" +
            "$";
        }
      } else if (type_de_questions == 5) {
        // Pour type_de_questions==5
        prefixe_multi = [
          ["ha", 10000],
          ["a", 100],
        ];
        k = randint(0, 1);
        resultat = Algebrite.eval(a * prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
        texte =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_multi[k][0]) +
          " = \\dotfill " +
          tex_texte(unite) +
          "^2" +
          "$";
        texte_corr =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_multi[k][0]) +
          " =  " +
          tex_nombre(a) +
          "\\times" +
          tex_nombre(prefixe_multi[k][1]) +
          tex_texte(unite) +
          "^2" +
          " = " +
          tex_nombre(resultat) +
          tex_texte(unite) +
          "^2" +
          "$";
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        if (est_diaporama) {
          texte = texte.replace("= \\dotfill", "\\text{ en }");
        }
        if (sortie_html) {
          texte = texte.replace(
            "\\dotfill",
            "................................................"
          );
        }
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    6,
    "1 : Conversions en m² avec des multiplications\n\
2 : Conversions en m² avec des divisions\n3 : Conversions en m² avec des multiplications ou divisions\n4 : Conversions avec des multiplications ou divisions\n\
5 : Conversions d'hectares et ares en m² \n6 : Toutes les conversions",
  ];
  this.besoin_formulaire2_case_a_cocher = ["Avec des nombres décimaux"];
}

/**
 * Conversions de volumes.
 *
 * Dans la correction, on ne voit qu'une multiplication ou qu'un division pour obtenir le résultat
 *
 * * 1 : Conversions en mètres-cubes avec des multiplications
 * * 2 : Conversions en mètres-cubes avec des divisions
 * * 3 : Conversions en mètres-cubes avec des multiplications ou divisions
 * * 4 : Conversions avec des multiplications ou divisions
 * * Paramètre supplémentaire : utiliser des nombres décimaux (par défaut tous les nombres sont entiers)
 * @Auteur Rémi Angot
 */
function Exercice_conversions_volumes(niveau = 1) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = niveau; // Niveau de difficulté de l'exercice
  this.sup2 = false; // Avec des nombres décimaux ou pas
  this.titre = "Conversions de volume";
  this.consigne = "Compléter";
  this.spacing = 2;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let prefixe_multi = [
      ["da", "10\\times10\\times10", 1000],
      ["h", "100\\times100\\times100", 1000000],
      ["k", "1~000\\times1~000\\times1~000", 1000000000],
    ];
    let prefixe_div = [
      ["d", "10\\div10\\div10", 1000],
      ["c", "100\\div100\\div100", 1000000],
      ["m", "1~000\\div1~000\\div1~000", 1000000000],
    ];
    let unite = "m";
    let liste_unite = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
    for (
      let i = 0,
        a,
        k,
        div,
        resultat,
        type_de_questions,
        texte,
        texte_corr,
        liste_unite_info,
        cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      // On limite le nombre d'essais pour chercher des valeurs nouvelles
      if (this.sup < 5) {
        type_de_questions = this.sup;
      } else {
        type_de_questions = randint(1, 4);
      }
      k = randint(0, 2); // Choix du préfixe
      if (type_de_questions == 1) {
        // niveau 1
        div = false; // Il n'y aura pas de division
      } else if (type_de_questions == 2) {
        // niveau 2
        div = true; // Avec des divisions
      } else if (type_de_questions == 3) {
        div = choice([true, false]); // Avec des multiplications ou des divisions
      } else if (type_de_questions == 4) {
        div = choice([true, false]); // Avec des multiplications ou des divisions sans toujours revenir au m^2
      }

      if (this.sup2) {
        // Si la case pour les nombres décimaux est cochée
        a = choice([
          arrondi(randint(1, 19) + randint(1, 9) / 10, 1),
          arrondi(randint(1, 9) / 10, 1),
          arrondi(randint(1, 9) / 100, 2),
          arrondi(randint(1, 9) + randint(1, 9) / 10 + randint(1, 9) / 100, 2),
        ]);
        // XX,X 0,X 0,0X X,XX
      } else {
        a = choice([
          randint(1, 9),
          randint(1, 9) * 10,
          randint(1, 9) * 100,
          randint(1, 9) * 10 + randint(1, 9),
        ]);
        // X, X0, X00, XX
      }

      if (!div && type_de_questions < 4) {
        // Si il faut multiplier pour convertir

        resultat = Algebrite.eval(a * prefixe_multi[k][2]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
        texte =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_multi[k][0] + unite) +
          "^3" +
          " = \\dotfill " +
          tex_texte(unite) +
          "^3" +
          "$";
        texte_corr =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_multi[k][0] + unite) +
          "^3" +
          " =  " +
          tex_nombre(a) +
          "\\times" +
          prefixe_multi[k][1] +
          tex_texte(unite) +
          "^3" +
          " = " +
          tex_nombre(resultat) +
          tex_texte(unite) +
          "^3" +
          "$";
      } else if (div && type_de_questions < 4) {
        k = randint(0, 1); // Pas de conversions de mm^3 en m^3 avec des nombres décimaux car résultat inférieur à 10e-8
        resultat = Algebrite.eval(a / prefixe_multi[k][2]).toString(); // Attention aux notations scientifiques pour 10e-8
        texte =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          "^3" +
          " = \\dotfill " +
          tex_texte(unite) +
          "^3" +
          "$";
        texte_corr =
          "$ " +
          tex_nombre(a) +
          tex_texte(prefixe_div[k][0] + unite) +
          "^3" +
          " =  " +
          tex_nombre(a) +
          "\\div" +
          prefixe_div[k][1] +
          tex_texte(unite) +
          "^3" +
          " = " +
          tex_nombre(resultat) +
          tex_texte(unite) +
          "^3" +
          "$";
      } else if (type_de_questions == 4) {
        let unite1 = randint(0, 3);
        let ecart = randint(1, 2); // nombre de multiplication par 10 pour passer de l'un à l'autre
        if (ecart > 4 - unite1) {
          ecart = 4 - unite1;
        }
        let unite2 = unite1 + ecart;
        let multiplications_par_1000 = "";

        if (randint(0, 1) > 0) {
          switch (ecart) {
            case 1:
              multiplications_par_1000 = "\\times 1~000";
              break;
            case 2:
              multiplications_par_1000 = "\\times 1~000 \\times 1~000";
              break;
            case 3:
              multiplications_par_1000 =
                "\\times 1~000 \\times 1~000 \\times 1~000";
              break;
          }
          resultat = Algebrite.eval(a * Math.pow(10, 3 * ecart));
          texte =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite[unite2]) +
            "^3" +
            " = \\dotfill " +
            tex_texte(liste_unite[unite1]) +
            "^3" +
            "$";
          texte_corr =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite[unite2]) +
            "^3" +
            " =  " +
            tex_nombre(a) +
            multiplications_par_1000 +
            tex_texte(liste_unite[unite1]) +
            "^3" +
            " = " +
            tex_nombre(resultat) +
            tex_texte(liste_unite[unite1]) +
            "^3" +
            "$";
        } else {
          switch (ecart) {
            case 1:
              multiplications_par_1000 = "\\div 1~000";
              break;
            case 2:
              multiplications_par_1000 = "\\div 1~000 \\div 1~000";
              break;
            case 3:
              multiplications_par_1000 = "\\div 1~000 \\div 1~000 \\div 1~000";
              break;
          }
          resultat = Algebrite.eval(a / Math.pow(10, 3 * ecart));
          texte =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite[unite1]) +
            "^3" +
            " = \\dotfill " +
            tex_texte(liste_unite[unite2]) +
            "^3" +
            "$";
          texte_corr =
            "$ " +
            tex_nombre(a) +
            tex_texte(liste_unite[unite1]) +
            "^3" +
            " =  " +
            tex_nombre(a) +
            multiplications_par_1000 +
            tex_texte(liste_unite[unite2]) +
            "^3" +
            " = " +
            tex_nombre(resultat) +
            tex_texte(liste_unite[unite2]) +
            "^3" +
            "$";
        }
      }
      // else if(type_de_questions==5) { // Pour type_de_questions==5
      // 	prefixe_multi = [['L',0.001],['dL',0.0001],['cL',0.00001],['mL',0.000001]];
      // 	k = randint(0,1)
      // 	resultat = Algebrite.eval(a*prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
      // 	texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]) + ' = \\dotfill ' + tex_texte(unite)  + '^3' + '$';
      // 	texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]) + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(prefixe_multi[k][1]) + tex_texte(unite)  + '^3'
      // 		 + ' = ' + tex_nombre(resultat) + tex_texte(unite)+ '^2' + '$';
      // }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        if (est_diaporama) {
          texte = texte.replace("= \\dotfill", "\\text{ en }");
        }
        if (sortie_html) {
          texte = texte.replace(
            "\\dotfill",
            "................................................"
          );
        }
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    4,
    "1 : Conversions en mètres-cubes avec des multiplications\n\
2 : Conversions en mètres-cubes avec des divisions\n3 : Conversions en mètres-cubes avec des multiplications ou divisions\n4 : Conversions avec des multiplications ou divisions",
  ];
  this.besoin_formulaire2_case_a_cocher = ["Avec des nombres décimaux"];
}

/**
 * Conversions d'unités de volumes vers les unités de capacité ou inversement.
 *
 * Dans la correction, on passe systématiquement par l'équivalence dm3 = L
 *
 * * 1 : De dam3, m3, dm3, cm3 ou mm3 vers L ou inversement
 * * 2 :
 * * 3 :
 * * 4 :
 * * 5 :
 * * 6 : Un mélange de toutes les conversions
 * * Paramètre supplémentaire : utiliser des nombres décimaux (par défaut tous les nombres sont entiers)
 * @Auteur Rémi Angot
 */
function Unites_de_volumes_et_de_capacite(niveau = 1) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = niveau; // Niveau de difficulté de l'exercice
  this.sup2 = false; // Avec des nombres décimaux ou pas
  this.titre = "Conversions avec des unités de volumes ou de capacités";
  this.consigne = "Compléter";
  this.spacing = 2;
  this.nb_questions = 8;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    if (this.sup == 1) {
      liste_type_de_questions = combinaison_listes(
        ["dam3toL", "m3toL", "dm3toL", "cm3toL"],
        this.nb_questions
      );
    }
    if (this.sup == 2) {
      liste_type_de_questions = combinaison_listes(
        ["Ltodm3", "Ltocm3", "Ltom3"],
        this.nb_questions
      );
    }
    if (this.sup == 3) {
      liste_type_de_questions = combinaison_listes(
        [
          "dam3toL",
          "m3toL",
          "dm3toL",
          "cm3toL",
          "mm3toL",
          "Ltodm3",
          "Ltocm3",
          "Ltom3",
        ],
        this.nb_questions
      );
    }
    let liste_de_n = [];
    if (this.sup2) {
      liste_de_n = combinaison_listes([1, 2, 3, 4], this.nb_questions);
    } else {
      liste_de_n = combinaison_listes([1, 2, 3, 4, 5, 6], this.nb_questions);
    }
    for (
      let i = 0, n, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      if (this.sup2) {
        switch (liste_de_n[i]) {
          case 1:
            n = calcul(randint(2, 9) / 10);
            break;
          case 2:
            n = calcul(randint(11, 99) / 100);
            break;
          case 3:
            n = calcul(randint(1, 9) * 10 + randint(1, 9) / 10);
            break;
          case 4:
            n = calcul(
              randint(11, 99, [10, 20, 30, 40, 50, 60, 70, 80, 90]) / 100
            );
            break;
        }
      } else {
        switch (liste_de_n[i]) {
          case 1:
            n = randint(2, 9);
            break;
          case 2:
            n = randint(11, 99);
            break;
          case 3:
            n = randint(1, 9) * 10;
            break;
          case 4:
            n = randint(1, 9) * 100;
            break;
          case 5:
            n = randint(11, 99) * 100;
            break;
          case 6:
            n = randint(1, 9) * 1000;
            break;
        }
      }
      switch (liste_type_de_questions[i]) {
        case "dam3toL":
          texte = `$${tex_nombre(n)}~\\text{dam}^3=\\dotfill~\\text{L}$`;
          texte_corr = `$${tex_nombre(n)}~\\text{dam}^3=${tex_nombre(
            n
          )}\\times1~000\\times1~000~\\text{dm}^3=${tex_nombrec(
            n * 1000000
          )}~\\text{L}$`;
          break;
        case "m3toL":
          texte = `$${tex_nombre(n)}~\\text{m}^3=\\dotfill~\\text{L}$`;
          texte_corr = `$${tex_nombre(n)}~\\text{m}^3=${tex_nombre(
            n
          )}\\times1~000~\\text{dm}^3=${tex_nombrec(n * 1000)}~\\text{L}$`;
          break;
        case "dm3toL":
          texte = `$${tex_nombre(n)}~\\text{dm}^3=\\dotfill~\\text{L}$`;
          texte_corr = `$${tex_nombre(n)}~\\text{dm}^3=${tex_nombre(
            n
          )}~\\text{L}$`;
          break;
        case "cm3toL":
          texte = `$${tex_nombre(n)}~\\text{cm}^3=\\dotfill~\\text{L}$`;
          texte_corr = `$${tex_nombre(n)}~\\text{cm}^3=${tex_nombre(
            n
          )}\\div 1~000~\\text{dm}^3=${tex_nombrec(n / 1000)}~\\text{L}$`;
          break;
        case "mm3toL":
          texte = `$${tex_nombre(n)}~\\text{mm}^3=\\dotfill~\\text{L}$`;
          texte_corr = `$${tex_nombre(n)}~\\text{mm}^3=${tex_nombre(
            n
          )}\\div1~000\\div 1~000~\\text{dm}^3=${tex_nombrec(
            n / 1000000
          )}~\\text{L}$`;
          break;
        case "Ltodm3":
          texte = `$${tex_nombre(n)}~\\text{L}=\\dotfill~\\text{dm}^3$`;
          texte_corr = `$${tex_nombre(n)}~\\text{L}=${tex_nombre(
            n
          )}~\\text{dm}^3$`;
          break;
        case "Ltocm3":
          texte = `$${tex_nombre(n)}~\\text{L}=\\dotfill~\\text{cm}^3$`;
          texte_corr = `$${tex_nombre(n)}~\\text{L}=${tex_nombre(
            n
          )}~\\text{dm}^3=${tex_nombre(
            n
          )}\\times1~000~\\text{cm}^3=${tex_nombrec(n * 1000)}~\\text{cm}^3$`;
          break;
        case "Ltom3":
          texte = `$${tex_nombre(n)}~\\text{L}=\\dotfill~\\text{m}^3$`;
          texte_corr = `$${tex_nombre(n)}~\\text{L}=${tex_nombre(
            n
          )}~\\text{dm}^3=${tex_nombre(n)}\\div1~000~\\text{m}^3=${tex_nombrec(
            n / 1000
          )}~\\text{m}^3$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    3,
    "1 : Unités de volume vers litre\n2 : Litre vers unités de volume\n3 : Unités de volumes vers litre ou inversement ",
  ];
  this.besoin_formulaire2_case_a_cocher = ["Avec des nombres décimaux"];
}

/**
 * Déterminer le périmètre et l'aire d'un carré, d'un rectangle, d'un triangle rectangle, d'un cercle
 *
 * * 1 : Carré, rectangle et triangle rectangle
 * * 2: Uniquement des cercles
 * * 3 : Les 4 sont demandés
 * @Auteur Rémi Angot
 */
function Exercice_perimetres_et_aires(difficulte = 1) {
  //Calculer le périmètre et l'aire de figures
  Exercice.call(this); // Héritage de la classe Exercice()
  this.sup = difficulte;
  this.titre = "Calculs de périmètres et d'aires";
  this.consigne =
    "Pour chacune des figures, calculer son périmètre puis son aire (valeur exacte et si nécessaire valeur approchée au dixième près).";
  this.spacing = 1;
  this.nb_questions = 4;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let triplets_pythagoriciens = [
      [3, 4, 5],
      [6, 8, 10],
      [15, 8, 17],
      [24, 10, 26],
      [5, 12, 13],
      [12, 16, 20],
      [21, 20, 29],
      [9, 40, 41],
    ];
    let type_de_questions_disponibles = [
      "carre",
      "rectangle",
      "triangle_rectangle",
      "cercle",
    ];
    if (this.sup == 1) {
      enleve_element(type_de_questions_disponibles, "cercle");
      this.nb_cols = 1;
    } else if (this.sup == 2) {
      type_de_questions_disponibles = ["cercle"];
    }
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      type_de_questions = liste_type_de_questions[i];
      switch (type_de_questions) {
        case "carre":
          let cote = randint(2, 11);
          let nom_carre = creerNomDePolygone(4);
          if (choice([true, false])) {
            // 2 énoncés possibles équiprobables
            texte = `Un carré $${nom_carre}$ de $${cote}$ cm de côté .`;
          } else {
            texte = `Un carré $${nom_carre}$ tel que $${
              nom_carre[0] + nom_carre[1]
            } = ${cote}$ cm.`;
          }

          texte_corr = `$\\mathcal{P}_{${nom_carre}}=4\\times${cote}~\\text{cm}=${
            4 * cote
          }~\\text{cm}$<br>`;
          texte_corr += `$\\mathcal{A}_{${nom_carre}}=${cote}~\\text{cm}\\times${cote}~\\text{cm}=${
            cote * cote
          }~\\text{cm}^2$`;
          break;
        case "rectangle":
          let L = randint(3, 11);
          let l = randint(2, L - 1);
          let nom_rectangle = creerNomDePolygone(4);
          if (choice([true, false])) {
            // 2 énoncés possibles équiprobables
            texte = `Un rectangle $${nom_rectangle}$ de $${L}$ cm de longueur et de $${l}$ cm de largeur.`;
          } else {
            texte = `Un rectangle $${nom_rectangle}$ tel que $${
              nom_rectangle[0] + nom_rectangle[1] + " = " + L
            }$ cm et $${nom_rectangle[1] + nom_rectangle[2] + " = " + l}$ cm.`;
          }

          texte_corr = `$\\mathcal{P}_{${nom_rectangle}}=(${L}~\\text{cm}+${l}~\\text{cm})\\times2=${
            (L + l) * 2
          }~\\text{cm}$<br>`;
          texte_corr += `$\\mathcal{A}_{${nom_rectangle}}=${L}~\\text{cm}\\times${l}~\\text{cm}=${
            L * l
          }~\\text{cm}^2$`;
          break;
        case "triangle_rectangle":
          let triplet = choice(triplets_pythagoriciens);
          enleve_element(triplets_pythagoriciens, triplet);
          let a = triplet[0];
          let b = triplet[1];
          let c = triplet[2];
          let nom_triangle = creerNomDePolygone(3);
          if (choice([true, false])) {
            texte = `Un triangle $${nom_triangle}$ rectangle en $${
              nom_triangle[1]
            }$ tel que $${
              nom_triangle[0] + nom_triangle[1] + " = " + a
            }$ cm, $${nom_triangle[1] + nom_triangle[2] + " = " + b}$ cm\
 et $${nom_triangle[0] + nom_triangle[2] + " = " + c}$ cm.`;
          } else {
            texte = `Un triangle rectangle $${nom_triangle}$ a pour côtés : $${a}$ cm, $${c}$ cm et $${b}$ cm.`;
          }

          texte_corr = `$\\mathcal{P}_{${nom_triangle}}=${a}~\\text{cm}+${b}~\\text{cm}+${c}~\\text{cm}=${
            a + b + c
          }~\\text{cm}$<br>`;
          texte_corr += `$\\mathcal{A}_{${nom_triangle}}=${a}~\\text{cm}\\times${b}~\\text{cm}\\div2=${Algebrite.eval(
            (a * b) / 2
          )}~\\text{cm}^2$`;
          break;
        case "cercle":
          let R = randint(3, 11);
          let donne_le_diametre = choice([true, false]);
          if (donne_le_diametre) {
            texte = `Un cercle de $${2 * R}$ cm de diamètre.`;
            texte_corr = `Le diamètre est de $${
              2 * R
            }$ cm donc le rayon est de $${R}$~cm.<br>`;
          } else {
            texte = `Un cercle de $${R}$ cm de rayon.`;
            texte_corr = "";
          }

          texte_corr += `$\\mathcal{P}=2\\times${R}\\times\\pi~\\text{cm}=${
            2 * R
          }\\pi~\\text{cm}\\approx${arrondi_virgule(
            2 * R * Math.PI,
            1
          )}~\\text{cm}$<br>`;
          texte_corr += `$\\mathcal{A}=${R}\\times${R}\\times\\pi~\\text{cm}^2=${
            R * R
          }\\pi~\\text{cm}^2\\approx${arrondi_virgule(
            R * R * Math.PI,
            1
          )}~\\text{cm}^2$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    3,
    "1 : Carré, rectangle et triangle rectangle\n2: Cercles\n3: Mélangé",
  ];
}

/**
 * On donne une fraction qui a pour dénominateur 10, 100 ou 1 000, il faut donner l'écriture décimale.
 *
 * Le numérateur est de la forme X, XX, X0X, X00X ou XXX
 * @Auteur Rémi Angot
 */
function Exercice_ecriture_decimale_a_partir_de_fraction_decimale() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Donner l'écriture décimale d'une fraction décimale";
  this.consigne = "Donner l'écriture décimale";
  this.spacing = 2;
  this.spacing_corr = 2;
  this.nb_questions = 8;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    for (
      let i = 0, a, b, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = choice(
        [
          randint(2, 9),
          randint(11, 99),
          randint(1, 9) * 100 + randint(1, 9),
          randint(1, 9) * 1000 + randint(1, 9),
        ],
        randint(101, 999)
      );
      // X, XX, X0X, X00X,XXX
      b = choice([10, 100, 1000]);
      texte =
        "$ " + tex_fraction(tex_nombre(a), tex_nombre(b)) + " = \\dotfill $";
      texte_corr =
        "$ " +
        tex_fraction(tex_nombre(a), tex_nombre(b)) +
        " = " +
        tex_nombre(Algebrite.eval(a / b)) +
        " $";
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        if (est_diaporama) {
          texte = texte.replace("=\\dotfill", "");
        }
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
}

/**
 * Multiplier ou diviser un nombre entier par 10, 100 ou 1 000
 *
 * Le nombre entier est de la forme X, XX, X0X, X00X ou XXX
 * @Auteur Rémi Angot
 */
function Exercice_multiplier_ou_diviser_un_nombre_entier_par_10_100_1000() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Multiplier ou diviser un nombre entier par 10, 100 ou 1 000";
  this.consigne = "Donner l'écriture décimale";
  this.spacing = 2;
  this.spacing_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    for (
      let i = 0, a, b, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      a = choice(
        [
          randint(2, 9),
          randint(11, 99),
          randint(1, 9) * 100 + randint(1, 9),
          randint(1, 9) * 1000 + randint(1, 9),
        ],
        randint(101, 999)
      );
      // X, XX, X0X, X00X,XXX
      b = choice([10, 100, 1000]);
      if (choice([true, false])) {
        texte =
          "$ " + tex_fraction(tex_nombre(a), tex_nombre(b)) + " = \\dotfill $";
        texte_corr =
          "$ " +
          tex_fraction(tex_nombre(a), tex_nombre(b)) +
          " = " +
          tex_nombre(Algebrite.eval(a / b)) +
          " $";
      } else {
        texte =
          "$ " + tex_nombre(a) + "\\times" + tex_nombre(b) + " = \\dotfill $";
        texte_corr =
          "$ " +
          tex_nombre(a) +
          "\\times" +
          tex_nombre(b) +
          " = " +
          tex_nombre(Algebrite.eval(a * b)) +
          " $";
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ["Valeur maximale", 99999];
}

/**
 * Comparer deux nombres décimaux
 *
 * Les types de comparaisons sont :
 * * ab ? ba
 * * aa,bb ? aa,cc
 * * a,b  a,cc avec b>c
 * * 0,ab 0,ba
 * * 0,a0b 0,b0a
 * * a,b a,b0
 * * 0,0ab 0,0a0b
 * * a,bb  a,ccc avec b>c
 * * a+1,bb  a,cccc avec cccc>bb
 *
 * aa, bb, cc correspondent à des nombres à 2 chiffres (ces 2 chiffres pouvant être distincts)
 * @Auteur Rémi Angot
 */
function Comparer_decimaux() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Comparer des nombres décimaux";
  this.consigne = "Compléter avec le signe < , > ou =.";
  this.nb_questions = 8;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = [
      choice([1, 4, 5]),
      2,
      2,
      3,
      6,
      7,
      8,
      9,
    ]; // une seule question du type inversion de chiffres (1,4,5)
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      let x,
        y,
        a,
        b,
        c,
        d,
        zero_inutile = false;

      switch (liste_type_de_questions[i]) {
        case 1: // ab ba
          a = randint(1, 9);
          b = randint(1, 9, a);
          x = a * 10 + b;
          y = b * 10 + a;
          break;
        case 2: // aa,bb aa,cc
          a = randint(1, 99);
          b = randint(11, 99);
          c = randint(11, 99);
          x = calcul(a + b / 100);
          y = calcul(a + c / 100);
          break;
        case 3: // a,b  a,cc avec b>c
          a = randint(1, 99);
          b = randint(1, 8);
          c = randint(1, b * 10);
          x = calcul(a + b / 10);
          y = calcul(a + c / 100);
          break;
        case 4: // 0,ab 0,ba
          a = randint(1, 9);
          b = randint(1, 9, a);
          x = calcul((a * 10 + b) / 100);
          y = calcul((b * 10 + a) / 100);
          break;
        case 5: // 0,a0b 0,b0a
          a = randint(1, 9);
          b = randint(1, 9, a);
          x = calcul((a * 100 + b) / 1000);
          y = calcul((b * 100 + a) / 1000);
          break;
        case 6: // a,b a,b0
          a = randint(11, 999);
          while (a % 10 == 0) {
            // pas de nombre divisible par 10
            a = randint(11, 999);
          }
          x = calcul(a / 10);
          y = x;
          zero_inutile = true;
          break;
        case 7: // 0,0ab 0,0a0b
          a = randint(1, 9);
          b = randint(1, 9);
          x = calcul(a / 100 + b / 1000);
          y = calcul(a / 100 + b / 10000);
          break;
        case 8: // a,bb  a,ccc avec b>c
          a = randint(11, 99);
          b = randint(11, 99);
          c = randint(100, b * 10);
          x = calcul(a + b / 100);
          y = calcul(a + c / 1000);
          if (randint(1, 2) == 1) {
            [x, y] = [y, x];
          }
          break;
        case 9: // a+1,bb  a,cccc avec cccc>bb
          a = randint(11, 98);
          b = randint(11, 99);
          c = randint(b * 100, 10000);
          x = calcul(a + 1 + b / 100);
          y = calcul(a + c / 10000);
          if (randint(1, 2) == 1) {
            [x, y] = [y, x];
          }
          break;
      }

      texte = `${tex_nombre(x)}\\ldots\\ldots${tex_nombre(y)}`;
      if (parseFloat(x) > parseFloat(y)) {
        texte_corr = `${tex_nombre(x)} > ${tex_nombre(y)}`;
      } else if (parseFloat(x) < parseFloat(y)) {
        texte_corr = `${tex_nombre(x)} < ${tex_nombre(y)}`;
      } else {
        texte_corr = `${tex_nombre(x)} = ${tex_nombre(y)}`;
      }

      if (zero_inutile) {
        if (randint(1, 2) == 1) {
          texte = `${tex_prix(x)}\\ldots\\ldots${tex_nombre(y)}`;
          if (parseFloat(x) > parseFloat(y)) {
            texte_corr = `${tex_prix(x)} > ${tex_nombre(y)}`;
          } else if (parseFloat(x) < parseFloat(y)) {
            texte_corr = `${tex_prix(x)} < ${tex_nombre(y)}`;
          } else {
            texte_corr = `${tex_prix(x)} = ${tex_nombre(y)}`;
          }
        } else {
          texte = `${tex_nombre(x)}\\ldots\\ldots${tex_prix(y)}`;
          if (parseFloat(x) > parseFloat(y)) {
            texte_corr = `${tex_nombre(x)} > ${tex_prix(y)}`;
          } else if (parseFloat(x) < parseFloat(y)) {
            texte_corr = `${tex_nombre(x)} < ${tex_prix(y)}`;
          } else {
            texte_corr = `${tex_nombre(x)} = ${tex_prix(y)}`;
          }
        }
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
}

/**
 * Calculer 10, 20, 30, 40 ou 50% d'un nombre
 * @Auteur Rémi Angot + Jean-claude Lhote
 */
function Pourcentage_d_un_nombre() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Calculer le pourcentage d'un nombre de tête";
  this.nb_questions = 5;
  this.consigne = "Calculer";
  this.spacing = 2;
  this.spacing_corr = 2;
  this.nb_cols = 2;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    liste_pourcentages = [10, 20, 30, 40, 50];

    for (
      let i = 0, p, n, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      p = choice(liste_pourcentages);
      n = choice([
        randint(2, 9),
        randint(2, 9) * 10,
        randint(1, 9) * 10 + randint(1, 2),
      ]);
      texte = `$${p}~\\%~\\text{de }${n}$`;
      if (p == 50) {
        texte_corr = `$${p}~\\%~\\text{de }${n}=${n}\\div${2}=${tex_nombre(
          Algebrite.eval(n / 2)
        )}$`; // calcul de n/2 si p = 50%
      } else {
        texte_corr = `$${p}~\\%~\\text{de }${n}=${tex_fraction(
          p,
          100
        )}\\times${n}=(${p}\\times${n})\\div100=${tex_nombre(
          p * n
        )}\\div100=${tex_nombre(Algebrite.eval((p * n) / 100))}$`;
        //		texte_corr += `$\\phantom {Blanc}${p}~\\%~\\text{de }${n}=${tex_fraction(p,100)}\\times${n}=\\dfrac{${p}\\times${n}}{100}=${tex_fraction(p*n,100)}=${tex_nombre(Algebrite.eval(p*n/100))}$`
        if (this.sup2)
          texte_corr += `$${p}~\\%~\\text{de }${n}=${tex_fraction(
            p,
            100
          )}\\times${n}=(${n}\\div100)\\times${p}=${tex_nombrec(
            calcul(n / 100)
          )}\\times${p}=${tex_nombre(Algebrite.eval((p * n) / 100))}$`;
        //		texte_corr += `$\\phantom {Blanc}${p}~\\%~\\text{de }${n}=${tex_fraction(p,100)}\\times${n}=${tex_fraction(n,100)}\\times${p}=${tex_nombrec(calcul(n/100))}\\times${p}=${tex_nombre(Algebrite.eval(p*n/100))}$<br>`
        if (this.sup2)
          texte_corr += `$${p}~\\%~\\text{de }${n}=${tex_fraction(
            p,
            100
          )}\\times${n}=${tex_nombrec(calcul(p / 100))}\\times${n}=${tex_nombre(
            Algebrite.eval((p * n) / 100)
          )}$`;
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
  this.besoin_formulaire2_case_a_cocher = ["Plusieurs méthodes"];
}

/**
 * Calculer la fracton d'un nombre divisible par le dénominateur ... ou pas.
 *
 * Par défaut la division du nombre par le dénominateur est inférieure à 11
 * @Auteur Rémi Angot + Jean-Claude Lhote
 */
function Fraction_d_un_nombre(max = 11) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Calculer la fraction d'un nombre";
  this.nb_questions = 5;
  this.consigne = "Calculer";
  sortie_html ? (this.spacing_corr = 3.5) : (this.spacing_corr = 2);
  sortie_html ? (this.spacing = 2) : (this.spacing = 2);
  this.sup = true;
  this.sup2 = false;
  this.nb_cols = 2;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    liste_fractions = [
      [1, 2],
      [1, 3],
      [2, 3],
      [1, 4],
      [3, 4],
      [1, 5],
      [2, 5],
      [3, 5],
      [4, 5],
      [1, 6],
      [5, 6],
      [1, 7],
      [2, 7],
      [3, 7],
      [4, 7],
      [5, 7],
      [6, 7],
      [1, 8],
      [3, 8],
      [5, 8],
      [7, 8],
      [1, 9],
      [2, 9],
      [4, 9],
      [5, 9],
      [7, 9],
      [8, 9],
      [1, 10],
      [3, 10],
      [7, 10],
      [9, 10],
    ]; // Couples de nombres premiers entre eux

    for (
      let i = 0, a, b, k, n, j, fraction, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      fraction = choice(liste_fractions);
      a = fraction[0];
      b = fraction[1];
      k = randint(1, 11);
      j = false;
      if (this.sup) n = b * k;
      else if (randint(0, 1) == 0) n = b * k;
      else n = randint(10, b * 11);
      texte = `$${tex_fraction(a, b)}\\times${n}=$`;
      texte_corr = ``;
      if (a == 1) {
        // Si n * 1/b
        if (calcul(n / b - arrondi(n / b, 4)) == 0)
          texte_corr += `$${tex_fraction(
            a,
            mise_en_evidence(b)
          )}\\times${n}=${n}\\div${mise_en_evidence(b)}=${tex_nombrec(
            Algebrite.eval(n / b)
          )}$`;
        // si résultat décimal
        else
          texte_corr += `$${tex_fraction(a, b)}\\times${n}=${tex_fraction(
            n,
            b
          )}${simplification_de_fraction_avec_etapes(n, b)}$`; //si résultat non décimal
      } else {
        if (calcul(n / b - arrondi(n / b, 4)) == 0) {
          //si n/b décimal calcul (n/b)*a
          texte_corr += `$${tex_fraction(
            a,
            mise_en_evidence(b)
          )}\\times${n}=(${n}\\div${mise_en_evidence(
            b
          )})\\times${a}=${tex_nombrec(
            Algebrite.eval(n / b)
          )}\\times${a}=${tex_nombrec(Algebrite.eval((n / b) * a))}$<br>`;
        } else {
          if (calcul((n * a) / b - arrondi((n * a) / b, 4)) == 0) {
            // si n/b non décimal, alors on se rabat sur (n*a)/b
            texte_corr += ` $${tex_fraction(
              a,
              mise_en_evidence(b)
            )}\\times${n}=(${n}\\times${a})\\div${mise_en_evidence(
              b
            )}=${Algebrite.eval(n * a)}\\div${mise_en_evidence(
              b
            )}=${tex_nombrec(Algebrite.eval((n / b) * a))}$<br>`;
          } else {
            // si autre méthode et résultat fractionnaire calcul (n*a)/b
            texte_corr += ` $${tex_fraction(
              a,
              mise_en_evidence(b)
            )}\\times${n}=(${n}\\times${a})\\div${mise_en_evidence(
              b
            )}=${Algebrite.eval(n * a)}\\div${mise_en_evidence(
              b
            )}=${tex_fraction(n * a, mise_en_evidence(b))}$<br>`;
          }
          j = true;
        }
        if (
          calcul((n * a) / b - arrondi((n * a) / b, 4)) == 0 &&
          this.sup2 &&
          !j
        ) {
          // Si autres méthodes et si (a*n)/b décimal calcul (n*a)/b
          texte_corr += ` $${tex_fraction(
            a,
            mise_en_evidence(b)
          )}\\times${n}=(${n}\\times${a})\\div${mise_en_evidence(
            b
          )}=${Algebrite.eval(n * a)}\\div${mise_en_evidence(b)}=${tex_nombrec(
            Algebrite.eval((n / b) * a)
          )}$<br>`;
        } else {
          // si autre méthode et résultat fractionnaire calcul (n*a)/b
          if (this.sup2 && !j)
            texte_corr += ` $${tex_fraction(
              a,
              mise_en_evidence(b)
            )}\\times${n}=(${n}\\times${a})\\div${mise_en_evidence(
              b
            )}=${Algebrite.eval(n * a)}\\div${mise_en_evidence(
              b
            )}=${tex_fraction(n * a, mise_en_evidence(b))}$<br>`;
        }
        // si autre méthode et a/b décimal calcul (a/b)*n
        if ((b == 2 || b == 4 || b == 5 || b == 8 || b == 10) && this.sup2)
          texte_corr += ` $${tex_fraction(
            a,
            mise_en_evidence(b)
          )}\\times${n}=(${a}\\div${mise_en_evidence(
            b
          )})\\times${n}=${tex_nombrec(
            Algebrite.eval(a / b)
          )}\\times${n}=${tex_nombrec(Algebrite.eval((n / b) * a))}$`;
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_case_a_cocher = ["Forcer résultat entier", true];
  this.besoin_formulaire2_case_a_cocher = ["Plusieurs méthodes", false];
}

/**
 * On achète 2 aliments dont on connait la masse (un en grammes et l'autre en kilogrammes) et le prix au kilogramme. Il faut calculer le prix total.
 * @Auteur Rémi Angot
 */
function Probleme_course() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Problème - Les courses";
  this.consigne = "";
  this.spacing = 2;
  this.spacing_corr = 2;
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let prenom = choice([
      "Benjamin",
      "Léa",
      "Aude",
      "Julie",
      "Corinne",
      "Mehdi",
      "Joaquim",
    ]);
    let masse_en_kg_de_aliment1 = Algebrite.eval(
      randint(2, 5) + randint(1, 9) / 10
    );
    let prix_aliment1 = Algebrite.eval(randint(2, 4) + randint(1, 9) / 10);
    let aliment1 = choice(["courgettes", "carottes", "pommes"]);
    let masse_en_g_de_aliment2 = randint(21, 97) * 10;
    let prix_aliment2 = Algebrite.eval(randint(12, 23) + randint(1, 9) / 10);
    let aliment2 = choice(["boeuf", "veau", "poulet"]);

    texte = `${prenom} achète ${tex_nombre(
      masse_en_kg_de_aliment1
    )} kg de ${aliment1} à ${tex_prix(prix_aliment1)} €/kg `;
    texte += `et ${masse_en_g_de_aliment2} g de ${aliment2} à ${tex_prix(
      prix_aliment2
    )} €/kg. Quel est le prix total à payer ?`;
    texte_corr =
      `Prix des ${aliment1} : ${tex_nombre(
        masse_en_kg_de_aliment1
      )} kg × ${tex_prix(prix_aliment1)} €/kg = ${tex_prix(
        Algebrite.eval(masse_en_kg_de_aliment1 * prix_aliment1)
      )} €` + "<br>";
    texte_corr +=
      `Prix du ${aliment2} : ${tex_nombre(
        Algebrite.eval(masse_en_g_de_aliment2 / 1000)
      )} kg × ${tex_prix(prix_aliment2)} €/kg = ${tex_nombre(
        Algebrite.eval((masse_en_g_de_aliment2 * prix_aliment2) / 1000)
      )} € ` + "<br>";
    texte_corr += `Prix total à payer : ${tex_nombre(
      Algebrite.eval(masse_en_kg_de_aliment1 * prix_aliment1)
    )} € + ${tex_nombre(
      Algebrite.eval((masse_en_g_de_aliment2 * prix_aliment2) / 1000)
    )} € ≈ ${arrondi_virgule(
      Algebrite.eval(
        masse_en_kg_de_aliment1 * prix_aliment1 +
          (masse_en_g_de_aliment2 * prix_aliment2) / 1000
      )
    )} €<br>`;
    texte_corr += `<br><i>Le prix total aurait aussi pu être trouvé en un seul calcul</i> : ${tex_nombre(
      masse_en_kg_de_aliment1
    )} kg × ${tex_prix(prix_aliment1)} €/kg + ${tex_nombre(
      Algebrite.eval(masse_en_g_de_aliment2 / 1000)
    )} kg × ${tex_prix(prix_aliment2)} €/kg ≈ ${arrondi_virgule(
      Algebrite.eval(
        masse_en_kg_de_aliment1 * prix_aliment1 +
          (masse_en_g_de_aliment2 * prix_aliment2) / 1000
      )
    )} €.`;

    if (!sortie_html) {
      texte_corr =
        `Prix des ${aliment1} : $${tex_nombre(
          masse_en_kg_de_aliment1
        )}~\\text{kg}\\times${tex_prix(
          prix_aliment1
        )}~\\text{\\euro{}/kg} = ${tex_prix(
          Algebrite.eval(masse_en_kg_de_aliment1 * prix_aliment1)
        )}~\\text{\\euro}$` + "<br>";
      texte_corr +=
        `Prix du ${aliment2} : $${tex_nombre(
          Algebrite.eval(masse_en_g_de_aliment2 / 1000)
        )}~\\text{kg}\\times${tex_prix(
          prix_aliment2
        )}~\\text{\\euro{}/kg} = ${tex_nombre(
          Algebrite.eval((masse_en_g_de_aliment2 * prix_aliment2) / 1000)
        )}~\\text{\\euro}$` + "<br>";
      texte_corr += `Prix total à payer : $${tex_nombre(
        Algebrite.eval(masse_en_kg_de_aliment1 * prix_aliment1)
      )}~\\text{\\euro} + ${tex_nombre(
        Algebrite.eval((masse_en_g_de_aliment2 * prix_aliment2) / 1000)
      )}~\\text{\\euro} \\approx ${arrondi_virgule(
        Algebrite.eval(
          masse_en_kg_de_aliment1 * prix_aliment1 +
            (masse_en_g_de_aliment2 * prix_aliment2) / 1000
        )
      )}~\\text{\\euro}$<br>`;
    }

    this.liste_questions.push(texte);
    this.liste_corrections.push(texte_corr);

    liste_de_question_to_contenu_sans_numero(this);
  };
}

/**
 * Calculer l'aire de 3 triangles dont une hauteur est tracée.
 *
 * Une figure dynamique est disponible sur laquelle on peut déplacer le pied de la hauteur.
 *
 * Il n'existe pas de version LaTeX de cet exercice.
 * @Auteur Rémi Angot
 */
function Aire_de_triangles() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.pas_de_version_LaTeX = true;
  this.titre = "Aires de triangles";
  this.consigne =
    "Calculer l'aire des 3 triangles suivants (vous pouvez déplacer certains points).";
  this.spacing = 2;
  sortie_html ? (this.spacing_corr = 3) : (this.spacing_corr = 2);
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.type_exercice = "MG32";
  this.taille_div_MG32 = [500, 450];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_corrections = []; // Liste de questions corrigées
    let tableau_des_cotes = shuffle([3, 4, 5, 6, 7]); //pour s'assurer que les 3 côtés sont différents
    let c1 = tableau_des_cotes[0];
    let c2 = tableau_des_cotes[1];
    let c3 = tableau_des_cotes[2];
    let tableau_des_hauteurs = shuffle([3, 4, 5, 6]); //pour s'assurer que les 3 hauteurs sont différents
    let h1 = tableau_des_hauteurs[0];
    let h2 = tableau_des_hauteurs[1];
    let h3 = tableau_des_hauteurs[2];

    let codeBase64 = "";
    if (randint(1, 2) == 1) {
      codeBase64 =
        "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAABAAAABgAQTG9uZ3VldXJPcmllbnRlZQArIzE6IExlIHByZW1pZXIgcG9pbnQKIzI6IExlIGRldXhpw6htZSBwb2ludAAAAAIAAAADAAAAAAn#####AAAAAQARQ0VsZW1lbnRHZW5lcmlxdWUAAUEAAAAA#####wAAAAAAAUIAAAAA##########8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####AAAAAAEQAAABAAEAAAAAAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAAC#####wAAAAEACENTZWdtZW50Af####8AAAAAABAAAAEAAQAAAAAAAAAB#####wAAAAIAE0NNZXN1cmVBbmdsZU9yaWVudGUA#####wAEYW5nJwAAAAMAAAAAAAAAAf####8AAAABAAlDTG9uZ3VldXIB#####wAAAAAAAAAB#####wAAAAEAB0NNaWxpZXUA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAAAAAAB#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQH#####AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAABxAAAAAAAAEAAAAC#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAUAAAAAAgAAAAYAAAABAAAAuP####8AAAABAApDQ2FsY0NvbnN0AP####8AAnBpABYzLjE0MTU5MjY1MzU4OTc5MzIzODQ2#####wAAAAEACkNDb25zdGFudGVACSH7VEQtGP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmYAAAABAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAAAAAACAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUA8ZmZmZmZmAAAAAgAAAAMA#####wEAAAAAEAAAAQABAAAAAQAAAAMAAAAGAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAoAAAAAAAAAAAABMQAAAAUA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wACYzEAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmgxAAE0AAAACkAQAAAAAAAAAAAADQD#####AAJjMgABNQAAAApAFAAAAAAAAAAAAA0A#####wACaDIAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmMzAAE1AAAACkAUAAAAAAAAAAAADQD#####AAJoMwABNAAAAApAEAAAAAAAAAAAAAsA#####wAAAAAAEAABQQDAKgAAAAAAAD#wAAAAAAAAAwABQDwAAAAAAABAYSAAAAAAAP####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAIAAAADv####8AAAACAAlDQ2VyY2xlT1IAAAAADwEAAAAAAQAAAA4AAAAIAAAACAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAQAAAA8AAAAAABAAAUIAwBgAAAAAAABAFAAAAAAAAAMAAUAXmRub7wU+AAAAEAAAAAMBAAAADwAAAAAAEAAAAQABAAAADgAAABEAAAACAP####8AAAAAABAAAUgAwCYAAAAAAABAFAAAAAAAAAMAAT#nUJEwLKgdAAAAEv####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAABMAAAASAAAADwD#####AQAAAAABAAAAEwAAAAgAAAAJAP####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAUAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABAAAAFgAAABMA#####wAAAAAAEAABQwC#8AAAAAAAAMA7AAAAAAAAAwACAAAAFgAAAAMA#####wAAAAAAEAAAAQABAAAADgAAABgAAAADAP####8AAAAAABAAAAEAAQAAABgAAAARAAAAAwD#####AAAAAAAQAAABAQEAAAATAAAAGAAAAAsA#####wAAAAAAEAABRADAJgAAAAAAAMA7AAAAAAAAAwABQHpQAAAAAABATYAAAAAAAAAAAA4A#####wAbU2VnbWVudCBkZSBsb25ndWV1ciBkb25uw6llAAAAAQAAAAIAAAACAAAACgAAABwAAAAPAAAAAB0BAAAAAAEAAAAcAAAACAAAAAoAAAAAEAEAAAAdAAAAAAAQAAFFAMAyAAAAAAAAwDAAAAAAAAADAAFADDWm90SREAAAAB4AAAADAQAAAB0AAAAAABAAAAEAAQAAABwAAAAfAAAAAgD#####AAAAAAAQAAFHAMAkAAAAAAAAQBAAAAAAAAADAAE#5pq7A1eUfwAAACAAAAARAP####8BAAAAABAAAAEAAQAAACEAAAAgAAAADwD#####AQAAAAABAAAAIQAAAAgAAAALAAAAABIA#####wAAACIAAAAjAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAACQAAAATAP####8AAAAAABAAAUYAwBAAAAAAAABAIAAAAAAAAAMAAgAAACQAAAADAP####8AAAAAABAAAAEAAQAAABwAAAAmAAAAAwD#####AAAAAAAQAAABAAEAAAAmAAAAHwAAAAMA#####wAAAAAAEAAAAQEBAAAAIQAAACYAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAABMAAAAY#####wAAAAEAC0NNZWRpYXRyaWNlAAAAACoBAAAAAA0AAAEAAQAAABMAAAAYAAAABgAAAAAqAQAAAAANAAABBQAAAAATAAAAGAAAAA8AAAAAKgEAAAAAAQAAACwAAAAKQDAAAAAAAAABAAAAEgAAAAAqAAAAKwAAAC0AAAATAAAAACoBAAAAAA0AAAEFAAEAAAAuAAAABQEAAAAqAAAAEwAAABgAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAACEAAAAmAAAAFAAAAAAxAQAAAAANAAABAAEAAAAhAAAAJgAAAAYAAAAAMQEAAAAADQAAAQUAAAAAIQAAACYAAAAPAAAAADEBAAAAAAEAAAAzAAAACkAwAAAAAAAAAQAAABIAAAAAMQAAADIAAAA0AAAAEwAAAAAxAQAAAAANAAABBQABAAAANQAAAAUBAAAAMQAAACEAAAAmAAAACwD#####AAAAAAAQAAFNAMAoAAAAAAAAQBAAAAAAAAADAAFAS4AAAAAAAEBywAAAAAAAAAAADgD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAMAAAAOAAAAA8AAAAAOQEAAAAAAQAAADgAAAAIAAAADAAAAAAQAQAAADkAAAAAABAAAU4AwCIAAAAAAABACAAAAAAAAAMAAUAXx81SzkwjAAAAOgAAAAMBAAAAOQAAAAAAEAAAAQABAAAAOAAAADv#####AAAAAQAJQ0Ryb2l0ZUFCAP####8BAAAAABAAAAEAAQAAADgAAAA7AAAAAgD#####AAAAAAAQAAFJAAAAAAAAAAAAQAgAAAAAAAADAAE#99qox0vglgAAAD0AAAARAP####8BAAAAABAAAAEAAQAAAD4AAAA9AAAADwD#####AQAAAAABAAAAPgAAAAgAAAANAAAAABIA#####wAAAD8AAABAAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAAEEAAAATAP####8AAAAAABAAAU8AwAgAAAAAAADAPAAAAAAAAAMAAgAAAEEAAAADAP####8AAAAAABAAAAEAAQAAADsAAABDAAAAAwD#####AAAAAAAQAAABAAEAAABDAAAAOAAAAAMA#####wAAAAAAEAAAAQEBAAAAOwAAAD4AAAADAP####8AAAAAABAAAAEBAQAAAD4AAABD#####wAAAAIAF0NNYXJxdWVBbmdsZUdlb21ldHJpcXVlAP####8AAAAAAAEAAAABQDAAAAAAAAAAAABDAAAAPgAAADsAAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAYAAAAEwAAAA4AAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAmAAAAIQAAABwAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAAD4AAABDAAAAFAAAAABLAQAAAAANAAABAAEAAAA+AAAAQwAAAAYAAAAASwEAAAAADQAAAQUAAAAAPgAAAEMAAAAPAAAAAEsBAAAAAAEAAABNAAAACkAwAAAAAAAAAQAAABIAAAAASwAAAEwAAABOAAAAEwAAAABLAQAAAAANAAABBQABAAAATwAAAAUBAAAASwAAAD4AAABDAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAEwAAABgAAAABAAAAAFIAAAAAARAAAAEAAQAAABMBP#AAAAAAAAAAAAACAAAAAFIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFMAAAADAQAAAFIAAAAAABAAAAEBAQAAABMAAAAYAAAABAAAAABSAARhbmcnAAAAVAAAABMAAAAYAAAABQEAAABSAAAAEwAAABgAAAAGAAAAAFIAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAATAAAAGAAAAAcBAAAAUgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAFgQAAAAAAABAAAAAgAAAAgAAABWAAAAAyBjbQIAAABXAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAIQAAACYAAAABAAAAAFoAAAAAARAAAAEAAQAAACEBP#AAAAAAAAAAAAACAAAAAFoAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFsAAAADAQAAAFoAAAAAABAAAAEBAQAAACEAAAAmAAAABAAAAABaAARhbmcnAAAAXAAAACEAAAAmAAAABQEAAABaAAAAIQAAACYAAAAGAAAAAFoAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAhAAAAJgAAAAcBAAAAWgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAGAQAAAAAAABAAAAAgAAAAgAAABeAAAAAyBjbQIAAABfAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAAAwAAAAIAAAACAAAAOwAAAEMAAAABAAAAAGIAAAAAARAAAAEAAQAAADsBP#AAAAAAAAAAAAACAAAAAGIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAGMAAAADAQAAAGIAAAAAABAAAAEAAQAAADsAAABDAAAABAAAAABiAARhbmcnAAAAZAAAADsAAABDAAAABQEAAABiAAAAOwAAAEMAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA+AAAAQwAAAAEAAAAAaAAAAAABEAAAAQABAAAAPgE#8AAAAAAAAAAAAAIAAAAAaAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAaQAAAAMBAAAAaAAAAAAAEAAAAQEBAAAAPgAAAEMAAAAEAAAAAGgABGFuZycAAABqAAAAPgAAAEMAAAAFAQAAAGgAAAA+AAAAQwAAAAYAAAAAaAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAD4AAABDAAAABwEAAABoAAAAAABAMAAAAAAAAEAQAAAAAAAAAAAAbhAAAAAAAAEAAAACAAAACAAAAGwAAAADIGNtAgAAAG0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAOAAAAEQAAAAEAAAAAcAAAAAABEAAAAQABAAAADgE#8AAAAAAAAAAAAAIAAAAAcAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAcQAAAAMBAAAAcAAAAAAAEAAAAQABAAAADgAAABEAAAAEAAAAAHAABGFuZycAAAByAAAADgAAABEAAAAFAQAAAHAAAAAOAAAAEQAAAAYAAAAAcAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA4AAAARAAAABwEAAABwAAAAAADAJAAAAAAAAEAyAAAAAAAAAAAAdhAAAAAAAAEAAAACAAAACAAAAHQAAAADIGNtAgAAAHUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAfAAAAHAAAAAEAAAAAeAAAAAABEAAAAQABAAAAHwE#8AAAAAAAAAAAAAIAAAAAeAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAeQAAAAMBAAAAeAAAAAAAEAAAAQABAAAAHwAAABwAAAAEAAAAAHgABGFuZycAAAB6AAAAHwAAABwAAAAFAQAAAHgAAAAfAAAAHAAAAAYAAAAAeAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB8AAAAcAAAABwEAAAB4AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAfhAAAAAAAAEAAAACAAAACAAAAHwAAAADIGNtAgAAAH0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA4AAAAOwAAAAEAAAAAgAAAAAABEAAAAQABAAAAOAE#8AAAAAAAAAAAAAIAAAAAgAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAgQAAAAMBAAAAgAAAAAAAEAAAAQABAAAAOAAAADsAAAAEAAAAAIAABGFuZycAAACCAAAAOAAAADsAAAAFAQAAAIAAAAA4AAAAOwAAAAYAAAAAgAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADgAAAA7AAAABwEAAACAAAAAAADAJAAAAAAAAEAyAAAAAAAAAAAAhhAAAAAAAAEAAAACAAAACAAAAIQAAAADIGNtAgAAAIUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAOAAAAGAAAAAEAAAAAiAAAAAABEAAAAQABAAAADgE#8AAAAAAAAAAAAAIAAAAAiAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAiQAAAAMBAAAAiAAAAAAAEAAAAQABAAAADgAAABgAAAAEAAAAAIgABGFuZycAAACKAAAADgAAABgAAAAFAQAAAIgAAAAOAAAAGAAAAAYAAAAAiAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA4AAAAYAAAABwEAAACIAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAjhAAAAAAAAEAAAACAAAACAAAAIwAAAADIGNtAQAAAI0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAARAAAAGAAAAAEAAAAAkAAAAAABEAAAAQABAAAAEQE#8AAAAAAAAAAAAAIAAAAAkAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAkQAAAAMBAAAAkAAAAAAAEAAAAQABAAAAEQAAABgAAAAEAAAAAJAABGFuZycAAACSAAAAEQAAABgAAAAFAQAAAJAAAAARAAAAGAAAAAYAAAAAkAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAABEAAAAYAAAABwEAAACQAAAAAABAMQAAAAAAAD#wAAAAAAAAAAAAlhAAAAAAAAEAAAACAAAACAAAAJQAAAADIGNtAQAAAJUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAfAAAAJgAAAAEAAAAAmAAAAAABEAAAAQABAAAAHwE#8AAAAAAAAAAAAAIAAAAAmAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAmQAAAAMBAAAAmAAAAAAAEAAAAQABAAAAHwAAACYAAAAEAAAAAJgABGFuZycAAACaAAAAHwAAACYAAAAFAQAAAJgAAAAfAAAAJgAAAAYAAAAAmAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB8AAAAmAAAABwEAAACYAAAAAADAMAAAAAAAAEAqAAAAAAAAAAAAnhAAAAAAAAEAAAACAAAACAAAAJwAAAADIGNtAQAAAJ0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAmAAAAHAAAAAEAAAAAoAAAAAABEAAAAQABAAAAJgE#8AAAAAAAAAAAAAIAAAAAoAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAoQAAAAMBAAAAoAAAAAAAEAAAAQABAAAAJgAAABwAAAAEAAAAAKAABGFuZycAAACiAAAAJgAAABwAAAAFAQAAAKAAAAAmAAAAHAAAAAYAAAAAoAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACYAAAAcAAAABwEAAACgAAAAAABAMQAAAAAAAEAUAAAAAAAAAAAAphAAAAAAAAEAAAACAAAACAAAAKQAAAADIGNtAQAAAKUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA4AAAAQwAAAAEAAAAAqAAAAAABEAAAAQABAAAAOAE#8AAAAAAAAAAAAAIAAAAAqAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAqQAAAAMBAAAAqAAAAAAAEAAAAQABAAAAOAAAAEMAAAAEAAAAAKgABGFuZycAAACqAAAAOAAAAEMAAAAFAQAAAKgAAAA4AAAAQwAAAAYAAAAAqAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADgAAABDAAAABwEAAACoAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAArhAAAAAAAAEAAAACAAAACAAAAKwAAAADIGNtAQAAAK0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA7AAAAQwAAAAEAAAAAsAAAAAABEAAAAQABAAAAOwE#8AAAAAAAAAAAAAIAAAAAsAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAsQAAAAMBAAAAsAAAAAAAEAAAAQABAAAAOwAAAEMAAAAEAAAAALAABGFuZycAAACyAAAAOwAAAEMAAAAFAQAAALAAAAA7AAAAQwAAAAYAAAAAsAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADsAAABDAAAABwEAAACwAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAthAAAAAAAAEAAAACAAAACAAAALQAAAADIGNtAQAAALUAAAAH##########8=";
    } else {
      codeBase64 =
        "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAABAAAABgAQTG9uZ3VldXJPcmllbnRlZQArIzE6IExlIHByZW1pZXIgcG9pbnQKIzI6IExlIGRldXhpw6htZSBwb2ludAAAAAIAAAADAAAAAAn#####AAAAAQARQ0VsZW1lbnRHZW5lcmlxdWUAAUEAAAAA#####wAAAAAAAUIAAAAA##########8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####AAAAAAEQAAABAAEAAAAAAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAAC#####wAAAAEACENTZWdtZW50Af####8AAAAAABAAAAEAAQAAAAAAAAAB#####wAAAAIAE0NNZXN1cmVBbmdsZU9yaWVudGUA#####wAEYW5nJwAAAAMAAAAAAAAAAf####8AAAABAAlDTG9uZ3VldXIB#####wAAAAAAAAAB#####wAAAAEAB0NNaWxpZXUA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAAAAAAB#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQH#####AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAABxAAAAAAAAEAAAAC#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAUAAAAAAgAAAAYAAAABAAAAw#####8AAAABAApDQ2FsY0NvbnN0AP####8AAnBpABYzLjE0MTU5MjY1MzU4OTc5MzIzODQ2#####wAAAAEACkNDb25zdGFudGVACSH7VEQtGP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmYAAAABAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAAAAAACAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUA8ZmZmZmZmAAAAAgAAAAMA#####wEAAAAAEAAAAQABAAAAAQAAAAMAAAAGAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAoAAAAAAAAAAAABMQAAAAUA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wACYzEAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmgxAAE0AAAACkAQAAAAAAAAAAAADQD#####AAJjMgABNQAAAApAFAAAAAAAAAAAAA0A#####wACaDIAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmMzAAE1AAAACkAUAAAAAAAAAAAADQD#####AAJoMwABNAAAAApAEAAAAAAAAAAAAAsA#####wAAAAAAEAABQQDAMgAAAAAAAMAwAAAAAAAAAwABQFDAAAAAAABAQoAAAAAAAP####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAIAAAADv####8AAAACAAlDQ2VyY2xlT1IAAAAADwEAAAAAAQAAAA4AAAAIAAAACAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAQAAAA8AAAAAABAAAUIAwDMAAAAAAADACAAAAAAAAAMAAUAS60sQO3OGAAAAEAAAAAMBAAAADwAAAAAAEAAAAQABAAAADgAAABEAAAACAP####8AAAAAABAAAUgAP#AAAAAAAAA#8AAAAAAAAAMAAT#ouymi+6YKAAAAEv####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAABMAAAASAAAADwD#####AQAAAAABAAAAEwAAAAgAAAAJAP####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAUAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABAAAAFgAAABMA#####wAAAAAAEAABQwBAIAAAAAAAAMAoAAAAAAAAAwACAAAAFgAAAAMA#####wAAAAAAEAAAAQABAAAADgAAABgAAAADAP####8AAAAAABAAAAEAAQAAABgAAAARAAAAAwD#####AAAAAAAQAAABAQEAAAATAAAAGAAAAAsA#####wAAAAAAEAABRABAEAAAAAAAAAAAAAAAAAAAAwABQH0QAAAAAABAZGAAAAAAAAAAAA4A#####wAbU2VnbWVudCBkZSBsb25ndWV1ciBkb25uw6llAAAAAQAAAAIAAAACAAAACgAAABwAAAAPAAAAAB0BAAAAAAEAAAAcAAAACAAAAAoAAAAAEAEAAAAdAAAAAAAQAAFFAMAyAAAAAAAAwDAAAAAAAAADAAFAA5gUsW2nVQAAAB4AAAADAQAAAB0AAAAAABAAAAEAAQAAABwAAAAfAAAAAgD#####AAAAAAAQAAFHAMA3AAAAAAAAwCIAAAAAAAADAAE#5pq7A1eUfwAAACAAAAARAP####8BAAAAABAAAAEAAQAAACEAAAAgAAAADwD#####AQAAAAABAAAAIQAAAAgAAAALAAAAABIA#####wAAACIAAAAjAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAACQAAAATAP####8AAAAAABAAAUYAwDIAAAAAAAC#8AAAAAAAAAMAAgAAACQAAAADAP####8AAAAAABAAAAEAAQAAABwAAAAmAAAAAwD#####AAAAAAAQAAABAAEAAAAmAAAAHwAAAAMA#####wAAAAAAEAAAAQEBAAAAIQAAACYAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAABMAAAAY#####wAAAAEAC0NNZWRpYXRyaWNlAAAAACoBAAAAAA0AAAEAAQAAABMAAAAYAAAABgAAAAAqAQAAAAANAAABBQAAAAATAAAAGAAAAA8AAAAAKgEAAAAAAQAAACwAAAAKQDAAAAAAAAABAAAAEgAAAAAqAAAAKwAAAC0AAAATAAAAACoBAAAAAA0AAAEFAAEAAAAuAAAABQEAAAAqAAAAEwAAABgAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAACEAAAAmAAAAFAAAAAAxAQAAAAANAAABAAEAAAAhAAAAJgAAAAYAAAAAMQEAAAAADQAAAQUAAAAAIQAAACYAAAAPAAAAADEBAAAAAAEAAAAzAAAACkAwAAAAAAAAAQAAABIAAAAAMQAAADIAAAA0AAAAEwAAAAAxAQAAAAANAAABBQABAAAANQAAAAUBAAAAMQAAACEAAAAmAAAACwD#####AAAAAAAQAAFNAMAgAAAAAAAAwD0AAAAAAAADAAFAdBAAAAAAAEBwcAAAAAAAAAAADgD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAMAAAAOAAAAA8AAAAAOQEAAAAAAQAAADgAAAAIAAAADAAAAAAQAQAAADkAAAAAABAAAU4AwBwAAAAAAADAOgAAAAAAAAMAAUAJOHyA#SdXAAAAOgAAAAMBAAAAOQAAAAAAEAAAAQABAAAAOAAAADv#####AAAAAQAJQ0Ryb2l0ZUFCAP####8BAAAAABAAAAEAAQAAADgAAAA7AAAAAgD#####AAAAAAAQAAFJAMAIAAAAAAAAwDwAAAAAAAADAAE#99qox0vglgAAAD0AAAARAP####8BAAAAABAAAAEAAQAAAD4AAAA9AAAADwD#####AQAAAAABAAAAPgAAAAgAAAANAAAAABIA#####wAAAD8AAABAAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAAEEAAAATAP####8AAAAAABAAAU8AwBwAAAAAAABAHAAAAAAAAAMAAgAAAEEAAAADAP####8AAAAAABAAAAEAAQAAADsAAABDAAAAAwD#####AAAAAAAQAAABAAEAAABDAAAAOAAAAAMA#####wAAAAAAEAAAAQEBAAAAOwAAAD4AAAADAP####8AAAAAABAAAAEBAQAAAD4AAABD#####wAAAAIAF0NNYXJxdWVBbmdsZUdlb21ldHJpcXVlAP####8AAAAAAAEAAAABQDAAAAAAAAAAAABDAAAAPgAAADsAAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAYAAAAEwAAAA4AAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAmAAAAIQAAABwAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAAD4AAABDAAAAFAAAAABLAQAAAAANAAABAAEAAAA+AAAAQwAAAAYAAAAASwEAAAAADQAAAQUAAAAAPgAAAEMAAAAPAAAAAEsBAAAAAAEAAABNAAAACkAwAAAAAAAAAQAAABIAAAAASwAAAEwAAABOAAAAEwAAAABLAQAAAAANAAABBQABAAAATwAAAAUBAAAASwAAAD4AAABDAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAEwAAABgAAAABAAAAAFIAAAAAARAAAAEAAQAAABMBP#AAAAAAAAAAAAACAAAAAFIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFMAAAADAQAAAFIAAAAAABAAAAEBAQAAABMAAAAYAAAABAAAAABSAARhbmcnAAAAVAAAABMAAAAYAAAABQEAAABSAAAAEwAAABgAAAAGAAAAAFIAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAATAAAAGAAAAAcBAAAAUgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAFgQAAAAAAABAAAAAgAAAAgAAABWAAAAAyBjbQIAAABXAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAAAwAAAAIAAAACAAAAIQAAACYAAAABAAAAAFoAAAAAARAAAAEAAQAAACEBP#AAAAAAAAAAAAACAAAAAFoAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFsAAAADAQAAAFoAAAAAABAAAAEBAQAAACEAAAAmAAAABAAAAABaAARhbmcnAAAAXAAAACEAAAAmAAAABQEAAABaAAAAIQAAACYAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAADAAAAAgAAAAIAAAA7AAAAQwAAAAEAAAAAYAAAAAABEAAAAQABAAAAOwE#8AAAAAAAAAAAAAIAAAAAYAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAYQAAAAMBAAAAYAAAAAAAEAAAAQABAAAAOwAAAEMAAAAEAAAAAGAABGFuZycAAABiAAAAOwAAAEMAAAAFAQAAAGAAAAA7AAAAQwAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAQAAAADAAAAAgAAAD4AAABDAAAAAQAAAABmAAAAAAEQAAABAAEAAAA+AT#wAAAAAAAAAAAAAgAAAABmAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAABnAAAAAwEAAABmAAAAAAAQAAABAQEAAAA+AAAAQwAAAAQAAAAAZgAEYW5nJwAAAGgAAAA+AAAAQwAAAAUBAAAAZgAAAD4AAABDAAAABgAAAABmAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAPgAAAEMAAAAHAQAAAGYAAAAAAMAyAAAAAAAAwAgAAAAAAAAAAABsEAAAAAAAAQAAAAIAAAAIAAAAagAAAAMgY20CAAAAawAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAQAAAADAAAAAgAAAA4AAAARAAAAAQAAAABuAAAAAAEQAAABAAEAAAAOAT#wAAAAAAAAAAAAAgAAAABuAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAABvAAAAAwEAAABuAAAAAAAQAAABAAEAAAAOAAAAEQAAAAQAAAAAbgAEYW5nJwAAAHAAAAAOAAAAEQAAAAUBAAAAbgAAAA4AAAARAAAABgAAAABuAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADgAAABEAAAAHAQAAAG4AAAAAAMA2AAAAAAAAQDQAAAAAAAAAAAB0EAAAAAAAAQAAAAIAAAAIAAAAcgAAAAMgY20CAAAAcwAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAQAAAADAAAAAgAAAB8AAAAcAAAAAQAAAAB2AAAAAAEQAAABAAEAAAAfAT#wAAAAAAAAAAAAAgAAAAB2AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAB3AAAAAwEAAAB2AAAAAAAQAAABAAEAAAAfAAAAHAAAAAQAAAAAdgAEYW5nJwAAAHgAAAAfAAAAHAAAAAUBAAAAdgAAAB8AAAAcAAAABgAAAAB2AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHwAAABwAAAAHAQAAAHYAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAAB8EAAAAAAAAQAAAAIAAAAIAAAAegAAAAMgY20CAAAAewAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAMAAAACAAAAAgAAADgAAAA7AAAAAQAAAAB+AAAAAAEQAAABAAEAAAA4AT#wAAAAAAAAAAAAAgAAAAB+AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAB#AAAAAwEAAAB+AAAAAAAQAAABAAEAAAA4AAAAOwAAAAQAAAAAfgAEYW5nJwAAAIAAAAA4AAAAOwAAAAUBAAAAfgAAADgAAAA7AAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAOwAAADgAAAABAAAAAIQAAAAAARAAAAEAAQAAADsBP#AAAAAAAAAAAAACAAAAAIQAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAIUAAAADAQAAAIQAAAAAABAAAAEAAQAAADsAAAA4AAAABAAAAACEAARhbmcnAAAAhgAAADsAAAA4AAAABQEAAACEAAAAOwAAADgAAAAGAAAAAIQAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA7AAAAOAAAAAcBAAAAhAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAIoQAAAAAAABAAAAAgAAAAgAAACIAAAAAyBjbQIAAACJAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAEQAAABgAAAABAAAAAIwAAAAAARAAAAEAAQAAABEBP#AAAAAAAAAAAAACAAAAAIwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAI0AAAADAQAAAIwAAAAAABAAAAEAAQAAABEAAAAYAAAABAAAAACMAARhbmcnAAAAjgAAABEAAAAYAAAABQEAAACMAAAAEQAAABgAAAAGAAAAAIwAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAARAAAAGAAAAAcBAAAAjAAAAAAAQBQAAAAAAABAMwAAAAAAAAAAAJIQAAAAAAABAAAAAgAAAAgAAACQAAAAAyBjbQEAAACRAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAADgAAABgAAAABAAAAAJQAAAAAARAAAAEAAQAAAA4BP#AAAAAAAAAAAAACAAAAAJQAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAJUAAAADAQAAAJQAAAAAABAAAAEAAQAAAA4AAAAYAAAABAAAAACUAARhbmcnAAAAlgAAAA4AAAAYAAAABQEAAACUAAAADgAAABgAAAAGAAAAAJQAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAOAAAAGAAAAAcBAAAAlAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAJoQAAAAAAABAAAAAgAAAAgAAACYAAAAAyBjbQEAAACZAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAJgAAAB8AAAABAAAAAJwAAAAAARAAAAEAAQAAACYBP#AAAAAAAAAAAAACAAAAAJwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAJ0AAAADAQAAAJwAAAAAABAAAAEAAQAAACYAAAAfAAAABAAAAACcAARhbmcnAAAAngAAACYAAAAfAAAABQEAAACcAAAAJgAAAB8AAAAGAAAAAJwAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAmAAAAHwAAAAcBAAAAnAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAKIQAAAAAAABAAAAAgAAAAgAAACgAAAAAyBjbQEAAAChAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAJgAAABwAAAABAAAAAKQAAAAAARAAAAEAAQAAACYBP#AAAAAAAAAAAAACAAAAAKQAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAKUAAAADAQAAAKQAAAAAABAAAAEAAQAAACYAAAAcAAAABAAAAACkAARhbmcnAAAApgAAACYAAAAcAAAABQEAAACkAAAAJgAAABwAAAAGAAAAAKQAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAmAAAAHAAAAAcBAAAApAAAAAAAQAgAAAAAAABAMwAAAAAAAAAAAKoQAAAAAAABAAAAAgAAAAgAAACoAAAAAyBjbQEAAACpAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAIAAAACAAAAJgAAACEAAAABAAAAAKwAAAAAARAAAAEAAQAAACYBP#AAAAAAAAAAAAACAAAAAKwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAK0AAAAEAAAAAKwABGFuZycAAACuAAAAJgAAACEAAAAFAQAAAKwAAAAmAAAAIQAAAAYAAAAArAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACYAAAAhAAAABwEAAACsAAAAAABALgAAAAAAAEAmAAAAAAAAAAAAsRAAAAAAAAEAAAACAAAACAAAAK8AAAADIGNtAQAAALAAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAABDAAAAOwAAAAEAAAAAswAAAAABEAAAAQABAAAAQwE#8AAAAAAAAAAAAAIAAAAAswAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAtAAAAAMBAAAAswAAAAAAEAAAAQABAAAAQwAAADsAAAAEAAAAALMABGFuZycAAAC1AAAAQwAAADsAAAAFAQAAALMAAABDAAAAOwAAAAYAAAAAswAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEMAAAA7AAAABwEAAACzAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAuRAAAAAAAAEAAAACAAAACAAAALcAAAADIGNtAQAAALgAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAABDAAAAOAAAAAEAAAAAuwAAAAABEAAAAQABAAAAQwE#8AAAAAAAAAAAAAIAAAAAuwAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAvAAAAAMBAAAAuwAAAAAAEAAAAQABAAAAQwAAADgAAAAEAAAAALsABGFuZycAAAC9AAAAQwAAADgAAAAFAQAAALsAAABDAAAAOAAAAAYAAAAAuwAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEMAAAA4AAAABwEAAAC7AAAAAABAKAAAAAAAAEAsAAAAAAAAAAAAwRAAAAAAAAEAAAACAAAACAAAAL8AAAADIGNtAQAAAMAAAAAH##########8=";
    }
    texte_corr = `$\\mathcal{A}_{ABC}=\\dfrac{1}{2}\\times AB\\times HC=\\dfrac{1}{2}\\times${c1}~\\text{cm}\\times ${h1}~\\text{cm}=${tex_nombre(
      Algebrite.eval((c1 * h1) / 2)
    )}~\\text{cm}^2$`;
    texte_corr += "<br>";
    texte_corr += `$\\mathcal{A}_{DEF}=\\dfrac{1}{2}\\times DE\\times GF=\\dfrac{1}{2}\\times${c2}~\\text{cm}\\times ${h2}~\\text{cm}=${tex_nombre(
      Algebrite.eval((c2 * h2) / 2)
    )}~\\text{cm}^2$`;
    texte_corr += "<br>";
    texte_corr += `$\\mathcal{A}_{ABC}=\\dfrac{1}{2}\\times MN\\times IO=\\dfrac{1}{2}\\times${c3}~\\text{cm}\\times ${h3}~\\text{cm}=${tex_nombre(
      Algebrite.eval((c3 * h3) / 2)
    )}~\\text{cm}^2$`;

    this.MG32codeBase64 = codeBase64;
    this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c1", "${c1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c2", "${c2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c3", "${c3}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h1", "${h1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h2", "${h2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h3", "${h3}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      `;

    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu(this);
  };
}

/**
 * 4 cercles sont tracés, 2 dont on connait le rayon et 2 dont on connait le diamètre.
 * * 1 : Calculer le périmètre de cercles
 * * 2 : Calculer l'aire de disques
 * * 3 : Calculer le périmètre et l'aire de disques
 *
 * Pas de version LaTeX
 * @Auteur Rémi Angot
 */
function Perimetre_aire_disques(pa = 3) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.pas_de_version_LaTeX = true;
  this.titre = "Périmètres et aires de disques";
  this.sup = pa; // 1 : périmètre, 2 : aire, 3 : périmètres et aires
  this.spacing = 2;
  this.spacing_corr = 2;
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.type_exercice = "MG32";
  this.taille_div_MG32 = [500, 500];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_corrections = []; // Liste de questions corrigées
    let tableau_des_rayons = shuffle([2, 3, 4, 5, 6, 7, 8]); //pour s'assurer que les 4 rayons sont différents
    let r1 = tableau_des_rayons[0];
    let r2 = tableau_des_rayons[1];
    let r3 = tableau_des_rayons[2];
    let r4 = tableau_des_rayons[3];
    if (this.sup == 1) {
      this.consigne = "Calculer le périmètre des 4 cercles suivants.";
    }
    if (this.sup == 2) {
      this.consigne = "Calculer l'aire des 4 disques suivants.";
    }
    if (this.sup == 3) {
      this.consigne = "Calculer le périmètre et l'aire des 4 disques suivants.";
    }

    this.consigne +=
      "</br>Donner la valeur exacte et une valeur approchée au dixième près.";

    let codeBase64 =
      "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAAAAAAAAQAAAEv#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFPAMAoAAAAAAAAAAAAAAAAAAAFAAFACAAAAAAAAEB#UAAAAAAA#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUA8ZmZmZmZmAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAQAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQANQ1BvaW50QmFzZUVudAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAyAAAAAAAAAQEAAAARAP####8BAAAAABAAAUEAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAAAAAAAAAAAAAQH#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEAAAABH#####AAAAAQALQ01lZGlhdHJpY2UAAAAAEwEAAAAAEAAAAQABAAAAEAAAABH#####AAAAAQAHQ01pbGlldQAAAAATAQAAAAAQAAABBQAAAAAQAAAAEf####8AAAACAAlDQ2VyY2xlT1IAAAAAEwEAAAAAAQAAABUAAAABQDAAAAAAAAABAAAACAAAAAATAAAAFAAAABYAAAAJAAAAABMBAAAAABAAAAEFAAEAAAAXAAAAEAEAAAATAAAAEAAAABH#####AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAQAAABMBAAAAAQAAABgRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAGQAAABIA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEgAAABEAAAATAAAAABsBAAAAABAAAAEAAQAAABIAAAARAAAAFAAAAAAbAQAAAAAQAAABBQAAAAASAAAAEQAAABUAAAAAGwEAAAAAAQAAAB0AAAABQDAAAAAAAAABAAAACAAAAAAbAAAAHAAAAB4AAAAJAAAAABsBAAAAABAAAAEFAAEAAAAfAAAAEAEAAAAbAAAAEgAAABEAAAAWAQAAABsBAAAAAQAAACARAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAIf####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAUAAAAAAAAAAAAAUAqAAAAAAAAAAAAFwD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAACgAAAAFAKgAAAAAAAAAAAAFAKgAAAAAAAAAAABcA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAAAoAAAABQBQAAAAAAAAAAAABQBDMzMzMzM0AAAAXAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAqAAAAAAAAAAAAAUAQzMzMzMzN#####wAAAAEAB0NDYWxjdWwA#####wACcjEAATgAAAABQCAAAAAAAAAAAAAYAP####8AAnIyAAE4AAAAAUAgAAAAAAAAAAAAGAD#####AAJyMwABOAAAAAFAIAAAAAAAAAAAABgA#####wACcjQAATgAAAABQCAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAjAAAADQMAAAAOAAAAJwAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAkAAAADQMAAAAOAAAAKAAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAlAAAADQMAAAAOAAAAKQAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAmAAAADQMAAAAOAAAAKgAAAAFAAAAAAAAAAAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABP+2jc+MfDgIAAAArAAAAGQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAT#oCnbou8r7AAAALgAAABkA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAFAA2#XuqaBNQAAACwAAAAZAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAUiuM2Ua#MAAAAt#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wEAAAAAEAAAAQABAAAAMQAAACQAAAAaAP####8BAAAAABAAAAEAAQAAADIAAAAl#####wAAAAEAI0NBdXRyZVBvaW50SW50ZXJzZWN0aW9uRHJvaXRlQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAsAAAAMwAAADEAAAAbAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAtAAAANAAAADL#####AAAAAQAIQ1NlZ21lbnQA#####wAAAAAAEAAAAQEBAAAAIwAAAC8AAAAcAP####8AAAAAABAAAAEBAQAAADEAAAA1AAAAHAD#####AAAAAAAQAAABAQEAAAAyAAAANgAAABwA#####wAAAAAAEAAAAQEBAAAAJgAAADAAAAAUAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAjAAAALwAAABQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAACYAAAAwAAAAFgD#####AAAAAABAEAAAAAAAAEAUAAAAAAAAAAAAOxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAyBjbQIAAAAnAAAAGAD#####AAJkMgAEMipyMgAAAA0CAAAAAUAAAAAAAAAAAAAADgAAACgAAAAYAP####8AAmQzAAQyKnIzAAAADQIAAAABQAAAAAAAAAAAAAAOAAAAKQAAABYA#####wAAAAAAQBQAAAAAAADALAAAAAAAAAAAACQQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPgAAABYA#####wAAAAAAQBAAAAAAAADAMQAAAAAAAAAAACUQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPwAAABYA#####wAAAAAAQBAAAAAAAABAAAAAAAAAAAAAADwQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAJjbQIAAAAqAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUAC6DhJtPdjAAAAKwAAABkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAE#54KANM#JugAAACwAAAAZAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAH6z0QhlKUAAAAtAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUABlMNYoHZ0AAAALv####8AAAACAAxDQ29tbWVudGFpcmUA#####wAAAAAAwDUAAAAAAADANwAAAAAAAAAAAEMQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGQyNMKDEpAAAAHQD#####AAAAAABAGAAAAAAAAMAwAAAAAAAAAAAARBAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZDI0woMikAAAAdAP####8AAAAAAMA3AAAAAAAAwDUAAAAAAAAAAABFEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAABkMjTCgzKQAAAB0A#####wAAAAAAwDgAAAAAAADANQAAAAAAAAAAAEYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGQyNMKDQpAAAADv##########";
    //	let codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAH0AAAB9AAAAQEAAAAAAAAAAQAAAEv#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFPAMAoAAAAAAAAAAAAAAAAAAAFAAFACAAAAAAAAEB#UAAAAAAA#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUA8ZmZmZmZmAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAQAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQANQ1BvaW50QmFzZUVudAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAyAAAAAAAAAQEAAAARAP####8BAAAAABAAAUEAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAAAAAAAAAAAAAQH#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEAAAABH#####AAAAAQALQ01lZGlhdHJpY2UAAAAAEwEAAAAAEAAAAQABAAAAEAAAABH#####AAAAAQAHQ01pbGlldQAAAAATAQAAAAAQAAABBQAAAAAQAAAAEf####8AAAACAAlDQ2VyY2xlT1IAAAAAEwEAAAAAAQAAABUAAAABQDAAAAAAAAABAAAACAAAAAATAAAAFAAAABYAAAAJAAAAABMBAAAAABAAAAEFAAEAAAAXAAAAEAEAAAATAAAAEAAAABH#####AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAQAAABMBAAAAAQAAABgRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAGQAAABIA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEgAAABEAAAATAAAAABsBAAAAABAAAAEAAQAAABIAAAARAAAAFAAAAAAbAQAAAAAQAAABBQAAAAASAAAAEQAAABUAAAAAGwEAAAAAAQAAAB0AAAABQDAAAAAAAAABAAAACAAAAAAbAAAAHAAAAB4AAAAJAAAAABsBAAAAABAAAAEFAAEAAAAfAAAAEAEAAAAbAAAAEgAAABEAAAAWAQAAABsBAAAAAQAAACARAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAIf####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAUAAAAAAAAAAAAAUAqAAAAAAAAAAAAFwD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAACgAAAAFAKgAAAAAAAAAAAAFAKgAAAAAAAAAAABcA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAAAoAAAABQBQAAAAAAAAAAAABQBDMzMzMzM0AAAAXAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAqAAAAAAAAAAAAAUAQzMzMzMzN#####wAAAAEAB0NDYWxjdWwA#####wACcjEAATgAAAABQCAAAAAAAAAAAAAYAP####8AAnIyAAE4AAAAAUAgAAAAAAAAAAAAGAD#####AAJyMwABOAAAAAFAIAAAAAAAAAAAABgA#####wACcjQAATgAAAABQCAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAjAAAADQMAAAAOAAAAJwAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAkAAAADQMAAAAOAAAAKAAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAlAAAADQMAAAAOAAAAKQAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAmAAAADQMAAAAOAAAAKgAAAAFAAAAAAAAAAAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABP+2jc+MfDgIAAAArAAAAGQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAT#oCnbou8r7AAAALgAAABkA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAFAA2#XuqaBNQAAACwAAAAZAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAUiuM2Ua#MAAAAt#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wEAAAAADQAAAQABAAAAMQAAACQAAAAaAP####8BAAAAAA0AAAEAAQAAADIAAAAl#####wAAAAEAI0NBdXRyZVBvaW50SW50ZXJzZWN0aW9uRHJvaXRlQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAsAAAAMwAAADEAAAAbAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAtAAAANAAAADL#####AAAAAQAIQ1NlZ21lbnQA#####wAAAAAAEAAAAQEBAAAAIwAAAC8AAAAcAP####8AAAAAABAAAAEBAQAAADEAAAA1AAAAHAD#####AAAAAAAQAAABAQEAAAAyAAAANgAAABwA#####wAAAAAAEAAAAQEBAAAAJgAAADAAAAAUAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAjAAAALwAAABQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAACYAAAAwAAAAFgD#####AAAAAABAEAAAAAAAAEAUAAAAAAAAAAAAOxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAyBjbQIAAAAnAAAAGAD#####AAJkMgAEMipyMgAAAA0CAAAAAUAAAAAAAAAAAAAADgAAACgAAAAYAP####8AAmQzAAQyKnIzAAAADQIAAAABQAAAAAAAAAAAAAAOAAAAKQAAABYA#####wAAAAAAQBQAAAAAAADALAAAAAAAAAAAACQQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPgAAABYA#####wAAAAAAQBAAAAAAAADAMQAAAAAAAAAAACUQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPwAAABYA#####wAAAAAAQBAAAAAAAABAAAAAAAAAAAAAADwQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAJjbQIAAAAqAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUAC6DhJtPdjAAAAKwAAABkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAE#54KANM#JugAAACwAAAAZAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAH6z0QhlKUAAAAtAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUABlMNYoHZ0AAAALv####8AAAACAAxDQ29tbWVudGFpcmUA#####wAAAAAAwDAAAAAAAADAMwAAAAAAAAAAAEMQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAPJFxtYXRoY2Fse0N9XzEkAAAAHQD#####AAAAAABAGAAAAAAAAMAwAAAAAAAAAAAARBAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAA8kXG1hdGhjYWx7Q31fMiQAAAAdAP####8AAAAAAMAyAAAAAAAAwDQAAAAAAAAAAABFEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAADyRcbWF0aGNhbHtDfV8zJAAAAB0A#####wAAAAAAwDMAAAAAAADAMAAAAAAAAAAAAEYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAPJFxtYXRoY2Fse0N9XzQkAAAADv##########";
    //  Si affichage LaTeX alors bug de MG32
    texte_corr = "";
    if (this.sup == 1) {
      //si on ne demande pas les aires
      texte_corr = `$\\mathcal{P}_1=2\\times${r1}\\times\\pi=${
        2 * r1
      }\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(2 * r1 * Math.PI), 1)
      )}$ cm<br>`;
      texte_corr += `$\\mathcal{P}_2=${2 * r2}\\times\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(2 * r2 * Math.PI), 1)
      )}$ cm<br>`;
      texte_corr += `$\\mathcal{P}_3=${2 * r3}\\times\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(2 * r3 * Math.PI), 1)
      )}$ cm<br>`;
      texte_corr += `$\\mathcal{P}_4=2\\times${r4}\\times\\pi=${
        2 * r4
      }\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(2 * r4 * Math.PI), 1)
      )}$ cm<br>`;
    }

    if (this.sup == 2) {
      texte_corr += `$\\mathcal{A}_1=${r1}\\times${r1}\\times\\pi=${
        r1 * r1
      }\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(r1 * r1 * Math.PI), 1)
      )}~\\text{cm}^2$<br>`;
      texte_corr += `Le diamètre de $\\mathcal{C}_2$ est ${
        2 * r2
      } cm donc son rayon est ${r2} cm.<br>`;
      texte_corr += `$\\mathcal{A}_2=${r2}\\times${r2}\\times\\pi=${
        r2 * r2
      }\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(r2 * r2 * Math.PI), 1)
      )}~\\text{cm}^2$<br>`;
      texte_corr += `Le diamètre de $\\mathcal{C}_3$ est ${
        2 * r3
      } cm donc son rayon est ${r3} cm.<br>`;
      texte_corr += `$\\mathcal{A}_3=${r3}\\times${r3}\\times\\pi=${
        r3 * r3
      }\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(r3 * r3 * Math.PI), 1)
      )}~\\text{cm}^2$<br>`;
      texte_corr += `$\\mathcal{A}_4=${r4}\\times${r4}\\times\\pi=${
        r4 * r4
      }\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(r4 * r4 * Math.PI), 1)
      )}~\\text{cm}^2$<br>`;
    }

    if (this.sup == 3) {
      texte_corr = `$\\mathcal{P}_1=2\\times${r1}\\times\\pi=${
        2 * r1
      }\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(2 * r1 * Math.PI), 1)
      )}$ cm<br>`;
      texte_corr += `$\\mathcal{P}_2=${2 * r2}\\times\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(2 * r2 * Math.PI), 1)
      )}$ cm<br>`;
      texte_corr += `$\\mathcal{P}_3=${2 * r3}\\times\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(2 * r3 * Math.PI), 1)
      )}$ cm<br>`;
      texte_corr += `$\\mathcal{P}_4=2\\times${r4}\\times\\pi=${
        2 * r4
      }\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(2 * r4 * Math.PI), 1)
      )}$ cm<br>`;

      texte_corr += `<br>`;

      texte_corr += `$\\mathcal{A}_1=${r1}\\times${r1}\\times\\pi=${
        r1 * r1
      }\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(r1 * r1 * Math.PI), 1)
      )}~\\text{cm}^2$<br>`;
      texte_corr += `Le diamètre de $\\mathcal{C}_2$ est ${
        2 * r2
      } cm donc son rayon est ${r2} cm.<br>`;
      texte_corr += `$\\mathcal{A}_2=${r2}\\times${r2}\\times\\pi=${
        r2 * r2
      }\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(r2 * r2 * Math.PI), 1)
      )}~\\text{cm}^2$<br>`;
      texte_corr += `Le diamètre de $\\mathcal{C}_3$ est ${
        2 * r3
      } cm donc son rayon est ${r3} cm.<br>`;
      texte_corr += `$\\mathcal{A}_3=${r3}\\times${r3}\\times\\pi=${
        r3 * r3
      }\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(r3 * r3 * Math.PI), 1)
      )}~\\text{cm}^2$<br>`;
      texte_corr += `$\\mathcal{A}_4=${r4}\\times${r4}\\times\\pi=${
        r4 * r4
      }\\pi\\approx${tex_nombre(
        arrondi(Algebrite.eval(r4 * r4 * Math.PI), 1)
      )}~\\text{cm}^2$<br>`;
    }

    this.MG32codeBase64 = codeBase64;
    this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r1", "${r1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r2", "${r2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r3", "${r3}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r4", "${r4}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      `;

    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu(this);
  };

  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    3,
    "1 : Périmètres\n\
2 : Aires\n3 : Périmètres et aires",
  ];
}

/**
 * 3 figures sont données, 1 quart de disque, un demi-disque et un 3-quarts de disque
 * * 1 : Calculer les périmètres
 * * 2 : Calculer les aires
 * * 3 : Calculer les périmètres et aires
 * Pas de version LaTeX
 * @Auteur Rémi Angot
 */
function Perimetre_aire_et_portions_de_disques(pa = 3) {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.pas_de_version_LaTeX = true;
  this.titre = "Périmètres et aires de portions de cercles";
  this.consigne =
    "Calculer le périmètre et l'aire de chacune des figures suivantes";
  this.sup = pa; // 1 : périmètre, 2 : aire, 3 : périmètres et aires
  this.spacing = 2;
  sortie_html ? (this.spacing_corr = 3) : (this.spacing_corr = 2);
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.type_exercice = "MG32";
  this.taille_div_MG32 = [600, 450];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_corrections = []; // Liste de questions corrigées
    let r = randint(1, 5);
    let r2 = randint(2, 4);
    let r3 = randint(2, 4);
    let figure = randint(1, 2);
    let codeBase64 = "";
    if (this.sup == 1) {
      this.consigne = "Calculer le périmètre de chacune des figures suivantes";
    }
    if (this.sup == 2) {
      this.consigne = "Calculer l'aire de chacune des figures suivantes";
    }

    if (figure == 1) {
      codeBase64 =
        "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAIoAAACNQAAAQEAAAAAAAAAAQAAAE######AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAJyMwABNgAAAAFAGAAAAAAAAP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmb#####AAAAAQAUQ0Ryb2l0ZURpcmVjdGlvbkZpeGUA#####wEAAAAAEAAAAQABAAAAAgE#8AAAAAAAAP####8AAAABAA9DUG9pbnRMaWVEcm9pdGUA#####wEAAAAADgABVgDAAAAAAAAAAEAQAAAAAAAABQABQDxmZmZmZmYAAAAD#####wAAAAEACENTZWdtZW50AP####8BAAAAABAAAAEAAQAAAAIAAAAE#####wAAAAEAB0NNaWxpZXUA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAIAAAAE#####wAAAAIADENDb21tZW50YWlyZQD#####AQAAAAAAAAAAAAAAAEAYAAAAAAAAAAAABgwAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAEx#####wAAAAEACUNMb25ndWV1cgD#####AAAAAgAAAAQAAAADAP####8BAAAAABAAAU8AAAAAAAAAAABACAAAAAAAAAMAAUBRQAAAAAAAQGQAAAAAAAAAAAACAP####8AAXIAATQAAAABQBAAAAAAAAAAAAAEAP####8BAAAAARAAAAEAAQAAAAkBP#AAAAAAAAD#####AAAAAgAJQ0NlcmNsZU9SAP####8BAAAAAAEAAAAJ#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAoA#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAsAAAAM#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAANAAAADQD#####AQAAAAAQAAFBAAAAAAAAAAAAQAgAAAAAAAADAAEAAAAN#####wAAAAEADENBcmNEZUNlcmNsZQD#####AAAAAAABAAAACQAAAA######AAAAAUBWgAAAAAAAAAAABgD#####AAAAAAAQAAABAAEAAAAJAAAAD#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAAAkAAAARAAAADAD#####AAAAEgAAABAAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABAAAAEwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAATAAAABgD#####AAAAAAAQAAABAAEAAAAVAAAACf####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAgAAAAIAAAAJAAAAD#####8AAAABAAtDTWVkaWF0cmljZQAAAAAXAQAAAAAQAAABAAEAAAAJAAAADwAAAAcAAAAAFwEAAAAAEAAAAQUAAAAACQAAAA8AAAAKAAAAABcBAAAAAAEAAAAZAAAAAUAwAAAAAAAAAQAAAAwAAAAAFwAAABgAAAAaAAAADQAAAAAXAQAAAAAQAAABBQABAAAAGwAAAAkBAAAAFwAAAAkAAAAP#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQEAAAAXAAAAAAEAAAAcEQAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAADIGNtAQAAAB3#####AAAAAQAOQ01hcnF1ZVNlZ21lbnQA#####wAAAP8AAgEAAAAWAAAAEwD#####AAAA#wACAQAAABEAAAACAP####8AAnIyAAE1AAAAAUAUAAAAAAAAAAAACgD#####AQAA#wABAAAACf####8AAAABAApDT3BlcmF0aW9uAAAAABQAAAAACwAAAAoAAAALAAAAIQAAAAFAAAAAAAAAAAAAAAAMAP####8AAAALAAAAIgAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAAjAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAACMAAAAKAP####8BAAAAAAEAAAAlAAAACwAAACEAAAAADAD#####AAAACwAAACYAAAANAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAMAAgAAACcAAAANAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAMAAQAAACcAAAAOAP####8AAAAAAAEAAAAlAAAAKQAAACgAAAAGAP####8AAAAAABAAAAEAAQAAACgAAAApAAAAEAD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAgAAAAIAAAAoAAAAKQAAABEAAAAALAEAAAAAEAAAAQABAAAAKAAAACkAAAAHAAAAACwBAAAAABAAAAEFAAAAACgAAAApAAAACgAAAAAsAQAAAAABAAAALgAAAAFAMAAAAAAAAAEAAAAMAAAAACwAAAAtAAAALwAAAA0AAAAALAEAAAAAEAAAAQUAAQAAADAAAAAJAQAAACwAAAAoAAAAKQAAABIBAAAALAAAAAABAAAAMREAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAAAyAAAABwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAACQAAACkAAAAPAP####8BAAAAABAAAAEAAQAAADQAAAArAAAACgD#####AQAAAAABAAAANAAAABQAAAAACwAAAAEAAAABQAAAAAAAAAAAAAAADAD#####AAAANQAAADYAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwACAAAANwAAAA0A#####wEAAAAAEAABRQAAAAAAAAAAAEAIAAAAAAAAAwABAAAANwAAAAQA#####wEAAAABEAAAAQABAAAAOQE#8AAAAAAAAAAAAAoA#####wEAAAAAAQAAADkAAAALAAAAAQAAAAAMAP####8AAAA6AAAAOwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAA8AAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAADwAAAAMAP####8AAAA1AAAAOwAAAA0A#####wEAAAAAEAABRAAAAAAAAAAAAEAIAAAAAAAAAwACAAAAPwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAAA######wAAAAEAEUNHcmFuZEFyY0RlQ2VyY2xlAP####8AAAAAAAEAAAA5AAAAPgAAAEAAAAAGAP####8AAAAAABAAAAEAAQAAAEAAAAA5AAAABgD#####AAAAAAAQAAABAAEAAAA5AAAAPgAAABMA#####wAAAP8AAgIAAABDAAAAEwD#####AAAA#wACAgAAAEQAAAAQAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAAEAAAAA5AAAAEQAAAABHAQAAAAAQAAABAAEAAABAAAAAOQAAAAcAAAAARwEAAAAAEAAAAQUAAAAAQAAAADkAAAAKAAAAAEcBAAAAAAEAAABJAAAAAUAwAAAAAAAAAQAAAAwAAAAARwAAAEgAAABKAAAADQAAAABHAQAAAAAQAAABBQABAAAASwAAAAkBAAAARwAAAEAAAAA5AAAAEgEAAABHAAAAAABARgAAAAAAAAAAAAAAAAAAAAAATBEAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAABNAAAACP##########";

      if (this.sup == 1) {
        //si on ne demande pas les aires
        texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(
          Algebrite.eval(r / 2)
        )}\\pi+${2 * r}\\approx${tex_nombre(
          arrondi(Algebrite.eval((r / 2) * Math.PI + 2 * r), 1)
        )}$ cm<br>`;
        texte_corr += `La deuxième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${
          2 * r2
        } cm et d'un diamètre qui ferme la figure.<br>`;
        texte_corr += `$\\mathcal{P}_2=\\dfrac{1}{2}\\times${
          2 * r2
        }\\times\\pi+${2 * r2}=${r2}\\pi+${2 * r2}\\approx${tex_nombre(
          arrondi(Algebrite.eval(r2 * Math.PI + 2 * r2), 1)
        )}$ cm<br>`;
        texte_corr += `La troisième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r3} cm et 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_3=\\dfrac{3}{4}\\times2\\times${r3}\\times\\pi+${r3}+${r3}=${tex_nombre(
          Algebrite.eval((6 * r3) / 4)
        )}\\pi+${2 * r3}\\approx${tex_nombre(
          arrondi(Algebrite.eval(((6 * r3) / 4) * Math.PI + 2 * r3), 1)
        )}$ cm<br>`;
      }

      if (this.sup == 2) {
        texte_corr = `La première figure est un quart de disque de rayon ${r} cm.<br>`;
        texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(
          Algebrite.eval((r * r) / 4)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r * r) / 4) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La deuxième figure est la moitié d'un disque de diamètre ${
          2 * r2
        } cm donc de ${r2} cm de rayon.<br>`;
        texte_corr += `$\\mathcal{A}_2=\\dfrac{1}{2}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(
          Algebrite.eval((r2 * r2) / 2)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r2 * r2) / 2) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La troisième figure est trois quarts d'un disque de rayon ${r3} cm.<br>`;
        texte_corr += `$\\mathcal{A}_3=\\dfrac{3}{4}\\times${r3}\\times${r3}\\times\\pi=${tex_nombre(
          Algebrite.eval((3 / 4) * r3 * r3)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval((3 / 4) * r3 * r3 * Math.PI), 1)
        )}~\\text{cm}^2$`;
      }

      if (this.sup == 3) {
        texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(
          Algebrite.eval(r / 2)
        )}\\pi+${2 * r}\\approx${tex_nombre(
          arrondi(Algebrite.eval((r / 2) * Math.PI + 2 * r), 1)
        )}$ cm<br>`;
        texte_corr += `La deuxième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${
          2 * r2
        } cm et d'un diamètre qui ferme la figure.<br>`;
        texte_corr += `$\\mathcal{P}_2=\\dfrac{1}{2}\\times${
          2 * r2
        }\\times\\pi+${2 * r2}=${r2}\\pi+${2 * r2}\\approx${tex_nombre(
          arrondi(Algebrite.eval(r2 * Math.PI + 2 * r2), 1)
        )}$ cm<br>`;
        texte_corr += `La troisième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r3} cm et 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_3=\\dfrac{3}{4}\\times2\\times${r3}\\times\\pi+${r3}+${r3}=${tex_nombre(
          Algebrite.eval((6 * r3) / 4)
        )}\\pi+${2 * r3}\\approx${tex_nombre(
          arrondi(Algebrite.eval(((6 * r3) / 4) * Math.PI + 2 * r3), 1)
        )}$ cm<br>`;
        texte_corr += `La première figure est un quart de disque de rayon ${r} cm.<br>`;
        texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(
          Algebrite.eval((r * r) / 4)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r * r) / 4) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La deuxième figure est la moitié d'un disque de diamètre ${
          2 * r2
        } cm donc de ${r2} cm de rayon.<br>`;
        texte_corr += `$\\mathcal{A}_2=\\dfrac{1}{2}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(
          Algebrite.eval((r2 * r2) / 2)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r2 * r2) / 2) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La troisième figure est trois quarts d'un disque de rayon ${r3} cm.<br>`;
        texte_corr += `$\\mathcal{A}_3=\\dfrac{3}{4}\\times${r3}\\times${r3}\\times\\pi=${tex_nombre(
          Algebrite.eval((3 / 4) * r3 * r3)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval((3 / 4) * r3 * r3 * Math.PI), 1)
        )}~\\text{cm}^2$`;
      }
    } else {
      codeBase64 =
        "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAAAAAAAAQAAAGX#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAJyMwABNgAAAAFAGAAAAAAAAP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmb#####AAAAAQAUQ0Ryb2l0ZURpcmVjdGlvbkZpeGUA#####wEAAAAAEAAAAQABAAAAAgE#8AAAAAAAAP####8AAAABAA9DUG9pbnRMaWVEcm9pdGUA#####wEAAAAADgABVgDAAAAAAAAAAEAQAAAAAAAABQABQDxmZmZmZmYAAAAD#####wAAAAEACENTZWdtZW50AP####8BAAAAABAAAAEAAQAAAAIAAAAE#####wAAAAEAB0NNaWxpZXUA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAIAAAAE#####wAAAAIADENDb21tZW50YWlyZQD#####AQAAAAAAAAAAAAAAAEAYAAAAAAAAAAAABgwAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAEx#####wAAAAEACUNMb25ndWV1cgD#####AAAAAgAAAAQAAAADAP####8BAAAAABAAAU8AAAAAAAAAAABACAAAAAAAAAMAAUBRQAAAAAAAQGQAAAAAAAAAAAACAP####8AAXIAATQAAAABQBAAAAAAAAAAAAAEAP####8BAAAAARAAAAEAAQAAAAkBP#AAAAAAAAD#####AAAAAgAJQ0NlcmNsZU9SAP####8BAAAAAAEAAAAJ#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAoA#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAsAAAAM#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAANAAAADQD#####AQAAAAAQAAFBAAAAAAAAAAAAQAgAAAAAAAADAAEAAAANAAAABgD#####AAAAAAAQAAABAAEAAAAJAAAAD#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAAAkAAAAQ#####wAAAAEAFENJbXBsZW1lbnRhdGlvblByb3RvAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAAAkAAAAP#####wAAAAEAC0NNZWRpYXRyaWNlAAAAABIBAAAAABAAAAEAAQAAAAkAAAAPAAAABwAAAAASAQAAAAAQAAABBQAAAAAJAAAADwAAAAoAAAAAEgEAAAAAAQAAABQAAAABQDAAAAAAAAABAAAADAAAAAASAAAAEwAAABUAAAANAAAAABIBAAAAABAAAAEFAAEAAAAWAAAACQEAAAASAAAACQAAAA######AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAQAAABIAAAAAAQAAABcRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAMgY20BAAAAGAAAAAIA#####wACcjIAATQAAAABQBAAAAAAAAAAAAAKAP####8BAAD#AAEAAAAJ#####wAAAAEACkNPcGVyYXRpb24AAAAAEgAAAAALAAAACgAAAAsAAAAaAAAAAUAAAAAAAAAAAAAAAAwA#####wAAAAsAAAAbAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAgAAABwAAAANAP####8BAAAAABAAAUcAAAAAAAAAAABACAAAAAAAAAMAAQAAABwAAAAKAP####8BAAAAAAEAAAAeAAAACwAAABoAAAAADAD#####AAAACwAAAB8AAAANAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAMAAgAAACAAAAANAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAMAAQAAACAAAAAGAP####8BAAAAABAAAAEAAQAAACEAAAAiAAAADwD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAQAAAAIAAAAhAAAAIgAAABAAAAAAJAEAAAAAEAAAAQABAAAAIQAAACIAAAAHAAAAACQBAAAAABAAAAEFAAAAACEAAAAiAAAACgAAAAAkAQAAAAABAAAAJgAAAAFAMAAAAAAAAAEAAAAMAAAAACQAAAAlAAAAJwAAAA0AAAAAJAEAAAAAEAAAAQUAAQAAACgAAAAJAQAAACQAAAAhAAAAIgAAAAcA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAAAkAAAAiAAAADgD#####AQAAAAAQAAABAAEAAAArAAAAIwAAAAoA#####wEAAAAAAQAAACsAAAASAgAAAAE#+AAAAAAAAAAAAAsAAAAaAAAAAAwA#####wAAACwAAAAtAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAgAAAC4AAAANAP####8BAAAAABAAAUUAAAAAAAAAAABACAAAAAAAAAMAAQAAAC4AAAAEAP####8BAAAAARAAAAEAAQAAADABP#AAAAAAAAAAAAAKAP####8BAAAAAAEAAAAwAAAACwAAAAEAAAAADAD#####AAAAMQAAADIAAAANAP####8BAAAAABAAAUkAAAAAAAAAAABACAAAAAAAAAMAAgAAADMAAAANAP####8BAAAAABAAAUgAAAAAAAAAAABACAAAAAAAAAMAAQAAADMAAAAMAP####8AAAAsAAAAMgAAAA0A#####wEAAAAAEAABRAAAAAAAAAAAAEAIAAAAAAAAAwACAAAANgAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAAA2AAAABgD#####AQAAAAAQAAABAAEAAAA3AAAAMAAAAAYA#####wAAAAAAEAAAAQABAAAAMAAAADUAAAAPAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAADcAAAAwAAAAEAAAAAA7AQAAAAAQAAABAAEAAAA3AAAAMAAAAAcAAAAAOwEAAAAAEAAAAQUAAAAANwAAADAAAAAKAAAAADsBAAAAAAEAAAA9AAAAAUAwAAAAAAAAAQAAAAwAAAAAOwAAADwAAAA+AAAADQAAAAA7AQAAAAAQAAABBQABAAAAPwAAAAkBAAAAOwAAADcAAAAwAAAAEQEAAAA7AQAAAABARgAAAAAAAAAAAAAAAAAAAAAAQBEAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAABBAAAADAD#####AAAAEQAAAAwAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQACAAAAQwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAABDAAAABgD#####AAAAAAAQAAABAAEAAAAwAAAANAAAAA4A#####wEAAP8AEAAAAQACAAAAHgAAACMAAAAMAP####8AAABHAAAAHwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAABIAAAADQD#####AQAAAAAQAAFGAAAAAAAAAAAAQAgAAAAAAAADAAIAAABIAAAABgD#####AAAAAAAQAAABAAEAAAAeAAAASgAAAAYA#####wAAAAAAEAAAAQABAAAAHgAAACH#####AAAAAQAMQ0FyY0RlQ2VyY2xlAP####8AAAAAAAEAAAAJAAAADwAAAEQAAAAPAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAAEoAAAAeAAAAEAAAAABOAQAAAAAQAAABAAEAAABKAAAAHgAAAAcAAAAATgEAAAAAEAAAAQUAAAAASgAAAB4AAAAKAAAAAE4BAAAAAAEAAABQAAAAAUAwAAAAAAAAAQAAAAwAAAAATgAAAE8AAABRAAAADQAAAABOAQAAAAAQAAABBQABAAAAUgAAAAkBAAAATgAAAEoAAAAeAAAAEQEAAABOAAAAAADAKgAAAAAAAAAAAAAAAAAAAAAAUxEAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAABUAAAADwD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAgAAAAIAAAA1AAAANAAAABAAAAAAVgEAAAAAEAAAAQABAAAANQAAADQAAAAHAAAAAFYBAAAAABAAAAEFAAAAADUAAAA0AAAACgAAAABWAQAAAAABAAAAWAAAAAFAMAAAAAAAAAEAAAAMAAAAAFYAAABXAAAAWQAAAA0AAAAAVgEAAAAAEAAAAQUAAQAAAFoAAAAJAQAAAFYAAAA1AAAANAAAABEBAAAAVgAAAAAAAAAAAAAAAADACAAAAAAAAAAAAFsRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAMgY20BAAAAXAAAAAYA#####wAAAAAAEAAAAQABAAAACQAAAEQAAAATAP####8AAAAAAAEAAAAwAAAANP####8AAAABQGaAAAAAAAD#####AAAAAQARQ0dyYW5kQXJjRGVDZXJjbGUA#####wAAAAAAAQAAAB4AAAAh#####wAAAAFAcOAAAAAAAP####8AAAABAA5DTWFycXVlU2VnbWVudAD#####AAAA#wACAgAAAF4AAAAVAP####8AAAD#AAICAAAAEAAAABUA#####wAAAP8AAgAAAABLAAAAFQD#####AAAA#wACAAAAAEwAAAAI##########8=";
      texte_corr = `La première figure est un quart de cercle de rayon ${r} cm auquel il faut ajouter les 2 rayons qui ferment la figure.<br>`;

      if (this.sup == 1) {
        texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(
          Algebrite.eval(r / 2)
        )}\\pi+${2 * r}\\approx${tex_nombre(
          arrondi(Algebrite.eval((r / 2) * Math.PI + 2 * r), 1)
        )}$ cm<br>`;
        texte_corr += `La deuxième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r2} cm et 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_2=\\dfrac{3}{4}\\times2\\times${r2}\\times\\pi+${r2}+${r2}=${tex_nombre(
          (6 / 4) * r2
        )}\\pi+${2 * r2}\\approx${tex_nombre(
          arrondi(Algebrite.eval((6 / 4) * r2 * Math.PI + 2 * r2), 1)
        )}$ cm<br>`;
        texte_corr += `La troisième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${
          2 * r3
        } cm et d'un diamètre qui ferme la figure.<br>`;
        texte_corr += `$\\mathcal{P}_3=\\dfrac{1}{2}\\times${
          2 * r3
        }\\times\\pi+${2 * r3}=${r3}\\pi+${2 * r3}\\approx${tex_nombre(
          arrondi(Algebrite.eval(r3 * Math.PI + 2 * r3), 1)
        )}$ cm<br>`;
      }

      if (this.sup == 2) {
        texte_corr = `La première figure est un quart de disque de rayon ${r} cm.<br>`;
        texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(
          Algebrite.eval((r * r) / 4)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r * r) / 4) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La deuxième figure est trois quarts d'un disque rayon ${r2} cm.<br>`;
        texte_corr += `$\\mathcal{A}_2=\\dfrac{3}{4}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(
          (3 / 4) * r2 * r2
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval((3 / 4) * r2 * r2 * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La troisième figure est un demi-cercle de diamètre ${
          2 * r3
        } cm donc de rayon ${r3} cm.<br>`;
        texte_corr += `$\\mathcal{A}_3=\\dfrac{1}{2}\\times${r3}\\times${r3}\\times\\pi=${
          (r3 * r3) / 2
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r3 * r3) / 2) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
      }

      if (this.sup == 3) {
        texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(
          Algebrite.eval(r / 2)
        )}\\pi+${2 * r}\\approx${tex_nombre(
          arrondi(Algebrite.eval((r / 2) * Math.PI + 2 * r), 1)
        )}$ cm<br>`;
        texte_corr += `La deuxième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r2} cm et 2 rayons qui ferment la figure.<br>`;
        texte_corr += `$\\mathcal{P}_2=\\dfrac{3}{4}\\times2\\times${r2}\\times\\pi+${r2}+${r2}=${tex_nombre(
          (6 / 4) * r2
        )}\\pi+${2 * r2}\\approx${tex_nombre(
          arrondi(Algebrite.eval((6 / 4) * r2 * Math.PI + 2 * r2), 1)
        )}$ cm<br>`;
        texte_corr += `La troisième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${
          2 * r3
        } cm et d'un diamètre qui ferme la figure.<br>`;
        texte_corr += `$\\mathcal{P}_3=\\dfrac{1}{2}\\times${
          2 * r3
        }\\times\\pi+${2 * r3}=${r3}\\pi+${2 * r3}\\approx${tex_nombre(
          arrondi(Algebrite.eval(r3 * Math.PI + 2 * r3), 1)
        )}$ cm<br>`;
        texte_corr += `La première figure est un quart de disque de rayon ${r} cm.<br>`;
        texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(
          Algebrite.eval((r * r) / 4)
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r * r) / 4) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La deuxième figure est trois quarts d'un disque rayon ${r2} cm.<br>`;
        texte_corr += `$\\mathcal{A}_2=\\dfrac{3}{4}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(
          (3 / 4) * r2 * r2
        )}\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval((3 / 4) * r2 * r2 * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
        texte_corr += `La troisième figure est un demi-cercle de diamètre ${
          2 * r3
        } cm donc de rayon ${r3} cm.<br>`;
        texte_corr += `$\\mathcal{A}_3=\\dfrac{1}{2}\\times${r3}\\times${r3}\\times\\pi=${
          (r3 * r3) / 2
        }\\pi\\approx${tex_nombre(
          arrondi(Algebrite.eval(((r3 * r3) / 2) * Math.PI), 1)
        )}~\\text{cm}^2$<br>`;
      }
    }

    this.MG32codeBase64 = codeBase64;
    this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r", "${r}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r2", "${r2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r3", "${r3}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      `;

    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu(this);
  };

  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    3,
    "1 : Périmètres\n\
2 : Aires\n3 : Périmètres et aires",
  ];
}

/**
 * Un carré, un rectangle et un triangle rectangle sont tracés.
 *
 * Il faut calculer les aires et périmètres.
 *
 * Pas de version LaTeX
 * @Auteur Rémi Angot
 */
function Perimetre_ou_aire_de_carres_rectangles_triangles() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.pas_de_version_LaTeX = true;
  this.titre = "Périmètres et aires carrés, rectangles et triangles rectangles";
  this.consigne = "Calculer le périmètre et l'aire des 3 figures suivantes";
  this.spacing = 2;
  sortie_html ? (this.spacing_corr = 3) : (this.spacing_corr = 2);
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.type_exercice = "MG32";
  this.taille_div_MG32 = [600, 450];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_corrections = []; // Liste de questions corrigées
    let c = randint(2, 6);
    let L = randint(2, 5);
    let l = randint(1, 4);
    while (l == L) {
      // Le rectangle ne doit pas être un carré
      l = randint(1, 4);
    }
    let a = randint(2, 5);
    let b = randint(2, 5);
    let codeBase64 =
      "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAH0AAAB9AAAAQEAAAAAAAAAAQAAAH######AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFVAMAkAAAAAAAAQBAAAAAAAAAFAABAMU+dsi0OVkAxT52yLQ5W#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUBBT52yLQ5WAAAAAv####8AAAABAAhDU2VnbWVudAD#####AQAAAAAQAAABAAEAAAABAAAAA#####8AAAABAAdDTWlsaWV1AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAEAAAAAAAAAAAABMf####8AAAABAAlDTG9uZ3VldXIA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wABYwABNQAAAAFAFAAAAAAAAAAAAAkA#####wABTAABNQAAAAFAFAAAAAAAAAAAAAkA#####wABbAABMgAAAAFAAAAAAAAAAAAAAAkA#####wABYgABNQAAAAFAFAAAAAAAAAAAAAkA#####wABYQABMwAAAAFACAAAAAAAAAAAAAIA#####wAAAAAAEAABQQDALgAAAAAAAAAAAAAAAAAABQABQDkAAAAAAABAaOAAAAAAAP####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAAGAAAAAwAAAAIAAAAIAAAADf####8AAAACAAlDQ2VyY2xlT1IAAAAADgEAAAAAAQAAAA3#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAACAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAQAAAA4AAAAAABAAAUIAQAgAAAAAAAAAAAAAAAAAAAUAAUAYC8chUUHEAAAADwAAAAUBAAAADgAAAAAAEAAAAQABAAAADQAAABAAAAAGAAAAAA4BAAAAAA0AAAEFAAAAAA0AAAAQ#####wAAAAEAC0NNZWRpYXRyaWNlAAAAAA4BAAAAAA0AAAEAAQAAAA0AAAAQAAAACwAAAAAOAQAAAAABAAAAEgAAAAFAMAAAAAAAAAH#####AAAAAQAQQ0ludERyb2l0ZUNlcmNsZQAAAAAOAAAAEwAAABT#####AAAAAQAQQ1BvaW50TGllQmlwb2ludAAAAAAOAQAAAAANAAABBQABAAAAFf####8AAAABAA9DVmFsZXVyQWZmaWNoZWUBAAAADgAAAAABAAAAFhAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAAAI#####wAAAAEAFkNEcm9pdGVQZXJwZW5kaWN1bGFpcmUA#####wEAAAAAEAAAAQABAAAADQAAABEAAAASAP####8BAAAAABAAAAEAAQAAABAAAAAR#####wAAAAEACUNDZXJjbGVPQQD#####AQAAAAABAAAAEAAAAA0AAAATAP####8BAAAAAAEAAAANAAAAEAAAAA8A#####wAAABkAAAAaAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAABwAAAAQAP####8AAAAAABAAAUMAQBAAAAAAAADANQAAAAAAAAUAAgAAABwAAAAPAP####8AAAAYAAAAGwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAEAAAAfAAAAEAD#####AAAAAAAQAAFEAMAsAAAAAAAAwDcAAAAAAAAFAAIAAAAf#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAABAAAABQAAAA0AAAAQAAAAHgAAACEAAAANAAAABQD#####AAAAAAAQAAABAAEAAAAQAAAAHgAAAAUA#####wAAAAAAEAAAAQABAAAAHgAAACEAAAAFAP####8AAAAAABAAAAEAAQAAACEAAAAN#####wAAAAIAF0NNYXJxdWVBbmdsZUdlb21ldHJpcXVlAP####8AAAD#AAIAAAABQDAAAAAAAAAAAAAhAAAADQAAABAAAAAVAP####8AAAD#AAIAAAABQDAAAAAAAAAAAAANAAAAEAAAAB4AAAAVAP####8AAAD#AAIAAAABQDAAAAAAAAAAAAAQAAAAHgAAACEAAAAVAP####8AAAD#AAIAAAABQDAAAAAAAAAAAAAeAAAAIQAAAA0AAAACAP####8AAAAAABAAAUgAwDEAAAAAAADAAAAAAAAAAAUAAUBymAAAAAAAQHEHCj1wo9cAAAAKAP####8AG1NlZ21lbnQgZGUgbG9uZ3VldXIgZG9ubsOpZQAAAAYAAAADAAAAAgAAAAkAAAAqAAAACwAAAAArAQAAAAABAAAAKgAAAAwAAAAJAAAAAA0BAAAAKwAAAAAAEAABRQBACAAAAAAAAAAAAAAAAAAABQABP8sfH32jwU4AAAAsAAAABQEAAAArAAAAAAAQAAABAAEAAAAqAAAALQAAAAYAAAAAKwEAAAAADQAAAQUAAAAAKgAAAC0AAAAOAAAAACsBAAAAAA0AAAEAAQAAACoAAAAtAAAACwAAAAArAQAAAAABAAAALwAAAAFAMAAAAAAAAAEAAAAPAAAAACsAAAAwAAAAMQAAABAAAAAAKwEAAAAADQAAAQUAAQAAADIAAAARAQAAACsAAAAAAQAAADMQAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAMgY20BAAAACQAAABIA#####wEAAAAAEAAAAQABAAAALQAAAC4AAAASAP####8BAAAAABAAAAEAAQAAACoAAAAuAAAACwD#####AQAAAAABAAAALQAAAAwAAAAKAAAAAAsA#####wEAAAAAAQAAACoAAAAMAAAACgAAAAAPAP####8AAAA1AAAANwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAEAAAA5AAAAEAD#####AAAAAAAQAAFGAEAAAAAAAAAAwDgAAAAAAAAFAAIAAAA5AAAADwD#####AAAANgAAADgAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAPAAAABAA#####wAAAAAAEAABRwDALgAAAAAAAMA2AAAAAAAABQACAAAAPAAAAAUA#####wAAAAAAEAAAAQABAAAALQAAADsAAAAFAP####8AAAAAABAAAAEAAQAAADsAAAA+AAAABQD#####AAAAAAAQAAABAAEAAAA+AAAAKgAAAAoA#####wAeQWZmaWNoYWdlIGRlIGxvbmd1ZXVyIG9yaWVudMOpAAAABwAAAAIAAAACAAAALQAAADsAAAADAAAAAEIAAAAAABAAAAEAAQAAAC0BP#AAAAAAAAAAAAAEAAAAAEIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAEP#####AAAAAgATQ01lc3VyZUFuZ2xlT3JpZW50ZQAAAABCAAJhbgAAAEQAAAAtAAAAOwAAAAgBAAAAQgAAAC0AAAA7AAAABgAAAABCAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALQAAADv#####AAAAAQANQ1BvaW50UHJvamV0ZQAAAABCAAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAAA7AAAAQwAAABYAAAAAQgACbWEAAABEAAAALQAAAEj#####AAAAAQAOQ1Rlc3RFeGlzdGVuY2UAAAAAQgADdG1hAAAASQAAABEBAAAAQgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAEcQAAAAAAABAAAAAv####8AAAABAA1DRm9uY3Rpb24zVmFyAAAAAAwAAABK#####wAAAAEACkNPcGVyYXRpb24AAAAADAAAAEUAAAAMAAAASQAAAAwAAABFAAAAAyBjbQEAAABGAAAAFQD#####AAAA#wACAAAAAUAwAAAAAAAAAAAALQAAADsAAAA+AAAAFQD#####AAAA#wACAAAAAUAwAAAAAAAAAAAAOwAAAD4AAAAqAAAAFQD#####AAAA#wACAAAAAUAwAAAAAAAAAAAAPgAAACoAAAAtAAAAFQD#####AAAA#wACAAAAAUAwAAAAAAAAAAAAKgAAAC0AAAA7AAAAAgD#####AAAAAAAQAAFJAEAIAAAAAAAAAAAAAAAAAAAFAAFAbkAAAAAAAEB5kAAAAAAAAAAACgD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAMAAAAUAAAAAsAAAAAUQEAAAAAAQAAAFAAAAAMAAAADAAAAAANAQAAAFEAAAAAABAAAUoAwAgAAAAAAADAOgAAAAAAAAUAAT##e1lPr88TAAAAUgAAAAUBAAAAUQAAAAAAEAAAAQABAAAAUAAAAFMAAAASAP####8BAAAAABAAAAEAAQAAAFMAAABUAAAACwD#####AQAAAAABAAAAUwAAAAwAAAALAAAAAA8A#####wAAAFUAAABWAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAFcAAAAQAP####8AAAAAABAAAUsAwDIAAAAAAADACAAAAAAAAAUAAgAAAFcAAAAFAP####8AAAAAABAAAAEAAQAAAFMAAABZAAAABQD#####AAAAAAAQAAABAAEAAABZAAAAUAAAAAoA#####wAeQWZmaWNoYWdlIGRlIGxvbmd1ZXVyIG9yaWVudMOpAAAABwAAAAIAAAACAAAAUwAAAFkAAAADAAAAAFwAAAAAABAAAAEAAQAAAFMBP#AAAAAAAAAAAAAEAAAAAFwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAF0AAAAWAAAAAFwAAmFuAAAAXgAAAFMAAABZAAAACAEAAABcAAAAUwAAAFkAAAAGAAAAAFwAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABTAAAAWQAAABcAAAAAXAAAAAAAEAACVyIAAAAAAAAAAABACAAAAAAAAAUAAAAAWQAAAF0AAAAWAAAAAFwAAm1hAAAAXgAAAFMAAABiAAAAGAAAAABcAAN0bWEAAABjAAAAEQEAAABcAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAYRAAAAAAAAEAAAACAAAAGQAAAAAMAAAAZAAAABoAAAAADAAAAF8AAAAMAAAAYwAAAAwAAABfAAAAAyBjbQEAAABgAAAACgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAgAAAAIAAABZAAAAUAAAAAMAAAAAZgAAAAAAEAAAAQABAAAAWQE#8AAAAAAAAAAAAAQAAAAAZgAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAZwAAABYAAAAAZgACYW4AAABoAAAAWQAAAFAAAAAIAQAAAGYAAABZAAAAUAAAAAYAAAAAZgAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFkAAABQAAAAFwAAAABmAAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAABQAAAAZwAAABYAAAAAZgACbWEAAABoAAAAWQAAAGwAAAAYAAAAAGYAA3RtYQAAAG0AAAARAQAAAGYAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAABrEAAAAAAAAQAAAAIAAAAZAAAAAAwAAABuAAAAGgAAAAAMAAAAaQAAAAwAAABtAAAADAAAAGkAAAADIGNtAQAAAGoAAAAVAP####8AAAD#AAIAAAABQDAAAAAAAAAAAABQAAAAUwAAAFn#####AAAAAQAOQ01hcnF1ZVNlZ21lbnQA#####wAAAP8AAgEAAAARAAAAGwD#####AAAA#wACAQAAACMAAAAbAP####8AAAD#AAIBAAAAJAAAABsA#####wAAAP8AAgEAAAAlAAAACgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAgAAAAIAAABQAAAAUwAAAAMAAAAAdQAAAAAAEAAAAQABAAAAUAE#8AAAAAAAAAAAAAQAAAAAdQAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAdgAAABYAAAAAdQACYW4AAAB3AAAAUAAAAFMAAAAIAQAAAHUAAABQAAAAUwAAAAYAAAAAdQAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFAAAABTAAAAFwAAAAB1AAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAABTAAAAdgAAABYAAAAAdQACbWEAAAB3AAAAUAAAAHsAAAAYAAAAAHUAA3RtYQAAAHwAAAARAQAAAHUAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAAB6EAAAAAAAAQAAAAIAAAAZAAAAAAwAAAB9AAAAGgAAAAAMAAAAeAAAAAwAAAB8AAAADAAAAHgAAAADIGNtAQAAAHkAAAAH##########8=";
    let c2 = Math.sqrt(a * a + b * b);
    let pIJK = Algebrite.eval(a + b + c2).d.toFixed(1);

    texte_corr = `$\\mathcal{P}_{ABCD}=${c}~\\text{cm}+${c}~\\text{cm}+${c}~\\text{cm}+${c}~\\text{cm}=${
      4 * c
    }~\\text{cm}$`;
    texte_corr += `<br>$\\mathcal{A}_{ABCD}=${c}~\\text{cm}\\times${c}~\\text{cm}=${
      c * c
    }~\\text{cm}^2$`;
    texte_corr += `<br>$\\mathcal{P}_{EFGH}=${L}~\\text{cm}+${l}~\\text{cm}+${L}~\\text{cm}+${l}~\\text{cm}=${
      2 * L + 2 * l
    }~\\text{cm}$`;
    texte_corr += `<br>$\\mathcal{A}_{EFGH}=${L}~\\text{cm}\\times${l}~\\text{cm}=${
      L * l
    }~\\text{cm}^2$`;
    texte_corr += `<br>$\\mathcal{P}_{IJK}=${a}~\\text{cm}+${b}~\\text{cm}+${tex_nombre(
      c2.toFixed(1)
    )}~\\text{cm}=${tex_nombre(pIJK)}~\\text{cm}$`;
    texte_corr += `<br>$\\mathcal{A}_{IJK}=${a}~\\text{cm}\\times${b}~\\text{cm}\\div2=${tex_nombre(
      Algebrite.eval((a * b) / 2)
    )}~\\text{cm}^2$`;

    this.MG32codeBase64 = codeBase64;
    this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c", "${c}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "L", "${L}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "l", "${l}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "a", "${a}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "b", "${b}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      `;

    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu(this);
  };

  // 	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Périmètres\n\
  // 2 : Aires\n3 : Périmètres et aires"];
}

/**
 * Deux figures composés de rectangles et de triangles sont tracés.
 *
 * Il faut calculer le périmètre et l'aire par addition ou soustraction d'aires
 *
 * Pas de version LaTeX
 *
 * Un seul type de figure pour l'instant.
 * @Auteur Rémi Angot
 */
function Perimetre_ou_aire_de_figures_composees() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.pas_de_version_LaTeX = true;
  this.titre = "Périmètres et aires de figures composées";
  this.consigne = "Calculer le périmètre et l'aire des 2 figures suivantes";
  this.spacing = 2;
  this.spacing_corr = 2;
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.type_exercice = "MG32";
  this.taille_div_MG32 = [500, 500];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_corrections = []; // Liste de questions corrigées
    let L1 = randint(4, 7);
    let l1 = randint(2, 4);
    let L2 = randint(2, 4);
    if (L1 == l1) {
      l1--;
    } // pour que le rectangle ne soit pas un carré
    let c = randint(4, 7);
    let h = randint(2, c - 1);
    let codeBase64 =
      "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAQzAAACtAAAAQEAAAAAAAAAAQAAAKj#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFVAMAkAAAAAAAAQBAAAAAAAAAFAABAMU+dsi0OVkAxT52yLQ5W#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUBBT52yLQ5WAAAAAv####8AAAABAAhDU2VnbWVudAD#####AQAAAAAQAAABAAEAAAABAAAAA#####8AAAABAAdDTWlsaWV1AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAEAAAAAAAAAAAABMf####8AAAABAAlDTG9uZ3VldXIA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wACTDEAATUAAAABQBQAAAAAAAAAAAAJAP####8AAmwxAAEzAAAAAUAIAAAAAAAAAAAACQD#####AAJMMgABMwAAAAFACAAAAAAAAAAAAAIA#####wAAAAABEAABQwBACAAAAAAAAAAAAAAAAAAABQABQFKgAAAAAABAaW4UeuFHrv####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAAGAAAAAwAAAAIAAAAIAAAAC#####8AAAACAAlDQ2VyY2xlT1IAAAAADAEAAAAAAQAAAAv#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAACAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAQAAAAwAAAAAARAAAUQAQAgAAAAAAAAAAAAAAAAAAAUAAT++v3IzOUsjAAAADQAAAAUBAAAADAAAAAAAEAAAAQABAAAACwAAAA4AAAAGAAAAAAwBAAAAABAAAAEFAAAAAAsAAAAO#####wAAAAEAC0NNZWRpYXRyaWNlAAAAAAwBAAAAABAAAAEAAQAAAAsAAAAOAAAACwAAAAAMAQAAAAABAAAAEAAAAAFAMAAAAAAAAAH#####AAAAAQAQQ0ludERyb2l0ZUNlcmNsZQAAAAAMAAAAEQAAABL#####AAAAAQAQQ1BvaW50TGllQmlwb2ludAAAAAAMAQAAAAAQAAABBQABAAAAE#####8AAAABAA9DVmFsZXVyQWZmaWNoZWUBAAAADAAAAAABAAAAFBAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAEAAAAI#####wAAAAEAFkNEcm9pdGVQZXJwZW5kaWN1bGFpcmUA#####wEAAAAAEAAAAQABAAAACwAAAA8AAAASAP####8BAAAAABAAAAEAAQAAAA4AAAAPAAAACwD#####AQAAAAABAAAACwAAAAwAAAAJAAAAAAsA#####wEAAAAAAQAAAA4AAAAMAAAACQAAAAAPAP####8AAAAWAAAAGAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAEAAAAaAAAAEAD#####AQAAAAAQAAFCAAAAAAAAAAAAQAgAAAAAAAAFAAIAAAAaAAAADwD#####AAAAFwAAABkAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAHQAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAIAAAAdAAAACwD#####AQAAAAABAAAAHwAAAAwAAAAKAP####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAHAAAAB8AAAAPAP####8AAAAhAAAAIAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAIAAAAiAAAAEAD#####AQAAAAAQAAFBAAAAAAAAAAAAQAgAAAAAAAAFAAEAAAAi#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAABAAAABgAAAA4AAAALAAAAHAAAAB8AAAAkAAAADgAAAAoA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAJAAAABwAAAAOAAAAACYBAAAAABAAAAEAAQAAACQAAAAcAAAABgAAAAAmAQAAAAAQAAABBQAAAAAkAAAAHAAAAAsAAAAAJgEAAAAAAQAAACgAAAABQDAAAAAAAAABAAAADwAAAAAmAAAAJwAAACkAAAAQAAAAACYBAAAAABAAAAEFAAEAAAAqAAAACAEAAAAmAAAAJAAAABwAAAARAQAAACYAAAAAAQAAACsRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAALAAAAAoA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAHAAAAAsAAAAOAAAAAC4BAAAAABAAAAEAAQAAABwAAAALAAAABgAAAAAuAQAAAAAQAAABBQAAAAAcAAAACwAAAAsAAAAALgEAAAAAAQAAADAAAAABQDAAAAAAAAABAAAADwAAAAAuAAAALwAAADEAAAAQAAAAAC4BAAAAABAAAAEFAAEAAAAyAAAACAEAAAAuAAAAHAAAAAsAAAARAQAAAC4AAAAAAQAAADMRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAANP####8AAAACABdDTWFycXVlQW5nbGVHZW9tZXRyaXF1ZQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAADgAAAAsAAAAcAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAACwAAABwAAAAkAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAAHAAAAB8AAAAOAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAACwAAAA4AAAAfAAAABQD#####AAAAAAAQAAABAQEAAAAfAAAADgAAAAoA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAEAAAACAAAADgAAACQAAAAOAAAAADsBAAAAABAAAAEAAQAAAA4AAAAkAAAABgAAAAA7AQAAAAAQAAABBQAAAAAOAAAAJAAAAAsAAAAAOwEAAAAAAQAAAD0AAAABQDAAAAAAAAABAAAADwAAAAA7AAAAPAAAAD4AAAAQAAAAADsBAAAAABAAAAEFAAEAAAA#AAAACAEAAAA7AAAADgAAACQAAAAJAP####8AAWMAATcAAAABQBwAAAAAAAAAAAACAP####8AAAAAABAAAABACAAAAAAAAAAAAAAAAAAABQABQGlwAAAAAABAfecKPXCj1wAAAAoA#####wAbU2VnbWVudCBkZSBsb25ndWV1ciBkb25uw6llAAAABgAAAAMAAAACAAAAQgAAAEMAAAALAAAAAEQBAAAAAAEAAABDAAAADAAAAEIAAAAADQEAAABEAAAAAAAQAAAAQAgAAAAAAAAAAAAAAAAAAAUAAT#LiKDqIUKnAAAARQAAAAUBAAAARAAAAAAAEAAAAQEBAAAAQwAAAEYAAAAGAAAAAEQBAAAAABAAAAEFAAAAAEMAAABGAAAADgAAAABEAQAAAAAQAAABAAEAAABDAAAARgAAAAsAAAAARAEAAAAAAQAAAEgAAAABQDAAAAAAAAABAAAADwAAAABEAAAASQAAAEoAAAAQAAAAAEQBAAAAABAAAAEFAAEAAABLAAAAEQEAAABEAAAAAAEAAABMEAAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAAAAQAAAEIAAAAKAP####8ADUNhcnLDqSBkaXJlY3QAAAAFAAAAAgAAAAIAAABDAAAARgAAAAUAAAAATgEAAAAAEAAAAQABAAAAQwAAAEYAAAASAAAAAE4AAAAAABAAAAEBAQAAAEMAAABP#####wAAAAEACUNDZXJjbGVPQQAAAABOAAAAAAEBAAAAQwAAAEYAAAAPAAAAAE4AAABQAAAAUQAAABABAAAATgEAAAAAEAABSAEFAAIAAABS#####wAAAAEADENUcmFuc2xhdGlvbgAAAABOAAAAQwAAAEb#####AAAAAQALQ1BvaW50SW1hZ2UBAAAATgEAAAAAEAABRwEFAAAAAFMAAABUAAAABQD#####AAAAAAAQAAABAQEAAABGAAAAVQAAAAUA#####wAAAAAAEAAAAQEBAAAAVQAAAFMAAAAFAP####8AAAAAABAAAAEBAQAAAFMAAABDAAAAFAD#####AQAAAAEBAAAABQAAAEMAAABGAAAAVQAAAFMAAABDAAAACQD#####AAFyAAEyAAAAAUAAAAAAAAAAAAAACwD#####AQAAAAEBAAAAUwAAAAwAAABaAAAAAA8A#####wAAAFcAAABbAAAAEAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAFwAAAAQAP####8BAAAAABAAAUYAAAAAAAAAAABACAAAAAAAAAUAAgAAAFwAAAASAP####8BAAAAABAAAAEBAQAAAF4AAABXAAAACQD#####AAFoAAE0AAAAAUAQAAAAAAAAAAAACwD#####AQAAAAEBAAAAXgAAAAwAAABgAAAAAA8A#####wAAAF8AAABhAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAGIAAAAQAP####8BAAAAABAAAUUAAAAAAAAAAABACAAAAAAAAAUAAgAAAGIAAAAUAP####8AAAAAAAEAAAAGAAAAVQAAAEYAAABDAAAAUwAAAGQAAABVAAAABQD#####AAAAAAAQAAABAQEAAABeAAAAZP####8AAAABAA5DTWFycXVlU2VnbWVudAD#####AAAAAAABAQAAAFYAAAAZAP####8AAAAAAAEBAAAARwAAABkA#####wAAAAAAAQEAAABYAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAAVQAAAEYAAABDAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAARgAAAEMAAABTAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAAUwAAAFUAAABGAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAAVQAAAFMAAABDAAAACgD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAQAAAAIAAABkAAAAXgAAAA4AAAAAbgEAAAAAEAAAAQABAAAAZAAAAF4AAAAGAAAAAG4BAAAAABAAAAEFAAAAAGQAAABeAAAACwAAAABuAQAAAAABAAAAcAAAAAFAMAAAAAAAAAEAAAAPAAAAAG4AAABvAAAAcQAAABAAAAAAbgEAAAAAEAAAAQUAAQAAAHIAAAAIAQAAAG4AAABkAAAAXgAAAAoA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAEAAAACAAAAVQAAAGQAAAAOAAAAAHUBAAAAABAAAAEAAQAAAFUAAABkAAAABgAAAAB1AQAAAAAQAAABBQAAAABVAAAAZAAAAAsAAAAAdQEAAAAAAQAAAHcAAAABQDAAAAAAAAABAAAADwAAAAB1AAAAdgAAAHgAAAAQAAAAAHUBAAAAABAAAAEFAAEAAAB5AAAACAEAAAB1AAAAVQAAAGQAAAAKAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAAFMAAABkAAAADgAAAAB8AQAAAAAQAAABAAEAAABTAAAAZAAAAAYAAAAAfAEAAAAAEAAAAQUAAAAAUwAAAGQAAAALAAAAAHwBAAAAAAEAAAB+AAAAAUAwAAAAAAAAAQAAAA8AAAAAfAAAAH0AAAB#AAAAEAAAAAB8AQAAAAAQAAABBQABAAAAgAAAAAgBAAAAfAAAAFMAAABkAAAACgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAQAAAAMAAACCAAAAUwAAAGQAAAADAAAAAIMAAAAAABAAAAEAAQAAAFMBP#AAAAAAAAAAAAAEAAAAAIMAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAIT#####AAAAAgATQ01lc3VyZUFuZ2xlT3JpZW50ZQAAAACDAAJhbgAAAIUAAABTAAAAZAAAAAYAAAAAgwAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFMAAABk#####wAAAAEADUNQb2ludFByb2pldGUAAAAAgwAAAAAAEAACVyIAAAAAAAAAAABACAAAAAAAAAUAAAAAZAAAAIQAAAAaAAAAAIMAAm1hAAAAhQAAAFMAAACI#####wAAAAEADkNUZXN0RXhpc3RlbmNlAAAAAIMAA3RtYQAAAIkAAAARAQAAAIMAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAACHEAAAAAAAAQAAAAL#####AAAAAQANQ0ZvbmN0aW9uM1ZhcgAAAAAMAAAAiv####8AAAABAApDT3BlcmF0aW9uAAAAAAwAAACGAAAADAAAAIkAAAAMAAAAhgAAAAABAAAAggAAAAoA#####wAeQWZmaWNoYWdlIGRlIGxvbmd1ZXVyIG9yaWVudMOpAAAABwAAAAEAAAADAAAAewAAAGQAAABVAAAAAwAAAACMAAAAAAAQAAABAAEAAABkAT#wAAAAAAAAAAAABAAAAACMAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAACNAAAAGgAAAACMAAJhbgAAAI4AAABkAAAAVQAAAAYAAAAAjAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAGQAAABVAAAAGwAAAACMAAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAABVAAAAjQAAABoAAAAAjAACbWEAAACOAAAAZAAAAJEAAAAcAAAAAIwAA3RtYQAAAJIAAAARAQAAAIwAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAACQEAAAAAAAAQAAAAIAAAAdAAAAAAwAAACTAAAAHgAAAAAMAAAAjwAAAAwAAACSAAAADAAAAI8AAAAAAQAAAHsAAAAKAP####8AHkFmZmljaGFnZSBkZSBsb25ndWV1ciBvcmllbnTDqQAAAAcAAAABAAAAAwAAAHQAAABkAAAAXgAAAAMAAAAAlQAAAAAAEAAAAQABAAAAZAE#8AAAAAAAAAAAAAQAAAAAlQAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAlgAAABoAAAAAlQACYW4AAACXAAAAZAAAAF4AAAAGAAAAAJUAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABkAAAAXgAAABsAAAAAlQAAAAAAEAACVyIAAAAAAAAAAABACAAAAAAAAAUAAAAAXgAAAJYAAAAaAAAAAJUAAm1hAAAAlwAAAGQAAACaAAAAHAAAAACVAAN0bWEAAACbAAAAEQEAAACVAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAmRAAAAAAAAEAAAACAAAAHQAAAAAMAAAAnAAAAB4AAAAADAAAAJgAAAAMAAAAmwAAAAwAAACYAAAAAAEAAAB0AAAACgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAQAAAAMAAABBAAAADgAAACQAAAADAAAAAJ4AAAAAABAAAAEAAQAAAA4BP#AAAAAAAAAAAAAEAAAAAJ4AAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAJ8AAAAaAAAAAJ4AAmFuAAAAoAAAAA4AAAAkAAAABgAAAACeAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADgAAACQAAAAbAAAAAJ4AAAAAABAAAlciAAAAAAAAAAAAQAgAAAAAAAAFAAAAACQAAACfAAAAGgAAAACeAAJtYQAAAKAAAAAOAAAAowAAABwAAAAAngADdG1hAAAApAAAABEBAAAAngAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAKIQAAAAAAABAAAAAgAAAB0AAAAADAAAAKUAAAAeAAAAAAwAAAChAAAADAAAAKQAAAAMAAAAoQAAAAABAAAAQQAAABkA#####wAAAAAAAQEAAABXAAAAB###########";
    let DA = arrondi(Math.sqrt(L2 ** 2 + l1 ** 2), 1);
    let t1 = arrondi(Math.sqrt(4 + h ** 2), 1); // longueur d'un côté du triangle
    let t2 = arrondi(Math.sqrt((c - 2) ** 2 + h ** 2), 1); // longueur de l'autre côté d'un triangle
    let texte_corr = "";
    texte_corr += `La première figure est composée d'un rectangle de ${L1} cm par ${l1} cm`;
    texte_corr += ` et d'un triangle rectangle dont les côtés de l'angle droit mesurent ${L2} cm et ${l1} cm.<br>`;
    texte_corr += `$\\mathcal{P}_{1}=${L1 + L2}+${tex_nombre(
      DA
    )}+${L1}+${l1}=${tex_nombrec(L1 + L2 + DA + L1 + l1)}$ cm.<br>`;
    texte_corr += `$\\mathcal{A}_{1}=${L1}\\times${l1}+${L2}\\times${l1}\\div2=${
      L1 * l1
    }+${calcul((L2 * l1) / 2)}=${calcul(L1 * l1 + (L2 * l1) / 2)}~${tex_texte(
      " cm"
    )}^2$.`;
    texte_corr += "<br><br>";
    texte_corr += `La deuxième figure est un carré de côté ${c} cm auquel il faut enlever un triangle de ${c} cm de base et ${h} cm de hauteur.<br>`;
    texte_corr += `$\\mathcal{P}_{2}=${c}+${c}+${c}+${tex_nombre(
      t1
    )}+${tex_nombre(t2)}=${tex_nombrec(3 * c + t1 + t2)}$ cm<br>`;
    texte_corr += `$\\mathcal{A}_{2}=${c}\\times${c}-${c}\\times${h}\\div2=${
      c * c
    }-${(c * h) / 2}=${tex_nombrec(c ** 2 - (c * h) / 2)}~${tex_texte(
      " cm"
    )}^2$.`;

    this.MG32codeBase64 = codeBase64;
    this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "L1", "${L1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "l1", "${l1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "L2", "${L2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c", "${c}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h", "${h}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      `;
    this.liste_corrections.push(texte_corr);
    liste_de_question_to_contenu_sans_numero(this);
  };
}

/**
 * Citer des formules de périmètre, des formules d'aire ou la définition de π
 * @Auteur Rémi Angot
 */
function Connaitre_formules_de_perimetre_et_aires() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Connaitre le cours sur le périmètre et l'aire";
  this.consigne = "Calculer";
  this.nb_questions = 4;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    liste_type_de_questions = combinaison_listes(
      [
        "pi",
        "prectangle",
        "pcarre",
        "acarre",
        "arectangle",
        "pcercle",
        "acercle",
        "atrianglerectangle",
        "atriangle",
      ],
      this.nb_questions
    );
    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case "pi":
          texte = "Rappeler la définition du nombre $\\pi$.";
          texte_corr = "$\\pi$ est la longueur d'un cercle de diamètre 1.";
          break;
        case "prectangle":
          texte = "Donner une formule du périmètre du rectangle.";
          texte_corr =
            "$\\mathcal{P}_{\\text{rectangle}}=(L+l)\\times2=L\\times2+l\\times2=L+l+L=l$<br><br>";
          texte_corr += "Avec $L$ la longueur et $l$ la largeur du rectangle.";
          break;
        case "pcarre":
          texte = "Donner une formule du périmètre du carré.";
          texte_corr =
            "$\\mathcal{P}_{\\text{carré}}=c\\times4=c+c+c+c$<br><br>";
          texte_corr += "Avec $c$ la longueur du côté du carré.";
          break;
        case "arectangle":
          texte = "Donner une formule de l'aire du rectangle.";
          texte_corr = "$\\mathcal{A}_{\\text{rectangle}}=L\\times l$<br><br>";
          texte_corr += "Avec $L$ la longueur et $l$ la largeur du rectangle.";
          break;
        case "acarre":
          texte = "Donner une formule de l'aire du carré.";
          texte_corr = "$\\mathcal{A}_{\\text{carré}}=c\\times c=c^2$<br><br>";
          texte_corr += "Avec $c$ la longueur du côté du carré.";
          break;
        case "atrianglerectangle":
          texte = "Donner une formule de l'aire du triangle rectangle.";
          texte_corr =
            "$\\mathcal{A}_{\\text{triangle rectangle}}=a\\times b \\div2=\\dfrac{a\\times b}{2}$<br><br>";
          texte_corr +=
            "Avec $a$ et $b$ les longueurs des côtés de l'angle droit.";
          break;
        case "atriangle":
          texte = "Donner une formule de l'aire d'un triangle quelconque.";
          texte_corr =
            "$\\mathcal{A}_{\\text{triangle rectangle}}=b\\times h \\div2=\\dfrac{b\\times h}{2}$<br><br>";
          texte_corr +=
            "Avec $b$ la longueur d'un côté et $h$ la longueur de la hauteur relative à ce côté.";
          break;
        case "pcercle":
          texte =
            "Donner une formule de la longueur d'un cercle (aussi appelée circonférence).";
          texte_corr =
            "$\\mathcal{P}_{\\text{cercle}}=D\\times \\pi = 2\\times R \\times \\pi = 2\\pi{}R$<br><br>";
          texte_corr += "Avec $D$ le diamètre et $R$ le rayon de ce cercle.";
          break;
        case "acercle":
          texte = "Donner une formule de l'aire d'un disque.";
          texte_corr =
            "$\\mathcal{A}_{\\text{disque}}=R\\times R\\times\\pi=\\pi R^2$<br><br>";
          texte_corr += "Avec $R$ le rayon de ce disque.";
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Compléter des égalités sur les nombres décimaux
 * * n/100 = .../10 + .../100
 * * n/100 = .../100 + .../10
 * * .../100 = u+ d/10 + c/100
 * * u = .../10
 * * u = .../100
 * * n/10 = ... + .../10 + .../100
 * @Auteur Rémi Angot
 */
function Exercice_differentes_ecritures_nombres_decimaux() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Différentes écritures des nombres décimaux";
  this.consigne = "Compléter l'égalité puis donner l'écriture décimale.";
  this.spacing = 2;
  this.spacing_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = [1, 2, 3, 4, 5, 6];
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      type_de_questions = liste_type_de_questions[i];
      let u = randint(2, 9); //chiffre des unités
      let d = randint(1, 9); //chiffre des dixièmes
      let c = randint(1, 9); //chiffre des centièmes
      let n = 100 * u + 10 * d + c;
      let ecriture_decimale;
      switch (type_de_questions) {
        case 1: // n/100 = .../10 + .../100
          ecriture_decimale = tex_nombre(calcul(u + d / 10 + c / 100));
          texte = `$${tex_fraction(n, "100")}=\\ldots\\ldots+${tex_fraction(
            "",
            10
          )}+${tex_fraction("", 100)}=\\ldots$`;
          texte_corr = `$${tex_fraction(n, "100")}=${u}+${tex_fraction(
            d,
            "10"
          )}+${tex_fraction(c, "100")}=${ecriture_decimale}$`;

          break;
        case 2: // n/100 = .../100 + .../10
          ecriture_decimale = tex_nombre(calcul(u + d / 10 + c / 100));
          texte = `$${tex_fraction(n, "100")}=\\ldots\\ldots+${tex_fraction(
            "",
            100
          )}+${tex_fraction("", 10)}=\\ldots$`;
          texte_corr = `$${tex_fraction(n, "100")}=${u}+${tex_fraction(
            c,
            100
          )}+${tex_fraction(d, 10)}=${ecriture_decimale}$`;
          break;
        case 3: // .../100 = u+ d/10 + c/100
          ecriture_decimale = tex_nombre(calcul(u + d / 10 + c / 100));
          texte = `$${tex_fraction("", "100")}=${u}+${tex_fraction(
            d,
            "10"
          )}+${tex_fraction(c, "100")}=\\ldots$`;
          texte_corr = `$${tex_fraction(n, "100")}=${u}+${tex_fraction(
            d,
            "10"
          )}+${tex_fraction(c, "100")}=${ecriture_decimale}$`;
          break;
        case 4: // u = .../10
          texte = `$${u}=${tex_fraction("", "10")}$`;
          texte_corr = `$${u}=${tex_fraction(10 * u, "10")}$`;
          break;
        case 5: // u = .../100
          texte = `$${u}=${tex_fraction("", "100")}$`;
          texte_corr = `$${u}=${tex_fraction(100 * u, "10")}$`;
          break;
        case 6: // n/10 = ... + .../10 + .../100
          ecriture_decimale = tex_nombre(calcul(n / 10));
          texte = `$${tex_fraction(n, 10)}=\\ldots\\ldots+${tex_fraction(
            "",
            10
          )}+${tex_fraction("", 100)}=\\ldots$`;
          texte_corr = `$${tex_fraction(n, 10)}=${u * 10 + d}+${tex_fraction(
            c,
            10
          )}+${tex_fraction(0, 100)}=${ecriture_decimale}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',2,'1 : Multiplication par un facteur positif\n2: Multiplication par un facteur relatif']
}

/**
 * Additions, soustractions et multiplications posées de nombres entiers
 *
 * * abcd +efg
 * * abc0-efg
 * * 1abc-def
 * * abc*d0e tables de 2 à 5
 * * abc*de tables de 5 à 9
 * @Auteur Rémi Angot
 */
function Additions_soustractions_multiplications_posees() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre =
    "Additions, soustractions et multiplications posées de nombres entiers";
  this.consigne = "Poser et effectuer les calculs suivants.";
  this.spacing = 2;
  sortie_html ? (this.spacing_corr = 2) : (this.spacing_corr = 1); //Important sinon les opérations posées ne sont pas jolies
  this.nb_questions = 5;
  // this.pas_de_version_HMTL=true;
  this.liste_packages = "xlop";

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = [1, 2, 3, 4, 5];
    let liste_type_de_questions = combinaison_listes_sans_changer_ordre(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    if (this.nb_questions == 3) {
      liste_type_de_questions = [1, 2, 5];
    }
    if (this.nb_questions == 4) {
      liste_type_de_questions = [1, 2, 4, 5];
    }

    for (
      let i = 0, texte, texte_corr, cpt = 0, a, b, c, d, e, f, g, x, y;
      i < this.nb_questions && cpt < 50;

    ) {
      type_de_questions = liste_type_de_questions[i];
      switch (type_de_questions) {
        case 1: // abcd +efg
          a =
            randint(1, 9) * 10000 +
            randint(5, 9) * 1000 +
            randint(5, 9) * 100 +
            randint(7, 9) * 10 +
            randint(1, 9);
          b = randint(5, 9) * 100 + randint(7, 9) * 10 + randint(1, 9);
          texte = `$${tex_nombre(a)}+${b}$`;
          !sortie_html
            ? (texte_corr = `$\\opadd{${a}}{${b}}$`)
            : (texte_corr = `$${tex_nombre(a)}+${b}=${tex_nombre(a + b)}$`);
          break;
        case 2: // abc0-efg
          a = randint(1, 9);
          b = randint(1, 9);
          c = randint(1, 9);
          e = randint(b, 9);
          f = randint(c, 9);
          g = randint(2, 9);
          x = a * 1000 + b * 100 + c * 10;
          y = e * 100 + f * 10 + g;
          texte = `$${tex_nombre(x)}-${y}$`;
          !sortie_html
            ? (texte_corr = `$\\opsub{${x}}{${y}}$`)
            : (texte_corr = `$${tex_nombre(x)}+${y}=${tex_nombre(x + y)}$`);
          break;
        case 3: // 1abc-def
          a = randint(1, 9);
          b = randint(1, 9);
          c = randint(1, 9);
          d = randint(a, 9);
          e = randint(1, 9);
          f = randint(c, 9);
          x = 1000 + a * 100 + b * 10 + c;
          y = d * 100 + e * 10 + f;
          texte = `$${tex_nombre(x)}-${y}$`;
          !sortie_html
            ? (texte_corr = `$\\opsub{${x}}{${y}}$`)
            : (texte_corr = `$${tex_nombre(x)}-${y}=${tex_nombre(x - y)}$`);
          break;
        case 4: // abc*d0e tables de 2 à 5
          a = randint(2, 5);
          b = randint(2, 5);
          c = randint(2, 5);
          d = randint(2, 5);
          e = randint(2, 5);
          x = 100 * a + 10 * b + c;
          y = d * 100 + e;
          texte = `$${tex_nombre(x)}\\times${y}$`;
          !sortie_html
            ? (texte_corr = `$\\opmul{${x}}{${y}}$`)
            : (texte_corr = `$${tex_nombre(x)}\\times${y}=${tex_nombre(
                x * y
              )}$`);
          break;
        case 5: // abc*de tables de 5 à 9
          a = randint(5, 9);
          b = randint(5, 9);
          c = randint(5, 9);
          d = randint(5, 9);
          e = randint(5, 9);
          x = 100 * a + 10 * b + c;
          y = 10 * d + e;
          texte = `$${x}\\times${y}$`;
          !sortie_html
            ? (texte_corr = `$\\opmul{${x}}{${y}}$`)
            : (texte_corr = `$${tex_nombre(x)}\\times${y}=${tex_nombre(
                x * y
              )}$`);
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        if (!sortie_html && i == 0) {
          texte_corr = `\\setlength\\itemsep{2em}` + texte_corr;
        } // espacement entre les questions
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',2,'1 : Multiplication par un facteur positif\n2: Multiplication par un facteur relatif']
}

/**
 * Additions et soustractions de nombres décimaux
 * * xxx-xx,x
 * * xxx-xx,xx
 * * xxx,x-xxx
 * * x0x-xx9,x
 * * xxx+xx,x
 * * xxx+xx,xx
 * * xxx,x+xxx
 * * x0x+xx9,x
 * @Auteur Rémi Angot
 */
function Additionner_soustraires_decimaux() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Additions et soustractions de nombres décimaux";
  this.consigne = "Poser et effectuer les calculs suivants.";
  this.spacing = 2;
  sortie_html ? (this.spacing_corr = 2) : (this.spacing_corr = 1); //Important sinon les opérations posées ne sont pas jolies
  this.nb_questions = 4;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let liste_de_type_d_additions = combinaison_listes(
      [5, 6, 7, 8],
      this.nb_questions
    );
    let liste_de_type_de_soustractions = combinaison_listes(
      [1, 2, 3, 4],
      this.nb_questions
    );
    let liste_type_de_questions = [];
    for (let i = 0; i < this.nb_questions; i++) {
      if (i + 1 < this.nb_questions / 2) {
        // première moitié sont des additions mais si c'est impair on prendra plus de soustractions
        liste_type_de_questions.push(liste_de_type_d_additions[i]);
      } else {
        liste_type_de_questions.push(liste_de_type_de_soustractions[i]);
      }
    }

    for (
      let i = 0, texte, texte_corr, cpt = 0, a, b, c, d, e, f, g, x, y;
      i < this.nb_questions && cpt < 50;

    ) {
      type_de_questions = liste_type_de_questions[i];
      switch (type_de_questions) {
        case 1: // xxx-xx,x
          a = randint(1, 4) * 100 + randint(2, 5) * 10 + randint(1, 9);
          b = calcul(randint(5, 9) * 10 + randint(6, 9) + randint(1, 9) / 10);
          texte = `$${tex_nombre(a)}-${tex_nombre(b)}$`;
          sortie_html
            ? (texte_corr = `$${tex_nombre(a)}-${tex_nombre(b)}=${tex_nombrec(
                a - b
              )}$`)
            : (texte_corr = `$\\opsub[decimalsepsymbol={,}]{${a}}{${b}}$`);
          break;
        case 2: // xxx-xx,xx
          a = randint(1, 4) * 100 + randint(2, 5) * 10 + randint(1, 9);
          b = calcul(
            randint(5, 9) * 10 +
              randint(6, 9) +
              randint(1, 9) / 10 +
              randint(1, 9) / 100
          );
          texte = `$${tex_nombre(a)}-${tex_nombre(b)}$`;
          sortie_html
            ? (texte_corr = `$${tex_nombre(a)}-${tex_nombre(b)}=${tex_nombrec(
                a - b
              )}$`)
            : (texte_corr = `$\\opsub[decimalsepsymbol={,}]{${a}}{${b}}$`);
          break;
        case 3: // xxx,x-xxx
          a = calcul(
            randint(5, 9) * 100 +
              randint(2, 5) * 10 +
              randint(1, 9) +
              randint(1, 9) / 10
          );
          b = randint(1, 4) * 100 + randint(6, 9) * 10 + randint(1, 9);
          texte = `$${tex_nombre(a)}-${tex_nombre(b)}$`;
          sortie_html
            ? (texte_corr = `$${tex_nombre(a)}-${tex_nombre(b)}=${tex_nombrec(
                a - b
              )}$`)
            : (texte_corr = `$\\opsub[decimalsepsymbol={,}]{${a}}{${b}}$`);
          break;
        case 4: // x0x-xx9,x
          a = calcul(randint(5, 9) * 100 + randint(1, 5));
          b = calcul(
            randint(1, 4) * 100 + randint(1, 9) * 10 + 9 + randint(1, 9) / 10
          );
          texte = `$${tex_nombre(a)}-${tex_nombre(b)}$`;
          sortie_html
            ? (texte_corr = `$${tex_nombre(a)}-${tex_nombre(b)}=${tex_nombrec(
                a - b
              )}$`)
            : (texte_corr = `$\\opsub[decimalsepsymbol={,}]{${a}}{${b}}$`);
          break;
        case 5: // xxx+xx,x
          a = randint(1, 4) * 100 + randint(2, 5) * 10 + randint(1, 9);
          b = calcul(randint(5, 9) * 10 + randint(6, 9) + randint(1, 9) / 10);
          texte = `$${tex_nombre(a)}+${tex_nombre(b)}$`;
          sortie_html
            ? (texte_corr = `$${tex_nombre(a)}+${tex_nombre(b)}=${tex_nombrec(
                a + b
              )}$`)
            : (texte_corr = `$\\opadd[decimalsepsymbol={,}]{${a}}{${b}}$`);
          break;
        case 6: // xxx+xx,xx
          a = randint(1, 4) * 100 + randint(2, 5) * 10 + randint(1, 9);
          b = calcul(
            randint(5, 9) * 10 +
              randint(6, 9) +
              randint(1, 9) / 10 +
              randint(1, 9) / 100
          );
          texte = `$${tex_nombre(a)}+${tex_nombre(b)}$`;
          sortie_html
            ? (texte_corr = `$${tex_nombre(a)}+${tex_nombre(b)}=${tex_nombrec(
                a + b
              )}$`)
            : (texte_corr = `$\\opadd[decimalsepsymbol={,}]{${a}}{${b}}$`);
          break;
        case 7: // xxx,x+xxx
          a = calcul(
            randint(5, 9) * 100 +
              randint(2, 5) * 10 +
              randint(1, 9) +
              randint(1, 9) / 10
          );
          b = randint(1, 4) * 100 + randint(6, 9) * 10 + randint(1, 9);
          texte = `$${tex_nombre(a)}+${tex_nombre(b)}$`;
          sortie_html
            ? (texte_corr = `$${tex_nombre(a)}+${tex_nombre(b)}=${tex_nombrec(
                a + b
              )}$`)
            : (texte_corr = `$\\opadd[decimalsepsymbol={,}]{${a}}{${b}}$`);
          break;
        case 8: // x0x+xx9,x
          a = calcul(randint(5, 9) * 100 + randint(1, 5));
          b = calcul(
            randint(1, 4) * 100 + randint(1, 9) * 10 + 9 + randint(1, 9) / 10
          );
          texte = `$${tex_nombre(a)}+${tex_nombre(b)}$`;
          sortie_html
            ? (texte_corr = `$${tex_nombre(a)}+${tex_nombre(b)}=${tex_nombrec(
                a + b
              )}$`)
            : (texte_corr = `$\\opadd[decimalsepsymbol={,}]{${a}}{${b}}$`);
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
}

/**
 * Poser et effectuer les divisions euclidiennes suivantes puis donner l'égalité fondamentale correspondante.
 *
 * Niveau de difficulté 1 :
 * * division par 2, 3 , 4 ou 5
 * * division par 6 à 9
 * * un 0 dans le quotient
 *
 * Niveau de difficulté 2 :
 * * division par 11, 12, 15, 25
 * * division par 13,14,21,22,23 ou 24 et un 0 dans le quotient
 * * division par un multiple de 10 et un 0 dans le quotient
 * @Auteur Rémi Angot
 */
function Divisions_euclidiennes() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Divisions euclidiennes";
  this.consigne =
    "Poser et effectuer les divisions euclidiennes suivantes puis donner l'égalité fondamentale correspondante.";
  this.spacing = 2;
  sortie_html ? (this.spacing_corr = 2) : (this.spacing_corr = 1); //Important sinon opidiv n'est pas joli
  this.nb_questions = 4;
  this.sup = 1;
  this.liste_packages = "xlop";

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    this.sup == 1
      ? (type_de_questions_disponibles = [1, 2, 2, 3])
      : (type_de_questions_disponibles = [4, 4, 5, 6]);
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

    for (
      let i = 0, texte, texte_corr, cpt = 0, a, b, q, r;
      i < this.nb_questions && cpt < 50;

    ) {
      type_de_questions = liste_type_de_questions[i];
      switch (type_de_questions) {
        case 1: // division par 2, 3 , 4 ou 5
          q = randint(2, 5) * 100 + randint(2, 5) * 10 + randint(2, 5);
          b = randint(2, 5);
          break;
        case 2: // division par 6 à 9
          q = randint(5, 9) * 100 + randint(2, 5) * 10 + randint(5, 9);
          b = randint(6, 9);
          break;
        case 3: // un 0 dans le quotient
          if (randint(1, 2) == 1) {
            q = randint(2, 9) * 1000 + randint(2, 9) * 100 + randint(2, 9);
          } else {
            q = randint(2, 9) * 1000 + randint(2, 9) * 10 + randint(2, 9);
          }
          b = randint(7, 9);
          break;
        case 4: // division par 11, 12, 15, 25
          q = randint(1, 5) * 100 + randint(1, 5) * 10 + randint(1, 5);
          b = choice([11, 12, 15, 25]);
          break;
        case 5: // division par 13,14,21,22,23 ou 24 et un 0 dans le quotient
          q = randint(1, 5) * 1000 + randint(6, 9) * 100 + randint(1, 5);
          b = choice([11, 12, 13, 14, 21, 22, 23, 24]);
          break;
        case 6: // division par un multiple de 10 et un 0 dans le quotient
          q = randint(6, 9) * 1000 + randint(6, 9) * 10 + randint(1, 5);
          b = randint(2, 9) * 10;
          break;
      }
      r = randint(0, b - 1); //reste inférieur au diviseur
      a = b * q + r;
      texte = `$${tex_nombre(a)}\\div${b}$`;
      if (r == 0) {
        sortie_html
          ? (texte_corr = `$${tex_nombre(a)}\\div${b}=${q}$`)
          : (texte_corr = `$\\opidiv[voperation=top]{${a}}{${b}}$\\\\\\\\$${tex_nombre(
              a
            )}\\div${b}=${q}$`);
      } else {
        sortie_html
          ? (texte_corr = `$${tex_nombre(a)}=${b}\\times${q}+${r}$`)
          : (texte_corr = `$\\opidiv[voperation=top]{${a}}{${b}}$\\\\\\\\$${tex_nombre(
              a
            )}=${b}\\times${q}+${r}$`);
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    2,
    "1 : Quotient inférieur à 10\n2: Quotient à 2 chiffres",
  ];
}

/**
 * Effectuer les divisions décimales suivantes et donner la valeur exacte de leur quotient.
 *
 * Niveau de difficulté 1 :
 * * entier divisé par 4 quotient : xx,25 ou xx,75
 * * entier divisé par 8 quotient : x,125 ou x,375 ou x,625 ou x,875
 * * entier divisé par 6 quotient : xxx,5
 * * quotient xx,xx division par 2, 3 , 4 ou 5
 * * quotient x,xxx division par 6 à 9
 * * un 0 dans le quotient
 *
 * Niveau de difficulté 2 : division par 3, 7 ou 9
 * @Auteur Rémi Angot
 */
function Division_decimale() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Divisions décimales";
  this.consigne =
    "Effectuer les divisions décimales suivantes et donner la valeur exacte de leur quotient.";
  this.spacing = 2;
  sortie_html ? (this.spacing_corr = 2) : (this.spacing_corr = 1); //Important sinon opdiv n'est pas joli
  this.nb_questions = 4;
  this.sup = 1;
  this.liste_packages = "xlop";

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    this.sup == 1
      ? (type_de_questions_disponibles = [choice([1, 2, 3]), 4, 5, 6])
      : (type_de_questions_disponibles = [7, 8, 9]);
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

    for (
      let i = 0, texte, texte_corr, cpt = 0, a, b, q, r;
      i < this.nb_questions && cpt < 50;

    ) {
      type_de_questions = liste_type_de_questions[i];
      switch (type_de_questions) {
        case 1: // entier divisé par 4 quotient : xx,25 ou xx,75
          b = 4;
          a = (randint(2, 9) * 10 + randint(2, 9)) * 4 + choice([1, 3]);
          q = calcul(a / b);
          break;
        case 2: // entier divisé par 8 quotient : x,125 ou x,375 ou x,625 ou x,875
          b = 8;
          a = randint(2, 9) * 8 + choice([1, 3, 5, 7]);
          q = calcul(a / b);
          break;
        case 3: // entier divisé par 6 quotient : xxx,5
          b = 6;
          q = calcul(
            randint(2, 9) * 100 + randint(2, 9) * 10 + randint(2, 9) + 0.5
          );
          a = q * 6;
          break;
        case 4: // quotient xx,xx division par 2, 3 , 4 ou 5
          q = calcul(
            randint(2, 5) * 10 +
              randint(2, 5) +
              randint(2, 5) / 10 +
              randint(2, 5) / 100
          );
          b = randint(2, 5);
          a = calcul(b * q);
          break;
        case 5: // quotient x,xxx division par 6 à 9
          q = calcul(
            randint(6, 9) +
              randint(5, 9) / 10 +
              randint(6, 9) / 100 +
              randint(6, 9) / 1000
          );
          b = randint(6, 9);
          a = calcul(b * q);
          break;
        case 6: // un 0 dans le quotient
          if (randint(1, 2) == 1) {
            //x0x,x
            q = calcul(
              randint(2, 9) * 100 + randint(2, 9) + randint(2, 9) / 10
            );
          } else {
            //xx0,x
            q = calcul(
              randint(2, 9) * 100 + randint(2, 9) * 10 + randint(2, 9) / 10
            );
          }
          b = randint(7, 9);
          a = calcul(b * q);
          break;
        case 7: // division par 7
          a = randint(2, 9) * 7 + randint(1, 6);
          b = 7;
          q = Algebrite.eval(Math.floor(Algebrite.eval((a / b) * 1000)) / 1000);
          break;
        case 8: // division par 9
          a = calcul((randint(11, 19) * 9) / 10 + randint(1, 8) / 10);
          b = 9;
          q = Algebrite.eval(Math.floor(Algebrite.eval((a / b) * 1000)) / 1000);
          break;
        case 9: //division par 3
          a = calcul((randint(11, 99) * 3) / 100 + randint(1, 2) / 100);
          b = 3;
          q = Algebrite.eval(Math.floor(Algebrite.eval((a / b) * 1000)) / 1000);
      }
      if (this.sup == 2) {
        this.consigne =
          "Effectuer les divisions décimales suivantes et donner une valeur approchée de leur quotient au millième près.";
      }
      texte = `$${tex_nombre(a)}\\div${b}$`;
      if (this.sup == 1) {
        sortie_html
          ? (texte_corr = `$${tex_nombre(a)}\\div${b}=${tex_nombre(q)}$`)
          : (texte_corr = `$\\opdiv[displayintermediary=all,voperation=top,decimalsepsymbol={,},shiftdecimalsep=none]{${a}}{${b}}$\\\\\\\\$${tex_nombre(
              a
            )}\\div${b}=${tex_nombre(q)}$`);
      } else {
        sortie_html
          ? (texte_corr = `$${tex_nombre(a)}\\div${b}\\approx${tex_nombre(q)}$`)
          : (texte_corr = `$\\opdiv[displayintermediary=all,voperation=top,period,decimalsepsymbol={,},shiftdecimalsep=none]{${a}}{${b}}$\\\\\\\\$${tex_nombre(
              a
            )}\\div${b}\\approx${tex_nombre(q)}$`);
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Type de questions",
    2,
    "1 : Déterminer le quotient exact\n2: Déterminer un quotient approché au millième près",
  ];
}

/**
 * Multiplication de deux nombres décimaux
 *
 * * xxx * xx,x chiffres inférieurs à 5
 * * xx,x * x,x
 * * x,xx * x0x
 * * 0,xx * x,x
 * @Auteur Rémi Angot
 */
function Multiplier_decimaux() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Multiplications posées de nombres décimaux";
  this.consigne = "Poser et effectuer les calculs suivants.";
  this.spacing = 2;
  this.spacing_corr = 1; //Important sinon le calcul posé ne fonctionne pas avec opmul et spacing
  this.nb_questions = 4;
  this.liste_packages = "xlop";

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = [1, 2, 3, 4];
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

    for (
      let i = 0, texte, texte_corr, cpt = 0, a, b, c, d, e, f, g, x, y;
      i < this.nb_questions && cpt < 50;

    ) {
      type_de_questions = liste_type_de_questions[i];
      switch (type_de_questions) {
        case 1: // xxx * xx,x chiffres inférieurs à 5
          a = randint(2, 5) * 100 + randint(2, 5) * 10 + randint(2, 5);
          b = calcul(randint(2, 5) * 10 + randint(2, 5) + randint(2, 5) / 10);
          break;
        case 2: // xx,x * x,x
          a = calcul(randint(2, 9) * 10 + randint(2, 9) + randint(2, 9) / 10);
          b = calcul(randint(6, 9) + randint(6, 9) / 10);
          break;
        case 3: // x,xx * x0x
          a = calcul(randint(2, 9) + randint(2, 9) / 10 + randint(2, 9) / 100);
          b = calcul(randint(2, 9) * 100 + randint(2, 9));
          break;
        case 4: // 0,xx * x,x
          a = calcul(randint(2, 9) / 10 + randint(2, 9) / 100);
          b = calcul(randint(2, 9) + randint(2, 9) / 10);
          break;
      }

      texte = `$${tex_nombre(a)}\\times${tex_nombre(b)}$`;
      sortie_html
        ? (texte_corr = `$${tex_nombre(a)}\\times${tex_nombre(b)}=${tex_nombrec(
            a * b
          )}$`)
        : (texte_corr = `$\\opmul[decimalsepsymbol={,}]{${a}}{${b}}$`);

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
}

/**
 * Multiplication d'un nombre décimal dans différentes écritures par 10, 100, 1000
 *
 *  * Type 1 : écriture décimale
 *  * Type 2 : écriture fractionnaire
 *  * Type 3 : écritures fractionnaires et décimales
 *
 *
 *  * Sup2 : avec ou sans calculs à trous
 * @Auteur Rémi Angot
 *
 */
function Multiplier_decimaux_par_10_100_1000() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Multiplications d'un nombre décimal par 10, 100 ou 1 000.";
  this.consigne = "Calculer.";
  this.sup = 3;
  this.sup2 = false;
  this.spacing = 2;
  this.spacing_corr = 2;
  this.nb_questions = 8;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let type_de_questions_disponibles = [];
    if (this.sup == 1 && !this.sup2) type_de_questions_disponibles = [1, 2];
    if (this.sup == 1 && this.sup2)
      type_de_questions_disponibles = [1, 2, 5, 6];
    if (this.sup == 2 && !this.sup2) type_de_questions_disponibles = [3, 4];
    if (this.sup == 2 && this.sup2)
      type_de_questions_disponibles = [3, 4, 3, 4, 7, 8, 9, 10];
    if (this.sup == 3 && !this.sup2)
      type_de_questions_disponibles = [1, 2, 3, 4];
    if (this.sup == 3 && this.sup2)
      type_de_questions_disponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (this.sup2) this.consigne = "Calculer et compléter.";

    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    let liste_de_facteurs = combinaison_listes(
      [10, 100, 1000],
      this.nb_questions
    );

    for (
      let i = 0, texte, texte_corr, cpt = 0, a, b, den;
      i < this.nb_questions && cpt < 50;

    ) {
      type_de_questions = liste_type_de_questions[i];
      switch (type_de_questions) {
        case 1: // a,abcd × 10
          a = choice([randint(11, 99), randint(100, 999)]);
          a = calcul(a / choice([10, 100, 1000, 10000]));
          b = liste_de_facteurs[i];
          texte = `$${tex_nombre(a)}\\times${tex_nombre(b)}$`;
          texte_corr = `$${tex_nombre(a)} \\times ${tex_nombre(
            b
          )} = ${tex_nombrec(a * b)}$`;
          break;
        case 2: // 10 × a,abcd
          a = choice([randint(11, 99), randint(100, 999)]);
          a = calcul(a / choice([10, 100, 1000, 10000]));
          b = liste_de_facteurs[i];
          texte = `$${tex_nombre(b)}\\times${tex_nombre(a)}$`;
          texte_corr = `$${tex_nombre(b)} \\times ${tex_nombre(
            a
          )} = ${tex_nombrec(a * b)}$`;
          break;
        case 3: // abcd/10 × 10
          a = choice([randint(11, 99), randint(100, 999), randint(2, 9)]);
          den = choice([10, 100, 1000]);
          b = liste_de_facteurs[i];
          texte = `$${tex_fraction(a, den)}\\times${tex_nombre(b)}$`;
          texte_corr = `$${tex_fraction(a, den)} \\times ${tex_nombre(
            b
          )} = ${tex_fraction(a * b, den)} = ${tex_nombrec((a / den) * b)}$`;
          break;
        case 4: // 10 × abcd/10
          a = choice([randint(11, 99), randint(100, 999), randint(2, 9)]);
          den = choice([10, 100, 1000]);
          b = liste_de_facteurs[i];
          texte = `$${tex_nombre(b)}\\times${tex_fraction(a, den)}$`;
          texte_corr = `$${tex_nombre(b)} \\times ${tex_fraction(
            a,
            den
          )} = ${tex_fraction(a * b, den)} = ${tex_nombrec((a / den) * b)}$`;
          break;
        case 5: // .... × 10 = a,abcd
          a = choice([randint(11, 99), randint(100, 999)]);
          a = calcul(a / choice([10, 100, 1000, 10000]));
          b = liste_de_facteurs[i];
          texte = `$\\ldots \\times${tex_nombre(b)} = ${tex_nombrec(a * b)}$`;
          texte_corr = `$${mise_en_evidence(
            tex_nombre(a)
          )} \\times ${tex_nombre(b)} = ${tex_nombrec(a * b)}$`;
          break;
        case 6: // 10 × .... = a,abcd
          a = choice([randint(11, 99), randint(100, 999)]);
          a = calcul(a / choice([10, 100, 1000, 10000]));
          b = liste_de_facteurs[i];
          texte = `$${tex_nombre(b)} \\times \\ldots = ${tex_nombrec(a * b)}$`;
          texte_corr = `$${tex_nombre(b)} \\times ${mise_en_evidence(
            tex_nombre(a)
          )}  = ${tex_nombrec(a * b)}$`;
          break;
        case 7: // case 3 avec un trou sur l'entier
          a = choice([randint(11, 99), randint(100, 999), randint(2, 9)]);
          den = choice([10, 100, 1000]);
          b = liste_de_facteurs[i];
          texte = `$${tex_fraction(a, den)}\\times \\ldots = ${tex_nombrec(
            (a / den) * b
          )}$`;
          texte_corr = `$${tex_fraction(a, den)} \\times ${mise_en_evidence(
            tex_nombre(b)
          )} = ${tex_fraction(a * b, den)} = ${tex_nombrec((a / den) * b)}$`;
          break;
        case 8: // case 4 avec un trou sur l'entier
          a = choice([randint(11, 99), randint(100, 999), randint(2, 9)]);
          den = choice([10, 100, 1000]);
          b = liste_de_facteurs[i];
          texte = `$ \\ldots \\times${tex_fraction(a, den)}= ${tex_nombrec(
            (a / den) * b
          )}$`;
          texte_corr = `$${mise_en_evidence(
            tex_nombre(b)
          )} \\times ${tex_fraction(a, den)} = ${tex_fraction(
            a * b,
            den
          )} = ${tex_nombrec((a / den) * b)}$`;
          break;
        case 9: // case 3 avec trou sur la fraction
          a = choice([randint(11, 99), randint(100, 999), randint(2, 9)]);
          den = choice([10, 100, 1000]);
          b = liste_de_facteurs[i];
          texte = `$${tex_fraction(a, "\\ldots")}\\times${tex_nombre(
            b
          )} = ${tex_nombrec((a / den) * b)}$`;
          texte_corr = `$${tex_fraction(
            a,
            mise_en_evidence(tex_nombre(den))
          )} \\times ${tex_nombre(b)} = ${tex_fraction(
            a * b,
            den
          )} = ${tex_nombrec((a / den) * b)}$`;
          break;
        case 10: // case 4 avec trou sur la fraction
          a = choice([randint(11, 99), randint(100, 999), randint(2, 9)]);
          den = choice([10, 100, 1000]);
          b = liste_de_facteurs[i];
          texte = `$${tex_nombre(b)}\\times${tex_fraction(
            a,
            "\\ldots"
          )} = ${tex_nombrec((a / den) * b)}$`;
          texte_corr = `$${tex_nombre(b)} \\times ${tex_fraction(
            a,
            mise_en_evidence(tex_nombre(den))
          )} = ${tex_fraction(a * b, den)} = ${tex_nombrec((a / den) * b)}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Types de calculs",
    3,
    "1 : Écriture décimale\n2 : Écriture fractionnaire\n3 : Écritures décimales et fractionnaires",
  ];
  this.besoin_formulaire2_case_a_cocher = ["Avec des calculs à trous"];
}

/**
 * Plusieurs type de calcul avec des entiers.
 *
 * Sans parenthèses :
 * * a+b*c
 * * a+b÷c
 * * a÷b*c
 * * a-b*c
 * * a*b÷c
 * * a*b+c
 * * a-b+c
 * * a+b+c*d
 * * a*b+c*d
 * * a*b*c-d
 * * a*b-c÷d
 * * a*b+c÷d
 *
 * Avec parenthèses :
 * * a*(b-c)
 * * (a-b)*c
 * * (a-b)÷c
 * * a÷(b+c)
 * * (a-b)÷c
 * * a*(b-c)*d
 * * a*b*(c-d)
 * * a*(b-c*d)
 * * (a+b*c)÷d
 * * a*(b-c*d)
 * * a*b÷(c+d)
 * * a*(b÷c+d)
 * @Auteur Rémi Angot
 */
function Priorites() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Calculer en utilisant les priorités opératoires";
  this.consigne = "Calculer";
  this.nb_questions = 5;
  this.nb_cols = 2;
  this.nb_cols_corr = 1;
  this.sup = 3;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let liste_questions_disponibles = []; //
    if (this.sup == 1) {
      liste_questions_disponibles = range1(12);
    } else if (this.sup == 2) {
      liste_questions_disponibles = range1(22, range1(12));
    } else {
      liste_questions_disponibles = range1(22);
    }
    let liste_type_de_questions = combinaison_listes(
      liste_questions_disponibles,
      this.nb_questions
    );
    for (
      let i = 0, texte, texte_corr, a, b, c, d, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1:
          a = randint(2, 11);
          b = randint(2, 11);
          c = randint(2, 11);
          texte = `$${a}+${b}\\times${c}$`;
          texte_corr = `$${a}+${mise_en_evidence(b + "\\times" + c)}=${a}+${
            b * c
          }=${a + b * c}$`;
          break;
        case 2:
          a = randint(2, 11);
          c = randint(2, 11);
          b = c * randint(2, 11);
          texte = `$${a}+${b}\\div${c}$`;
          texte_corr = `$${a}+${mise_en_evidence(b + "\\div" + c)}=${a}+${
            b / c
          }=${a + b / c}$`;
          break;
        case 3:
          b = randint(2, 11);
          c = randint(2, 11);
          a = b * randint(2, 11);
          texte = `$${a}\\div${b}\\times${c}$`;
          texte_corr = `$${mise_en_evidence(a + "\\div" + b)}\\times${c}=${
            a / b
          }\\times${c}=${(a / b) * c}$`;
          break;
        case 4:
          b = randint(2, 11);
          c = randint(2, 11);
          a = b * c + randint(2, 11);
          texte = `$${a}-${b}\\times${c}$`;
          texte_corr = `$${a}-${mise_en_evidence(b + "\\times" + c)}=${a}-${
            b * c
          }=${a - b * c}$`;
          break;
        case 5:
          if (choice([true, false])) {
            //a est un multiple de c
            c = randint(2, 6);
            a = c * randint(2, 5);
            b = randint(2, 6);
          } else {
            // b est un multiple de c
            c = randint(2, 6);
            b = c * randint(2, 5);
            a = randint(2, 6);
          }
          texte = `$${a}\\times${b}\\div${c}$`;
          texte_corr = `$${mise_en_evidence(a + "\\times" + b)}\\div${c}=${
            a * b
          }\\div${c}=${(a * b) / c}$`;
          break;
        case 6:
          a = randint(2, 11);
          b = randint(2, 11);
          c = randint(2, 11);
          texte = `$${a}\\times${b}+${c}$`;
          texte_corr = `$${mise_en_evidence(a + "\\times" + b)}+${c}=${
            a * b
          }+${c}=${a * b + c}$`;
          break;
        case 7:
          b = randint(20, 59);
          a = b + randint(11, 29);
          c = randint(11, 29);
          texte = `$${a}-${b}+${c}$`;
          texte_corr = `$${mise_en_evidence(a + "-" + b)}+${c}=${a - b}+${c}=${
            a - b + c
          }$`;
          break;
        case 8:
          a = randint(2, 20);
          b = randint(2, 20);
          c = randint(2, 11);
          d = randint(2, 11);
          texte = `$${a}+${b}+${c}\\times${d}$`;
          texte_corr = `$${a}+${b}+${mise_en_evidence(
            c + "\\times" + d
          )}=${a}+${b}+${c * d}=${a + b + c * d}$`;
          break;
        case 9:
          a = randint(2, 11);
          b = randint(2, 11);
          c = randint(2, 11);
          d = randint(2, 11);
          texte = `$${a}\\times${b}+${c}\\times${d}$`;
          texte_corr = `$${mise_en_evidence(
            a + "\\times" + b
          )}+${mise_en_evidence(c + "\\times" + d)}=${a * b}+${c * d}=${
            a * b + c * d
          }$`;
          break;
        case 10:
          a = randint(2, 5);
          b = randint(2, 5);
          c = randint(2, 5);
          d = randint(2, a * b * c - 1);
          texte = `$${a}\\times${b}\\times${c}-${d}$`;
          texte_corr = `$${mise_en_evidence(
            a + "\\times" + b
          )}\\times${c}-${d}=${mise_en_evidence(a * b + "\\times" + c)}-${d}=${
            a * b * c - d
          }$`;
          break;
        case 11:
          a = randint(3, 11);
          b = randint(3, 11);
          d = randint(2, 11);
          c = d * randint(2, 8);
          texte = `$${a}\\times${b}-${c}\\div${d}$`;
          texte_corr = `$${mise_en_evidence(
            a + "\\times" + b
          )}-${mise_en_evidence(c + "\\div" + d)}=${a * b}-${c / d}=${
            a * b - c / d
          }$`;
          break;
        case 12:
          a = randint(2, 11);
          b = randint(2, 11);
          d = randint(2, 11);
          c = d * randint(2, 8);
          texte = `$${a}\\times${b}+${c}\\div${d}$`;
          texte_corr = `$${mise_en_evidence(
            a + "\\times" + b
          )}+${mise_en_evidence(c + "\\div" + d)}=${a * b}+${c / d}=${
            a * b + c / d
          }$`;
          break;
        case 13:
          a = randint(2, 11);
          c = randint(2, 11);
          b = c + randint(2, 11);
          texte = `$${a}\\times(${b}-${c})$`;
          texte_corr = `$${a}\\times(${mise_en_evidence(
            b + `-` + c
          )})=${a}\\times${b - c}=${a * (b - c)}$`;
          break;
        case 14:
          b = randint(11, 39);
          a = b + randint(2, 11);
          c = randint(2, 11);
          texte = `$(${a}-${b})\\times${c}$`;
          texte_corr = `$(${mise_en_evidence(a + `-` + b)})\\times${c}=${
            a - b
          }\\times${c}=${(a - b) * c}$`;
          break;
        case 15:
          c = randint(2, 11);
          b = randint(11, 39);
          a = b + c * randint(2, 9);
          texte = `$(${a}-${b})\\div${c}$`;
          texte_corr = `$(${mise_en_evidence(a + `-` + b)})\\div${c}=${
            a - b
          }\\div${c}=${(a - b) / c}$`;
          break;
        case 16:
          b = randint(2, 5);
          c = randint(2, 6);
          a = (b + c) * randint(2, 9);
          texte = `$${a}\\div(${b}+${c})$`;
          texte_corr = `$${a}\\div(${mise_en_evidence(b + `+` + c)})=${a}\\div${
            b + c
          }=${a / (b + c)}$`;
          break;
        case 17:
          c = randint(2, 11);
          b = randint(11, 39);
          a = b + c * randint(2, 9);
          texte = `$(${a}-${b})\\div${c}$`;
          texte_corr = `$(${mise_en_evidence(a + `-` + b)})\\div${c}=${
            a - b
          }\\div${c}=${(a - b) / c}$`;
          break;
        case 18:
          c = randint(11, 39);
          b = c + randint(2, 5);
          a = randint(2, 5);
          d = randint(2, 5);
          texte = `$${a}\\times(${b}-${c})\\times${d}$`;
          texte_corr = `$${a}\\times(${mise_en_evidence(
            b + `-` + c
          )})\\times${d}=${a}\\times${b - c}\\times${d}=${a * (b - c) * d}$`;
          break;
        case 19:
          d = randint(11, 39);
          c = d + randint(2, 5);
          a = randint(2, 5);
          b = randint(2, 5);
          texte = `$${a}\\times${b}\\times(${c}-${d})$`;
          texte_corr = `$${a}\\times${b}\\times(${mise_en_evidence(
            c + `-` + d
          )})=${a}\\times${b}\\times${c - d}=${a * b * (c - d)}$`;
          break;
        case 20:
          a = randint(2, 11);
          c = randint(2, 11);
          d = randint(2, 11);
          b = c * d + randint(2, 11);
          texte = `$${a}\\times(${b}-${c}\\times${d})$`;
          texte_corr = `$${a}\\times(${b}-${mise_en_evidence(
            c + `\\times` + d
          )})=${a}\\times(${mise_en_evidence(b + `-` + c * d)})=${a}\\times${
            b - c * d
          }=${a * (b - c * d)}$`;
          break;
        case 21:
          a = randint(2, 11);
          b = randint(2, 11);
          if (liste_des_diviseurs(a * b).length <= 2) {
          }
          let liste = liste_des_diviseurs(a * b);
          if (liste.length > 2) {
            liste.pop(); //on supprime le plus grand diviseur qui est le produit
          }
          if (liste.length > 2) {
            enleve_element(liste, liste[1]); //on supprime le plus petit diviseur (autre que 1)
          }

          let somme = choice(liste, [1]); // la somme doit être un diviseur différent de 1
          c = randint(1, somme - 1);
          d = somme - c;
          texte = `$${a}\\times${b}\\div(${c}+${d})$`;
          texte_corr = `$${a}\\times${b}\\div(${mise_en_evidence(
            c + `+` + d
          )})=${mise_en_evidence(a + "\\times" + b)}\\div${c + d}=${
            a * b
          }\\div${c + d}=${(a * b) / (c + d)}$`;
          break;
        case 22:
          a = randint(2, 11);
          c = randint(2, 11);
          b = c * randint(2, 5);
          d = randint(2, 6);
          texte = `$${a}\\times(${b}\\div${c}+${d})$`;
          texte_corr = `$${a}\\times(${mise_en_evidence(
            b + `\\div` + c
          )}+${d})=${a}\\times(${mise_en_evidence(
            b / c + `+` + d
          )})=${a}\\times${b / c + d}=${a * (b / c + d)}$`;
          break;
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Type de calculs",
    3,
    "1 : Sans parenthèses\n2: Avec parenthèses\n3: Avec ou sans parenthèses",
  ];
}

/**
 * @Auteur Rémi Angot
 */
function Code_LaTeX_personnalise() {
  // Classe parente de tous les exercices qui seront créés
  this.titre = "Code LaTeX personnalisé";
  this.pas_de_version_HMTL = true;
  this.consigne = "";
  this.consigne_correction = "";
  this.liste_questions = [];
  this.liste_corrections = [];
  this.contenu = "";
  this.contenu_correction = "";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.beamer = false;
  this.sup = "%Votre code LaTeX";
  this.sup2 = "%Votre code LaTeX pour le corrigé";

  this.consigne_modifiable = false;
  this.nb_questions_modifiable = false;
  this.nb_cols_modifiable = false;
  this.nb_cols_corr_modifiable = false;
  this.spacing_modifiable = false;
  this.spacing_corr_modifiable = false;

  this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
  this.besoin_formulaire_texte = [
    "Code LaTeX énoncé",
    "Par exemple : \\input{mon_fichier}",
  ]; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
  this.besoin_formulaire2_texte = [
    "Code LaTeX correction",
    "Par exemple : \\input{mon_fichier_corr}",
  ];
  this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.contenu = this.sup;
    this.contenu_correction = this.sup2;
  };
}

/**
 * @Auteur Rémi Angot
 */
function HTML_personnalise() {
  // Classe parente de tous les exercices qui seront créés
  this.titre = "Exercice personnalisé";
  this.pas_de_version_HMTL = false;
  this.pas_de_version_LaTeX = true;
  this.consigne = "";
  this.consigne_correction = "";
  this.liste_questions = [];
  this.liste_corrections = [];
  this.contenu = "";
  this.contenu_correction = "";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.beamer = false;
  this.sup = "Énoncé de l'exercice";
  this.sup2 = "Énoncé de la correction";

  this.consigne_modifiable = false;
  this.nb_questions_modifiable = false;
  this.nb_cols_modifiable = false;
  this.nb_cols_corr_modifiable = false;
  this.spacing_modifiable = false;
  this.spacing_corr_modifiable = false;

  this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
  this.besoin_formulaire_long_texte = ["Exercice"]; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
  this.besoin_formulaire2_texte = ["Correction"];
  this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.contenu = this.sup;
    this.contenu_correction = this.sup2;
  };
}

/**
 * Pavages et symétrie axiale.
 * @Auteur Jean-Claude Lhote
 * Pas de version LaTeX
 */
function Pavages_et_reflexion() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre =
    "Trouver l'image d'une figure par une symétrie axiale dans un pavage triangulaire";
  this.pas_de_version_LaTeX = true;
  this.consigne = "";
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  // this.sup = 1; // 1 pour les 6ème, 2 pour les 5èmes, 3 pour les 4èmes, et 4 pour les 3èmes.
  sortie_html ? (this.spacing_corr = 2.5) : (this.spacing_corr = 1.5);
  this.liste_packages = "tkz-euclide";
  this.nouvelle_version = function (numero_de_l_exercice) {
    this.type_exercice = "MG32";
    this.MG32editable = false;
    this.taille_div_MG32 = [700, 700];
    this.MG32codeBase64 =
      "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAUcAAAC0gAAAQEAAAAAAAAAAQAAAIP#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAEQAAFPAAAAAAAAAAAAQAgAAAAAAAAFAAFATMAAAAAAAEBTYUeuFHri#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAARAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABQF6AAAAAAAAAAAAC#####wAAAAEAB0NDYWxjdWwA#####wAEem9vbQABOAAAAAFAIAAAAAAAAP####8AAAABAAtDSG9tb3RoZXRpZQD#####AAAAAf####8AAAABAApDT3BlcmF0aW9uAwAAAAE#8AAAAAAAAAAAAAcBAAAAAUA0AAAAAAAA#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAT#####AAAAAQALQ1BvaW50SW1hZ2UA#####wEAAAABEAABSQAAAAAAAAAAAEAIAAAAAAAABQAAAAADAAAABf####8AAAABAAlDUm90YXRpb24A#####wAAAAH#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUBOAAAAAAAAAAAACQD#####AQAAAAEQAAFKAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAYAAAAH#####wAAAAIAB0NSZXBlcmUA#####wDm5uYAAQAAAAEAAAAGAAAACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAAAAAAUA#####wACeEIAATYAAAABQBgAAAAAAAAAAAAFAP####8AAnlCAAEwAAAAAQAAAAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAABEAABQgAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAACAAAAAoAAAAIAAAACwAAAAUA#####wACeEMAATAAAAABAAAAAAAAAAAAAAAFAP####8AAnlDAAE2AAAAAUAYAAAAAAAAAAAADQD#####AQAAAAEQAAFDAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAkAAAAIAAAADQAAAAgAAAAOAAAABQD#####AAN4TTEAAjQwAAAAAUBEAAAAAAAAAAAABQD#####AAN5TTEAATAAAAABAAAAAAAAAAAAAAANAP####8BAAAAABAAAk0xAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAkAAAAIAAAAEAAAAAgAAAARAAAADQD#####Af8A#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAAFAAAAAAAAAAAAAAAFAAAAAAAAAAP####8AAAABAAxDVHJhbnNsYXRpb24A#####wAAABMAAAABAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAEgAAABQAAAAOAP####8AAAABAAAAFQAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAEAAAAWAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAABYAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAPAAAAFv####8AAAABAAlDUG9seWdvbmUA#####wAAfwAAAQAAAAQAAAAXAAAAGAAAABkAAAAX#####wAAAAEAEENTdXJmYWNlUG9seWdvbmUA#####wAAfwAAAAAFAAAAGgAAAAUA#####wACbngAATcAAAABQBwAAAAAAAAAAAAFAP####8AAm55AAE3AAAAAUAcAAAAAAAAAAAADAD#####AObm5gABAAAAAQAAAAwAAAAPAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAAAAAADQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHgAAAAgAAAAcAAAACAAAAB3#####AAAAAQAHQ01pbGlldQD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAAQAAAB8AAAAFAP####8AA3hOMwABOAAAAAFAIAAAAAAAAAAAAAUA#####wADeU4zAAEyAAAAAUAAAAAAAAAAAAAABQD#####AAN4TTMAATQAAAABQBAAAAAAAAAAAAAFAP####8AA3lNMwACMTAAAAABQCQAAAAAAAAAAAANAP####8BAAD#ABAAAk4zAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAkAAAAIAAAAIQAAAAgAAAAiAAAADQD#####AQAA#wAQAAJNMwAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAACAAAACMAAAAIAAAAJP####8AAAABAAtDTWVkaWF0cmljZQD#####AAAA#wAQAAABAAIAAAAlAAAAJgAAAAUA#####wADeE4yAAEwAAAAAQAAAAAAAAAAAAAABQD#####AAN5TjIAATYAAAABQBgAAAAAAAAAAAAFAP####8AA3lNMgABNgAAAAFAGAAAAAAAAAAAAAUA#####wADeE0yAAEwAAAAAQAAAAAAAAAAAAAADQD#####AQB#AAAQAAJOMgAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAACAAAACgAAAAIAAAAKQAAAA0A#####wEAfwAAEAACTTIAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAAgAAAArAAAACAAAACoAAAAFAP####8AA3hOMQACNDIAAAABQEUAAAAAAAAAAAAFAP####8AA3lOMQABMgAAAAFAAAAAAAAAAAAAAA0A#####wEAAAAAEAACTjEAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAAgAAAAuAAAACAAAAC8AAAASAP####8AAH8AARAABChkMSkBAAI#7MzMzMzMzQAAADAAAAAS#####wAAAAEAEUNQb2ludFBhckFic2Npc3NlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAADAAAAAcBAAAACAAAABwAAAABP#AAAAAAAAD#####AAAAAQAIQ1NlZ21lbnQA#####wAAAAAAEAAAAQABAAAAAQAAADIAAAATAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAADwAAAAcBAAAACAAAAB0AAAABP#AAAAAAAAAAAAAEAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAAAAAAAAAAAAzAAAADgD#####AAAAAQAAADQAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA1AAAANgAAABQA#####wEAAAAAEAAAAQABAAAANQAAADcAAAAEAP####8BAAAAARAAAVUAAAAAAAAAAABACAAAAAAAAAUAAT#Q3iTV#EVNAAAAOP####8AAAACAA1DTWVzdXJlQWZmaXhlAP####8AAXoAAAAeAAAAOf####8AAAABAA1DRm9uY0NvbXBsZXhlAP####8AA251bQASMipyZSh6KSsyKm54KmltKHopAAAABwAAAAAHAgAAAAFAAAAAAAAAAP####8AAAACAAlDRm9uY3Rpb25M#####wAAAAIAEUNWYXJpYWJsZUZvcm1lbGxlAAAAAAAAAAcCAAAABwIAAAABQAAAAAAAAAD#####AAAAAQAXQ1Jlc3VsdGF0VmFsZXVyQ29tcGxleGUAAAAcAAAAF00AAAAYAAAAAAABegAAAA8A#####wH#AP8AAQAAAAQAAAABAAAADAAAAA8AAAAB#####wAAAAIACENNZXN1cmVZAP####8AAnlVAAAACQAAADn#####AAAAAgAIQ01lc3VyZVgA#####wACeFUAAAAJAAAAOQAAAA4A#####wAAAAEAAAA5AAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAAQAAAD8AAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAMAAAAPwAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA8AAAA#AAAADwD#####AQAAAAABAAAABAAAAEAAAABBAAAAQgAAAED#####AAAAAgASQ0xpZXVPYmpldFBhclB0TGllAP####8AAAAAAAAAQwAAAAgAAAAdAAAAOQAAAAYAAAA5AAAAPwAAAEAAAABBAAAAQgAAAEMAAAAcAP####8AAAAAAAAARAAAAAgAAAAcAAAANQAAAAoAAAA1AAAANwAAADgAAAA5AAAAPwAAAEAAAABBAAAAQgAAAEMAAABEAAAACgD#####AAAADAAAAAFATgAAAAAAAAAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAEAAABGAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAAEYAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAPAAAARgAAAA8A#####wH#AP8ABAAAAAQAAABHAAAASAAAAEkAAABHAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARwAAAD8AAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABIAAAAPwAAAAkA#####wEAAAAAEAABQQAAAAAAAAAAAEAIAAAAAAAABQAAAABJAAAAPwAAAA8A#####wEAAAAAAQAAAAQAAABLAAAATAAAAE0AAABLAAAAHAD#####AQAAAAAAAE4AAAAIAAAAHQAAADkAAAAGAAAAOQAAAD8AAABLAAAATAAAAE0AAABOAAAAHAD#####AAAAAAAAAE8AAAAIAAAAHAAAADUAAAAKAAAANQAAADcAAAA4AAAAOQAAAD8AAABLAAAATAAAAE0AAABOAAAATwAAABMA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADkAAABNAAAAAT#VVUdaMaS+AAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAOQAAAE0AAAABP+VVR1oxpL4AAAAFAP####8AA3hVJwAbaW50KHhVKjEwMDAwMDArMC41KS8xMDAwMDAwAAAABwMAAAAXAgAAAAcAAAAABwIAAAAIAAAAPgAAAAFBLoSAAAAAAAAAAAE#4AAAAAAAAAAAAAFBLoSAAAAAAAAAAAUA#####wADeVUnABtpbnQoeVUqMTAwMDAwMCswLjUpLzEwMDAwMDAAAAAHAwAAABcCAAAABwAAAAAHAgAAAAgAAAA9AAAAAUEuhIAAAAAAAAAAAT#gAAAAAAAAAAAAAUEuhIAAAAAA#####wAAAAEAD0NDYWxjdWxDb21wbGV4ZQD#####AAJ6VQAJeFUnK2kqeVUnAAAABwAAAAAZAAAAUwAAAAcC#####wAAAAEAC0NDb25zdGFudGVpAAAAGQAAAFQAAAAdAP####8ABG51bVUABm51bSh6Kf####8AAAABABZDQXBwZWxGb25jdGlvbkNvbXBsZXhlAAAAOwAAABkAAAA6#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQD#####AQAAAADAMQAAAAAAAMAkAAAAAAAAAAAAURAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAIAAABWAAAAHQD#####AAVudW1VMQAGbnVtVSsxAAAABwAAAAAZAAAAVgAAAAE#8AAAAAAAAAAAACAA#####wEAAAAAwC4AAAAAAADAIAAAAAAAAAAAAFIQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAACAAAAWAAAABwA#####wAAAAAAAABXAAAACAAAAB0AAAA5AAAABwAAADkAAAA6AAAAPwAAAE0AAABRAAAAVgAAAFcAAAAcAP####8AAAAAAAAAWgAAAAgAAAAcAAAANQAAAAsAAAA1AAAANwAAADgAAAA5AAAAOgAAAD8AAABNAAAAUQAAAFYAAABXAAAAWgAAABwA#####wAAAAAAAABZAAAACAAAAB0AAAA5AAAACAAAADkAAAA6AAAAPwAAAE0AAABSAAAAVgAAAFgAAABZAAAAHAD#####AAAAAAAAAFwAAAAIAAAAHAAAADUAAAAMAAAANQAAADcAAAA4AAAAOQAAADoAAAA#AAAATQAAAFIAAABWAAAAWAAAAFkAAABcAAAACQD#####Af8A#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALQAAABQAAAAOAP####8AAAABAAAAXgAAAAkA#####wH#AP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAEAAABfAAAACQD#####Af8A#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAAF8AAAAJAP####8B#wD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAPAAAAXwAAAA8A#####wD#AAAAAgAAAAQAAABgAAAAYQAAAGIAAABgAAAAEAD#####AP8AAAAAAAUAAABjAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAJgAAABQAAAAOAP####8AAAABAAAAZQAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAEAAABmAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAAGYAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAPAAAAZgAAAAkA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACYAAAAUAAAADgD#####AAAAAQAAABMAAAAJAP####8B#wD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAATAAAAawAAAA4A#####wAAAGwAAAAmAAAACQD#####Af8A#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAARwAAAG0AAAAJAP####8B#wD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABIAAAAbQAAAAkA#####wH#AP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEkAAABtAAAADwD#####AAAA#wABAAAABAAAAG4AAABvAAAAcAAAAG4AAAAQAP####8AAAD#AAAABQAAAHEAAAAOAP####8AAAABAAAADwAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADQAAABzAAAAFAD#####AAAAAAAQAAABAAEAAAB0AAAAH#####8AAAABABBDSW50RHJvaXRlRHJvaXRlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAxAAAAM#####8AAAACAAxDQ29tbWVudGFpcmUA#####wAAfwAAQDUAAAAAAADARQAAAAAAAQAAAHYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgxKSkAAAAUAP####8AAAD#ABAAAAEAAQAAAAEAAAA0AAAAIQD#####AQAA#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAeAAAACcAAAAiAP####8AAAD#AMBAAAAAAAAAwAgAAAAAAAAAAAB5EAAAAAAAAAAAAAAAAAABAAAAAAAAAAAACChkI0woMykpAAAAIQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAMQAAAHUAAAAiAP####8AAH8AAMBEgAAAAAAAP#AAAAAAAAAAAAB7EAAAAAAAAAAAAAAAAAABAAAAAAAAAAAACChkI0woMSkpAAAAEQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALQAAACz#####AAAAAQAJQ0Ryb2l0ZU9tAP####8A#wAAABAAAAEAAgAAAAkAAAB9AAAAAT#wAAAAAAAAAAAAIQD#####AP8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAfgAAADMAAAAiAP####8A#wAAAMA1AAAAAAAAwEKAAAAAAAAAAAB#EAAAAAAAAAAAAAAAAAABAAAAAAAAAAAACChkI0woMikpAAAAIQD#####AP8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAfgAAAHUAAAAiAP####8A#wAAAMAUAAAAAAAAQCYAAAAAAAAAAACBEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAACChkI0woMikp################";
    this.MG32codeBase64corr =
      "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAUcAAAC0gAAAQEAAAAAAAAAAQAAAMz#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAEQAAFPAAAAAAAAAAAAQAgAAAAAAAAFAAFATMAAAAAAAEBTYUeuFHri#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAARAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABQF6AAAAAAAAAAAAC#####wAAAAEAB0NDYWxjdWwA#####wAEem9vbQABOAAAAAFAIAAAAAAAAP####8AAAABAAtDSG9tb3RoZXRpZQD#####AAAAAf####8AAAABAApDT3BlcmF0aW9uAwAAAAE#8AAAAAAAAAAAAAcBAAAAAUA0AAAAAAAA#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAT#####AAAAAQALQ1BvaW50SW1hZ2UA#####wEAAAABEAABSQAAAAAAAAAAAEAIAAAAAAAABQAAAAADAAAABf####8AAAABAAlDUm90YXRpb24A#####wAAAAH#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUBOAAAAAAAAAAAACQD#####AQAAAAEQAAFKAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAYAAAAH#####wAAAAIAB0NSZXBlcmUA#####wDm5uYAAQAAAAEAAAAGAAAACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAE#8AAAAAAAAAAAAAE#8AAAAAAAAAAAAAUA#####wACeEIAATYAAAABQBgAAAAAAAAAAAAFAP####8AAnlCAAEwAAAAAQAAAAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAABEAABQgAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAACAAAAAoAAAAIAAAACwAAAAUA#####wACeEMAATAAAAABAAAAAAAAAAAAAAAFAP####8AAnlDAAE2AAAAAUAYAAAAAAAAAAAADQD#####AQAAAAEQAAFDAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAkAAAAIAAAADQAAAAgAAAAOAAAABQD#####AAN4TTEAATgAAAABQCAAAAAAAAAAAAAFAP####8AA3lNMQABMgAAAAFAAAAAAAAAAAAAAA0A#####wEAAAAAEAACTTEAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAAgAAAAQAAAACAAAABEAAAANAP####8B#wD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAAAUAAAAAAAAAAAAAAAUAAAAAAAAAA#####wAAAAEADENUcmFuc2xhdGlvbgD#####AAAAEwAAAAEAAAAJAP####8BAAAAABAAAVcAAAAAAAAAAABACAAAAAAAAAUAAAAAEgAAABQAAAAOAP####8AAAABAAAAFQAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAEAAAAWAAAACQD#####AQAAAAAQAAFYAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAwAAAAWAAAACQD#####AQAAAAAQAAFZAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA8AAAAW#####wAAAAEACUNQb2x5Z29uZQD#####AQB#AAABAAAABAAAABcAAAAYAAAAGQAAABf#####AAAAAQAQQ1N1cmZhY2VQb2x5Z29uZQD#####AQB#AAAAAAUAAAAaAAAABQD#####AAJueAABNwAAAAFAHAAAAAAAAAAAAAUA#####wACbnkAATcAAAABQBwAAAAAAAAAAAAMAP####8A5ubmAAEAAAABAAAADAAAAA8AAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAAAAAANAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAACAAAABwAAAAIAAAAHf####8AAAABAAdDTWlsaWV1AP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAHwAAAAUA#####wADeE4zAAIyNgAAAAFAOgAAAAAAAAAAAAUA#####wADeU4zAAEyAAAAAUAAAAAAAAAAAAAABQD#####AAN4TTMAAjE2AAAAAUAwAAAAAAAAAAAABQD#####AAN5TTMAAjIyAAAAAUA2AAAAAAAAAAAADQD#####AQAA#wAQAAJOMwAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAACAAAACEAAAAIAAAAIgAAAA0A#####wEAAP8AEAACTTMAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAAgAAAAjAAAACAAAACT#####AAAAAQALQ01lZGlhdHJpY2UA#####wEAAP8AEAAAAQACAAAAJQAAACYAAAAFAP####8AA3hOMgACMTQAAAABQCwAAAAAAAAAAAAFAP####8AA3lOMgABMgAAAAFAAAAAAAAAAAAAAAUA#####wADeU0yAAIxNAAAAAFALAAAAAAAAAAAAAUA#####wADeE0yAAEyAAAAAUAAAAAAAAAAAAAADQD#####AQB#AAAQAAJOMgAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAACAAAACgAAAAIAAAAKQAAAA0A#####wEAfwAAEAACTTIAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAAgAAAArAAAACAAAACoAAAAFAP####8AA3hOMQACMTYAAAABQDAAAAAAAAAAAAAFAP####8AA3lOMQACMTAAAAABQCQAAAAAAAAAAAANAP####8BAAAAABAAAk4xAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAkAAAAIAAAALgAAAAgAAAAvAAAAEgD#####AQB#AAEQAAQoZDEpAQACP+zMzMzMzM0AAAAwAAAAEv####8AAAABABFDUG9pbnRQYXJBYnNjaXNzZQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAAQAAAAwAAAAHAQAAAAgAAAAcAAAAAT#wAAAAAAAA#####wAAAAEACENTZWdtZW50AP####8AAAAAABAAAAEAAQAAAAEAAAAyAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAAQAAAA8AAAAHAQAAAAgAAAAdAAAAAT#wAAAAAAAAAAAABAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAAAAAAAAAAAAMwAAAA4A#####wAAAAEAAAA0AAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAANQAAADYAAAAUAP####8BAAAAABAAAAEAAQAAADUAAAA3AAAABAD#####AQAAAAEQAAFVAAAAAAAAAAAAQAgAAAAAAAAFAAE#0N4k1fxFTQAAADj#####AAAAAgANQ01lc3VyZUFmZml4ZQD#####AAF6AAAAHgAAADn#####AAAAAQANQ0ZvbmNDb21wbGV4ZQD#####AANudW0AEjIqcmUoeikrMipueCppbSh6KQAAAAcAAAAABwIAAAABQAAAAAAAAAD#####AAAAAgAJQ0ZvbmN0aW9uTP####8AAAACABFDVmFyaWFibGVGb3JtZWxsZQAAAAAAAAAHAgAAAAcCAAAAAUAAAAAAAAAA#####wAAAAEAF0NSZXN1bHRhdFZhbGV1ckNvbXBsZXhlAAAAHAAAABdNAAAAGAAAAAAAAXoAAAAPAP####8B#wD#AAEAAAAEAAAAAQAAAAwAAAAPAAAAAf####8AAAACAAhDTWVzdXJlWQD#####AAJ5VQAAAAkAAAA5#####wAAAAIACENNZXN1cmVYAP####8AAnhVAAAACQAAADkAAAAOAP####8AAAABAAAAOQAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAEAAAA#AAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAAD8AAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAPAAAAPwAAAA8A#####wEAAAAAAQAAAAQAAABAAAAAQQAAAEIAAABA#####wAAAAIAEkNMaWV1T2JqZXRQYXJQdExpZQD#####AAAAAAAAAEMAAAAIAAAAHQAAADkAAAAGAAAAOQAAAD8AAABAAAAAQQAAAEIAAABDAAAAHAD#####AAAAAAAAAEQAAAAIAAAAHAAAADUAAAAKAAAANQAAADcAAAA4AAAAOQAAAD8AAABAAAAAQQAAAEIAAABDAAAARAAAAAoA#####wAAAAwAAAABQE4AAAAAAAAAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAARgAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAwAAABGAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADwAAAEYAAAAPAP####8B#wD#AAQAAAAEAAAARwAAAEgAAABJAAAARwAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEcAAAA#AAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASAAAAD8AAAAJAP####8BAAAAABAAAUEAAAAAAAAAAABACAAAAAAAAAUAAAAASQAAAD8AAAAPAP####8BAAAAAAEAAAAEAAAASwAAAEwAAABNAAAASwAAABwA#####wEAAAAAAABOAAAACAAAAB0AAAA5AAAABgAAADkAAAA#AAAASwAAAEwAAABNAAAATgAAABwA#####wAAAAAAAABPAAAACAAAABwAAAA1AAAACgAAADUAAAA3AAAAOAAAADkAAAA#AAAASwAAAEwAAABNAAAATgAAAE8AAAATAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA5AAAATQAAAAE#1VVHWjGkvgAAABMA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADkAAABNAAAAAT#lVUdaMaS+AAAABQD#####AAN4VScAG2ludCh4VSoxMDAwMDAwKzAuNSkvMTAwMDAwMAAAAAcDAAAAFwIAAAAHAAAAAAcCAAAACAAAAD4AAAABQS6EgAAAAAAAAAABP+AAAAAAAAAAAAABQS6EgAAAAAAAAAAFAP####8AA3lVJwAbaW50KHlVKjEwMDAwMDArMC41KS8xMDAwMDAwAAAABwMAAAAXAgAAAAcAAAAABwIAAAAIAAAAPQAAAAFBLoSAAAAAAAAAAAE#4AAAAAAAAAAAAAFBLoSAAAAAAP####8AAAABAA9DQ2FsY3VsQ29tcGxleGUA#####wACelUACXhVJytpKnlVJwAAAAcAAAAAGQAAAFMAAAAHAv####8AAAABAAtDQ29uc3RhbnRlaQAAABkAAABUAAAAHQD#####AARudW1VAAZudW0oein#####AAAAAQAWQ0FwcGVsRm9uY3Rpb25Db21wbGV4ZQAAADsAAAAZAAAAOv####8AAAABAA9DVmFsZXVyQWZmaWNoZWUA#####wEAAAAAwDEAAAAAAADAJAAAAAAAAAAAAFEQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAACAAAAVgAAAB0A#####wAFbnVtVTEABm51bVUrMQAAAAcAAAAAGQAAAFYAAAABP#AAAAAAAAAAAAAgAP####8BAAAAAMAuAAAAAAAAwCAAAAAAAAAAAABSEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAgAAAFgAAAAcAP####8AAAAAAAAAVwAAAAgAAAAdAAAAOQAAAAcAAAA5AAAAOgAAAD8AAABNAAAAUQAAAFYAAABXAAAAHAD#####AAAAAAAAAFoAAAAIAAAAHAAAADUAAAALAAAANQAAADcAAAA4AAAAOQAAADoAAAA#AAAATQAAAFEAAABWAAAAVwAAAFoAAAAcAP####8AAAAAAAAAWQAAAAgAAAAdAAAAOQAAAAgAAAA5AAAAOgAAAD8AAABNAAAAUgAAAFYAAABYAAAAWQAAABwA#####wAAAAAAAABcAAAACAAAABwAAAA1AAAADAAAADUAAAA3AAAAOAAAADkAAAA6AAAAPwAAAE0AAABSAAAAVgAAAFgAAABZAAAAXAAAAAkA#####wH#AP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAC0AAAAUAAAADgD#####AAAAAQAAAF4AAAAJAP####8B#wD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAXwAAAAkA#####wH#AP8AEAABUQAAAAAAAAAAAEAIAAAAAAAABQAAAAAMAAAAXwAAAAkA#####wH#AP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA8AAABfAAAADwD#####Af8AAAACAAAABAAAAGAAAABhAAAAYgAAAGAAAAAQAP####8B#wAAAAAABQAAAGMAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAmAAAAFAAAAA4A#####wAAAAEAAABlAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAAQAAAGYAAAAJAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAMAAAAZgAAAAkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA8AAABmAAAACQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAJgAAABQAAAAOAP####8AAAABAAAAEwAAAAkA#####wH#AP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAABMAAABrAAAADgD#####AAAAbAAAACYAAAAJAP####8B#wD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABHAAAAbQAAAAkA#####wH#AP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEgAAABtAAAACQD#####Af8A#wAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAASQAAAG0AAAAPAP####8BAAD#AAEAAAAEAAAAbgAAAG8AAABwAAAAbgAAABAA#####wEAAP8AAAAFAAAAcQAAAA4A#####wAAAAEAAAAPAAAACQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAANAAAAHMAAAAUAP####8AAAAAABAAAAEAAQAAAHQAAAAf#####wAAAAEAEENJbnREcm9pdGVEcm9pdGUA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADEAAAAz#####wAAAAIADENDb21tZW50YWlyZQD#####AQB#AABANQAAAAAAAMBFAAAAAAABAAAAdhAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAgoZCNMKDEpKQAAABQA#####wAAAP8AEAAAAQABAAAAAQAAADQAAAAhAP####8BAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAB4AAAAJwAAACIA#####wEAAP8AwEAAAAAAAADACAAAAAAAAAAAAHkQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgzKSkAAAAhAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAxAAAAdQAAACIA#####wAAfwAAwESAAAAAAAA#8AAAAAAAAAAAAHsQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgxKSkAAAARAP####8BAH8AABAAAkgyAAAAAAAAAAAAQAgAAAAAAAAFAAAAAC0AAAAs#####wAAAAEACUNEcm9pdGVPbQD#####Af8AAAAQAAABAAIAAAAJAAAAfQAAAAE#8AAAAAAAAAAAACEA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAH4AAAAzAAAAIgD#####Af8AAADANQAAAAAAAMBCgAAAAAAAAAAAfxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAgoZCNMKDIpKQAAACEA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAH4AAAB1AAAAIgD#####Af8AAADAFAAAAAAAAEAmAAAAAAAAAAAAgRAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAgoZCNMKDIpKQAAABEA#####wEAfwAAEAACSDEAAAAAAAAAAABACAAAAAAAAAUAAAAAEgAAADAAAAAUAP####8BAH8AABAAAAEAAgAAABIAAAAwAAAABAD#####AQB#AAEQAANNJzEAAAAAAAAAAABACAAAAAAAAAUAAT#YiIhSPtDkAAAAhP####8AAAABAAlDTG9uZ3VldXIA#####wAAAAEAAAAM#####wAAAAIAD0NNZXN1cmVBYnNjaXNzZQD#####AAJrMQAAAIMAAAASAAAAhQAAAAYA#####wAAAIMAAAAIAAAAhwAAAAkA#####wEAfwAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAAAAFQAAAIj#####AAAAAQANQ1BvaW50UHJvamV0ZQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAGAAAADEAAAAGAP####8AAACKAAAACAAAAIcAAAAJAP####8BAH8AABAAAlgnAAAAAAAAAAAAQAgAAAAAAAAFAAAAABgAAACLAAAAJgD#####AQB#AAAQAAJZJwAAAAAAAAAAAEAIAAAAAAAABQAAAAAZAAAAMQAAAAYA#####wAAAI0AAAAIAAAAhwAAAAkA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAABkAAACOAAAADwD#####AQB#AAACAAAABAAAAIkAAACMAAAAjwAAAIkAAAAQAP####8BAH8AAAAABQAAAJD#####AAAAAQAPQ1N5bWV0cmllQXhpYWxlAP####8AAAAxAAAACQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAFwAAAJIAAAAJAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAYAAAAkgAAAAkA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAABkAAACSAAAADwD#####AQB#AAACAAAABAAAAJMAAACUAAAAlQAAAJMAAAAQAP####8BAH8AAAAABQAAAJb#####AAAAAgAXQ01hY3JvQW5pbWF0aW9uUG9pbnRMaWUA#####wAAfwAB#####wpAi1QAAAAAAEA#hR64UeuGAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFYW5pbTEAAAAAAAAUAAAAZAAAADwAAACFAAEA#####wAAAAEAEUNNYWNyb0Rpc3Bhcml0aW9uAP####8AAH8AAf####8KQIs8AAAAAABAT8KPXCj1wwIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTEAAAAAAAgAAACRAAAAkAAAABsAAAAaAAAAMQAAAHcAAACXAAAAlv####8AAAABABBDTWFjcm9BcHBhcml0aW9uAP####8AAH8AAf####8KQItEAAAAAABAV+FHrhR64gIAAAAAAAAAAAAAAAABAAAAAAAAAAAACWFwcGFyYWl0MQAAAAAACAAAAJEAAACQAAAAGwAAABoAAAAxAAAAdwAAAJcAAACWAP####8AAAABAAtDTWFjcm9QYXVzZQD#####AAB#AAH#####EECN1AAAAAAAQEJCj1wo9cMCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAf####8AAAABABFDTWFjcm9TdWl0ZU1hY3JvcwD#####AAB#AAH#####EEBTYAAAAAAAQCMKPXCj1wwCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAxDb3JyZWN0aW9uIGEAAAAAAAQAAACaAAAAmAAAAJkAAACbAAAAFAD#####AQB#AAAQAAABAAIAAAAtAAAALAAAAAQA#####wEAfwAAEAADTScyAAAAAAAAAAAAQAgAAAAAAAAFAAE#089zR#b9RQAAAJ0AAAAlAP####8AAmsyAAAAfQAAAC0AAACeAAAAJgD#####AAB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAYAAAAH4AAAAGAP####8AAACgAAAACAAAAJ8AAAAJAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABgAAAAoQAAACYA#####wEAfwAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAGIAAAB+AAAABgD#####AAAAowAAAAgAAACfAAAACQD#####AQB#AAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAYgAAAKQAAAAJAP####8BAH8AABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABhAAAApAAAAA8A#####wH#AAAAAgAAAAQAAACiAAAApQAAAKYAAACiAAAAEAD#####Af8AAAAAAAUAAACnAAAAKAD#####AP8AAAH#####CkCLlAAAAAAAQGKQo9cKPXECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVhbmltMgAAAAAAABQAAABkAAAAPAAAAJ4AAQAAAAAnAP####8AAAB+AAAACQD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAYAAAAKoAAAAJAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABhAAAAqgAAAAkA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAGIAAACqAAAADwD#####Af8AAAACAAAABAAAAKsAAACsAAAArQAAAKsAAAAQAP####8B#wAAAAAABQAAAK4AAAApAP####8A#wAAAf####8KQIu0AAAAAABAZpCj1wo9cQIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTIAAAAAAAkAAABkAAAAYwAAAKgAAACnAAAArwAAAK4AAAB+AAAAggAAAIAAAAAqAP####8A#wAAAf####8KQIvMAAAAAABAahCj1wo9cQIAAAAAAAAAAAAAAAABAAAAAAAAAAAACWFwcGFyYWl0MgAAAAAACQAAAGQAAABjAAAAqAAAAKcAAACvAAAArgAAAH4AAACCAAAAgAAAAAAsAP####8A#wAAAf####8QQGhwAAAAAABAIwo9cKPXDAIAAAAAAAAAAAAAAAABAAAAAAAAAAAADENvcnJlY3Rpb24gYgAAAAAABAAAALEAAACpAAAAsAAAAJsAAAARAP####8B#wAAABAAAkgzAAAAAAAAAAAAQAgAAAAAAAAFAAAAACYAAAAlAAAAFAD#####Af8AAAAQAAABAAIAAAAmAAAAJQAAAAQA#####wH#AAAAEAADTSczAAAAAAAAAAAAQAgAAAAAAAAFAAE#0spidDyBMgAAALQAAAAlAP####8AAmszAAAAswAAACYAAAC1AAAAJgD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAbgAAACcAAAAmAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABwAAAAJwAAAAYA#####wAAALcAAAAIAAAAtgAAAAkA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAG4AAAC5AAAABgD#####AAAAuAAAAAgAAAC2AAAACQD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAcAAAALsAAAAGAP####8AAACzAAAACAAAALYAAAAJAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABvAAAAvQAAAA8A#####wEAAP8AAgAAAAQAAAC6AAAAvgAAALwAAAC6AAAAJwD#####AAAAJwAAAAkA#####wH#AAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAG4AAADAAAAACQD#####Af8AAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAbwAAAMAAAAAJAP####8B#wAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABwAAAAwAAAAA8A#####wEAAP8AAgAAAAQAAADBAAAAwgAAAMMAAADBAAAAEAD#####AQAA#wAAAAUAAADEAAAAEAD#####AQAA#wAAAAUAAAC#AAAAKAD#####AAAA#wH#####CkCL9AAAAAAAQHAoUeuFHrgCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVhbmltMwAAAAAAABQAAABkAAAAPAAAALUAAQAAAAApAP####8AAAD#Af####8KQIwEAAAAAABAcjhR64UeuAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB21hc3F1ZTMAAAAAAAgAAAByAAAAcQAAAMYAAAC#AAAAxQAAAMQAAAAnAAAAegAAACoA#####wAAAP8B#####wpAjAwAAAAAAEB0CFHrhR64AgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJYXBwYXJhaXQzAAAAAAAIAAAAcgAAAHEAAADGAAAAvwAAAMUAAADEAAAAJwAAAHoAAAAALAD#####AAAA#wH#####EEBzWAAAAAAAQCUKPXCj1wwCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAxDb3JyZWN0aW9uIGMAAAAAAAQAAADJAAAAxwAAAJsAAADIAAAALAD#####AAAA#wH#####EECMdAAAAAAAQHb4UeuFHrgCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApDb3JyZWN0aW9uAAAAAAADAAAAnAAAALIAAADKAAAAhv##########";
    this.liste_questions = [];
    this.liste_corrections = []; // Liste de questions corrigées

    let texte = ``,
      texte_corr = ``;
    let tabfigA = [],
      tabfigB = [];
    let nx = 7,
      ny = 7,
      xB = 6,
      yB = 0,
      xC = 0,
      yC = 6,
      zoom = 8;
    let xM1, yM1, xN1, yN1, xM2, yM2, xN2, yN2, xM3, yM3, xN3, yN3;
    let trouver = false,
      indexa,
      numa,
      anum,
      indexaxe1,
      xmil1,
      ymil1,
      indexb,
      numb,
      bnum,
      indexaxe2,
      xmil2,
      ymil2,
      indexc,
      numc,
      cnum,
      indexaxe3,
      xmil3,
      ymil3;
    let point = [0, 0, 0];

    for (let y = 0; y < ny; y++) {
      // On initialise les tableaux avec les coordonnées des points de référence (A,B,C et D) de chaque translaté et son numéro dans le pavage.
      for (let x = 0; x < nx; x++) {
        tabfigA.push([2 + x * 6, 2 + y * 6, 2 * x + 2 * y * nx]);
        tabfigB.push([4 + x * 6, 4 + y * 6, 2 * x + 2 * y * nx + 1]);
      }
    }

    // Première question : une figure dans tabfigA, une symétrie par rapport à une droite parallèle à y=-x, l'image est dans tabfigB	 !
    // L'axe de symétrie est la médiatrice du segment d'extrémités les centres de gravités des figures A et B.

    indexa = randint(0, nx * ny - 1);
    numa = tabfigA[indexa][2];
    indexaxe1 = randint(0, nx * ny - 1); // l'index aléatoire dans le tableau des centres de gravité des figA sert à choisir un point de passage pour l'axe (xG-2,yG-2).
    //on calcule les coordonnées du milieu de [BC] on ajoute aux coordonnées du milieu de [BC] celles du vecteur BB'. (j'aurais pu réduire mais cela aurait rendu le calcul plus opaque)
    xmil1 = tabfigA[indexaxe1][0] - 2;
    ymil1 = tabfigA[indexaxe1][1] - 2;
    point = [tabfigA[indexa][0], tabfigA[indexa][1]];
    point = image_point_par_transformation(2, point, [xmil1, ymil1]);

    trouver = false;
    while (trouver == false) {
      for (let j = 0; j < nx * ny; j++) {
        if (point[0] == tabfigB[j][0] && point[1] == tabfigB[j][1]) {
          trouver = true;
          anum = tabfigB[j][2];
          break;
        }
      }
      if (trouver == false) {
        indexa = randint(0, nx * ny - 1);
        numa = tabfigA[indexa][2];
        indexaxe1 = randint(0, nx * ny - 1);
        xmil1 = tabfigA[indexaxe1][0] - 2;
        ymil1 = tabfigA[indexaxe1][1] - 2;
        point = [tabfigA[indexa][0], tabfigA[indexa][1]];
        point = image_point_par_transformation(2, point, [xmil1, ymil1]);
      }
    }
    xM1 = tabfigA[indexa][0];
    yM1 = tabfigA[indexa][1];
    xN1 = point[0];
    yN1 = point[1];

    texte = `Le point O peut être déplacé pour recadrer éventuellement le pavage.<br>`;
    texte +=
      num_alpha(0) +
      texte_en_couleur_et_gras(
        ` Quel est le numéro de la figure symétrique de la figure ${numa} dans la symétrie par rapport à la droite $(d_1)$ ?<br>`,
        `green`
      );
    texte_corr =
      num_alpha(0) +
      texte_en_couleur_et_gras(
        ` La figure symétrique de la figure ${numa} dans la symétrie par rapport à la droite $(d_1)$ porte le numéro ${anum}.<br>`,
        `green`
      );
    // Deuxième question : une figure dans tabfigA, une symétrie par rapport à une parallèle à y=x ql'image est une figure dans tabfigA
    // On tracera la médiatrice du segment d'extrémité les 2 centres de gravités symétriques.
    indexb = randint(0, nx * ny - 1);
    numb = tabfigA[indexb][2];
    indexaxe2 = randint(0, nx * ny - 1, [indexb]); // l'index aléatoire dans le tableau des centres de gravité des figA sert à choisir un point de passage pour l'axe (xG-2,yG-2).
    xmil2 = tabfigA[indexaxe2][0] - 2;
    ymil2 = tabfigA[indexaxe2][1] - 2;
    point = image_point_par_transformation(
      1,
      [tabfigA[indexb][0], tabfigA[indexb][1]],
      [xmil2, ymil2]
    );
    trouver = false;
    while (trouver == false) {
      for (let j = 0; j < nx * ny; j++) {
        if (point[0] == tabfigA[j][0] && point[1] == tabfigA[j][1]) {
          trouver = true;
          bnum = tabfigA[j][2];
          break;
        }
      }
      if (trouver == false) {
        indexb = randint(0, nx * ny - 1);
        numb = tabfigA[indexb][2];
        indexaxe2 = randint(0, nx * ny - 1);
        xmil2 = tabfigA[indexaxe2][0] - 2;
        ymil2 = tabfigA[indexaxe2][1] - 2;
        point = image_point_par_transformation(
          1,
          [tabfigA[indexb][0], tabfigA[indexb][1]],
          [xmil2, ymil2]
        );
      }
    }
    xM2 = tabfigA[indexb][0];
    yM2 = tabfigA[indexb][1];
    xN2 = point[0];
    yN2 = point[1];

    texte +=
      num_alpha(1) +
      texte_en_couleur_et_gras(
        ` Quel est le numéro de la figure symétrique de la figure ${numb} dans la symétrie par rapport à la droite $(d_2)$ ?<br>`,
        `red`
      );
    texte_corr +=
      num_alpha(1) +
      texte_en_couleur_et_gras(
        ` La figure symétrique de la figure ${numb} dans la symétrie par rapport à la droite $(2)$ porte le numéro ${bnum}.<br>`,
        `red`
      );

    // troisième question : une figure dans tabfigB, une symétrie par rapport à une parallèle à y=0, l'image est dans tabfigA
    indexc = 3; //randint(0,nx*ny-1)
    numc = tabfigB[indexc][2];
    indexaxe3 = 14; //randint(0,nx*ny-1) // l'index aléatoire dans le tableau des centres de gravité des figA sert à choisir un point de passage pour l'axe (xG-2,yG-2).
    xmil3 = tabfigA[indexaxe3][0] - 2;
    ymil3 = tabfigA[indexaxe3][1] - 2;
    point = [tabfigB[indexc][0], tabfigB[indexc][1]];
    point = changement_de_base_ortho_tri(
      image_point_par_transformation(
        3,
        changement_de_base_tri_ortho(point),
        changement_de_base_tri_ortho([xmil3, ymil3])
      )
    );
    point[0] = arrondi(point[0], 1); // Les coordonnées sont censées être entières mais les calculs JS laissent toujours de cent-milliardièmes indésirables.
    point[1] = arrondi(point[1], 1);
    trouver = false;
    while (trouver == false) {
      for (let j = 0; j < nx * ny; j++) {
        if (point[0] == tabfigA[j][0] && point[1] == tabfigA[j][1]) {
          trouver = true;
          cnum = tabfigA[j][2];
          break;
        }
      }
      if (trouver == false) {
        indexc = randint(0, nx * ny - 1);
        numc = tabfigB[indexc][2];
        indexaxe3 = randint(0, nx * ny - 1);
        xmil3 = tabfigA[indexaxe3][0] - 2;
        ymil3 = tabfigA[indexaxe3][1] - 2;
        point = [tabfigA[indexa][0], tabfigA[indexa][1]];
        point = changement_de_base_ortho_tri(
          image_point_par_transformation(
            3,
            changement_de_base_tri_ortho(point),
            [xmil3, ymil3]
          )
        );
        point[0] = arrondi(point[0], 1);
        point[1] = arrondi(point[1], 1);
      }
    }

    xM3 = tabfigB[indexc][0];
    yM3 = tabfigB[indexc][1];
    xN3 = point[0];
    yN3 = point[1];

    texte +=
      num_alpha(2) +
      texte_en_couleur_et_gras(
        ` Quel est le numéro de la figure symétrique de la figure ${numc} dans la symétrie par rapport à la droite $(d_3)$ ?<br>`,
        `blue`
      );
    texte_corr +=
      num_alpha(2) +
      texte_en_couleur_et_gras(
        ` La figure symétrique de la figure ${numc} dans la symétrie par rapport à la droite $(d_3)$ porte le numéro ${cnum}.<br>`,
        `blue`
      );

    if (sortie_html) {
      this.MG32code_pour_modifier_la_figure = `
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xB", "${xB}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yB", "${yB}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xC", "${xC}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yC", "${yC}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xM1", "${xM1}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yM1", "${yM1}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xN1", "${xN1}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yN1", "${yN1}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xM2", "${xM2}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yM2", "${yM2}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xN2", "${xN2}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yN2", "${yN2}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xM3", "${xM3}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yM3", "${yM3}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xN3", "${xN3}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yN3", "${yN3}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "nx", "${nx}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "ny", "${ny}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "zoom", "${zoom}");

			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xB", "${xB}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yB", "${yB}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xC", "${xC}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yC", "${yC}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xM1", "${xM1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yM1", "${yM1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xN1", "${xN1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yN1", "${yN1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xM2", "${xM2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yM2", "${yM2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xN2", "${xN2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yN2", "${yN2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xM3", "${xM3}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yM3", "${yM3}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xN3", "${xN3}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yN3", "${yN3}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "nx", "${nx}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "ny", "${ny}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "nx", "${nx}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "ny", "${ny}");	
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "zoom", "${zoom}");

			mtg32App.calculate("MG32svg${numero_de_l_exercice}");
			mtg32App.display("MG32svg${numero_de_l_exercice}");
			mtg32App.calculate("MG32svgcorr${numero_de_l_exercice}");
			mtg32App.executeMacro("MG32svgcorr${numero_de_l_exercice}","Correction")
			mtg32App.display("MG32svgcorr${numero_de_l_exercice}");
			`;

      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
      liste_de_question_to_contenu_sans_numero(this);
    } else {
      texte = ``;
      texte_cor = ``;
      this.liste_questions.push(texte); // on envoie la question
      this.liste_corrections.push(texte_corr);
      liste_de_question_to_contenu_sans_numero(this);
    }
  };
  // this.besoin_formulaire_numerique = ['Transformations',5, '1 : Symétries axiales\n 2 : Symétries centrales\n 3 : Rotations\n 4 : Translations\n 5 : Homothéties\n'];
}

/**
 * Calcul de volumes (cube et pavé droit).
 * @Auteur Jean-Claude Lhote
 */

function Calcul_de_volumes() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Calculs de volumes";
  this.consigne = "Calculer en détaillant le volume des solides donnés";
  this.nb_questions = 4;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = 1;

  let type_de_questions_disponibles;

  this.nouvelle_version = function (numero_de_l_exercice) {
    if (this.classe == 6) type_de_questions_disponibles = [1, 2];
    // sixième : cube et pavé droit
    else if (this.classe == 5) type_de_questions_disponibles = [1, 2, 3, 4];
    // cinquième : on ajoute les prismes et le cylindre
    else if (this.classe == 4)
      type_de_questions_disponibles = [1, 2, 3, 4, 5, 6];
    // Quatrième : on ajoute pyramides et cones
    else type_de_questions_disponibles = [1, 2, 3, 4, 5, 6, 7]; // Troisième : on ajoute les boules.
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let liste_unites = [
      [`~\\text{m}`, `~\\text{m}^3`],
      [`~\\text{dm}`, `~\\text{dm}^3`],
      [`~\\text{cm}`, `~\\text{cm}^3`],
      [`~\\text{mm}`, `~\\text{mm}^3`],
    ];
    for (
      let i = 0, texte, texte_corr, L, l, h, c, r, A, j, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      switch (liste_type_de_questions[i]) {
        case 1: // cube
          c = randint(2, 10);
          j = randint(0, 3); // pour le choix de l'unité
          texte = `Un cube de $${c} ${liste_unites[j][0]}$ d'arête.`;
          texte_corr = `$\\mathcal{V}= c^3 =c \\times c \\times c = ${c}${
            liste_unites[j][0]
          }\\times${c}${liste_unites[j][0]}\\times${c}${
            liste_unites[j][0]
          }=${tex_nombrec(c * c * c)}${liste_unites[j][1]}$`;
          break;
        case 2: // pavé droit
          if (this.sup == 1) {
            //sans conversion
            j = randint(0, 3); // pour le choix de l'unité
            l = randint(2, 5);
            h = randint(3, 6);
            L = randint(6, 10);
            texte = `Un pavé droit de $${l}${liste_unites[j][0]}$ de largeur, de $${L}${liste_unites[j][0]}$ de longueur et de $${h}${liste_unites[j][0]}$ de hauteur.`;
            texte_corr = `$\\mathcal{V}= l \\times L \\times h = ${l}${
              liste_unites[j][0]
            }\\times${L}${liste_unites[j][0]}\\times${h}${
              liste_unites[j][0]
            }=${tex_nombrec(l * L * h)}${liste_unites[j][1]}$`;
          } else {
            // avec conversion
            j = randint(1, 2); // pour le choix de l'unité	centrale
            l = randint(2, 5);
            h = randint(3, 6) * 10;
            L = arrondi(randint(6, 10) / 10, 1);
            texte = `Un pavé droit de $${l}${
              liste_unites[j][0]
            }$ de largeur, de $${tex_nombre(L)}${
              liste_unites[j - 1][0]
            }$ de longueur et de $${h}${liste_unites[j + 1][0]}$ de hauteur.`;
            texte_corr = `$\\mathcal{V}= l \\times L \\times h = ${l}${
              liste_unites[j][0]
            }\\times${tex_nombre(L)}${liste_unites[j - 1][0]}\\times${h}${
              liste_unites[j + 1][0]
            }=${l}${liste_unites[j][0]}\\times${L * 10}${
              liste_unites[j][0]
            }\\times${h / 10}${liste_unites[j][0]}=${tex_nombrec(
              arrondi(l * L * h)
            )}${liste_unites[j][1]}$`;
          }
          break;
        case 3: // Cylindre
          if (this.sup == 1) {
            //sans conversion
            j = randint(0, 3); // pour le choix de l'unité
            r = randint(2, 10);
            h = randint(2, 15);
            texte = `Un cylindre de $${r}${
              liste_unites[j][0]
            }$ de rayon et de $${tex_nombre(h)}${
              liste_unites[j][0]
            }$ de hauteur.`;
            texte_corr = `$\\mathcal{V}=\\pi \\times R ^2 \\times h =\\pi\\times\\left(${r}${
              liste_unites[j][0]
            }\\right)^2\\times${h}${liste_unites[j][0]}=${tex_nombrec(
              r * r * h
            )}\\pi${liste_unites[j][1]}\\approx${tex_nombrec(
              arrondi(r * r * h * Math.PI, 1)
            )}${liste_unites[j][1]}$`;
          } else {
            j = randint(2, 3); // pour le choix de l'unité
            r = randint(2, 10);
            h = randint(20, 150);
            texte = `Un cylindre de $${r}${
              liste_unites[j][0]
            }$ de rayon et de $${tex_nombrec(h / 10)}${
              liste_unites[j - 1][0]
            }$ de hauteur.`;
            texte_corr = `$\\mathcal{V}=\\pi \\times R ^2 \\times h =\\pi\\times\\left(${r}${
              liste_unites[j][0]
            }\\right)^2\\times${tex_nombrec(h / 10)}${
              liste_unites[j - 1][0]
            }=\\pi\\times${r * r}${liste_unites[j][0]}^2\\times${h}${
              liste_unites[j][0]
            }=${tex_nombrec(r * r * h)}\\pi${
              liste_unites[j][1]
            }\\approx${tex_nombrec(calcul(r * r * h * Math.PI, 1))}${
              liste_unites[j][1]
            }$`;
          }
          break;
        case 4: // prisme droit
          if (this.sup == 1) {
            //sans conversion
            j = randint(0, 3); // pour le choix de l'unité
            c = randint(2, 10);
            h = randint(2, 5);
            l = randint(6, 10);
            texte = `Un prisme droit de hauteur $${l}${liste_unites[j][0]}$ et dont les bases sont des triangles de base $${c}${liste_unites[j][0]}$ et de hauteur correspondante $${h}${liste_unites[j][0]}$.`;
            texte_corr = `$\\mathcal{V}=\\mathcal{B} \\times h=\\dfrac{${c}${
              liste_unites[j][0]
            }\\times${h}${liste_unites[j][0]}}{2}\\times${l}${
              liste_unites[j][0]
            }=${tex_nombrec(arrondi(calcul((c * h * l) / 2), 1))}${
              liste_unites[j][1]
            }$`;
          } else {
            j = randint(1, 2); // pour le choix de l'unité
            c = randint(2, 10);
            h = randint(30, 50);
            l = arrondi(randint(5, 15) / 10, 1);
            texte = `Un prisme droit de hauteur $${l}${
              liste_unites[j - 1][0]
            }$ et dont les bases sont des triangles de base $${c}${
              liste_unites[j][0]
            }$ et de hauteur correspondante $${h}${liste_unites[j + 1][0]}$.`;
            texte_corr = `$\\mathcal{V}=\\mathcal{B} \\times h=\\dfrac{${c}${
              liste_unites[j][0]
            }\\times${h}${liste_unites[j + 1][0]}}{2}\\times${tex_nombrec(l)}${
              liste_unites[j - 1][0]
            }=\\dfrac{${c}${liste_unites[j][0]}\\times${tex_nombrec(
              calcul(h / 10)
            )}${liste_unites[j][0]}}{2}\\times${l * 10}${
              liste_unites[j][0]
            }=${tex_nombrec(calcul((c * h * l) / 2))}${liste_unites[j][1]}$`;
          }
          break;
        case 5: // cone
          if (this.sup == 1) {
            //sans conversion
            j = randint(0, 3); // pour le choix de l'unité
            r = randint(2, 10);
            h = randint(2, 15);
            texte = `Un cône de $${r}${
              liste_unites[j][0]
            }$ de rayon et de $${tex_nombre(h)}${
              liste_unites[j][0]
            }$ de hauteur.`;
            texte_corr = `$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\pi\\times\\left(${r}${
              liste_unites[j][0]
            }\\right)^2\\times${h}${liste_unites[j][0]}=${tex_fraction(
              r * r * h,
              3
            )}\\pi${liste_unites[j][1]}\\approx${tex_nombrec(
              arrondi((r * r * h * Math.PI) / 3)
            )}${liste_unites[j][1]}$`;
          } else {
            j = randint(2, 3); // pour le choix de l'unité
            r = randint(2, 10);
            h = randint(20, 150);
            texte = `Un cône de $${r}${
              liste_unites[j][0]
            }$ de rayon et de $${tex_nombrec(h / 10)}${
              liste_unites[j - 1][0]
            }$ de hauteur.`;
            texte_corr = `$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\pi\\times\\left(${r}${
              liste_unites[j][0]
            }\\right)^2\\times${tex_nombrec(calcul(h / 10))}${
              liste_unites[j - 1][0]
            }=\\dfrac{1}{3}\\times\\pi\\times\\left(${r}${
              liste_unites[j][0]
            }\\right)^2\\times${tex_nombrec(h)}${
              liste_unites[j][0]
            }=${tex_fraction(r * r * h, 3)}\\pi\\approx${tex_nombrec(
              calcul((r * r * h * Math.PI) / 3, 1)
            )}${liste_unites[j][1]}$`;
          }
          break;
        case 6: // pyramide
          if (this.sup == 1) {
            //sans conversion
            j = randint(0, 3); // pour le choix de l'unité
            c = randint(2, 10);
            h = randint(2, 5);
            l = randint(6, 10);
            texte = `Une pyramide de hauteur $${h}${liste_unites[j][0]}$ et dont la base  est un carré de $${c}${liste_unites[j][0]}$ de côté.`;
            texte_corr = `$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\left(${c}${liste_unites[j][0]}\\right)^2\\times${h}${liste_unites[j][0]}`;
            if (calcul((c * c * h) / 3, false) == arrondi((c * c * h) / 3, 1))
              texte_corr += `=${tex_nombrec(
                arrondi(calcul((c * c * h) / 3), 1)
              )}${liste_unites[j][1]}$`;
            else
              texte_corr += `\\approx${tex_nombrec(
                arrondi(calcul((c * c * h) / 3), 1)
              )}${liste_unites[j][1]}$`;
          } else {
            j = randint(1, 2); // pour le choix de l'unité
            c = randint(2, 10);
            h = randint(30, 50);
            l = arrondi(randint(5, 15) / 10, 1);
            texte = `Une pyramide de hauteur $${tex_nombrec(h / 10)}${
              liste_unites[j - 1][0]
            }$ et dont la base  est un carré de $${c}${
              liste_unites[j][0]
            }$ et de hauteur correspondante $${h}${liste_unites[j + 1][0]}$.`;
            texte_corr = `$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\left(${c}${
              liste_unites[j][0]
            }\\right)^2\\times${tex_nombrec(h / 10)}${
              liste_unites[j - 1][0]
            }=\\dfrac{1}{3}\\times${c * c}${
              liste_unites[j][0]
            }^2\\times${tex_nombrec(h)}${liste_unites[j][0]}`;
            if (calcul((c * c * h) / 3, false) == arrondi((c * c * h) / 3, 1))
              texte_corr += `=${tex_nombrec(
                arrondi(calcul((c * h * c) / 3), 1)
              )}${liste_unites[j][1]}$`;
            else
              texte_corr += `\\approx${tex_nombrec(
                arrondi(calcul((c * h * c) / 3), 1)
              )}${liste_unites[j][1]}$`;
          }
          break;
        case 7: // boule
          j = randint(0, 3); // pour le choix de l'unité
          r = randint(2, 10);
          texte = `Une boule de $${r}${liste_unites[j][0]}$ de rayon.`;
          texte_corr = `$\\mathcal{V}=\\dfrac{4}{3} \\times \\pi \\times R^3=\\dfrac{4}{3}\\times\\pi\\times\\left(${r}${
            liste_unites[j][0]
          }\\right)^3=${tex_fraction(calcul(4 * r * r * r), 3)}\\pi${
            liste_unites[j][1]
          }\\approx${tex_nombrec(
            arrondi(calcul((4 * Math.PI * r * r * r) / 3), 1)
          )}${liste_unites[j][1]}$`;
          break;
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = [
    "Niveau de difficulté",
    2,
    "1 : pas de conversion\n2 : avec conversion",
  ];
}

/**
 * Transformations : trouvers un point numéroté par une des transformations du plan.
 * @Auteur Jean-Claude Lhote
 * Pas de version LaTeX
 */
function Transformations() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  // this.titre = "Trouver l'image d'un point par une transformation du plan";
  this.consigne = "";
  this.nb_questions = 1;
  this.nb_questions_modifiable = false;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  // this.sup = 1; // 1 pour les 6ème, 2 pour les 5èmes, 3 pour les 4èmes, et 4 pour les 3èmes.
  sortie_html ? (this.spacing_corr = 2.5) : (this.spacing_corr = 1.5);
  this.liste_packages = "tkz-euclide";
  this.nouvelle_version = function (numero_de_l_exercice) {
    this.type_exercice = "MG32";
    this.MG32editable = false;
    this.taille_div_MG32 = [700, 700];
    this.MG32codeBase64 =
      "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wAAAADEAACIuAAAgIkAAICKAAB9FwAAgCoAAH0TAAB9EgAAgCcAAIAoAAB9FAAAgK4AAIB8AACAhAAAgAsAAIAlAACAIAAAgA0AAIAOAACBWQAAgAwAAIDxAACBJwAAgHkAAIB7AACAegAAgCQAAIFxAACAbQAAgGoAAIC7AACAvAAAfR0AAH0eAACAgAAAgYMAAIAPAACAEwAAgBIAAIAXAACAFgAAgF4AAIBfAACAZQAAfRAAAIDrAACAEAAAgEgAAIAUAAB9KAAAgBoAAIAdAACA6QAAgVAAAIFRAACBDAAAgQ0AAIFSAACBUwAAgB4AAIAcAACAGwAAgBkAAIBgAACBIAAAgN4AAIDfAACBCgAAgOAAAIFDAACASQAAgEoAAIEXAACBGAAAgDMAAIB2AACA7AAAgO0AAIDYAACA2QAAgNoAAIDbAACAcgAAgXkAAIFiAACBZAAAgE0AAIAfAACAIgAAgCMAAIAhAACAxwAAgT0AAIELAACBBAAAgC0AAIFMAACAMAAAgSoAAIErAACALgAAgDEAAIDyAACBaQAAgWcAAIGlAACBdQAAgC8AAIA1AACAWQAAgFwAAH0KAAB9CwAAgUkAAIFLAAB9DgAAfQ8AAH0RAAB9FQAAfSQAAIBuAACAawAAgLAAAIFXAACAsQAAgVYAAICyAACBVAAAgLcAAIC4AACAswAAgPcAAIC0AACAtQAAgQYAAIEfAACBAgAAgY4AAIGPAACBAwAAgOMAAID2AACBBwAAgQkAAIEpAACBKAAAgOgAAIBvAACAcAAAgHQAAIBQAACA3QAAfRkAAH0YAACBbAAAgHEAAIFtAACBbgAAgXIAAIGGAAB9IwAAgQgAAIDkAACA5wAAgOUAAIDuAAB9KwAAfS0AAH0qAAB9LAAAgW8AAIFwAACBeAAAgXcAAH0mAACA8AAAfSUAAIEiAAB9KQAAfScAAIGjAACBpAAAfR8AAH0gAAB9IQAAfSIAAIBiAACAYwAAgGcAAIBoAACAaQAAgMkAAIBLAACArwAAgSwAAIDhAACA4gAAAAAFHAAAAtIAAAEBAAAAAAAAAAEAAABt#####wAAAAEACkNDYWxjQ29uc3QA#####wACcGkAFjMuMTQxNTkyNjUzNTg5NzkzMjM4NDb#####AAAAAQAKQ0NvbnN0YW50ZUAJIftURC0Y#####wAAAAEAB0NDYWxjdWwA#####wACeU8AATQAAAABQBAAAAAAAAAAAAACAP####8AAnhPAAE0AAAAAUAQAAAAAAAA#####wAAAAEACkNQb2ludEJhc2UA#####wEAAAAADgABRwDAKAAAAAAAAAAAAAAAAAAABQABQEnAAAAAAABAhAQo9cKPXP####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####ANjY2AAQAAABAQEAAAADAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AQAAAAAOAAFJAMAcAAAAAAAAQDQAAAAAAAAFAAFAUIAAAAAAAAAAAAT#####AAAAAQAJQ0Ryb2l0ZUFCAP####8BAAAAABAAAAEAAQAAAAMAAAAF#####wAAAAEAFkNEcm9pdGVQZXJwZW5kaWN1bGFpcmUA#####wDY2NgAEAAAAQEBAAAAAwAAAAb#####AAAAAQAJQ0NlcmNsZU9BAP####8BAAAAAAEAAAADAAAABf####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAHAAAACP####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8BAAAAAA4AAUoAwC4AAAAAAABAGAAAAAAAAAUAAgAAAAn#####AAAAAgAHQ1JlcGVyZQD#####AObm5gEBAAAAAwAAAAUAAAAKAQEBAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAAAEAABUQAAAAAAAAAAAEAIAAAAAAAABQAAAAALAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAA#####wAAAAEADENUcmFuc2xhdGlvbgD#####AAAAAwAAAAX#####AAAAAQALQ1BvaW50SW1hZ2UA#####wEAAAAADgACUTEAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAAA0AAAANAP####8AAAADAAAACgAAAA4A#####wEAAAAADgACUTIAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAAA######AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAwAAAABQCIAAAAAAAAAAAAOAP####8BAAAAAA4AAlEzAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA4AAAARAAAADgD#####AQAAAAAOAAJRNAAAAAAAAAAAAEAIAAAAAAAABQAAAAAQAAAAEf####8AAAABAAhDU2VnbWVudAD#####AQAAAAAQAAABAAEAAAAMAAAAEgAAAAUA#####wEAAAAADgACUjEAAAAAAAAAAABACAAAAAAAAAUAAT#uZmZmZmZmAAAAFAAAAA0A#####wAAAAwAAAATAAAADgD#####AQAAAAAOAAJSMgAAAAAAAAAAAEAIAAAAAAAABQAAAAAVAAAAFgAAABAA#####wEAAAAAEAAAAQABAAAAFQAAABcAAAAFAP####8Bf39#AA4AAlMxAAAAAAAAAAAAQAgAAAAAAAADAAE#u38NRim38QAAABgAAAALAP####8A5ubmAAEAAAAMAAAADgAAABAAAAAAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAABP#AAAAAAAAAAAAABP#AAAAAAAAD#####AAAAAgAIQ01lc3VyZVgA#####wADeFMxAAAAGgAAABn#####AAAAAgAIQ01lc3VyZVkA#####wADeVMxAAAAGgAAABkAAAACAP####8ACE5vbVBvaW50AAoxMCp5UzEreFMx#####wAAAAEACkNPcGVyYXRpb24AAAAAEwIAAAABQCQAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAHAAAABQAAAAb#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQD#####AQAAAABAKAAAAAAAAEAxAAAAAAAAAAAAGQ4AAf###wAAAAEAAAACAAAAAUBGgAAAAAAAAAAAAAIAAAAd#####wAAAAIAEkNMaWV1T2JqZXRQYXJQdExpZQD#####AQAAAAAAAB4AAAABQCQAAAAAAAAAAAAZAAAABQAAABkAAAAbAAAAHAAAAB0AAAAeAAAAFgD#####AAAAAAAAAB8AAAABQCQAAAAAAAAAAAAVAAAACQAAABUAAAAXAAAAGAAAABkAAAAbAAAAHAAAAB0AAAAeAAAAHwAAABYA#####wEAAAAAAAAZAAAAAUAkAAAAAAAAAAAAGQAAAAIAAAAZAAAAGQAAABYA#####wCkpKQAAAAhAAAAAUAkAAAAAAAAAAAAFQAAAAUAAAAVAAAAFwAAABgAAAAZAAAAIQAAAAoA#####wEAAAAAEAAAAQUAAQAAAAn#####AAAAAQAKQ1VuaXRleFJlcAD#####AAR1bml0AAAACwAAAA8A#####wAAAAMAAAATAwAAAAE#8AAAAAAAAAAAABQAAAAkAAAADgD#####AQAAAAAQAAJXIgBAJAAAAAAAAEAYAAAAAAAAAQAAAAAFAAAAJf####8AAAABAAlDTG9uZ3VldXIA#####wAAAAMAAAAmAAAADAD#####AQAAAAAQAAJPIgDAMQAAAAAAAMBBAAAAAAAACQAAAAAL#####wAAAAIACUNGb25jdGlvbgAAAAAUAAAAAgAAABkAAAAAFAAAAAH#####AAAAAQAJQ0Ryb2l0ZU9tAP####8BAAAAABAAAAEAAQAAAAsAAAAoAAAAAT#wAAAAAAAAAAAAAgD#####AARiaXMxAAExAAAAAT#wAAAAAAAAAAAABAD#####AQAAAAEQAAABAAEAAAAoAT#wAAAAAAAAAAAAAgD#####AAN4eCcAATEAAAABP#AAAAAAAAAAAAAPAP####8AAAAoAAAAFAAAACwAAAAEAP####8BAAAAARAAAAEAAQAAACgAP#AAAAAAAAAAAAACAP####8AA3l5JwABMQAAAAE#8AAAAAAAAAAAAA8A#####wAAACgAAAAUAAAALwAAABoA#####wEAAAAAEAAAAQABAAAACwAAACj#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAT#wAAAAAAAAAAAAAgD#####AARiaXMyAAExAAAAAT#wAAAAAAAAAAAADwD#####AAAAKAAAABQAAAAyAAAADwD#####AAAAAwAAAAE#8AAAAAAAAAAAAA4A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACgAAAA0#####wAAAAEAEUNQb2ludFBhckFic2Npc3NlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAADAAAABQAAAAFAHmZmZmZmZgAAAAIA#####wACeE4AATMAAAABQAgAAAAAAAAAAAAMAP####8BAAAAAQ4AAU0AwCwAAAAAAADAOQAAAAAAAAMAAAAACwAAAAFAGAAAAAAAAAAAAAFAFAAAAAAAAAAAAAIA#####wACeU4AAi0xAAAAGwAAAAE#8AAAAAAAAAAAAAwA#####wEAAAABDgABTgDAKAAAAAAAAMA9AAAAAAAAAwAAAAALAAAAEwAAAAABQBgAAAAAAAAAAAAUAAAANwAAABMAAAAAAUAUAAAAAAAAAAAAFAAAADkAAAACAP####8ACEFmZmljaGVOAAEwAAAAAQAAAAAAAAAAAAAAAgD#####AAhBZmZpY2hlTQABMAAAAAEAAAAAAAAAAAAAAA8A#####wAAAAMAAAATAwAAAAE#8AAAAAAAAAAAABQAAAA7AAAADgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAAOAAAAD0AAAAPAP####8AAAADAAAAEwMAAAABP#AAAAAAAAAAAAAUAAAAPAAAAA4A#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAADgAAAA#AAAADwD#####AAAAAwAAABMDAAAAAT#wAAAAAAAAAAAAFAAAADsAAAAOAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAA6AAAAQf####8AAAACAAxDQ29tbWVudGFpcmUA#####wAAAAAAwC4AAAAAAADAOAAAAAAAAAAAAEAQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAABTQAAAB0A#####wAAAAAAwCoAAAAAAADAOgAAAAAAAAAAAEIQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAABTgAAAAIA#####wAEbnVtMAACMjMAAAABQDcAAAAAAAAAAAACAP####8AAnkwAAxpbnQobnVtMC8xMCkAAAAZAgAAABMDAAAAFAAAAEUAAAABQCQAAAAAAAAAAAACAP####8AAngwAAxtb2QobnVtMCwxMCn#####AAAAAQANQ0ZvbmN0aW9uMlZhcgYAAAAUAAAARQAAAAFAJAAAAAAAAAAAAAwA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAAsAAAAUAAAARwAAABQAAABGAAAAAgD#####AARudW0yAAIyNwAAAAFAOwAAAAAAAAAAAAIA#####wACeTIADGludChudW0yLzEwKQAAABkCAAAAEwMAAAAUAAAASQAAAAFAJAAAAAAAAAAAAAIA#####wACeDIADG1vZChudW0yLDEwKQAAAB4GAAAAFAAAAEkAAAABQCQAAAAAAAAAAAAMAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAALAAAAFAAAAEsAAAAUAAAASgAAAAIA#####wAEbnVtMQACNTEAAAABQEmAAAAAAAAAAAACAP####8AAnkxAAxpbnQobnVtMS8xMCkAAAAZAgAAABMDAAAAFAAAAE0AAAABQCQAAAAAAAAAAAACAP####8AAngxAAxtb2QobnVtMSwxMCkAAAAeBgAAABQAAABNAAAAAUAkAAAAAAAAAAAADAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAACwAAABQAAABPAAAAFAAAAE4AAAACAP####8ACEFmZmljaGVPAAExAAAAAT#wAAAAAAAAAAAADwD#####AAAAAwAAABMDAAAAAT#wAAAAAAAAAAAAFAAAAFEAAAAOAP####8AAAAAABIAAU8AwDEAAAAAAADAQgAAAAAAAAkAAAAAKAAAAFIAAAAPAP####8AAAAoAAAAEwMAAAABP#AAAAAAAAAAAAAUAAAAKv####8AAAABAAxDRHJvaXRlSW1hZ2UA#####wAAAAAAEAAAAQACAAAAKQAAAFQAAAAPAP####8AAAAoAAAAEwMAAAABP#AAAAAAAAAAAAAUAAAAMgAAAB8A#####wAAAAAAEAAAAQACAAAAMQAAAFYAAAAPAP####8AAAAoAAAAEwMAAAABP#AAAAAAAAAAAAAUAAAALAAAAB8A#####wAAAAAAEAAAAQADAAAAKwAAAFgAAAAPAP####8AAAAoAAAAEwMAAAABP#AAAAAAAAAAAAAUAAAALwAAAB8A#####wAAAAAAEAAAAQADAAAALgAAAFr#####AAAAAgAJQ0NlcmNsZU9SAP####8BAAAAAAMAAAAoAAAAAUAUAAAAAAAAAAAAAAkA#####wAAAFcAAABcAAAACgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAQAAAF0AAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQACAAAAXQAAAAkA#####wAAAFsAAABcAAAACgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAQAAAGAAAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQACAAAAYAAAAAkA#####wAAAFUAAABcAAAACgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAgAAAGMAAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQABAAAAYwAAAAkA#####wAAAFkAAABcAAAACgD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAgAAAGYAAAAKAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQABAAAAZgAAAB0A#####wAAAAAAwDYAAAAAAADARoAAAAAAAAAAAF8QAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgyKSkAAAAdAP####8AAAAAAMA9AAAAAAAAwD8AAAAAAAAAAABiEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAACChkI0woNCkpAAAAHQD#####AAAAAADAAAAAAAAAAMBHAAAAAAAAAAAAZRAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAgoZCNMKDEpKQAAAB0A#####wAAAAAAQBwAAAAAAADAPQAAAAAAAAAAAGgQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAIKGQjTCgzKSkAAAAn##########8=";
    this.MG32codeBase64corr =
      "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wAAAADEAACIuAAAgIkAAICKAAB9FwAAgCoAAH0TAAB9EgAAgCcAAIAoAAB9FAAAgK4AAIB8AACAhAAAgAsAAIAlAACAIAAAgA0AAIAOAACBWQAAgAwAAIDxAACBJwAAgHkAAIB7AACAegAAgCQAAIFxAACAbQAAgGoAAIC7AACAvAAAfR0AAH0eAACAgAAAgYMAAIAPAACAEwAAgBIAAIAXAACAFgAAgF4AAIBfAACAZQAAfRAAAIDrAACAEAAAgEgAAIAUAAB9KAAAgBoAAIAdAACA6QAAgVAAAIFRAACBDAAAgQ0AAIFSAACBUwAAgB4AAIAcAACAGwAAgBkAAIBgAACBIAAAgN4AAIDfAACBCgAAgOAAAIFDAACASQAAgEoAAIEXAACBGAAAgDMAAIB2AACA7AAAgO0AAIDYAACA2QAAgNoAAIDbAACAcgAAgXkAAIFiAACBZAAAgE0AAIAfAACAIgAAgCMAAIAhAACAxwAAgT0AAIELAACBBAAAgC0AAIFMAACAMAAAgSoAAIErAACALgAAgDEAAIDyAACBaQAAgWcAAIGlAACBdQAAgC8AAIA1AACAWQAAgFwAAH0KAAB9CwAAgUkAAIFLAAB9DgAAfQ8AAH0RAAB9FQAAfSQAAIBuAACAawAAgLAAAIFXAACAsQAAgVYAAICyAACBVAAAgLcAAIC4AACAswAAgPcAAIC0AACAtQAAgQYAAIEfAACBAgAAgY4AAIGPAACBAwAAgOMAAID2AACBBwAAgQkAAIEpAACBKAAAgOgAAIBvAACAcAAAgHQAAIBQAACA3QAAfRkAAH0YAACBbAAAgHEAAIFtAACBbgAAgXIAAIGGAAB9IwAAgQgAAIDkAACA5wAAgOUAAIDuAAB9KwAAfS0AAH0qAAB9LAAAgW8AAIFwAACBeAAAgXcAAH0mAACA8AAAfSUAAIEiAAB9KQAAfScAAIGjAACBpAAAfR8AAH0gAAB9IQAAfSIAAIBiAACAYwAAgGcAAIBoAACAaQAAgMkAAIBLAACArwAAgSwAAIDhAACA4gAAAAAFHAAAAtIAAAEBAAAAAQAAAAYACFN5bWV0cmllAClDbHF1ZXIgc3VyIGxlIHBvaW50CkNsaXF1ZXIgc3VyIGxhIGRyb2l0ZQAAAAIAAAAGAAAAABr#####AAAAAQARQ0VsZW1lbnRHZW5lcmlxdWUAAAAAAAT#####AAAAAAAAAAAACf##########AAAAAQAHQ0NhbGN1bAD#####AAJ5TwABNP####8AAAABAApDQ29uc3RhbnRlQBAAAAAAAAAAAAABAP####8AAnhPAAE0AAAAAkAQAAAAAAAAAAAAAQD#####AARiaXMyAAExAAAAAj#wAAAAAAAAAAAAAQD#####AARudW0xAAI1MQAAAAJASYAAAAAAAAAAAAEA#####wACeTEADGludChudW0xLzEwKf####8AAAACAAlDRm9uY3Rpb24C#####wAAAAEACkNPcGVyYXRpb24D#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAUAAAACQCQAAAAAAAAAAAABAP####8AAngxAAxtb2QobnVtMSwxMCn#####AAAAAQANQ0ZvbmN0aW9uMlZhcgYAAAAFAAAABQAAAAJAJAAAAAAAAP####8AAAABAA9DU3ltZXRyaWVBeGlhbGUA#####wAAAAH#####AAAAAQALQ1BvaW50SW1hZ2UB#####wAAAP8AEgAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAAAAAAAI#####wAAAAEAB0NNaWxpZXUA#####wAAAP8AEgAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAAAAAAAJ#####wAAAAEACENTZWdtZW50Af####8AAAD#ABAAAAEAAgAAAAAAAAAKAAAACgH#####AAAA#wAQAAABAAIAAAAKAAAACf####8AAAACAAlDQ2VyY2xlT1IA#####wEAAP8AAgAAAAoAAAACP9MzMzMzMzMA#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAsAAAAN#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wAAAP8AEgAAAAAAAAAAAAAAQAgAAAAAAAAHAAIAAAAOAAAACgD#####AQAAAAAQAAABAAEAAAAKAAAAD#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8AAAAAAA0AAAEBAQAAAAoAAAAQ#####wAAAAEACUNDZXJjbGVPQQD#####AAAAAAEBAAAACgAAAA8AAAAMAP####8AAAARAAAAEgAAAA0A#####wAAAP8AEgAAAQcAAgAAABP#####AAAAAQAMQ1RyYW5zbGF0aW9uAP####8AAAAKAAAADwAAAAgA#####wAAAP8AEgAAAQcAAAAAFAAAABX#####AAAAAQAJQ1BvbHlnb25lAf####8AAAD#AAIAAAAFAAAACgAAAA8AAAAWAAAAFAAAAAr#####AAAAAQAOQ01hcnF1ZVNlZ21lbnQB#####wAAAP8AAgAAAAALAAAAEgH#####AAAA#wACAAAAAAwAAAABAAABNP####8AAAABAApDQ2FsY0NvbnN0AP####8AAnBpABYzLjE0MTU5MjY1MzU4OTc5MzIzODQ2AAAAAkAJIftURC0YAAAAAQD#####AAJ5TwABNAAAAAJAEAAAAAAAAAAAAAEA#####wACeE8AATQAAAACQBAAAAAAAAD#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFHAMAoAAAAAAAAAAAAAAAAAAAFAAFAScAAAAAAAECEBCj1wo9c#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8A2NjYABAAAAEBAQAAAAMBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBwAAAAAAABANAAAAAAAAAUAAUBQgAAAAAAAAAAABP####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAwAAAAUAAAAOAP####8A2NjYABAAAAEBAQAAAAMAAAAGAAAADwD#####AQAAAAABAAAAAwAAAAUAAAAMAP####8AAAAHAAAACAAAAA0A#####wEAAAAADgABSgDALgAAAAAAAEAYAAAAAAAABQACAAAACf####8AAAACAAdDUmVwZXJlAP####8A5ubmAQEAAAADAAAABQAAAAoBAQEAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAACP#AAAAAAAAAAAAACP#AAAAAAAAD#####AAAAAQAQQ1BvaW50RGFuc1JlcGVyZQD#####AQAAAAAQAAFRAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAsAAAACAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAQAP####8AAAADAAAABQAAAAgA#####wEAAAAADgACUTEAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAAA0AAAAQAP####8AAAADAAAACgAAAAgA#####wEAAAAADgACUTIAAAAAAAAAAABACAAAAAAAAAUAAAAADAAAAA######AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAwAAAACQCIAAAAAAAAAAAAIAP####8BAAAAAA4AAlEzAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA4AAAARAAAACAD#####AQAAAAAOAAJRNAAAAAAAAAAAAEAIAAAAAAAABQAAAAAQAAAAEQAAAAoA#####wEAAAAAEAAAAQABAAAADAAAABIAAAAWAP####8BAAAAAA4AAlIxAAAAAAAAAAAAQAgAAAAAAAAFAAE#7mZmZmZmZgAAABQAAAAQAP####8AAAAMAAAAEwAAAAgA#####wEAAAAADgACUjIAAAAAAAAAAABACAAAAAAAAAUAAAAAFQAAABYAAAAKAP####8BAAAAABAAAAEAAQAAABUAAAAXAAAAFgD#####AX9#fwAOAAJTMQAAAAAAAAAAAEAIAAAAAAAAAwABP7t#DUYpt#EAAAAYAAAAGAD#####AObm5gABAAAADAAAAA4AAAAQAAAAAAAAAgAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAj#wAAAAAAAAAAAAAj#wAAAAAAAA#####wAAAAIACENNZXN1cmVYAP####8AA3hTMQAAABoAAAAZ#####wAAAAIACENNZXN1cmVZAP####8AA3lTMQAAABoAAAAZAAAAAQD#####AAhOb21Qb2ludAAKMTAqeVMxK3hTMQAAAAQAAAAABAIAAAACQCQAAAAAAAAAAAAFAAAAHAAAAAUAAAAb#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQD#####AQAAAABAKAAAAAAAAEAxAAAAAAAAAAAAGQ4AAf###wAAAAEAAAACAAAAAkBGgAAAAAAAAAAAAAIAAAAd#####wAAAAIAEkNMaWV1T2JqZXRQYXJQdExpZQD#####AQAAAAAAAB4AAAACQCQAAAAAAAAAAAAZAAAABQAAABkAAAAbAAAAHAAAAB0AAAAeAAAAHgD#####AAAAAAAAAB8AAAACQCQAAAAAAAAAAAAVAAAACQAAABUAAAAXAAAAGAAAABkAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAB4A#####wEAAAAAAAAZAAAAAkAkAAAAAAAAAAAAGQAAAAIAAAAZAAAAGQAAAB4A#####wCkpKQAAAAhAAAAAkAkAAAAAAAAAAAAFQAAAAUAAAAVAAAAFwAAABgAAAAZAAAAIQAAAA0A#####wEAAAAAEAAAAQUAAQAAAAn#####AAAAAQAKQ1VuaXRleFJlcAD#####AAR1bml0AAAACwAAABoA#####wAAAAMAAAAEAwAAAAI#8AAAAAAAAAAAAAUAAAAkAAAACAD#####AQAAAAAQAAJXIgBAJAAAAAAAAEAYAAAAAAAAAQAAAAAFAAAAJf####8AAAABAAlDTG9uZ3VldXIA#####wAAAAMAAAAmAAAAGQD#####AQAAAAAQAAJPIgDAMQAAAAAAAMBBAAAAAAAACQAAAAALAAAAAwAAAAAFAAAAAgAAAAMAAAAABQAAAAH#####AAAAAQAJQ0Ryb2l0ZU9tAP####8BAAAAABAAAAEAAQAAAAsAAAAoAAAAAj#wAAAAAAAAAAAAAQD#####AARiaXMxAAExAAAAAj#wAAAAAAAAAAAAFQD#####AQAAAAEQAAABAAEAAAAoAT#wAAAAAAAAAAAAAQD#####AAN4eCcAATEAAAACP#AAAAAAAAAAAAAaAP####8AAAAoAAAABQAAACwAAAAVAP####8BAAAAARAAAAEAAQAAACgAP#AAAAAAAAAAAAABAP####8AA3l5JwABMQAAAAI#8AAAAAAAAAAAABoA#####wAAACgAAAAFAAAALwAAACEA#####wEAAAAAEAAAAQABAAAACwAAACj#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAj#wAAAAAAAAAAAAAQD#####AARiaXMyAAExAAAAAj#wAAAAAAAAAAAAGgD#####AAAAKAAAAAUAAAAyAAAAGgD#####AAAAAwAAAAI#8AAAAAAAAAAAAAgA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACgAAAA0#####wAAAAEAEUNQb2ludFBhckFic2Npc3NlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAADAAAABQAAAAJAHmZmZmZmZgAAAAEA#####wACeE4AATMAAAACQAgAAAAAAAAAAAAZAP####8BAAAAAQ4AAU0AwCwAAAAAAADAOQAAAAAAAAMAAAAACwAAAAJAGAAAAAAAAAAAAAJAFAAAAAAAAAAAAAEA#####wACeU4AAi0xAAAAIgAAAAI#8AAAAAAAAAAAABkA#####wEAAAABDgABTgDAKAAAAAAAAMA9AAAAAAAAAwAAAAALAAAABAAAAAACQBgAAAAAAAAAAAAFAAAANwAAAAQAAAAAAkAUAAAAAAAAAAAABQAAADkAAAABAP####8ACEFmZmljaGVOAAExAAAAAj#wAAAAAAAAAAAAAQD#####AAhBZmZpY2hlTQABMQAAAAI#8AAAAAAAAAAAABoA#####wAAAAMAAAAEAwAAAAI#8AAAAAAAAAAAAAUAAAA7AAAACAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAAOAAAAD0AAAAaAP####8AAAADAAAABAMAAAACP#AAAAAAAAAAAAAFAAAAPAAAAAgA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAADgAAAA#AAAAGgD#####AAAAAwAAAAQDAAAAAj#wAAAAAAAAAAAABQAAADsAAAAIAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAA6AAAAQf####8AAAACAAxDQ29tbWVudGFpcmUA#####wAAAAAAwC4AAAAAAADAOAAAAAAAAAAAAEAQAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAABTQAAACQA#####wAAAAAAwCoAAAAAAADAOgAAAAAAAAAAAEIQAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAABTgAAAAEA#####wAEbnVtMAACMjMAAAACQDcAAAAAAAAAAAABAP####8AAnkwAAxpbnQobnVtMC8xMCkAAAADAgAAAAQDAAAABQAAAEUAAAACQCQAAAAAAAAAAAABAP####8AAngwAAxtb2QobnVtMCwxMCkAAAAGBgAAAAUAAABFAAAAAkAkAAAAAAAAAAAAGQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAkAAAAACwAAAAUAAABHAAAABQAAAEYAAAABAP####8ABG51bTIAAjI3AAAAAkA7AAAAAAAAAAAAAQD#####AAJ5MgAMaW50KG51bTIvMTApAAAAAwIAAAAEAwAAAAUAAABJAAAAAkAkAAAAAAAAAAAAAQD#####AAJ4MgAMbW9kKG51bTIsMTApAAAABgYAAAAFAAAASQAAAAJAJAAAAAAAAAAAABkA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAAsAAAAFAAAASwAAAAUAAABKAAAAAQD#####AARudW0xAAI1MQAAAAJASYAAAAAAAAAAAAEA#####wACeTEADGludChudW0xLzEwKQAAAAMCAAAABAMAAAAFAAAATQAAAAJAJAAAAAAAAAAAAAEA#####wACeDEADG1vZChudW0xLDEwKQAAAAYGAAAABQAAAE0AAAACQCQAAAAAAAAAAAAZAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAALAAAABQAAAE8AAAAFAAAATgAAAAEA#####wAIQWZmaWNoZU8AATEAAAACP#AAAAAAAAAAAAAaAP####8AAAADAAAABAMAAAACP#AAAAAAAAAAAAAFAAAAUQAAAAgA#####wEAAAAAEgABTwDAMQAAAAAAAMBCAAAAAAAACQAAAAAoAAAAUgAAABoA#####wAAACgAAAAEAwAAAAI#8AAAAAAAAAAAAAUAAAAq#####wAAAAEADENEcm9pdGVJbWFnZQD#####AAAAAAAQAAABAAIAAAApAAAAVAAAABoA#####wAAACgAAAAEAwAAAAI#8AAAAAAAAAAAAAUAAAAyAAAAJQD#####AAAAAAAQAAABAAIAAAAxAAAAVgAAABoA#####wAAACgAAAAEAwAAAAI#8AAAAAAAAAAAAAUAAAAsAAAAJQD#####AAAAAAAQAAABAAMAAAArAAAAWAAAABoA#####wAAACgAAAAEAwAAAAI#8AAAAAAAAAAAAAUAAAAvAAAAJQD#####AAAAAAAQAAABAAMAAAAuAAAAWgAAAAsA#####wEAAAAAAwAAACgAAAACQBAAAAAAAAAAAAAADAD#####AAAAVwAAAFwAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQABAAAAXQAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAIAAABdAAAADAD#####AAAAWwAAAFwAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQABAAAAYAAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAIAAABgAAAADAD#####AAAAVQAAAFwAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQACAAAAYwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAEAAABjAAAADAD#####AAAAWQAAAFwAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQACAAAAZgAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAEAAABmAAAAJAD#####AAAAAADANgAAAAAAAMBGgAAAAAAAAAAAXxAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAgoZCNMKDIpKQAAACQA#####wAAAAAAwD0AAAAAAADAPwAAAAAAAAAAAGIQAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAIKGQjTCg0KSkAAAAkAP####8AAAAAAMAAAAAAAAAAwEcAAAAAAAAAAABlEAAAAAAAAAAAAAAAAAACAAAAAAAAAAAACChkI0woMSkpAAAAJAD#####AAAAAABAHAAAAAAAAMA9AAAAAAAAAAAAaBAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAgoZCNMKDMpKf####8AAAABAAVDRm9uYwD#####AARhYnNuAAltb2QoeCwxMCkAAAAGBv####8AAAACABFDVmFyaWFibGVGb3JtZWxsZQAAAAAAAAACQCQAAAAAAAAAAXgAAAAmAP####8ABG9yZG4ACWludCh4LzEwKQAAAAMCAAAABAMAAAAnAAAAAAAAAAJAJAAAAAAAAAABeAAAAAEA#####wACbjEAATEAAAACP#AAAAAAAAAAAAABAP####8AAm4yAAEyAAAAAkAAAAAAAAAAAAAAAQD#####AAJuMwACNzcAAAACQFNAAAAAAAAAAAABAP####8AAm40AAE1AAAAAkAUAAAAAAAAAAAAAQD#####AAJuNQACNTYAAAACQEwAAAAAAAAAAAABAP####8AAm42AAE2AAAAAkAYAAAAAAAAAAAAAQD#####AAJuNwABNwAAAAJAHAAAAAAAAAAAAAEA#####wACbjgAAjg1AAAAAkBVQAAAAAAAAAAAAQD#####AAJuOQACNTMAAAACQEqAAAAAAAAAAAAZAP####8BAAD#ABIAAlAxAAAAAAAAAAAAQAgAAAAAAAAJAAAAAAv#####AAAAAQAOQ0FwcGVsRm9uY3Rpb24AAABtAAAABQAAAG8AAAAoAAAAbgAAAAUAAABvAAAAGQD#####AQAA#wASAAJQMgAAAAAAAAAAAEAIAAAAAAAABwAAAAALAAAAKAAAAG0AAAAFAAAAcAAAACgAAABuAAAABQAAAHAAAAAZAP####8BAAD#ABIAAnAzAAAAAAAAAAAAQAgAAAAAAAAHAAAAAAsAAAAoAAAAbQAAAAUAAABxAAAAKAAAAG4AAAAFAAAAcQAAABkA#####wEAAP8AEgACUDQAAAAAAAAAAABACAAAAAAAAAkAAAAACwAAACgAAABtAAAABQAAAHIAAAAoAAAAbgAAAAUAAAByAAAAGQD#####AQAA#wASAAJQNQAAAAAAAAAAAEAIAAAAAAAACQAAAAALAAAAKAAAAG0AAAAFAAAAcwAAACgAAABuAAAABQAAAHMAAAAZAP####8BAAD#ABIAAlA2AAAAAAAAAAAAQAgAAAAAAAAJAAAAAAsAAAAoAAAAbQAAAAUAAAB0AAAAKAAAAG4AAAAFAAAAdAAAABkA#####wEAAP8AEgACUDcAAAAAAAAAAABACAAAAAAAAAkAAAAACwAAACgAAABtAAAABQAAAHUAAAAoAAAAbgAAAAUAAAB1AAAAGQD#####AQAA#wASAAJQOAAAAAAAAAAAAEAIAAAAAAAACQAAAAALAAAAKAAAAG0AAAAFAAAAdgAAACgAAABuAAAABQAAAHYAAAAZAP####8BAAD#ABIAAlA5AAAAAAAAAAAAQAgAAAAAAAAJAAAAAAsAAAAoAAAAbQAAAAUAAAB3AAAAKAAAAG4AAAAFAAAAdwAAACYA#####wAFdGVzdG4ABzEtKHg8MCkAAAAEAQAAAAI#8AAAAAAAAAAAAAQEAAAAJwAAAAAAAAACAAAAAAAAAAAAAXgAAAAaAP####8AAAAoAAAABAMAAAACP#AAAAAAAAAAAAAoAAAAgQAAAAUAAABvAAAACAD#####AAAA#wESAANQJzEAAAAAAAAAAABACAAAAAAAAAkAAAAAeAAAAIIAAAAaAP####8AAAAoAAAABAMAAAACP#AAAAAAAAAAAAAoAAAAgQAAAAUAAABwAAAACAD#####AAAA#wESAANQJzIAAAAAAAAAAABACAAAAAAAAAkAAAAAeQAAAIQAAAAaAP####8AAAAoAAAABAMAAAACP#AAAAAAAAAAAAAoAAAAgQAAAAUAAABxAAAACAD#####AAAA#wESAANQJzMAAAAAAAAAAABACAAAAAAAAAkAAAAAegAAAIYAAAAaAP####8AAAAoAAAABAMAAAACP#AAAAAAAAAAAAAoAAAAgQAAAAUAAAByAAAACAD#####AAAA#wESAANQJzQAAAAAAAAAAABACAAAAAAAAAkAAAAAewAAAIgAAAAaAP####8AAAAoAAAABAMAAAACP#AAAAAAAAAAAAAoAAAAgQAAAAUAAABzAAAACAD#####AAAA#wESAANQJzUAAAAAAAAAAABACAAAAAAAAAkAAAAAfAAAAIoAAAAaAP####8AAAAoAAAABAMAAAACP#AAAAAAAAAAAAAoAAAAgQAAAAUAAAB0AAAACAD#####AAAA#wESAANQJzYAAAAAAAAAAABACAAAAAAAAAkAAAAAfQAAAIwAAAAaAP####8AAAAoAAAABAMAAAACP#AAAAAAAAAAAAAoAAAAgQAAAAUAAAB1AAAACAD#####AAAA#wESAANQJzcAAAAAAAAAAABACAAAAAAAAAkAAAAAfgAAAI4AAAAaAP####8AAAAoAAAABAMAAAACP#AAAAAAAAAAAAAoAAAAgQAAAAUAAAB2AAAACAD#####AAAA#wESAANQJzgAAAAAAAAAAABACAAAAAAAAAkAAAAAfwAAAJAAAAAaAP####8AAAAoAAAABAMAAAACP#AAAAAAAAAAAAAoAAAAgQAAAAUAAAB3AAAACAD#####AAAA#wESAANQJzkAAAAAAAAAAABACAAAAAAAAAkAAAAAgAAAAJL#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wAIU3ltZXRyaWUAAAASAAAABgAAAAIAAACDAAAAVQAAAAEAAAAAlAADeU8xAAE0AAAAAkAQAAAAAAAAAAAAAQAAAACUAAN4TzEAATQAAAACQBAAAAAAAAAAAAABAAAAAJQAA2JpcwABMQAAAAI#8AAAAAAAAAAAAAEAAAAAlAADbnVtAAI1MQAAAAJASYAAAAAAAAAAAAEAAAAAlAABeQALaW50KG51bS8xMCkAAAADAgAAAAQDAAAABQAAAJgAAAACQCQAAAAAAAAAAAABAAAAAJQAAXgAC21vZChudW0sMTApAAAABgYAAAAFAAAAmAAAAAJAJAAAAAAAAAAAAAcAAAAAlAAAAFUAAAAIAQAAAJQAAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACDAAAAmwAAAAkAAAAAlAAAAP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAIMAAACcAAAACgEAAACUAAAA#wAQAAABAAIAAACDAAAAnQAAAAoBAAAAlAAAAP8AEAAAAQACAAAAnQAAAJwAAAALAAAAAJQBAAD#AAIAAACdAAAAAj#TMzMzMzMzAAAAAAwAAAAAlAAAAJ4AAACgAAAADQAAAACUAAAA#wAQAAAAAAAAAAAAAABACAAAAAAAAAcAAgAAAKEAAAAKAAAAAJQBAAAAABAAAAEAAQAAAJ0AAACiAAAADgAAAACUAAAAAAAQAAABAQEAAACdAAAAowAAAA8AAAAAlAAAAAABAQAAAJ0AAACiAAAADAAAAACUAAAApAAAAKUAAAANAAAAAJQAAAD#ABAAAAEHAAIAAACmAAAAEAAAAACUAAAAnQAAAKIAAAAIAAAAAJQAAAD#ABAAAAEHAAAAAKcAAACoAAAAEQEAAACUAAAA#wACAAAABQAAAJ0AAACiAAAAqQAAAKcAAACdAAAAEgEAAACUAP8AAAEBAAAAAJ4AAAASAQAAAJQA#wAAAQEAAAAAnwAAACkA#####wAIU3ltZXRyaWUAAAASAAAABgAAAAIAAACFAAAAVwAAAAEAAAAArQADeU8xAAE0AAAAAkAQAAAAAAAAAAAAAQAAAACtAAN4TzEAATQAAAACQBAAAAAAAAAAAAABAAAAAK0AA2JpcwABMQAAAAI#8AAAAAAAAAAAAAEAAAAArQADbnVtAAI1MQAAAAJASYAAAAAAAAAAAAEAAAAArQABeQALaW50KG51bS8xMCkAAAADAgAAAAQDAAAABQAAALEAAAACQCQAAAAAAAAAAAABAAAAAK0AAXgAC21vZChudW0sMTApAAAABgYAAAAFAAAAsQAAAAJAJAAAAAAAAAAAAAcAAAAArQAAAFcAAAAIAQAAAK0AAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACFAAAAtAAAAAkAAAAArQAAAP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAIUAAAC1AAAACgEAAACtAAAA#wAQAAABAAIAAACFAAAAtgAAAAoBAAAArQAAAP8AEAAAAQACAAAAtgAAALUAAAALAAAAAK0BAAD#AAIAAAC2AAAAAj#TMzMzMzMzAAAAAAwAAAAArQAAALcAAAC5AAAADQAAAACtAAAA#wAQAAAAAAAAAAAAAABACAAAAAAAAAcAAgAAALoAAAAKAAAAAK0BAAAAABAAAAEAAQAAALYAAAC7AAAADgAAAACtAAAAAAAQAAABAQEAAAC2AAAAvAAAAA8AAAAArQAAAAABAQAAALYAAAC7AAAADAAAAACtAAAAvQAAAL4AAAANAAAAAK0AAAD#ABAAAAEHAAIAAAC#AAAAEAAAAACtAAAAtgAAALsAAAAIAAAAAK0AAAD#ABAAAAEHAAAAAMAAAADBAAAAEQEAAACtAAAA#wACAAAABQAAALYAAAC7AAAAwgAAAMAAAAC2AAAAEgEAAACtAP8AAAEBAQAAALcAAAASAQAAAK0A#wAAAQEBAAAAuAAAACkA#####wAIU3ltZXRyaWUAAAASAAAABgAAAAIAAACHAAAAWQAAAAEAAAAAxgADeU8xAAE0AAAAAkAQAAAAAAAAAAAAAQAAAADGAAN4TzEAATQAAAACQBAAAAAAAAAAAAABAAAAAMYAA2JpcwABMQAAAAI#8AAAAAAAAAAAAAEAAAAAxgADbnVtAAI1MQAAAAJASYAAAAAAAAAAAAEAAAAAxgABeQALaW50KG51bS8xMCkAAAADAgAAAAQDAAAABQAAAMoAAAACQCQAAAAAAAAAAAABAAAAAMYAAXgAC21vZChudW0sMTApAAAABgYAAAAFAAAAygAAAAJAJAAAAAAAAAAAAAcAAAAAxgAAAFkAAAAIAQAAAMYAAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACHAAAAzQAAAAkAAAAAxgAAAP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAIcAAADOAAAACgEAAADGAAAA#wAQAAABAAIAAACHAAAAzwAAAAoBAAAAxgAAAP8AEAAAAQACAAAAzwAAAM4AAAALAAAAAMYBAAD#AAIAAADPAAAAAj#TMzMzMzMzAAAAAAwAAAAAxgAAANAAAADSAAAADQAAAADGAAAA#wAQAAAAAAAAAAAAAABACAAAAAAAAAcAAgAAANMAAAAKAAAAAMYBAAAAABAAAAEAAQAAAM8AAADUAAAADgAAAADGAAAAAAAQAAABAQEAAADPAAAA1QAAAA8AAAAAxgAAAAABAQAAAM8AAADUAAAADAAAAADGAAAA1gAAANcAAAANAAAAAMYAAAD#ABAAAAEHAAIAAADYAAAAEAAAAADGAAAAzwAAANQAAAAIAAAAAMYAAAD#ABAAAAEHAAAAANkAAADaAAAAEQEAAADGAAAA#wACAAAABQAAAM8AAADUAAAA2wAAANkAAADPAAAAEgEAAADGAP8AAAEBAgAAANAAAAASAQAAAMYA#wAAAQECAAAA0QAAACkA#####wAIU3ltZXRyaWUAAAASAAAABgAAAAIAAACJAAAAWwAAAAEAAAAA3wADeU8xAAE0AAAAAkAQAAAAAAAAAAAAAQAAAADfAAN4TzEAATQAAAACQBAAAAAAAAAAAAABAAAAAN8AA2JpcwABMQAAAAI#8AAAAAAAAAAAAAEAAAAA3wADbnVtAAI1MQAAAAJASYAAAAAAAAAAAAEAAAAA3wABeQALaW50KG51bS8xMCkAAAADAgAAAAQDAAAABQAAAOMAAAACQCQAAAAAAAAAAAABAAAAAN8AAXgAC21vZChudW0sMTApAAAABgYAAAAFAAAA4wAAAAJAJAAAAAAAAAAAAAcAAAAA3wAAAFsAAAAIAQAAAN8AAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACJAAAA5gAAAAkAAAAA3wAAAP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAIkAAADnAAAACgEAAADfAAAA#wAQAAABAAIAAACJAAAA6AAAAAoBAAAA3wAAAP8AEAAAAQACAAAA6AAAAOcAAAALAAAAAN8BAAD#AAIAAADoAAAAAj#TMzMzMzMzAAAAAAwAAAAA3wAAAOkAAADrAAAADQAAAADfAAAA#wAQAAAAAAAAAAAAAABACAAAAAAAAAcAAgAAAOwAAAAKAAAAAN8BAAAAABAAAAEAAQAAAOgAAADtAAAADgAAAADfAAAAAAAQAAABAQEAAADoAAAA7gAAAA8AAAAA3wAAAAABAQAAAOgAAADtAAAADAAAAADfAAAA7wAAAPAAAAANAAAAAN8AAAD#ABAAAAEHAAIAAADxAAAAEAAAAADfAAAA6AAAAO0AAAAIAAAAAN8AAAD#ABAAAAEHAAAAAPIAAADzAAAAEQEAAADfAAAA#wACAAAABQAAAOgAAADtAAAA9AAAAPIAAADoAAAAEgEAAADfAP8AAAEBAwAAAOkAAAASAQAAAN8A#wAAAQEDAAAA6v####8AAAABAAlDUm90YXRpb24A#####wAAACgAAAACQFaAAAAAAAAAAAAIAP####8AAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACLAAAA+AAAAAoA#####wAAAP8AEAAAAQABAAAAKAAAAIsAAAAKAP####8AAAD#ABAAAAEAAQAAACgAAAD5#####wAAAAIAE0NNYXJxdWVBbmdsZU9yaWVudGUA#####wD#AAAAAQAAAAFAMAAAAAAAAAAAAIsAAAAoAAAA+QAAAAASAP####8A#wAAAAEBAAAA+gAAABIA#####wD#AAAAAQEAAAD7#####wAAAAEAEkNBcmNEZUNlcmNsZURpcmVjdAD#####AP8AAAABAAAAKAAAAIsAAAD5AAAAKgD#####AAAAKAAAACIAAAACQFaAAAAAAAAAAAAIAP####8AAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACNAAABAAAAAAoA#####wAAAP8AEAAAAQABAAAAKAAAAI0AAAAKAP####8AAAD#ABAAAAEAAQAAACgAAAEBAAAAEgD#####AP8AAAABAQAAAQMAAAASAP####8A#wAAAAEBAAABAgAAACsA#####wD#AAAAAQAAAAFAMAAAAAAAAAAAAI0AAAAoAAABAQD#####AAAAAQAUQ0FyY0RlQ2VyY2xlSW5kaXJlY3QA#####wD#AAAAAQAAACgAAACNAAABAf####8AAAABABFDU3ltZXRyaWVDZW50cmFsZQD#####AAAAKAAAAAgA#####wAAAP8AEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAI8AAAEIAAAACgD#####AAAA#wAQAAABAAEAAACPAAAAKAAAAAoA#####wAAAP8AEAAAAQABAAAAKAAAAQkAAAASAP####8A#wAAAAECAAABCwAAABIA#####wD#AAAAAQIAAAEKAAAAEAD#####AAAAQAAAAEIAAAAIAP####8AAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAACRAAABDv####8AAAABAAhDVmVjdGV1cgD#####AP8AAAAQAAABAAEAAACRAAABDwAAAAAvAP####8A#wAAABAAAAEAAQAAAEAAAABCAAAAAAoA#####wD#AAAAEAAAAQEBAAAAQAAAAJEAAAAKAP####8A#wAAABAAAAEBAQAAAEIAAAEPAAAAAQD#####AAFrAAE0AAAAAkAQAAAAAAAAAAAAGgD#####AAAAKAAAAAUAAAEUAAAACAD#####AAAA#wESAAFBAAAAAAAAAAAAQAgAAAAAAAAJAAAAAJMAAAEVAAAACgD#####AAAA#wAQAAABAQEAAAAoAAAAkwAAAAoA#####wAAAP8AEAAAAQEBAAAAKAAAARYAAAApAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAACgAAACT#####wAAAAEAC0NNZWRpYXRyaWNlAAAAARkBAAAAABAAAAEAAQAAACgAAACTAAAACQAAAAEZAQAAAAAQAAABBQAAAAAoAAAAkwAAAAsAAAABGQEAAAAAAQAAARsAAAACQDAAAAAAAAABAAAADAAAAAEZAAABGgAAARwAAAANAAAAARkBAAAAABAAAAEFAAEAAAEdAAAAIAEAAAEZAAAAKAAAAJMAAAApAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAACgAAAEWAAAAMAAAAAEgAQAAAAAQAAABAAEAAAAoAAABFgAAAAkAAAABIAEAAAAAEAAAAQUAAAAAKAAAARYAAAALAAAAASABAAAAAAEAAAEiAAAAAkAwAAAAAAAAAQAAAAwAAAABIAAAASEAAAEjAAAADQAAAAEgAQAAAAAQAAABBQABAAABJAAAACABAAABIAAAACgAAAEWAAAAFgD#####Af8AAAASAAFGAAAAAAAAAAAAQAgAAAAAAAAFAAE#585Z#OWfzwAAARgAAAAeAP####8A#wAAAAABJwAAAAQAAAAABQAAARQAAAACP#AAAAAAAAAAAAEnAAAAAgAAAScAAAEnAAAAAQD#####AANuMTAAAjE5AAAAAkAzAAAAAAAAAAAAGQD#####Af8AAAASAANQMTAAAAAAAAAAAABACAAAAAAAAAUAAAAACwAAACgAAABtAAAABQAAASkAAAAoAAAAbgAAAAUAAAEpAAAAGgD#####AAAAKAAAAAQDAAAAAj#wAAAAAAAAAAAAKAAAAIEAAAAFAAABKQAAAAgA#####wAAAP8BEgAEUCcxMAAAAAAAAAAAAEAIAAAAAAAACQAAAAEqAAABKwAAAAoA#####wAAAP8AEAAAAQEBAAAAKAAAASwAAAABAP####8AAmsyAAE0AAAAAkAQAAAAAAAAAAAAGgD#####AAAAKAAAAAQDAAAAAj#wAAAAAAAAAAAABQAAAS4AAAAIAP####8AAAD#ABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAEsAAABLwAAABYA#####wEAAP8AEgABRQAAAAAAAAAAAEAIAAAAAAAABQABP+MmybJsmyQAAAEtAAAAHgD#####AP8AAAAAATEAAAAEAAAAAAMAAAAABQAAAS4AAAACP#AAAAAAAAAAAAExAAAAAgAAATEAAAExAAAACgD#####AAAA#wAQAAABAQEAAAAoAAABMAAAACf##########w==";
    this.liste_questions = [];
    this.liste_corrections = []; // Liste de questions corrigées
    let antecedents = [0, 0, 0],
      images = [0, 0, 0],
      k = [1, 1, 1],
      k1,
      k2,
      xO = 4,
      yO = 4,
      xu,
      yu,
      point_reseau; // k : rapports d'homothéties, (xO,yO) point de rencontre des droites et centre, les composantes du vecteur de translation : (xu,yu)
    let bis1 = 0,
      bis2 = 0,
      xx = 0,
      yy = 0,
      AfficheO = 1,
      AfficheN = 0,
      AfficheM = 0;
    let n = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
    let texte = ``,
      texte_corr = ``;
    let point = [[]];
    let transformation = parseInt(this.sup) - 1;
    let liste_type_de_questions = [
      [1, 2, 3, 4],
      [1, 2, 3, 4, 7],
      [1, 2, 3, 4, 7, 8],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ];
    let choix_transformation = combinaison_listes(
      liste_type_de_questions[transformation],
      3
    );
    xu = randint(-3, 3);
    if (xu == 0) yu = randint(-3, 3, [0]);
    // pas de vecteur nul de translation.
    else yu = randint(-3, 3);
    for (let j = 0; j < 3; j++) {
      if (choix_transformation[j] == 10) {
        k[j] = choice([2, 4]) * randint(-1, 1, [0]); // rapport d'homothétie < 1 ( 0.5 ou 0.25 )
        k2 = k[j];
      } else if (choix_transformation[j] == 9) {
        k[j] = choice([1, 2, 3]) * randint(-1, 1, [0]); // rapport d'homothétie >=1 (1,2 ou 3)
        k1 = k[j];
      }
      antecedents[j] = randint(0, 99);
      point[j] = image_point_par_transformation(
        choix_transformation[j],
        [antecedents[j] % 10, Math.floor(antecedents[j] / 10)],
        [xO, yO],
        [xu, yu],
        k[j]
      );
      images[j] = point[j][0] + point[j][1] * 10;
      // Limitation des points invariants
      if (choix_transformation[j] == 1 && images[j] % 11 == 0) point[j][0] = -1; // Point impossible sur (d1) pour sa symétrie
      if (choix_transformation[j] == 3 && Math.floor(images[j] / 10 == 4))
        point[j][0] = -1; // Point impossible sur (d3) pour sa symétrie
      if (choix_transformation[j] == 4 && images[j] % 10 == 4) point[j][0] = -1; // Point impossible sur  (d4) pour sa symétrie
      if (
        (choix_transformation[j] == 5 || choix_transformation[j] == 5) &&
        antecedents[j] == 44
      )
        point[j][0] = -1; // point O impossible pour rotation
      if (choix_transformation[j] == 10 && antecedents[j] == 44)
        point[j][0] = -1; // point O impossible par homothétie de rapport 1/k2
      // pour éviter les points en dehors des clous dans homothétie de rapport 1/k2
      if (
        point[j][0] - Math.floor(point[j][0]) == 0 &&
        point[j][1] - Math.floor(point[j][1]) == 0
      )
        point_reseau = true;
      else point_reseau = false;
      // On vérifie que l'image est bien un point du réseau sinon, on change.
      while (
        point[j][0] < 0 ||
        point[j][0] > 9 ||
        point[j][1] < 0 ||
        point[j][1] > 9 ||
        point_reseau == false
      ) {
        if (choix_transformation[j] == 10) {
          k[j] = choice([2, 4]) * randint(-1, 1, [0]); // rapport d'homothétie < 1 ( 0.5 ou 0.25 )
          k2 = k[j];
        } else if (choix_transformation[j] == 9) {
          k[j] = choice([1, 2, 3]) * randint(-1, 1, [0]); // rapport d'homothétie >=1 (1,2 ou 3)
          k1 = k[j];
        }
        antecedents[j] = randint(0, 99);
        point[j] = image_point_par_transformation(
          choix_transformation[j],
          [antecedents[j] % 10, Math.floor(antecedents[j] / 10)],
          [xO, yO],
          [xu, yu],
          k[j]
        );
        images[j] = point[j][0] + point[j][1] * 10;
        // Limitation des points invariants
        if (choix_transformation[j] == 1 && images[j] % 11 == 0)
          point[j][0] = -1; // Point impossible sur (d1) pour sa symétrie
        if (choix_transformation[j] == 3 && Math.floor(images[j] / 10 == 4))
          point[j][0] = -1; // Point impossible sur (d3) pour sa symétrie
        if (choix_transformation[j] == 4 && images[j] % 10 == 4)
          point[j][0] = -1; // Point impossible sur  (d4) pour sa symétrie
        if (
          (choix_transformation[j] == 5 || choix_transformation[j] == 5) &&
          antecedents[j] == 44
        )
          point[j][0] = -1; // point O impossible pour rotation
        if (choix_transformation[j] == 10 && antecedents[j] == 44)
          point[j][0] = -1; // point O impossible par homothétie de rapport 1/k2

        // pour éviter les points en dehors des clous dans homothétie de rapport 1/k2
        if (
          point[j][0] - Math.floor(point[j][0]) == 0 &&
          point[j][1] - Math.floor(point[j][1]) == 0
        )
          point_reseau = true;
        else point_reseau = false;
      }
    }
    // n[i] est un tableau contenant -1 pour la transformation d'indice i si elle n'est pas utilisée, et contenant le numéro du point concerné si la transformation i est utilisée pour ce point.
    // Je l'utilise pour faire apparaître la correction liée au point et à la transformation.
    for (let j = 0; j < 3; j++) {
      n[choix_transformation[j] - 1] = antecedents[j];
    }
    for (let i = 0; i < 3; i++) {
      switch (choix_transformation[i]) {
        case 1:
          bis1 = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro du symétrique du point ${antecedents[i]} par rapport à la droite $(d_1)$.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` Le symétrique du point ${antecedents[i]} par rapport à $(d_1)$ est le point ${images[i]}.<br>`;
          break;

        case 2:
          bis2 = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro du symétrique du point ${antecedents[i]} par rapport à la droite $(d_2)$.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` Le symétrique du point ${antecedents[i]} par rapport à $(d_2)$ est le point ${images[i]}.<br>`;
          break;

        case 3:
          xx = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro du symétrique du point ${antecedents[i]} par rapport à la droite $(d_3)$.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` Le symétrique du point ${antecedents[i]} par rapport à $(d_3)$ est le point ${images[i]}.<br>`;
          break;

        case 4:
          yy = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro du symétrique du point ${antecedents[i]} par rapport à la droite $(d_4)$.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` Le symétrique du point ${antecedents[i]} par rapport à $(d_4)$ est le point ${images[i]}.<br>`;
          break;

        case 5:
          AfficheO = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro de  l'image du point ${antecedents[i]} par la rotation de centre O et d'angle 90° dans le sens anti-horaire.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` L'image du point ${antecedents[i]} par la rotation de centre O et d'angle 90° dans le sens anti-horaire est le point ${images[i]}.<br>`;
          break;

        case 6:
          AfficheO = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro de  l'image du point ${antecedents[i]} par la rotation de centre O et d'angle 90° dans le sens horaire.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` L'image du point ${antecedents[i]} par la rotation de centre O et d'angle 90° dans le sens horaire est le point ${images[i]}.<br>`;
          break;

        case 7:
          AfficheO = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro de l'image du point ${antecedents[i]} par la symétrie de centre O.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` L'image du point ${antecedents[i]} par la symétrie de centre O est le point ${images[i]}.<br>`;
          break;

        case 11:
          AfficheO = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro de l'image du point ${antecedents[i]} par la rotation de centre O et d'angle 60° dans le sens anti-horaire.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` L'image du point ${antecedents[i]} par la rotation de centre O et d'angle 60° dans le sens anti-horaire est le point ${images[i]}.<br>`;
          break;

        case 12:
          AfficheO = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro de l'image du point ${antecedents[i]} par la rotation de centre O et d'angle 60° dans le sens horaire.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` L'image du point ${antecedents[i]} par la rotation de centre O et d'angle 60° dans le sens horaire est le point ${images[i]}.<br>`;
          break;

        case 13:
          AfficheO = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro de l'image du point ${antecedents[i]} par la rotation de centre O et d'angle 120° dans le sens anti-horaire.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` L'image du point ${antecedents[i]} par la rotation de centre O et d'angle 120° dans le sens anti-horaire est le point ${images[i]}.<br>`;
          break;

        case 14:
          AfficheO = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro de l'image du point ${antecedents[i]} par la rotation de centre O et d'angle 120° dans le sens horaire.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` L'image du point ${antecedents[i]} par la rotation de centre O et d'angle 120° dans le sens horaire est le point ${images[i]}.<br>`;
          break;

        case 8:
          AfficheN = 1;
          AfficheM = 1;
          // AfficheOO=1
          texte +=
            num_alpha(i) +
            ` Donner le numéro de l'image du point ${antecedents[i]} par la translation qui transforme M en N.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` L'image du point ${antecedents[i]} par la translation qui transforme M en N est le point ${images[i]}.<br>`;
          break;

        case 9:
          AfficheO = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro de l'image du point ${antecedents[i]} par l'homothétie de centre O et de rapport ${k1}.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` L'image du point ${antecedents[i]} par l'homothétie de centre O et de rapport ${k1} est le point ${images[i]}.<br>`;
          break;

        case 10:
          AfficheO = 1;
          texte +=
            num_alpha(i) +
            ` Donner le numéro de l'image du point ${
              antecedents[i]
            } par l'homothétie de centre O et de rapport $${tex_fraction_reduite(
              1,
              k2
            )}$.<br>`;
          texte_corr +=
            num_alpha(i) +
            ` L'image du point ${
              antecedents[i]
            } par l'homothétie de centre O et de rapport $${tex_fraction_reduite(
              1,
              k2
            )}$ est le point ${images[i]}.<br>`;
          break;
      }
    }
    if (sortie_html) {
      /*
			booléens permettant l'affichage des éléments si =1 et le masquage si =0
			bis1 affiche la droite de coefficient directeur 1 passant par O'
			bis2 affiche la droite de coefficient directeur -1 passant par O'
			xx' affiche la droite horizontale passant par O'
			yy' affiche la droite verticale passant par O'
			AfficheO' affiche O' comme son nom l'indique.
			AfficheN, AffichM pour afficher les points M et N définissant la translation.
			
			*/
      this.MG32code_pour_modifier_la_figure = `
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "t0", "${choix_transformation[0]}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "t1", "${choix_transformation[1]}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "t2", "${choix_transformation[2]}");						
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "num0", "${antecedents[0]}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "num1", "${antecedents[1]}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "num2", "${antecedents[2]}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yO", "${yO}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xO", "${xO}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yN", "${yu}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xN", "${xu}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "yy\'", "${yy}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "xx\'", "${xx}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "bis1", "${bis1}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "bis2", "${bis2}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "AfficheO", "${AfficheO}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "AfficheM", "${AfficheM}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "AfficheN", "${AfficheN}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "k", "${k1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "k2", "${k2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "n1", "${n[0]}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "n2", "${n[1]}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "n3", "${n[2]}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "n4", "${n[3]}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "n5", "${n[4]}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "n6", "${n[5]}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "n7", "${n[6]}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "n8", "${n[7]}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "n9", "${n[8]}");	
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "n10", "${n[9]}");									
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "num0", "${antecedents[0]}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "num1", "${antecedents[1]}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "num2", "${antecedents[2]}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yO", "${yO}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xO", "${xO}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yN", "${yu}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xN", "${xu}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "yy\'", "${yy}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "xx\'", "${xx}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "bis1", "${bis1}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "bis2", "${bis2}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "AfficheO", "${AfficheO}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "AfficheM", "${AfficheM}");
			mtg32App.giveFormula2("MG32svgcorr${numero_de_l_exercice}", "AfficheN", "${AfficheN}");	

			
			
			mtg32App.calculate("MG32svg${numero_de_l_exercice}");
			mtg32App.display("MG32svg${numero_de_l_exercice}");
			mtg32App.calculate("MG32svgcorr${numero_de_l_exercice}");
			mtg32App.display("MG32svgcorr${numero_de_l_exercice}");
			`;
      this.liste_questions.push(texte);
      this.liste_corrections.push(texte_corr);
      liste_de_question_to_contenu_sans_numero(this);
    } else {
      texte = ``;
      texte_cor = ``;
      this.liste_questions.push(texte); // on envoie la question
      this.liste_corrections.push(texte_corr);
      liste_de_question_to_contenu_sans_numero(this);
    }
  };
  // this.besoin_formulaire_numerique = ['Transformations',5, '1 : Symétries axiales\n 2 : Symétries centrales\n 3 : Rotations\n 4 : Translations\n 5 : Homothéties\n'];
}

// Exercices paramétrés pour correspondre au référentiel
function Tracer_des_perpendiculaires() {
  Parallele_et_Perpendiculaires.call(this);
  this.titre = "Tracer des perpendiculaires";
  this.sup = 1;
  this.besoin_formulaire_numerique = false;
}
function Tracer_des_paralleles() {
  Parallele_et_Perpendiculaires.call(this);
  this.titre = "Tracer des parallèles";
  this.sup = 2;
  this.besoin_formulaire_numerique = false;
}
function Tracer_des_perpendiculaires_et_des_paralleles() {
  Parallele_et_Perpendiculaires.call(this);
  this.titre = "Tracer des perpendiculaires et des parallèles";
  this.sup = 3;
  this.besoin_formulaire_numerique = false;
}
/**
 * Exercice en html seulement. Symétrie centrale dans un pavage.
 * @Auteur Jean-Claude Lhote
 */
function Pavages_et_demi_tour() {
  Pavages_et_transformations.call(this);
  this.titre =
    "Trouver l'image d'une figure par une symétrie centrale dans un pavage";
  this.sup = 2;
}
/**
 * Exercice en html seulement. Symétrie axiale dans un pavage.
 * @Auteur Jean-Claude Lhote
 */
function Pavages_et_symetries() {
  Pavages_et_transformations.call(this);
  this.titre =
    "Trouver l'image d'une figure par une symétrie axiale dans un pavage carré";
  this.sup = 1;
}
/**
 * Exercice en html seulement. Translations dans un pavage.
 * @Auteur Jean-Claude Lhote
 */
function Pavages_et_translation() {
  Pavages_et_transformations.call(this);
  this.titre =
    "Trouver l'image d'une figure par une translation dans un pavage";
  this.sup = 3;
}
/**
 * Exercice en html seulement. Rotationss dans un pavage.
 * @Auteur Jean-Claude Lhote
 */
function Pavages_et_rotation() {
  Pavages_et_transformations.call(this);
  this.titre =
    "Trouver l'image d'une figure par une rotation de 90 degrés dans un pavage";
  this.sup = 4;
}

/**
 * Lire les coordonnées d'un point du quart de plan positif avec une précision allant de l'unité à 0,25.
 * @Auteur Jean-Claude Lhote
 */
function Reperage_point_du_quart_de_plan() {
  Reperage_point_du_plan.call(this);
  this.titre = "Déterminer les coordonnées (positives) d'un point";
  this.quart_de_plan = true;
}
function Lecture_expression_fonctions_lineaires() {
  Lecture_expression_fonctions_affines.call(this);
  this.titre = "Déterminer une fonction linéaire";
  this.lineaire = true;
}

function Resoudre_une_equation_produit_nul_niv2() {
  Resoudre_une_equation_produit_nul.call(this);
  this.titre = "Résoudre une équation produit nul (niveau 2)";
  this.sup = 2;
}

function Divisions_euclidiennes_niv2() {
  Divisions_euclidiennes.call(this);
  this.sup = 2;
  this.titre = "Divisions euclidiennes - Niveau 2";
}
function Exercice_Trigo_longueurs_4e() {
  Exercice_Trigo_longueurs.call(this);
  this.sup = 1;
  this.besoin_formulaire_numerique = false;
  this.titre =
    "Utiliser le cosinus pour calculer une longueur dans un triangle rectangle";
}

function Exercice_Trigo_angles_4e() {
  this.sup = 1;
  this.quatrieme = true;
  this.titre =
    "Utiliser le cosinus pour calculer la mesure d'un angle dans un triangle rectangle";
  Exercice_Trigo_angles.call(this);
}

function Transformations_6e() {
  Transformations.call(this);
  this.sup = 1;
  this.titre = `Trouver l'image d'un point par une symétrie axiale`;
}

function Symetrie_axiale_5e() {
  Transformations.call(this);
  this.sup = 1;
  this.titre = `Trouver l'image d'un point par une symétrie axiale`;
}

function Transformations_5e() {
  Transformations.call(this);
  this.sup = 2;
  this.titre = `Trouver l'image d'un point par une symétrie axiale ou centrale`;
}

function Transformations_4e() {
  Transformations.call(this);
  this.sup = 3;
  this.titre = `Trouver l'image d'un point par une symétrie axiale ou centrale ou par une translation`;
}

function Transformations_3e() {
  Transformations.call(this);
  this.sup = 4;
  this.titre = `Trouver l'image d'un point par une transformation choisie aléatoirement`;
}

function Calcul_de_volumes_6e() {
  this.sup = 1;
  this.classe = 6;
  Calcul_de_volumes.call(this);
}

function Calcul_de_volumes_5e() {
  this.sup = 1;
  this.classe = 5;
  Calcul_de_volumes.call(this);
}

function Calcul_de_volumes_4e() {
  this.sup = 1;
  this.classe = 4;
  Calcul_de_volumes.call(this);
}

function Calcul_de_volumes_3e() {
  this.sup = 1;
  this.classe = 3;
  Calcul_de_volumes.call(this);
}

function Exercice_6N12() {
  Tables_de_multiplications.call(this);
  this.sup = "10-100-1000";
  this.titre = "Multiplier un entier par 10, 100, 1 000...";
}

function Exercice_6N13() {
  this.sup = 1;
  this.titre = "Utiliser les préfixes multiplicateurs (déca à kilo)";
  Exercice_conversions.call(this);
}

function Exercice_6N24() {
  Exercice_conversions.call(this);
  this.sup = 3;
  this.titre =
    "Utiliser les préfixes multiplicateurs et diviseurs (milli à kilo)";
  this.correction_avec_des_fractions = true;
  this.spacing_corr = 2;
}

function Reglages_6M12() {
  Exercice_conversions_de_longueurs.call(this);
  this.sup = 3;
  this.nb_questions = 8;
}

function Reglages_6M23() {
  Exercice_conversions_aires.call(this);
  this.sup = 3;
  this.nb_cols_corr = 1;
}

function Reglages_6M10() {
  Exercice_perimetres_et_aires.call(this);
  this.sup = 1;
}

function Reglages_6M22() {
  Exercice_perimetres_et_aires.call(this);
  this.sup = 2;
  this.titre = "Périmètres et aires de disques (à partir d'un texte).";
}

function Reglages_6N34() {
  Exercice_conversions.call(this);
  this.sup = 5;
  this.titre = "Conversions avec tous les préfixes de milli à tera.";
}

function Thales_4eme() {
  //Dans cette version, pas de configuration papillon reservée aux 3èmes.
  Exercice_Thales.call(this);
  this.quatrieme = true;
}

function Reciproque_Thales_4eme() {
  Reciproque_Thales.call(this);
  this.quatrieme = true;
}

/**
 * Vocabulaire des triangles
 * 6G20-2 ; 5G20-1
 * @author Sébastien Lozano
 */

function Vocabulaire_des_triangles() {
  "use strict";
  Exercice.call(this); // Héritage de la classe Exercice()
  this.consigne = "Donner la nature des triangles en justifiant.";
  this.sup = 1;
  this.titre = "Vocabulaire des triangles";
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.nb_questions_modifiable = false;

  this.liste_packages = `bclogo`;

  let type_de_questions_disponibles;

  this.nouvelle_version = function (numero_de_l_exercice) {
    if (this.classe == 6) {
      if (this.sup == 1) {
        this.nb_questions = 4;
      } else {
        //this.nb_questions = 9;
        this.nb_questions = 5;
      }
    } else if (this.classe == 5) {
      //this.nb_questions = 11;
      this.nb_questions = 5;
    }

    let texte_intro = ``;
    if (sortie_html) {
      if (this.classe == 6) {
        texte_intro += `- Un <b>triangle quelconque</b> est un triangle qui ne présente aucune relation particulière entre ses angles ou ses côtés.`;
        texte_intro += `<br>`;
        texte_intro += `- Un <b>triangle isocèle</b> est un triangle qui a deux côtés de même longueur.`;
        texte_intro += `<br>`;
        texte_intro += `- Un <b>triangle équilatéral</b> est un triangle qui a trois côtés de même longueur.`;
        texte_intro += `<br>`;
        texte_intro += `- Un <b>triangle rectangle</b> est un triangle qui a un angle droit.`;
      } else if (this.classe == 5) {
        texte_intro += `- Un <b>triangle quelconque</b> est un triangle qui ne présente aucune relation particulière entre ses angles ou ses côtés.`;
        texte_intro += `<br>`;
        texte_intro += `- Un <b>triangle isocèle</b> est un triangle qui a deux côtés ou deux angles de même mesure.`;
        texte_intro += `<br>`;
        texte_intro += `- Un <b>triangle équilatéral</b> est un triangle qui a trois côtés ou trois angles de même mesure.`;
        texte_intro += `<br>`;
        texte_intro += `- Un <b>triangle rectangle</b> est un triangle qui a un angle droit.`;
      }
      // this.introduction = lampe_message({
      // 	titre : `Quelques définitions`,
      // 	texte : texte_intro,
      // 	couleur : `nombres`
      // });

      this.bouton_aide = modal_texte_long(
        numero_de_l_exercice,
        //`<i class="lightbulb outline icon"></i> Quelques définitions`,
        `<i class="info circle icon"></i> Quelques définitions`,
        texte_intro,
        "Aide",
        "info circle"
      );
    } else {
      if (this.classe == 6) {
        texte_intro = tex_enumerate_sans_numero(
          [
            `- Un \\textbf{triangle quelconque} est un triangle qui ne présente aucune relation particulière entre ses angles ou ses côtés.`,
            `- Un \\textbf{triangle isocèle} est un triangle qui a deux côtés de même longueur.`,
            `- Un \\textbf{triangle équilatéral} est un triangle qui a trois côtés de même longueur.`,
            `- Un \\textbf{triangle rectangle} est un triangle qui a un angle droit.`,
          ],
          1
        );
      } else if (this.classe == 5) {
        texte_intro = tex_enumerate_sans_numero(
          [
            `- Un \\textbf{triangle quelconque} est un triangle qui ne présente aucune relation particulière entre ses angles ou ses côtés.`,
            `- Un \\textbf{triangle isocèle} est un triangle qui a deux côtés ou deux angles de même mesure.`,
            `- Un \\textbf{triangle équilatéral} est un triangle qui a trois côtés ou trois angles de même mesure.`,
            `- Un \\textbf{triangle rectangle} est un triangle qui a un angle droit.`,
          ],
          1
        );
      }

      this.introduction = lampe_message({
        titre: `Quelques définitions`,
        texte: texte_intro,
        couleur: `nombres`,
      });
    }

    if (this.classe == 6) {
      if (this.sup == 1) {
        type_de_questions_disponibles = [1, 3, 5, 7]; //6e facile isocèle, équilatéral et rectangle.
      } else if (this.sup == 2) {
        //type_de_questions_disponibles = [1,3,4,5,6,7,8,9]; //6e tout sauf par les angles
        type_de_questions_disponibles = [1, 4, 6, 8, 9]; //6e les autres cas sauf par les angles
      }
    } else if (this.classe == 5) {
      // type_de_questions_disponibles = [1,2,3,4,5,6,7,8,9,10,11]; // 5e : on ajoute la caractéisation par les angles
      type_de_questions_disponibles = [
        choice([1, 2]),
        choice([3, 4, 10]),
        choice([5, 6, 11]),
        7,
        choice([8, 9]),
      ]; // 5e : tout sauf les basiques de 6e, on ajoute la caractéisation par les angles
    }
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
    //let liste_type_de_questions = type_de_questions_disponibles // Tous les types de questions sont posées --> à remettre comme ci dessus

    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, l1, l2, l3, a1, a2, a3, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      // on fixe longueur min et max en cm
      let l_min = 2;
      let l_max = 20;
      // on fixe angle min et max en degré
      let a_min = 30;
      let a_max = 100;

      // on crée les triangles
      let triangle_quelconque = new Triangles();
      let triangle_isocele = new Triangles();
      let triangle_equilateral = new Triangles();
      let triangle_rectangle = new Triangles();
      let triangle_isocele_rectangle = new Triangles();

      switch (liste_type_de_questions[i]) {
        case 1: // triangle quelconque par les longueurs sans conversion
          while (!triangle_quelconque.isTrueTriangleLongueurs()) {
            l1 = randint(l_min, l_max);
            l2 = randint(l_min, l_max, l1);
            l3 = randint(l_min, l_max, [l1, l2]);
            triangle_quelconque.l1 = l1;
            triangle_quelconque.l2 = l2;
            triangle_quelconque.l3 = l3;
          }

          texte = `${triangle_quelconque.getNom()} est un triangle tel que ${
            triangle_quelconque.getLongueurs()[0]
          } $= ${triangle_quelconque.l1}$ cm ; `;
          texte += `${triangle_quelconque.getLongueurs()[1]} $= ${
            triangle_quelconque.l2
          }$ cm et ${triangle_quelconque.getLongueurs()[2]} $= ${
            triangle_quelconque.l3
          }$ cm.`;
          texte_corr = `Les 3 côtés du triangle ${triangle_quelconque.getNom()} sont différents donc ${triangle_quelconque.getNom()} est un triangle quelconque.`;
          break;
        case 2: // triangle quelconque par les angles
          while (!triangle_quelconque.isTrueTriangleAngles()) {
            a1 = randint(a_min, a_max);
            a2 = randint(a_min, a_max, a1);
            a3 = randint(a_min, a_max, [a1, a2]);
            triangle_quelconque.a1 = a1;
            triangle_quelconque.a2 = a2;
            triangle_quelconque.a3 = a3;
          }

          texte = `${triangle_quelconque.getNom()} est un triangle tel que ${
            triangle_quelconque.getAngles()[0]
          } $= ${triangle_quelconque.a1}\\degree$ ; `;
          texte += ` ${triangle_quelconque.getAngles()[1]} $= ${
            triangle_quelconque.a2
          }\\degree$ et  ${triangle_quelconque.getAngles()[2]} $= ${
            triangle_quelconque.a3
          }\\degree$ .`;
          texte_corr = `Les 3 angles du triangle ${triangle_quelconque.getNom()} sont différents donc ${triangle_quelconque.getNom()} est un triangle quelconque.`;
          break;

        case 3: // triangle isocèle sans conversion
          while (!triangle_isocele.isTrueTriangleLongueurs()) {
            l1 = randint(l_min, l_max);
            l2 = randint(l_min, l_max, l1);
            triangle_isocele.l1 = l1;
            triangle_isocele.l2 = l1;
            triangle_isocele.l3 = l2;
          }
          texte = `${triangle_isocele.getNom()} est un triangle tel que ${
            triangle_isocele.getLongueurs()[0]
          } $= ${triangle_isocele.l1}$ cm ; `;
          texte += `${triangle_isocele.getLongueurs()[1]} $= ${
            triangle_isocele.l2
          }$ cm et ${triangle_isocele.getLongueurs()[2]} $= ${
            triangle_isocele.l3
          }$ cm.`;
          texte_corr = `Les longueurs des côtés ${
            triangle_isocele.getCotes()[0]
          } et ${
            triangle_isocele.getCotes()[1]
          } du triangle ${triangle_isocele.getNom()} valent toutes les deux $${
            triangle_isocele.l1
          }$ cm donc ${triangle_isocele.getNom()} est un triangle isocèle en ${
            triangle_isocele.getSommets()[1]
          }.`;
          break;
        case 4: // triangle isocèle avec conversion
          while (!triangle_isocele.isTrueTriangleLongueurs()) {
            l1 = randint(l_min, l_max);
            l2 = randint(l_min, l_max, l1);
            triangle_isocele.l1 = l1;
            triangle_isocele.l2 = l1;
            triangle_isocele.l3 = l2;
          }
          texte = `${triangle_isocele.getNom()} est un triangle tel que ${
            triangle_isocele.getLongueurs()[0]
          } $= ${triangle_isocele.l1 * 10}$ mm ; `;
          texte += `${triangle_isocele.getLongueurs()[1]} $= ${
            triangle_isocele.l2
          }$ cm et ${triangle_isocele.getLongueurs()[2]} $= ${
            triangle_isocele.l3
          }$ cm.`;
          texte_corr = `${triangle_isocele.getLongueurs()[0]} $= ${
            triangle_isocele.l1 * 10
          }$ mm $= ${triangle_isocele.l1}$ cm = ${
            triangle_isocele.getLongueurs()[1]
          }, ${triangle_isocele.getNom()} a donc deux côtés égaux, c'est un triangle isocèle en ${
            triangle_isocele.getSommets()[1]
          }.`;
          break;
        case 5: // triangle équilatéral sans conversion
          while (!triangle_equilateral.isTrueTriangleLongueurs()) {
            l1 = randint(l_min, l_max);
            triangle_equilateral.l1 = l1;
            triangle_equilateral.l2 = l1;
            triangle_equilateral.l3 = l1;
          }
          texte = `${triangle_equilateral.getNom()} est un triangle tel que ${
            triangle_equilateral.getLongueurs()[0]
          } $= ${triangle_equilateral.l1}$ cm ; `;
          texte += `${triangle_equilateral.getLongueurs()[1]} $= ${
            triangle_equilateral.l2
          }$ cm et ${triangle_equilateral.getLongueurs()[2]} $= ${
            triangle_equilateral.l3
          }$ cm.`;
          texte_corr = `Les longeurs des trois côtés du triangle ${triangle_equilateral.getNom()} sont égales donc c'est un triangle équilatéral.`;
          break;
        case 6: // triangle équilatéral avec conversion
          while (!triangle_equilateral.isTrueTriangleLongueurs()) {
            l1 = randint(l_min, l_max);
            triangle_equilateral.l1 = l1;
            triangle_equilateral.l2 = l1;
            triangle_equilateral.l3 = l1;
          }
          texte = `${triangle_equilateral.getNom()} est un triangle tel que ${
            triangle_equilateral.getLongueurs()[0]
          } $= ${triangle_equilateral.l1}$ cm ; `;
          texte += `${triangle_equilateral.getLongueurs()[1]} $= ${
            triangle_equilateral.l2 * 10
          }$ mm et ${triangle_equilateral.getLongueurs()[2]} $= ${tex_nombre(
            triangle_equilateral.l3 / 10
          )}$ dm.`;
          texte_corr = `${triangle_equilateral.getLongueurs()[1]} $= ${
            triangle_equilateral.l2 * 10
          }$ mm $= ${triangle_equilateral.l2}$ cm.`;
          texte_corr += `<br> ${
            triangle_equilateral.getLongueurs()[2]
          } $= ${tex_nombre(triangle_equilateral.l3 / 10)}$ dm $= ${
            triangle_equilateral.l3
          }$ cm.`;
          texte_corr += `<br> ${triangle_equilateral.getLongueurs()[0]} $= ${
            triangle_equilateral.l1
          }$ cm.`;
          texte_corr += `<br> Les longeurs des trois côtés du triangle ${triangle_equilateral.getNom()} sont égales donc c'est un triangle équilatéral.`;
          break;
        case 7: // triangle rectangle pas de conversion necessaire
          triangle_rectangle.l1 = randint(l_min, l_max);
          triangle_rectangle.l2 = randint(l_min, l_max, l1);
          triangle_rectangle.a1 = 90;

          texte = `${triangle_rectangle.getNom()} est un triangle tel que ${
            triangle_rectangle.getLongueurs()[0]
          } $= ${triangle_rectangle.l1}$ cm ; `;
          texte += `${triangle_rectangle.getLongueurs()[1]} $= ${
            triangle_rectangle.l2
          }$ cm `;
          texte += `et `;
          if (this.classe == 6) {
            texte += ` qui a un angle droit en ${
              triangle_rectangle.getSommets()[1]
            }.`;
            texte_corr = `Le triangle ${triangle_rectangle.getNom()} a un angle droit en ${
              triangle_rectangle.getSommets()[1]
            } donc ${triangle_rectangle.getNom()} est rectangle en ${
              triangle_rectangle.getSommets()[1]
            }.`;
          } else {
            texte += `${triangle_rectangle.getAngles()[0]} $= ${
              triangle_rectangle.a1
            }\\degree$.`;
            texte_corr = `L'angle ${
              triangle_rectangle.getAngles()[0]
            } du triangle ${triangle_rectangle.getNom()} est un angle droit donc ${triangle_rectangle.getNom()} est rectangle en ${
              triangle_rectangle.getSommets()[1]
            }.`;
          }

          break;
        case 8: // triangle isocèle rectangle sans conversion
          triangle_isocele_rectangle.l1 = randint(l_min, l_max);
          triangle_isocele_rectangle.l2 = triangle_isocele_rectangle.l1;
          triangle_isocele_rectangle.a1 = 90;

          texte = `${triangle_isocele_rectangle.getNom()} est un triangle tel que ${
            triangle_isocele_rectangle.getLongueurs()[0]
          }$= ${triangle_isocele_rectangle.l1}$ cm ; `;
          texte += `${triangle_isocele_rectangle.getLongueurs()[1]} $= ${
            triangle_isocele_rectangle.l2
          }$ cm `;
          texte += `et `;
          if (this.classe == 6) {
            texte += `qui a un angle droit en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
            texte_corr = `Le triangle ${triangle_isocele_rectangle.getNom()} a un angle droit en ${
              triangle_isocele_rectangle.getSommets()[1]
            } donc ${triangle_isocele_rectangle.getNom()} est rectangle en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
            texte_corr += `<br> ${
              triangle_isocele_rectangle.getLongueurs()[0]
            } $=$ ${triangle_isocele_rectangle.getLongueurs()[1]} $= ${
              triangle_isocele_rectangle.l1
            }$ cm donc ${triangle_isocele_rectangle.getNom()} est isocèle en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
            texte_corr += `<br> Le triangle ${triangle_isocele_rectangle.getNom()} est donc isocèle et rectangle en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
          } else {
            texte += `${triangle_isocele_rectangle.getAngles()[0]} $= ${
              triangle_isocele_rectangle.a1
            }\\degree$.`;
            texte_corr = `L'angle ${
              triangle_isocele_rectangle.getAngles()[0]
            } du triangle ${triangle_isocele_rectangle.getNom()} est un angle droit donc ${triangle_isocele_rectangle.getNom()} est rectangle en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
            texte_corr += `<br> ${
              triangle_isocele_rectangle.getLongueurs()[0]
            } $=$ ${triangle_isocele_rectangle.getLongueurs()[1]} $= ${
              triangle_isocele_rectangle.l1
            }$ cm donc ${triangle_isocele_rectangle.getNom()} est isocèle en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
            texte_corr += `<br> Le triangle ${triangle_isocele_rectangle.getNom()} est donc isocèle et rectangle en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
          }
          break;
        case 9: // triangle isocèle rectangle avec conversion
          triangle_isocele_rectangle.l1 = randint(l_min, l_max);
          triangle_isocele_rectangle.l2 = triangle_isocele_rectangle.l1;
          triangle_isocele_rectangle.a1 = 90;

          texte = `${triangle_isocele_rectangle.getNom()} est un triangle tel que ${
            triangle_isocele_rectangle.getLongueurs()[0]
          } $= ${triangle_isocele_rectangle.l1 * 10}$ mm ; `;
          texte += `${triangle_isocele_rectangle.getLongueurs()[1]} $= ${
            triangle_isocele_rectangle.l2
          }$ cm`;
          texte += ` et `;
          if (this.classe == 6) {
            texte += `qui a un angle droit en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
            texte_corr = `Le triangle ${triangle_isocele_rectangle.getNom()} a un angle droit en ${
              triangle_isocele_rectangle.getSommets()[1]
            } donc ${triangle_isocele_rectangle.getNom()} est rectangle en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
            texte_corr += `<br> ${
              triangle_isocele_rectangle.getLongueurs()[0]
            } $= ${triangle_isocele_rectangle.l1 * 10}$ mm $= ${
              triangle_isocele_rectangle.l1
            }$ cm =${
              triangle_isocele_rectangle.getLongueurs()[1]
            } donc ${triangle_isocele_rectangle.getNom()} est isocèle en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
            texte_corr += `<br> Le triangle ${triangle_isocele_rectangle.getNom()} est donc isocèle et rectangle en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
          } else {
            texte += `${triangle_isocele_rectangle.getAngles()[0]} $= ${
              triangle_isocele_rectangle.a1
            }\\degree$.`;
            texte_corr = `L'angle ${
              triangle_isocele_rectangle.getAngles()[0]
            } du triangle ${triangle_isocele_rectangle.getNom()} est un angle droit donc ${triangle_isocele_rectangle.getNom()} est rectangle en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
            texte_corr += `<br> ${
              triangle_isocele_rectangle.getLongueurs()[0]
            } $= ${triangle_isocele_rectangle.l1 * 10}$ mm $= ${
              triangle_isocele_rectangle.l1
            }$ cm =${
              triangle_isocele_rectangle.getLongueurs()[1]
            } donc ${triangle_isocele_rectangle.getNom()} est isocèle en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
            texte_corr += `<br> Le triangle ${triangle_isocele_rectangle.getNom()} est donc isocèle et rectangle en ${
              triangle_isocele_rectangle.getSommets()[1]
            }.`;
          }
          break;
        case 10: // triangle isocèle par les angles
          a3 = -1;
          while (a3 < 0) {
            triangle_isocele.a1 = randint(a_min, a_max);
            triangle_isocele.a2 = triangle_isocele.a1;
            a3 = 180 - 2 * triangle_isocele.a1;
            triangle_isocele.a3 = a3;
          }
          texte = `${triangle_isocele.getNom()} est un triangle tel que ${
            triangle_isocele.getAngles()[0]
          } $= ${triangle_isocele.a1}\\degree$ ; `;
          texte += ` ${triangle_isocele.getAngles()[1]} $= ${
            triangle_isocele.a2
          }\\degree$ et  ${triangle_isocele.getAngles()[2]} $= ${
            triangle_isocele.a3
          }\\degree$ .`;
          texte_corr = `Le triangle ${triangle_isocele.getNom()} a deux angles égaux, ${
            triangle_isocele.getAngles()[0]
          } = ${triangle_isocele.getAngles()[1]} $= ${
            triangle_isocele.a1
          }\\degree$ donc ${triangle_isocele.getNom()} est un triangle isocèle en ${
            triangle_isocele.getSommets()[0]
          }.`;
          break;
        case 11: // triangle équilatéral par les angles
          triangle_equilateral.a1 = 60;
          triangle_equilateral.a2 = 60;
          triangle_equilateral.a3 = 60;

          texte = `${triangle_equilateral.getNom()} est un triangle tel que ${
            triangle_equilateral.getAngles()[0]
          } $= ${triangle_equilateral.a1}\\degree$ ; `;
          texte += ` ${triangle_equilateral.getAngles()[1]} $= ${
            triangle_equilateral.a2
          }\\degree$ et  ${triangle_equilateral.getAngles()[2]} $= ${
            triangle_equilateral.a3
          }\\degree$.`;
          texte_corr = `Le triangle ${triangle_equilateral.getNom()} a trois angles égaux, ${
            triangle_equilateral.getAngles()[0]
          } = ${triangle_equilateral.getAngles()[1]} = ${
            triangle_equilateral.getAngles()[2]
          } $= ${
            triangle_equilateral.a1
          }\\degree$ donc ${triangle_equilateral.getNom()} est un triangle équilateral.`;
          break;
      }
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };

  if (this.classe == 6) {
    this.besoin_formulaire_numerique = [
      "Niveau de difficulté",
      2,
      "1 : sans conversions de longueurs\n2 : avec conversions de longueurs",
    ];
  }
}
function Nommer_et_coder_des_polygones() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Nommer et coder des polygones";
  this.consigne =
    "Nommer les figures en fonction de l'énoncé puis ajouter le codage.";
  this.nb_questions = 8;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.sup2 = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let Xmin, Xmax, Ymin, Ymax, ppc, sc, g, k, carreaux
    function initialise_variables() {
      if (sortie_html) {
        // repère -10 || 10
        Xmin = 0;
        Ymin = -6;
        Xmax = 13;
        Ymax = 8;
        ppc = 20;
      } else {
        // repère -5 || 5
        Xmin = 0;
        Ymin = -6;
        Xmax = 13;
        Ymax = 8;
        ppc = 20;
      }
    }
    initialise_variables();
    if (this.sup2 == 1) sc = 0.5;
    else sc = 0.8;
    let params = {
      xmin: Xmin,
      ymin: Ymin,
      xmax: Xmax,
      ymax: Ymax,
      pixelsParCm: ppc,
      scale: sc,
    }
    if (this.sup2 < 3) g = grille(Xmin, Ymin, Xmax, Ymax, "gray", 0.7);
    else g = ''
    if (this.sup2 == 2) {
      k = 0.8;
      carreaux = seyes(Xmin, Ymin, Xmax, Ymax);
    } else {
      k = 0.5;
      carreaux = "";
    }
    let liste = combinaison_listes([1, 2, 3, 4, 5, 6, 7, 8], this.nb_questions);

    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      pixelsParCm = 40;
      let pol, polcode, polsom, polnom
      function choisir_polygone(n) { // n compris entre 1 et 8 (1 à 4 pour un triangle, 5 à 8 pour une quadrilatère)
        let A, B, C, D
        let nom = creerNomDePolygone(4, "PQ"), pnom, q, p, pcode, enonce
        switch (n) {
          case 1: // triangle isocèle
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(0, 10) / 10, nom[1])
            C = rotation(B, A, randint(25, 80), nom[2])
            q = polygone(A, B, C)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2])
            pcode = [codeSegments('||', 'blue', A, B, A, C),codeAngle(B,C,A,0.8,'|','blue',2,0.8,'blue',0.2),codeAngle(C,B,A,0.8,'|','blue',2,0.8,'blue',0.2)]
            enonce = `le triangle $${nom[0] + nom[1] + nom[2]}$ est isocèle en $${nom[0]}$.`
            break
          case 2: // triangle équilatéral
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(0, 10) / 10, nom[1])
            C = rotation(B, A, 60, nom[2])
            q = polygone(A, B, C)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2])
            pcode = [codeSegments('||', 'blue', A, B, A, C, B, C),codeAngle(B,C,A,0.8,'|','blue',2,0.8,'blue',0.2),codeAngle(C,B,A,0.8,'|','blue',2,0.8,'blue',0.2),codeAngle(C,A,B,0.8,'|','blue',2,0.8,'blue',0.2)]
            enonce = `le triangle $${nom[0] + nom[1] + nom[2]}$ est équilatéral.`
            break
          case 3: // triangle rectangle
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(0, 10) / 10, nom[1])
            C = similitude(B, A, 90, randint(30, 100) / 100, nom[2])
            q = polygone(A, B, C)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2])
            pcode = codageAngleDroit(B, A, C)
            enonce = `le triangle $${nom[0] + nom[1] + nom[2]}$ est rectangle en $${nom[0]}$.`
            break
          case 4: // triangle rectangle isocèle
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(0, 10) / 10, nom[1])
            C = rotation(B, A, 90, nom[2])
            q = polygone(A, B, C)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2])
            pcode = [codeSegments('||', 'blue', A, B, A, C), codageAngleDroit(B, A, C),codeAngle(B,C,A,0.8,'|','blue',2,0.8,'blue',0.2),codeAngle(C,B,A,0.8,'|','blue',2,0.8,'blue',0.2)]
            enonce = `le triangle $${nom[0] + nom[1] + nom[2]}$ est rectangle et isocèle en $${nom[0]}$.`
            break
          //on choisit un quadrilatère 
          case 5: // carré
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(10, 30) / 10, nom[1])
            q = carre(A, B)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            D = p.listePoints[3]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2] + nom[3])
            pcode = [codeSegments('||', 'blue', A, B, B, C, C, D, D, A), codageAngleDroit(B, A, D), codageAngleDroit(A, B, C), codageAngleDroit(B, C, D), codageAngleDroit(A, D, C)]
            enonce = `le quadrilatère $${nom[0] + nom[1] + nom[2] + nom[3]}$ est un carré.`
            break
          case 6: // rectangle
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(10, 30) / 10, nom[1])
            C = similitude(A, B, -90, randint(30, 80) / 100, nom[2])
            D = translation(C, vecteur(B, A), nom[3])
            q = polygone(A, B, C, D)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            D = p.listePoints[3]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2] + nom[3])
            pcode = [codeSegments('||', 'blue', A, B, C, D), codeSegments('O', 'red', C, B, A, D), codageAngleDroit(B, A, C), codageAngleDroit(A, B, C), codageAngleDroit(B, C, D), codageAngleDroit(A, D, C)]
            enonce = `le quadrilatère $${nom[0] + nom[1] + nom[2] + nom[3]}$ est un rectangle et $${nom[0] + nom[1]}$ est sa longueur.`
            break
          case 7: // losange
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(10, 30) / 10, nom[1])
            C = rotation(A, B, randint(100, 150), nom[2])
            D = translation(C, vecteur(B, A), nom[3])
            q = polygone(A, B, C, D)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            D = p.listePoints[3]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2] + nom[3])
            pcode = [codeSegments('||', 'blue', A, B, B, C, C, D, D, A),codeAngle(C,D,A,0.8,'X','red',2,0.8,'red',0.2),codeAngle(C,B,A,0.8,'X','red',2,0.8,'red',0.2),codeAngle(B,C,D,0.8,'|','blue',2,0.8,'blue',0.2),codeAngle(D,A,B,0.8,'|','blue',2,0.8,'blue',0.2)]
            enonce = `le quadrilatère $${nom[0] + nom[1] + nom[2] + nom[3]}$ est un losange et [$${nom[0] + nom[2]}$] est sa plus grande diagonale.`
            break
          case 8: // trapèze rectangle
            A = point(3, randint(0, 20) / 10, nom[0])
            B = point(randint(7, 8), randint(10, 30) / 10, nom[1])
            D = similitude(B, A, 90, randint(30, 80) / 100, nom[3])
            C = translation(D, homothetie(vecteur(A, B), A, randint(30, 80) / 100), nom[2])
            q = polygone(A, B, C, D)
            p = rotation(q, barycentre(q), randint(0, 360))
            A = p.listePoints[0]
            B = p.listePoints[1]
            C = p.listePoints[2]
            D = p.listePoints[3]
            pnom = nommePolygone(p, nom[0] + nom[1] + nom[2] + nom[3])
            pcode = [codageAngleDroit(B, A, D), codageAngleDroit(C, D, A)]
            enonce = `le quadrilatère $${nom[0] + nom[1] + nom[2] + nom[3]}$ est un trapèze rectangle de grande base $${nom[0] + nom[1]}$ de hauteur $${nom[0] + nom[3]}$.`
            break
        }
        return [p, nom, pcode, pnom, enonce]
      }
      [pol, polnom, polcode, polsom, texte] = choisir_polygone(liste[i]);
      texte += `<br>` + mathalea2d(params, pol, polnom)
      texte_corr = mathalea2d(params, pol, polnom, polcode, polsom)
      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}
/**
 * Utiliser les notations des segments, droites et demi-droites
 * @Auteur Rémi Angot
 */
function Notation_segment_droite_demi_droite() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Notation des droites, segments et demi-droites";
  this.consigne =
    "Compléter les programmes de constructions qui ont permis d'obtenir ces figures.";
  this.nb_questions = 3;
  this.nb_cols = 3;
  this.nb_cols_corr = 2;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      pixelsParCm = 40;
      let p = creerNomDePolygone(3, "PQ");
      let A = point(0, 0, p[0], "above left");
      let B = point(1, 1.2, p[1], "above");
      let C = point(2.2, -0.3, p[2], "above right");
      let dAB, dAC, dBC, dABCorr, dACCorr, dBCCorr;
      function creerDroiteDemiSegment(A, B) {
        let trait, notation;
        switch (randint(1, 4)) {
          case 1:
            trait = droite(A, B);
            notation = `$(${A.nom}${B.nom})$`;
            break;
          case 2:
            trait = demiDroite(A, B);
            notation = `$[${A.nom}${B.nom})$`;
            break;
          case 3:
            trait = demiDroite(B, A);
            notation = `$[${A.nom}${B.nom})$`;
            break;
          case 4:
            trait = segment(A, B);
            notation = `$[${A.nom}${B.nom}]$`;
            break;
        }
        return [trait, notation];
      }
      [dAB, dABCorr] = creerDroiteDemiSegment(A, B);
      [dAC, dACCorr] = creerDroiteDemiSegment(A, C);
      [dBC, dBCCorr] = creerDroiteDemiSegment(B, C);
      let labels = labelPoint(A, B, C);

      texte = `Placer 3 points $${p[0]}$, $${p[1]}$ et $${p[2]}$ non alignés puis tracer... <br><br>`;
      texte += mathalea2d(
        { xmin: -1, ymin: -1, xmax: 3, ymax: 2.5, pixelsParCm: 40, scale: 1 },
        dAB,
        dBC,
        dAC,
        labels
      );
      texte_corr = `...tracer $${dABCorr}, ${dBCCorr}, ${dACCorr}.$`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Utiliser les notations des segments, droites et demi-droites
 * @Auteur Rémi Angot
 */
function Description_segment_droite_demi_droite() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Description et notation des droites, segments et demi-droites";
  this.consigne =
    "Faire une phrase pour décrire le plus précisemment possible la figure et donner sa notation mathématique";
  this.nb_questions = 3;
  this.nb_cols = 3;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let type_de_questions_disponibles = [1, 4, choice([2, 3])];
    let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    );
    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      pixelsParCm = 40;
      let p = creerNomDePolygone(2, "P");
      let A = point(0, calcul(randint(0, 20) / 10), p[0]);
      let B = point(4, calcul(randint(0, 20) / 10), p[1]);
      let t1 = tracePointSurDroite(A, B);
      let t2 = tracePointSurDroite(B, A);
      let dAB, dABCorr;
      function creerDroiteDemiSegment(A, B) {
        let trait, correction;
        switch (liste_type_de_questions[i]) {
          case 1:
            trait = droite(A, B);
            correction = `La droite qui passe par les points $${A.nom}$ et $${B.nom}$ notée $(${A.nom}${B.nom})$.`;
            break;
          case 2:
            trait = demiDroite(A, B);
            correction = `La demi-droite d'origine $${A.nom}$ passant par $${B.nom}$ notée $[${A.nom}${B.nom})$.`;
            break;
          case 3:
            trait = demiDroite(B, A);
            correction = `La demi-droite d'origine $${B.nom}$ passant par $${A.nom}$ notée $[${A.nom}${B.nom})$.`;
            break;
          case 4:
            trait = segment(A, B);
            correction = `Le segment d'extrémités $${A.nom}$ et $${B.nom}$ noté $[${A.nom}${B.nom}]$`;
            break;
        }
        return [trait, correction];
      }
      [dAB, dABCorr] = creerDroiteDemiSegment(A, B);
      let labels = labelPoint(A, B);

      texte = mathalea2d(
        { xmin: -2, ymin: -1, xmax: 7, ymax: 3, pixelsParCm: 40, scale: 0.6 },
        dAB,
        t1,
        t2,
        labels
      );
      texte_corr = dABCorr;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Vocabulaire des triangles
 * 6G20-2
 * @author Sébastien Lozano
 */
function Vocabulaire_des_triangles_6e() {
  this.classe = 6;
  Vocabulaire_des_triangles.call(this);
}

/**
 * Vocabulaire des triangles
 * 5G20-1
 * @author Sébastien Lozano
 */
function Vocabulaire_des_triangles_5e() {
  this.classe = 5;
  Vocabulaire_des_triangles.call(this);
}

function Parallele_et_Perpendiculaires() {
  "use strict";
  Exercice.call(this);
  this.titre = "Tracer des parallèles et des perpendiculaires";
  this.nb_questions = 1;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;
  this.sup = 1;
  this.sup2 = 1;
  this.nouvelle_version = function (numero_de_l_exercice) {
  let type_de_questions_disponibles;
  type_de_questions_disponibles = [parseInt(this.sup)]; // Le choix 1 ou 2 ou 3 : 1=perpendiculaires, 2=parallèles, 3=des perpendiculaires et des paralèlles
  let liste_type_de_questions = combinaison_listes(
      type_de_questions_disponibles,
      this.nb_questions
    );
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées
    let Xmin, Xmax, Ymin, Ymax, ppc, sc;
    function initialise_variables() {
      if (sortie_html) {
        // repère -10 || 10
        Xmin = -1;
        Ymin = -9;
        Xmax = 15;
        Ymax = 9;
        ppc = 20;
      } else {
        // repère -5 || 5
        Xmin = -1;
        Ymin = -9;
        Xmax = 15;
        Ymax = 9;
        ppc = 20;
      }
    }

    initialise_variables();
    if (this.sup2 == 1) sc = 0.5;
    else sc = 0.8;

    let A,
      B,
      C,
      D,
      xE,
      E,
      F,
      CC,
      DD,
      EE,
      d,
      s1,
      s2,
      enonce,
      correction,
      dB,
      dC,
      dD,
      dE,
      g,
      lC,
      lD,
      lE,
      cB,
      cC,
      cD,
      cE,
      cF,
      cG,
      FF,
      BB,
      carreaux,
      k,
      objets_enonce = [],
      objets_correction = [],
      params = {
        xmin: Xmin,
        ymin: Ymin,
        xmax: Xmax,
        ymax: Ymax,
        pixelsParCm: ppc,
        scale: sc,
      },
      p;
    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      if (this.sup2 < 3) g = grille(-1, -15, 15, 15, "gray", 0.7);
      else g = "";
      if (this.sup2 == 2) {
        k = 0.8;
        carreaux = seyes(Xmin, Ymin, Xmax, Ymax);
      } else {
        k = 0.5;
        carreaux = "";
      }
      switch (liste_type_de_questions[i]) {
        case 1:
          A = point(0, 0, "A", "above left");
          B = point(10, randint(-4, 4, [-1, 0, 1]), "B", "above right");
          d = droite(A, B);
          d.isVisible = true;
          C = point(randint(2, 3), randint(3, 4), "C", "above left");
          D = point(randint(7, 8), randint(-7, -6), "D");
          dB = droiteParPointEtPerpendiculaire(B, d);
          xE = 11;
          E = pointSurDroite(dB, 11, "E", "left");
          while (!Number.isInteger(E.y)) {
            xE++;
            E = pointSurDroite(dB, xE, "E", "left");
          }
          F = point(E.x, B.y);
          s1 = segment(B, F, "red");
          s1.epaisseur = 2;
          s1.pointilles = true;
          s2 = segment(F, E, "blue");
          s2.epaisseur = 2;
          s2.pointilles = true;
          dC = droiteParPointEtPerpendiculaire(C, d);
          dD = droiteParPointEtPerpendiculaire(D, d);
          BB = rotation(A, B, 90);
          CC = pointIntersectionDD(dC, d, "M", "below right");
          DD = pointIntersectionDD(dD, d, "N", "above left");
          lC = arrondi(longueur(CC, A) * k, 1);
          lD = arrondi(longueur(DD, A) * k, 1);
          cB = codageAngleDroit(A, B, BB);
          cC = codageAngleDroit(C, CC, B);
          cD = codageAngleDroit(D, DD, B);
          objets_correction.push(s1,
            s2,
            dC,
            dD,
            dB,
            cB,
            cC,
            cD,
            d,
            g,
            carreaux,
            tracePoint(A, B, C, D, E, CC, DD),
            labelPoint(A, B, C, D, E, CC, DD),
            afficheCoteSegment(
              segment(A, CC),
              `${tex_nombre(lC)} cm`,
              0.5,
              "red",
              1,
              0.5,
              "red"
            ),
            afficheCoteSegment(
              segment(A, DD),
              `${tex_nombre(lD)} cm`,
              -0.5,
              "red",
              1,
              -0.5,
              "red"
            )
          );
          objets_enonce.push(
            tracePoint(A, B, C, D),
            labelPoint(A, B, C, D),
            d,
            g,
            carreaux
          );
          enonce = num_alpha(0) + ` Reproduire la figure ci-dessous.<br>`;
          enonce +=
            num_alpha(1) +
            ` Tracer la droite perpendiculaire à $(AB)$ passant par $B$.<br>`;
          enonce +=
            num_alpha(2) +
            ` Tracer la droite perpendiculaire à $(AB)$ passant par $C$ et nommer $M$ le point d'intersection de cette droite avec la droite $(AB)$.<br>`;
          enonce +=
            num_alpha(3) +
            ` Tracer la droite perpendiculaire à $(AB)$ passant par $D$ et nommer $N$ le point d'intersection de cette droite avec la droite $(AB)$.<br>`;
          enonce +=
            num_alpha(4) +
            ` Mesurer ensuite les distances $AM$ et $AN$.<br> Pour l'auto-correction comparer ces mesures avec celles données dans la correction<br>`;
          enonce += mathalea2d(params, objets_enonce);
          correction = mathalea2d(params, objets_correction);
          correction += `<br>$AM \\approx ${tex_nombre(
            lC
          )}$ cm et $AN \\approx ${tex_nombre(lD)}$ cm.<br>`;
          correction += `Pour la perpendiculaire en $B$, contrôle la position du point $E$.<br>`;
          break;
        case 2:
          A = point(2, 0, "A",'below left');
          B = point(12, randint(-4, 4, 0), "B");
          d = droite(A, B);
          d.isVisible = true;
          C = point(0, randint(3, 4), "C",'above');
          D = point(randint(7, 8), randint(-7, -6), "D",'below right');
          E = point(randint(4, 5), randint(5,6), "E",'below right');
          F = point(2, -3, "F", "left");
 
          dE = droiteParPointEtParallele(E, d);
          dC = droiteParPointEtParallele(C, d);
          dD = droiteParPointEtParallele(D, d);
          p = droite(A, F);
          p.isVisible = true;
          CC = pointIntersectionDD(dC, p,'M','above left');
          DD = pointIntersectionDD(dD, p,'N','above left');
          EE = pointIntersectionDD(dE, p,'O','above left');
          lC = arrondi(longueur(CC, A) * k, 1);
          lD = arrondi(longueur(DD, A) * k, 1);
          lE = arrondi(longueur(EE, A) * k, 1);
          objets_correction.push(dC,dD,dE,d,p,g,carreaux,tracePoint(A, B, C, D, E,F),labelPoint(A, B, C, D, E,F,CC,DD,EE),afficheCoteSegment(segment(A,CC),`${tex_nombre(lC)} cm`,.2,'red',1,0.5,'red'),afficheCoteSegment(segment(DD,A),`${tex_nombre(lD)} cm`,-0.2,'green',1,-0.5,'green'),afficheCoteSegment(segment(A,EE),`${tex_nombre(lE)} cm`,-0.2,'blue',1,-0.5,'blue'))
          objets_enonce.push(tracePoint(A, B, C, D,E,F),labelPoint(A, B, C, D,E,F),d,g,p,carreaux);
        
          enonce = num_alpha(0)+ `Reproduire la figure ci-dessous.<br>`
          enonce +=num_alpha(1)+` Tracer la droite parallèle à $(AB)$ passant par $C$ et nomme $M$, le point d'intersection de cette droite avec la droite $(AF)$.<br>`;
          enonce +=num_alpha(2)+` Tracer la droite parallèle à $(AB)$ passant par $D$ et nomme $N$, le point d'intersection de cette droite avec la droite $(AF)$.<br>`;
          enonce +=num_alpha(3)+` Tracer la droite parallèle à $(AB)$ passant par $E$ et nomme $O$, le point d'intersection de cette droite avec la droite $(AF)$.<br>`;
          enonce += num_alpha(4)+` Mesurer les distances $AM$, $AN$ et $AO$. Pour l'auto-correction, comparer ces mesures avec celles données par  l'ordinateur dans la correction.<br>`;
          enonce += mathalea2d(
            {
              xmin: Xmin,
              ymin: Ymin,
              xmax: Xmax,
              ymax: Ymax,
              pixelsParCm: ppc,
              scale: sc,
            },
           objets_enonce
          );
          correction = mathalea2d(
            {
              xmin: Xmin,
              ymin: Ymin,
              xmax: Xmax,
              ymax: Ymax,
              pixelsParCm: ppc,
              scale: sc,
            },
            objets_correction
          );
          correction += `<br>$AM \\approx ${tex_nombre(
            lC
          )}$ cm, $AN \\approx ${tex_nombre(
            lD
          )}$ cm et $AO \\approx${tex_nombre(
            lE
          )}$ cm.<br>`;

          break;
          case 3:
            A = point(0, 0, "A", "above left");
            B = point(10, randint(-4, 4, [-1, 0, 1]), "B", "above right");
            d = droite(A, B);
            d.isVisible = true;
            C = point(randint(2, 3), randint(3, 4), "C", "above left");
            D = point(randint(7, 8), randint(-7, -6), "D");
            dB = droiteParPointEtPerpendiculaire(B, d);
            xE = 11;
            E = pointSurDroite(dB, 11, "E", "left");
            while (!Number.isInteger(E.y)) {
              xE++;
              E = pointSurDroite(dB, xE, "E", "left");
            }
            F = point(E.x, B.y);
            dE = droiteParPointEtParallele(E, d);
            dD = droiteParPointEtParallele(D, d);
            dC = droiteParPointEtPerpendiculaire(C,d)
            BB = rotation(A, B, 90);
            CC = pointIntersectionDD(dC, d, "M", "below right");
            DD = pointIntersectionDD(dD, dB, "N", "above left");
            EE = pointIntersectionDD(dC,dE ,'O','above left');
            FF = pointIntersectionDD(dD,dC)

            lC = arrondi(longueur(CC, A) * k, 1);
            lD = arrondi(longueur(DD, A) * k, 1);
            lE = arrondi(longueur(EE, A) * k, 1);
            cB = codageAngleDroit(A, B, BB);
            cC = codageAngleDroit(C, CC, B);
            cD = codageAngleDroit(D, DD, B,'red');
            cE = codageAngleDroit(B,E,EE,'red')
            cF = codageAngleDroit(C,EE,E,'red')
            cG = codageAngleDroit(C,FF,D,'red')

            objets_correction.push(dC,dD,dB,dE,cB,cC,cD,cE,cF,cG,d,g,carreaux,tracePoint(A, B, C, D, E, CC, DD,EE),labelPoint(A, B, C, D, E, CC, DD,EE),afficheCoteSegment(
              segment(A, CC),
              `${tex_nombre(lC)} cm`,
              0.5,
              "red",
              1,
              0.5,
              "red"
            ),
            afficheCoteSegment(
              segment(A, DD),
              `${tex_nombre(lD)} cm`,
              0,
              "blue",
              1,
              -0.5,
              "blue"
            ),
            afficheCoteSegment(
              segment(A, EE),
              `${tex_nombre(lE)} cm`,
              0,
              "green",
              1,
              -0.5,
              "green"
            ));
            objets_enonce.push(tracePoint(A, B, C, D,E),labelPoint(A, B, C, D,E),d,g,carreaux);
            enonce = num_alpha(0)+ `Reproduire la figure ci-dessous.<br>`
          enonce +=num_alpha(1)+` Tracer la droite perpendiculaire à $(AB)$ passant par $B$.<br>`;
          enonce +=num_alpha(2)+` Tracer la droite perpendiculaire à $(AB)$ passant par $C$ et nomme $M$, le point d'intersection de cette droite avec la droite $(AB)$.<br>`
          enonce +=num_alpha(3)+` Tracer la droite parallèle à $(AB)$ passant par $D$ et nomme $N$, le point d'intersection de cette droite avec la droite $(BE)$.<br>`;
          enonce += num_alpha(4)+ ` Tracer la droite parallèle à $(AB)$ passant par $E$ et nomme $O$, le point d'intersection de cette droite avec la droite $(CM)$.<br>`
          enonce += num_alpha(5)+` Mesurer les distances $AM$, $AN$ et $AO$. Pour l'auto-correction, comparer ces mesures avec celles données par  l'ordinateur dans la correction.<br>`;
          enonce += mathalea2d(
            {
              xmin: Xmin,
              ymin: Ymin,
              xmax: Xmax,
              ymax: Ymax,
              pixelsParCm: ppc,
              scale: sc,
            },
           objets_enonce
          );
          correction = mathalea2d(
            {
              xmin: Xmin,
              ymin: Ymin,
              xmax: Xmax,
              ymax: Ymax,
              pixelsParCm: ppc,
              scale: sc,
            },
            objets_correction
          );
          correction += `<br>$AM \\approx ${tex_nombre(
            lC
          )}$ cm, $AN \\approx ${tex_nombre(
            lD
          )}$ cm et $AO \\approx${tex_nombre(
            lE
          )}$ cm.<br>`;
          correction+=`Les angle droits en rouge se justifient par la propriété :<br> ${texte_en_couleur(`Si deux droites sont parallèles, toutes droite perpendiculaire à l'une est aussi perpendiculaire à l'autre`,'red')}.<br>`
          correction +=`Vérifier les angles droits à l'équerre.`
          break
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(enonce + "<br>");
        this.liste_corrections.push(correction + "<br>");
        i++;
      }
      cpt++;
    }

    liste_de_question_to_contenu(this);
  };
  //	this.besoin_formulaire_numerique = ['Type de questions', 3, `1 : Perpendiculaires\n 2 : Parallèles\n 3 : Mélange`]
  this.besoin_formulaire2_numerique = [
    "Type de cahier",
    3,
    `1 : Cahier à petits careaux\n 2 : Cahier à gros carreaux (Seyes)\n 3 : Feuille blanche`,
  ];
}


/**
 * Produire une forme littérale en introduisant une lettre pour désigner une valeur inconnue
 * * 6P11-1
 * @author Sébastien Lozano
 */
function Proportionnalite_par_linearite_bis(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.beta = false;	
	this.sup=1;
	if (this.beta) {
		this.nb_questions = 3;
	} else {
		this.nb_questions = 1;
	};	

	this.titre = "Résoudre un problème relevant de la proportionnalité avec les propriétés de linéarité.";
	this.consigne = "";
	
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	//this.nb_questions_modifiable = false;
	//sortie_html? this.spacing = 3 : this.spacing = 2; 
	//sortie_html? this.spacing_corr = 3 : this.spacing_corr = 2;

	let type_de_questions_disponibles;	

	this.nouvelle_version = function(numero_de_l_exercice){
		if (this.beta) {
			type_de_questions_disponibles = [1];			
		} else {
			type_de_questions_disponibles = [1];			
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		type_de_questions_disponibles=[1];			
		let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		//let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus
		
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			
			// une fonction pour gérer le pluriel 
			function pluriel(n,obj) {
				if (n>1) {
					return obj.achat_plur
				} else {
					return obj.achat_sing
				};
			};
			
			// une fonction pour gérer la chaine de sortie et supprimer le coeff 1 !
			function sliceUn(n) {
				if (n==1) {
					return ``;
				} else {
					return `${n}`;
				};
      };
      
      //une fonction pour calculer la différence positive entre deux entiers
      function diffInt(n,p) {
        if (n>p) {
          return calcul(n-p);
        } else if (n<p) {
          return calcul(p-n);
        } else {
          return 0;
        }
      };

      // un compteur pour les sous-questions
      let k=0;
      let k_corr=0;
      // on crée un tableau d'objets pour les situations possibles
      let n1,n2,n3,n4,n_max;
      do {
        n1 = randint(1,9);
        n2 = randint(1,9,[n1]);
        n3 = n1+n2;
        n4 = diffInt(n1,n2);
        n_max=randint(10,19,[n3]);
      }	while (n4==1);
      //n1 sera toujours le plus grand sinon on intervertit les deux
      let temp;
      if (n1<n2) {
        temp = n1;
        n1 = n2;
        n2 = temp;
      };	
			let situations = [
        {lieu:`la boulangerie "Au bon pain"`,achat_sing:`pain au chocolat`,achat_plur:`pains au chocolat`,prenom1:prenom(),prenom2:prenom(),prenom3:prenom(),prenom4:prenom(),prenom_max:prenom(),n1:n1,n2:n2,n3:n3,n4:n4,n_max:n_max,pu:0.9}
			]
			let enonces = [];
      let situation = situations[randint(0,situations.length-1)];
      
			enonces.push({
        enonce:`
          Dans ${situation.lieu}, ${situation.prenom1} achète $${situation.n1}$ ${pluriel(situation.n1,situation)} et paie $${tex_prix(situation.pu*situation.n1)}$ €.
          <br>${situation.prenom2} achète $${situation.n2}$ ${pluriel(situation.n2,situation)} et paie $${tex_prix(situation.pu*situation.n2)}$ €.
          <br>
          <br>${num_alpha(k++)} Combien paiera ${situation.prenom3} pour $${situation.n3}$ ${pluriel(situation.n3,situation)} ?
          <br>${num_alpha(k++)} Combien paiera ${situation.prenom4} pour $${situation.n4}$ ${pluriel(situation.n4,situation)} ?
          <br>${num_alpha(k++)} Quel est le nombre maximum de ${situation.achat_plur} que ${situation.prenom_max} pourra acheter avec $${tex_prix(situation.pu*situation.n_max)}$ € ?
          `,
				question:``,
        correction:`
        C'est une situation de proportionnalité. Nous pouvons donc utiliser les propriétés de linéarité de la proportionnalité.
        <br>C'est ce que nous allons faire pour les deux premères questions.
        <br>
        <br>${num_alpha(k_corr++)} Pour $${situation.n1}$ ${pluriel(situation.n1,situation)}, on paie $${tex_prix(situation.pu*situation.n1)}$ €.
        <br> Pour $${situation.n2}$ ${pluriel(situation.n2,situation)}, on paie $${tex_prix(situation.pu*situation.n2)}$ €.
        <br> Donc pour $${situation.n1}+${situation.n2}$ ${pluriel(situation.n3,situation)}, on paie $${tex_prix(situation.pu*situation.n1)}$ € + $${tex_prix(situation.pu*situation.n2)}$ €.
        <br> ${texte_en_couleur(`${situation.prenom3} paiera donc $${tex_prix(situation.pu*situation.n3)}$ € pour $${situation.n3}$ ${pluriel(situation.n3,situation)}.`)}
        <br>
        <br>${num_alpha(k_corr++)} Pour $${situation.n1}$ ${pluriel(situation.n1,situation)}, on paie $${tex_prix(situation.pu*situation.n1)}$ €.
        <br> Pour $${situation.n2}$ ${pluriel(situation.n2,situation)}, on paie $${tex_prix(situation.pu*situation.n2)}$ €.
        <br> Donc pour $${situation.n1}-${situation.n2}$ ${pluriel(situation.n4,situation)}, on paie $${tex_prix(situation.pu*situation.n1)}$ € - $${tex_prix(situation.pu*situation.n2)}$ €.
        <br> ${texte_en_couleur(`${situation.prenom4} paiera donc $${tex_prix(situation.pu*situation.n4)}$ € pour $${situation.n4}$ ${pluriel(situation.n4,situation)}.`)}
        <br>
        <br>${num_alpha(k_corr++)} On peut utiliser l'une ou l'autre des informations de l'énoncé pour répondre en revenant à l'unité.
        <br> Par exemple pour $${situation.n1}$ ${pluriel(situation.n1,situation)}, on paie $${tex_prix(situation.pu*situation.n1)}$ €.
        <br> Donc $1$ ${situation.achat_sing} coûte $${tex_prix(situation.pu*situation.n1)}\\div ${situation.n1} = ${tex_prix(situation.pu)}$ €.
        <br> Pour $${tex_prix(situation.pu*situation.n_max)}$ € nous aurons donc $${tex_prix(situation.pu*situation.n_max)}\\div ${tex_prix(situation.pu)}$ € $= ${situation.n_max}$ ${pluriel(situation.n_max,situation)}.
        <br> ${texte_en_couleur(`Avec $${tex_prix(situation.pu*situation.n_max)}$ €, ${situation.prenom_max} pourra donc acheter $${situation.n_max}$ ${pluriel(situation.n_max,situation)}.`)}
        `
			})
			switch (liste_type_de_questions[i]){
				case 1 : 
					texte = `${enonces[0].enonce}`;
					if (this.beta) {
						texte += `<br>`;
						texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;
						texte_corr = ``;	
					} else {
						texte_corr = `${enonces[0].correction}`;
					};
					break;				
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);

	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Entiers naturels\n2 : Entiers relatifs"];
	//this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];	
}

/**
 * Un nombre à 2 chiffres (non multiple de 10) + 9
 * @Auteur Rémi Angot
 */
function Tracer_triangle_2_angles() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Tracer un triangle dont on connait une longueur et 2 angles";
  this.consigne = "";
  this.nb_questions = 3;
  this.nb_cols = 1;
  this.nb_cols_corr = 1;

  this.nouvelle_version = function (numero_de_l_exercice) {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    for (
      let i = 0, texte, texte_corr, cpt = 0;
      i < this.nb_questions && cpt < 50;

    ) {
      let c = calcul(randint(30, 70) / 10);
      let angle1 = randint(20, 70);
      let angle2 = randint(20, 70);
      let p = creerNomDePolygone(3);
      texte = `Tracer un triangle $${p}$ tel que $${p[0] + p[1]}=${tex_nombre(
        c
      )}$ cm, $\\widehat{${
        p[1] + p[0] + p[2]
      }}=${angle1}\\degree$ et $\\widehat{${
        p[0] + p[1] + p[2]
      }}=${angle2}\\degree$.`;
      texte += `<br> Mesurer $${p[0] + p[2]}$ et $${p[1] + p[2]}$.`;
      let A0 = point(0, 0, p[0], "left");
      let B0 = point(c, 0, p[1], "right");
      let s0 = segmentAvecExtremites(A0, B0);
      let t1 = afficheLongueurSegment(B0, A0);

      let A1 = point(B0.x + 4, 0, p[0], "left");
      let B1 = point(A1.x + c, 0, p[1], "right");
      let s1 = segment(A1, B1);
      s1.styleExtremites = "-|";
      let c1 = rotation(B1, A1, angle1);
      let C1 = pointSurSegment(c1, A1, -3);
      let s2 = segment(A1, C1);
      let t2 = afficheMesureAngle(B1, A1, C1);

      let A2 = point(B1.x + 4, 0, p[0], "left");
      let B2 = point(A2.x + c, 0, p[1], "right");
      let s3 = segment(A2, B2);
      let c2 = rotation(B2, A2, angle1);
      let C2 = pointSurSegment(c2, A2, -3);
      let s4 = segment(A2, C2);
      let c3 = rotation(A2, B2, -angle2);
      let C3 = pointSurSegment(c3, B2, -3);
      let t3 = afficheMesureAngle(A2, B2, C3);
      let s5 = segment(B2, C3);
      let d1 = droite(A2, C2);
      d1.isVisible = false;
      let d2 = droite(B2, C3);
      d2.isVisible = false;
      let C = pointIntersectionDD(d1, d2, p[2]);
      let l = labelPoint(A0, B0, A1, B1, A2, B2, C);

      if (sortie_html) {
        texte_corr = mathalea2d(
          { xmin: -1, xmax: 3 * c + 10, ymin: -1, ymax: 10 },
          s0,
          s1,
          s2,
          s3,
          s4,
          s5,
          t1,
          t2,
          t3,
          l
        );
        texte_corr += '<br><br>'
      } else {
        texte_corr = "";
      }
      texte_corr += `$${p[0] + p[2]}\\approx${tex_nombre(
        longueur(A2, C, 1)
      )}$ cm et $${p[1] + p[2]}\\approx${tex_nombre(longueur(B2, C, 1))}$ cm.`;

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en créé une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  //this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * @Auteur Rémi Angot
 */
function LaTeX_static() {
  // Classe parente de tous les exercices qui seront créés
  this.titre = "Fichier statique";
  this.pas_de_version_HMTL = false;
  this.consigne = "";
  this.consigne_correction = "";
  this.liste_questions = [];
  this.liste_corrections = [];
  this.contenu = "";
  this.contenu_correction = "";
  this.nb_questions = 10;
  this.nb_cols = 2;
  this.nb_cols_corr = 2;
  this.spacing = 1;
  this.spacing_corr = 1;
  this.beamer = false;
  this.sup = "Nom du fichier";

  this.consigne_modifiable = false;
  this.nb_questions_modifiable = false;
  this.nb_cols_modifiable = false;
  this.nb_cols_corr_modifiable = false;
  this.spacing_modifiable = false;
  this.spacing_corr_modifiable = false;

  this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
  this.besoin_formulaire_texte = [
    "url du fichier",
    "nom du fichier sans l'extension",
  ]; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
  //this.besoin_formulaire2_texte = ['Code LaTeX correction','Par exemple : \\input{mon_fichier_corr}'];

  this.nouvelle_version = function (numero_de_l_exercice) {
    //this.contenu_correction = '%£tex/probleme_altitude_corr£'
    //this.contenu = '%£tex/probleme_altitude£'
    this.contenu = "%£" + this.sup + "£";
    this.contenu_correction = "%£" + this.sup + "_corr£";
    //liste_des_exercices_statiques.push(this.sup)
  };
}

// FIN DES EXERCICES
// Gestion des listes d'exercices

jQuery(document).ready(function () {
  // Ne se fait qu'après que le DOM soit entièrement défini

  // Trie par ordre alphabétique les exercices disponibles
  liste_des_exercices_disponibles = tridictionnaire(
    liste_des_exercices_disponibles
  );

  // Détermine le nombre d'exercices par niveaux
  let nombre_d_exercices_disponibles_6 = 0;
  let nombre_d_exercices_disponibles_5 = 0;
  let nombre_d_exercices_disponibles_4 = 0;
  let nombre_d_exercices_disponibles_3 = 0;
  let nombre_d_exercices_disponibles_2 = 0;
  let nombre_d_exercices_disponibles_CM = 0;
  let nombre_d_exercices_disponibles_prof = 0;
  let nombre_d_exercices_disponibles_PE = 0;
  let nombre_d_exercices_disponibles_beta = 0;
  //debut ajout seb section tests
  let nombre_d_exercices_disponibles_tests = 0;
  //fin seb section tests
  for (var id in liste_des_exercices_disponibles) {
    if (id[0] == 6) {
      nombre_d_exercices_disponibles_6 += 1;
    }
    if (id[0] == 5) {
      nombre_d_exercices_disponibles_5 += 1;
    }
    if (id[0] == 4) {
      nombre_d_exercices_disponibles_4 += 1;
    }
    if (id[0] == 3) {
      nombre_d_exercices_disponibles_3 += 1;
    }
    if (id[0] == 2) {
      nombre_d_exercices_disponibles_2 += 1;
    }
    if (id[0] == "C") {
      nombre_d_exercices_disponibles_CM += 1;
    }
    if (id[0] == "P" && id[1] == "0") {
      nombre_d_exercices_disponibles_prof += 1;
    }
    if (id[0] == "P" && id[1] == "E") {
      nombre_d_exercices_disponibles_PE += 1;
    }
    if (id[0] == "b" && id[1] == "e") {
      nombre_d_exercices_disponibles_beta += 1;
    }
  }

  //
  let liste_html_des_exercices_6 = [];
  let liste_html_des_exercices_5 = [];
  let liste_html_des_exercices_4 = [];
  let liste_html_des_exercices_3 = [];
  let liste_html_des_exercices_2 = [];
  let liste_html_des_exercices_CM = [];
  let liste_html_des_exercices_prof = [];
  let liste_html_des_exercices_PE = [];
  let liste_html_des_exercices_beta = [];

  // Affiche de la liste des exercices disponibles
  let liste_html_des_exercices =
    '<h3 class="ui block header">Exercices disponibles</h3>\n\n';
  for (var id in liste_des_exercices_disponibles) {
    let exercice_tmp = new liste_des_exercices_disponibles[id]();
    if (id[0] == 6) {
      liste_html_des_exercices_6 +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == 5) {
      liste_html_des_exercices_5 +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == 4) {
      liste_html_des_exercices_4 +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == 3) {
      liste_html_des_exercices_3 +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == 2) {
      liste_html_des_exercices_2 +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == "P" && id[1] == "E") {
      liste_html_des_exercices_PE +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == "C") {
      liste_html_des_exercices_CM +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == "P" && id[1] == "0") {
      liste_html_des_exercices_prof +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
    if (id[0] == "b" && id[1] == "e") {
      liste_html_des_exercices_beta +=
        '<span class="id_exercice">' +
        id +
        '</span> - <a class="lien_id_exercice" numero="' +
        id +
        '">' +
        exercice_tmp.titre +
        "</a></br>\n";
    }
  }

  // Change l'ordre des exercices suivant l'URL
  if (window.location.href.indexOf("beta") > 0) {
    liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Beta (${nombre_d_exercices_disponibles_beta})</div><div class="active content">`;
    liste_html_des_exercices += liste_html_des_exercices_beta;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `</div>`;
  } else if (window.location.href.indexOf("cm.html") > 0) {
    liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Calcul mental (${nombre_d_exercices_disponibles_CM})</div><div class="active content">`;
    liste_html_des_exercices += liste_html_des_exercices_CM;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Sixième (${nombre_d_exercices_disponibles_6})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_6;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cinquième (${nombre_d_exercices_disponibles_5})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_5;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Quatrième (${nombre_d_exercices_disponibles_4})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_4;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Troisième (${nombre_d_exercices_disponibles_3})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_3;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Seconde (${nombre_d_exercices_disponibles_2})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_2;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>CRPE (${nombre_d_exercices_disponibles_PE})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_PE;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `</div>`;
  } else {
    liste_html_des_exercices += `<div class="ui accordion"><div class="title"><i class="dropdown icon"></i>Sixième (${nombre_d_exercices_disponibles_6})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_6;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cinquième (${nombre_d_exercices_disponibles_5})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_5;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Quatrième (${nombre_d_exercices_disponibles_4})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_4;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Troisième (${nombre_d_exercices_disponibles_3})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_3;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Seconde (${nombre_d_exercices_disponibles_2})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_2;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>CRPE (${nombre_d_exercices_disponibles_PE})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_PE;
    liste_html_des_exercices += `</div>`;
    liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Calcul mental (${nombre_d_exercices_disponibles_CM})</div><div class="content">`;
    liste_html_des_exercices += liste_html_des_exercices_CM;
    liste_html_des_exercices += `</div>`;
    // Ajoute les outils prof sur mathalealatex
    if (window.location.href.indexOf("mathalealatex.html") > 0) {
      liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Outils pour le professeur (${nombre_d_exercices_disponibles_prof})</div><div class="content">`;
      liste_html_des_exercices += liste_html_des_exercices_prof;
      liste_html_des_exercices += `</div>`;
    }
    liste_html_des_exercices += `</div>`;
  }

  $("#liste_des_exercices").html(liste_html_des_exercices);

  // Gère le clic sur un exercice de la liste
  $(".lien_id_exercice").click(function () {
    let numero = $(this).attr("numero");
    if ($("#choix_des_exercices").val() == "") {
      $("#choix_des_exercices").val($("#choix_des_exercices").val() + numero);
    } else {
      $("#choix_des_exercices").val(
        $("#choix_des_exercices").val() + "," + numero
      );
    }
    liste_des_exercices = $("#choix_des_exercices")
      .val()
      .replace(/\s/g, "")
      .replace(";", ",")
      .split(",");
    mise_a_jour_de_la_liste_d_exercice();

    // Actualise KaTeX pour les titres d'exercices utilisant LaTeX
    renderMathInElement(document.body, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: true,
      errorColor: "#CC0000",
      strict: "warn",
      trust: false,
    });
  });
});
