import '../css/font.css';
import '../css/home.css';
import Card from '../component/Card.js';
import { getCategory } from '../data/category.js';

function Home() {
  let data = getCategory();

  return (
    <div className="grey display fullscreen content">
      <div className='grey fullscreen test'>
        {data.map((category) => (
          <div className='pad'>
            <h4 className='title'>{category.title}</h4>
            <div className='d-flex card-placement'>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
