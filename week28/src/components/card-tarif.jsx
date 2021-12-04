import React, {useState} from 'react';
import "./card-tarif.scss";



const Card = ({price, speed, isSelected}) => {
    const [pressed, setPressed ] = useState(false);
    const handleChange = () => {
        setPressed(!pressed)
    }
  
  return (
    <button onClick={handleChange} className={`card ${isSelected ? "selected" : ""}`}>
      {/* {!pressed ? (
        ""
      ) : (
        <div
          style={{
            height: "20px",
          }}
        >
          Вы выбрали тариф:
        </div>
      )} */}
      <div className={`card-header${price}`}>
        Безлимитный {price}
      </div>
      <div className="card-body">
        <div className={`card-price${price}`}>
          <div className="card-info1">руб</div>
          <div className="card-rate">{price}</div>
          <div className="card-info2">/мес</div>
        </div>
        <div className="card-speed">до {speed} Мбит/сек</div>
        <div className="card-footer">Объем включенного трафика не граничен</div>
      </div>
    </button>
  );
}

export default Card;