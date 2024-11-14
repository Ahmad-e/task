import Facebook from '../SVGs/facebook'
import Instagram from '../SVGs/instagram'
import Linkedin from '../SVGs/linkedin'
import Twitter from '../SVGs/twitter'
import Gmail from '../SVGs/gmail';
import Phone from '../SVGs/phone'

const DarkNavBar=()=>{
    return(
        <div className="dark_nav_bar" >
            <div>
                <span>
                    Sun to Thu 9:00 am to 6:00 pm 
                </span>
                <span>
                    <a href='/'><Facebook /></a>
                    <a href='/'><Twitter /></a>
                    <a href='/'><Instagram /></a>
                    <a href='/'><Linkedin /></a>
                </span>
            </div>
            <div>
                <span>
                    <Phone/>+966 - 112 426 668
                </span>
                <span>
                    <Gmail/>info@stamina.com.sa
                </span>
            </div>
        </div>
    )
}
export default DarkNavBar