import { itemList } from "../utils/Data";
import "../css/achievements.scss";
const ListItem = ({ imageSrc, title, description }) => (
  <div className="list-item" >
    <div className="list-item-image">
      <img src={imageSrc} alt="Item Image" className="item-image" />
    </div>
    <div className="list-item-details">
      <h2 className="list-item-title">{title}</h2>
      <p className="list-item-description">{description}</p>
    </div>
  </div>
);

const List = ({ items }) => (
  <div className="list">
    {items.map((item, index) => (
      <ListItem
        key={index}
        imageSrc={item.imageSrc}
        title={item.title}
        description={item.description}
      />
    ))}
  </div>
);

const Achievements = () => {
  return (
    <div className="achievementsPage">
      <div className="mainTitle">
        <h1>Achievements</h1>
      </div>
      <List items={itemList} />
    </div>
  );
};

export default Achievements;
