import '../css/card.css'

function Card() {
  return (
    <div className='cards'>
      <div className='playbutton'>
        <div className='playicon'>
          <svg role="img" height="24" width="24" viewBox="0 0 24 24" class="Svg-sc-1bi12j5-0 hDgDGI">
            <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
          </svg>
        </div>
      </div>
      <div className='img-border'></div>
      <p className='cardtitle'>Test</p>
      <p className='cardtext'>test</p>
    </div>
  );
}

export default Card;