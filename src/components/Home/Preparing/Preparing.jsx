import "./Preparing.css";

const Preparing = () => {
  return (
    <div className="preparingContainer">
      <h2>I am Preparing For</h2>
      <p>We have a variety of courses to choose from</p>
      <div className="courseContainer">
        <input type="radio" name="slider" id="cbse" Checked />
        <input type="radio" name="slider" id="icse"  />
        <input type="radio" name="slider" id="wbse"  />
        <input type="radio" name="slider" id="jee_neet"  />
        <input type="radio" name="slider" id="kvpy"  />

        <nav>
            <label htmlFor="cbse" className="cbse">CBSE</label>
            <label htmlFor="icse" className="icse">ICSE/ISC</label>
            <label htmlFor="wbse" className="wbse">WBSSE/WBCHSE</label>
            <label htmlFor="jee_neet" className="jee_neet">JEE/NEET</label>
            <label htmlFor="kvpy" className="kvpy">KVPY</label>
        </nav>

        <section></section>
      </div>
    </div>
  )
}

export default Preparing
