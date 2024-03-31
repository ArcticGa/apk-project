export const getBtnClass = (error, value) => {
  return error !== undefined
    ? 'bg-elementsBlack px-4 py-3 border border-redOrange rounded-lg mb-2 outline-none text-white w-full'
    : error === undefined && value !== ''
    ? 'bg-elementsBlack px-4 py-3 border border-green rounded-lg mb-2 outline-none text-white w-full'
    : 'bg-elementsBlack px-4 py-3 border border-elementsBlack rounded-lg mb-2 outline-none text-white w-full'
}
