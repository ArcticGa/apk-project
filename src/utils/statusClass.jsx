export const statusClass = (status) => {
  if (status === 'release') return 'bg-blue'
  if (status === 'testing' || status === 'error') return 'bg-gray1'
  if (status === 'tested') return 'bg-green'
  if (status === 'alert') return 'bg-redOrange'
  if (status === 'critical') return 'bg-yellow'
}
