const ShopCard = (props) =>
{
  const { name,desc,rate,imageUrl}=props.shopDetails;
  return(
    <div className='Card'>
      <img src={imageUrl} alt="shake img">

      </img>
      <div className='Details'>
        <div className='Left'>
        <h3>{name}</h3>
        <p>{desc}</p>
        </div>
      <div className='right'>
      <span><h3>200ml</h3></span>
      <h3>{rate}</h3>
      </div>
        </div>
      </div>
  );
};

export default ShopCard;