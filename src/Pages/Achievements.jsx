import "../css/Achievements.scss";

const ListItem = ({ imageSrc, title, description }) => (
  <div className="list-item">
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

//get the data from  db
const App = () => {
  const itemList = [
    {
      id: 1,
      title: "Research Publication",
      imageSrc:
        "https://cdn.editage.com/insights/editagecom/production/Publication%20and%20reporting%20biases%20and%20how%20they%20impact%20publication%20of%20research%20%28original%29_0.jpg",
      description:
        'Published a research paper on "Artificial Intelligence in Healthcare" in the International Journal of Computer Science',
    },
    {
      id: 2,
      title: "Hackathon Winner",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8xRZToY6IQyJzrSHZI_95Q8KItVbKXNBgF6ou2tKDQ&s",
      description:
        "Won the first prize in the university hackathon for developing a machine learning-based solution for predicting stock prices",
    },
    {
      id: 3,
      imageSrc:
        "https://d20x1nptavktw0.cloudfront.net/wordpress_media/2024/02/WhatsApp-Image-2024-02-13-at-6.36.14-AM.jpeg",
      title: "Jee Mains Topper",
      description:
        "KTM bike price starts from Rs. 1,79067. KTM offers 10 new models in India with the most popular bikes being 200 Duke, 390 Duke, 250 Duke, 125 Duke",
    },
  ];

  return (
    <div className="achievementsPage">
      <div className="mainTitle">
        <h1>Achievements</h1>
      </div>
      <List items={itemList} />
    </div>
  );
};

export default App;
