import '../CompponentsCSS/card5.css'
import img1 from '../assets/Git.png'
import img2 from '../assets/Instagram (2).png'
import img3 from '../assets/Email.png'
import img4 from '../assets/telpon.png'

function DIV5 () {
  return (
  <div className='Div'>
  <h1 className="hh1">Contact <span className='sspan'>Me</span></h1>

  <div className='divv'>

  <div className="ddiv">
  <img className="ffoto" src={img1} alt="" />
  </div>

  <div className="ddiv">
  <img className="ffoto" src={img2} alt="" />
  </div>

  <div className="ddiv">
  <img className="ffoto" src={img3} alt="" />
  </div>

  <div className="ddiv">
  <img className="ffoto" src={img4} alt="" />
  </div>

  </div>

  </div>
  )
}

export default DIV5;