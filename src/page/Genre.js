import '../css/font.css';
import '../css/genre.css';
import Card from '../component/Card';
import { getGenre } from '../data/genre'
import { useParams } from 'react-router-dom';

function Genre() {
  let params = useParams();
  let data = getGenre(params.genreId);

  return (
    <div className="grey display fullscreen content">
      <div className='grey-gradient fullscreen test'>
        <div className='pad'>
          <h4 className='title'>Test</h4>
          <div className='card--placement'>
            {data.map((genre) => (
              <Card
                key={genre.id}
                title={genre.title}
                image={genre.image}
                description={genre.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Genre;
