import '../css/font.css';
import '../css/home.css';
import Card from '../component/Card.js';
import { getCategory } from '../data/category.js';
import { getGenre } from '../data/genre.js';

function Home() {
  let data = getCategory();

  return (
    <div className="grey display fullscreen content">
      <div className='grey-gradient fullscreen test'>
        {data.map((category) => (
          <div className='pad'>
            <h4 className='title'>{category.title}</h4>
            <div className='d-flex card-placement'>
              {getGenre(category.genre).map((genre) => (
                <Card 
                key={genre.id}
                title={genre.title}
                image={genre.image}
                description={genre.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
