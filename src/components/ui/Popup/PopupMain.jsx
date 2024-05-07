const PopupMain = ({ children }) => {
  return (
    <div className="fixed w-full h-full left-0 top-0 bg-black/75 flex items-center justify-center">
      <div className="bg-elementsBlack rounded-lg border border-blueGray p-4 w-654">
        {children}
      </div>
    </div>
  )
}

export default PopupMain
