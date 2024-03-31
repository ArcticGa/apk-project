const Icon = ({ img, pb }) => {
  return (
    <div className={`flex items-center justify-center mr-2 ${pb} `}>
      <img className="w-4 h-4" src={img} alt="ArrowIcon" />
    </div>
  )
}

export default Icon
