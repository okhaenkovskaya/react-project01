import {Link} from "react-router-dom";

const SocialNetwork = ({socialNetworkData: {title, items}}) => {

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => <li key={index}><Link to={item.link}>{item.svg}</Link></li>)}
      </ul>
    </div>
  );
};

export default SocialNetwork;
