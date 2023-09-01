import "./style/Button.css";

function Button() {
  let alertTest = () => alert("Hello");

  return (
    <div className="container">
      <div className="row">
        <button className="small-box font operatorKey-box" onClick={alertTest}>
          C
        </button>
        <button className="small-box font operatorKey-box">+/-</button>
        <button className="small-box font operatorKey-box">%</button>
        <button className="small-box font operatorKey-box">/</button>
      </div>
      <div className="row">
        <button className="small-box font number-box">7</button>
        <button className="small-box font number-box">8</button>
        <button className="small-box font number-box">9</button>
        <button className="small-box font operatorKey-box">X</button>
      </div>
      <div className="row">
        <button className="small-box font number-box">4</button>
        <button className="small-box font number-box">5</button>
        <button className="small-box font number-box">6</button>
        <button className="small-box font operatorKey-box">-</button>
      </div>
      <div className="row">
        <button className="small-box font number-box">1</button>
        <button className="small-box font number-box">2</button>
        <button className="small-box font number-box">3</button>
        <button className="small-box font operatorKey-box">+</button>
      </div>
      <div className="row">
        <button className="big-box font number-box">0</button>
        <button className="small-box font number-box">.</button>
        <button className="small-box font operatorKey-box">=</button>
      </div>
    </div>
  );
}

export default Button;
