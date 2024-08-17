;
import '../styles/comparisonpage.css';
import prev from '../assets/prev.svg';
import chair1 from '../assets/chair1.svg';
import chair2 from '../assets/chair2.svg';
import chair3 from '../assets/chair3.svg';

const ComparisonPage = () => {
  const options = ['Price', 'Customer Rating', '(Height x Width x Length)', 'Frame', 'Wood Type', 'Cushion', 'Weight'];
  const products = [
    { img: chair1, values: ['$120', 4, ['26 Inch', '24 Inch', '30 Inch'], 'Fabric and solid Wood frame', 'Sheesham Wood', 'Subject to availability', '35 KG'], ratingCount: 572 },
    { img: chair2, values: ['$100', 4.5, ['26 Inch', '24 Inch', '30 Inch'], 'Fabric and solid Wood frame', 'Oak Wood', 'Subject to availability', '28 KG'], ratingCount: 430 },
    { img: chair3, values: ['$150', 5, ['26 Inch', '24 Inch', '30 Inch'], 'Fabric and solid Wood frame', 'Mahogany Wood', 'Subject to availability', '40 KG'], ratingCount: 278 }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const starComponents = [];

    for (let i = 0; i < fullStars; i++) {
      starComponents.push(<span key={i} className="star-filled">★</span>);
    }

    if (halfStar) {
      starComponents.push(<span key="half-star" className="star-half">★</span>);
    }

    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let j = 0; j < emptyStars; j++) {
      starComponents.push(<span key={`empty-star-${j}`} className="star-empty">★</span>);
    }

    return (
      <>
        {starComponents} ({rating})
      </>
    );
  };

  return (
    <div className='comparison-container'>
      <div className="first-container">
        <div className="icon-container">
          <img src={prev} alt="Previous" className="icon" />
        </div>
        <div className="title-container">
          <h1 className="title">Compare Products</h1>
        </div>
      </div>
      <div className="comparison-columns">
        <div className="column first-column">
          <div className="image-container"></div>
          <div className="options-container">
            {options.map((option, index) => (
              <div key={index} className="row-options">
                {option === '(Height x Width x Length)' ? (
                  <>
                    <div className="dimension">Height</div>
                    <div className="dimension">Width</div>
                    <div className="dimension">Length</div>
                  </>
                ) : option}
              </div>
            ))}
          </div>
          <div className="button-container"></div>
        </div>
        {products.map((product, index) => (
          <div key={index} className={`column ${index === 0 ? 'no-gap' : ''}`}>
            <div className="image-container">
              <img src={product.img} alt={`Chair ${index + 1}`} className="chair-img" />
            </div>
            <div className="values-container">
              {product.values.map((value, valueIndex) => (
                <div key={valueIndex} className={`row ${typeof value === 'number' && valueIndex === 1 ? 'bold-text' : ''}`}>
                  {Array.isArray(value) ? (
                    <div className="dimensions">
                      <div className="dimension">{value[0]}</div>
                      <div className="dimension">{value[1]}</div>
                      <div className="dimension">{value[2]}</div>
                    </div>
                  ) : (
                    typeof value === 'number' && valueIndex === 1 ? renderStars(value) : value
                  )}
                </div>
              ))}
            </div>
            <div className="button-container">
              <button className="add-to-cart"><strong>Add to Cart</strong></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonPage;
