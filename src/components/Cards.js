
const Cards = ({Cards}) => {
  return (
    <>

    {Cards.map((value, index) => (
  
    <div className='card' key={index}>
      <div className='cardImage'>
        <a href={value.link}><img src={value.img} alt=""/></a>
      </div>

      <div className="content">
        <div className="pfp">
          <img src={value.profile} alt=""/>
        </div>
        <div className="text">
          <div className="title"> {value.title}</div>
          <div className='channel'>{value.channel}</div>
          <div className="view">{value.view}</div>
        </div>
      </div>
    </div>
  ))}
    </>
)
}

export default Cards
