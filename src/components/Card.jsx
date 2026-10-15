import { Bookmark } from 'lucide-react'

const Card = (props) => {
  // console.log(props.department);
  
    return (
        <div className="parent">
      <div className="card">

        <div className="top">
          <button type="submit">Analyze <Bookmark /></button>
          <div className="profile">
            <img src={props.logo} alt="Iron Man" />
          </div>
        </div>


        <div className="center">
          <h3>{props.company} <span>{props.tag}</span></h3>
          <p style={{ color: '#754487', fontWeight: 'bold', fontSize: '13px', marginBottom: '4px' }}>{props.department}</p>
          <h2>{props.role}</h2>
          <div>
            <h4>{props.perk1}</h4>
            <h4>{props.perk2}</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.payBase}</h3>
            <h3>{props.payMax}</h3>
            <h3>{props.bonus}</h3>
            <p>{props.location}</p>
          </div>
          <button>{props.buttonText}</button>
        </div>
      </div>
    </div>

    );
};
export default Card;
