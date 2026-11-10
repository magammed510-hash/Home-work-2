import '../CompponentsCSS/card1.css'
import img1 from '../assets/Rauliqbal (1).png'

const DIV1 = () => {
return(
    <div className='div'>
    <img className='foto' src={img1} alt="" />

<div className='div2'>
    
    <div className='div1'>
    <h2 className='p'>About</h2>
    <h2 className='p'>Passions</h2>
    <h2 className='p'>Portfolio</h2>
    </div>  
  
   <button className='btn'><h2>Contact Me</h2></button>

   </div>

    </div>
)
}
export default DIV1;