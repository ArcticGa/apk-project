import { companiesData } from '../data/companiesData'

export const findData = (companyId, itemId) => {
  const arrCompany = companiesData.find((arrItem) => arrItem.id == companyId)
  const arrItem = arrCompany.companyItems.find(
    (arrItem) => arrItem.idItem == itemId
  )

  if (!itemId) return arrCompany

  return arrItem
}
