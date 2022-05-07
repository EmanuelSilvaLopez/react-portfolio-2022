import "./intro.scss"

export default function Intro() {
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/mepic.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello I'm</h2>
          <h1>Emanuel Silva-Lopez</h1>
          <h3 className="about">
          I am a West Michigan based Web Developer. Currently working through 
            MSU's Web Development Bootcamp and hoping to pursure a career in Web Development,
          </h3>
        </div>
      </div>
    </div>
  )
}
