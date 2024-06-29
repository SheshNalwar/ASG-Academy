const ServicesCard = ({ cardClass, count, name }) => {
  return (
    <div className={`card ${cardClass}`}>
      <div className="number">{count}</div>
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore
      </p>
    </div>
  );
};

export default ServicesCard;
