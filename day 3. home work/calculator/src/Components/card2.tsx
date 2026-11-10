import '../CompponentsCSS/card2.css'
import img1 from '../assets/heroImg 1 (1).png'

function DIV2 () {
return (
    <div className='DIV2-div'>
    
   <div className='div2-chap'>

    <h2 className='div2-chap-h1'>Hi !</h2>
    <h1 className='div2-chap-h2'>I’m Muhamad Raul. Front-End Developer</h1>
    <p className='div2-chap-p'>Front-End devel oper based in Bekasi, Indonesian I’am coding with a clean and beautiful problem solving in mind.</p>
   </div>

   <div className='div2-rost'>
    <img src={img1} alt="" />
   </div>

    </div>
)
}

export default DIV2;