import { context } from './context'
import { addElement, create, addFetchHtmlToParent, fetchHtmlToElement } from './dom'
import { getVueFromUrl } from './getUrlVars'

export async function initDom () {
  // Il FAUT TOUJOURS mettre await avant FetchHtmlToElement sinon la création des formulaires bug car les éléments n'existent pas encore
  const vue = getVueFromUrl()
  if (vue) {
    context.vue = vue
    console.log(vue)
  }
  document.body.innerHTML = ''
  await addFetchHtmlToParent('templates/nav.html', document.body, 'nav')
  const section = addElement(document.body, 'section', { class: 'ui container' })
  section.append(espaceVertical())
  section.append(espaceVertical())
  addElement(section, 'div', { id: 'containerErreur' })
  await addFetchHtmlToParent('templates/mathaleaEnteteChoixDesExercices.html', section, 'div', { id: 'choix_exercices_menu' })
  section.append(espaceVertical())
  const doubleColonne = addElement(section, 'div', { class: 'ui stackable two column grid', dir: 'ltr', id: 'mathaleaContainer' })
  const colonneGauche = addElement(doubleColonne, 'div', { id: 'left', class: 'column', style: 'height:75vh;' })
  const colonneDroite = addElement(doubleColonne, 'div', { id: 'right', class: 'column', style: 'height:75vh; overflowY: auto;' })
  await fetchHtmlToElement('templates/mathaleaGauche.html', colonneGauche)
  await fetchHtmlToElement('templates/mathaleaDroite.html', colonneDroite)
  section.append(espaceVertical())
  section.append(espaceVertical())
  await addFetchHtmlToParent('templates/footer.html', document.body, 'footer')

  if (context.vue === 'ex') {
    await fetchHtmlToElement('templates/exercicesEtCorrections.html', section)
  }
  // if (context.vue === 'cm') {
  //   await fetchHtmlToElement('templates/calculMental.html', section)
  // }
}

function espaceVertical () {
  const espace = create('div', { class: 'ui hidden divider' })
  return espace
}
