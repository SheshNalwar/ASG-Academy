import "./Loader.css";
const Loader = () => {
  return (
    <div className="box">
      <div className="column" />
      <div className="bead-container">
        <div className="rod" id="rod-one">
          <div className="bead" />
          <div className="bead" />
          <div className="bead" />
        </div>
        <div className="rod" id="rod-two">
          <div className="bead" />
          <div className="bead" />
        </div>
        <div className="rod" id="rod-three">
          <div className="bead" />
        </div>
      </div>
      <div className="column" />
    </div>
  );
};

export default Loader;
