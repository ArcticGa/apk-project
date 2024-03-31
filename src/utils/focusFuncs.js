export const getFocused = (e) => {
  const parentEl = e.target.parentElement
  parentEl.style.paddingTop = '8px'
  parentEl.style.paddingBottom = '8px'

  const labelItem = parentEl.querySelector('label')
  labelItem.style.position = 'static'
  labelItem.style.fontSize = '14px'
}

export const outFocused = (e) => {
  if (e.target.value !== '') return

  const parentEl = e.target.parentElement
  parentEl.style.paddingTop = '12px'
  parentEl.style.paddingBottom = '12px'

  const labelItem = parentEl.querySelector('label')
  labelItem.style.position = 'absolute'
  labelItem.style.fontSize = '16px'
}
