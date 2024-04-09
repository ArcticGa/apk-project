import { companiesData } from '../data/companiesData'

export const findData = (companyId, itemId, versionId) => {
  const arrCompany = companiesData.find((arrItem) => arrItem?.id == companyId)
  const arrItem = arrCompany?.companyItems.find(
    (arrItem) => arrItem?.idItem == itemId
  )

  const arrVersion = arrItem?.itemCommits.find(
    (arrItem) => arrItem?.versionCommit == versionId
  )

  if (!itemId) return arrCompany

  if (!versionId) return arrItem

  return arrVersion
}
