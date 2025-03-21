import './App.css'
import Notificacion from './components/notificaciones'
import Card from './components/card'
import Modal from './components/modal'
import BotonGrup from './components/botongrup'
import Acordion from './components/acordion'
import Heading from './components/heading'
import Carusel from './components/carusel'
import Close from './components/closeButton'
import Collapse from './components/collapse'
import Lista from './components/Lista'
import Nav from './components/Nav'
import Off from './components/offcanvs'
import Place from './components/placeHolders'
import Popovers from './components/popovers'
import Img from './components/img'
import PogresBar from './components/progerss'
import Spinner from './components/spinners'
import SpinnerGroup from './components/SpinersGroup'
function App() {
 
return (
    <>
   
    
    <Notificacion/>
   
    <br />
    <Spinner/>
    <br /><br />
    <SpinnerGroup/>
    <br /><br />
    <button type="button" class="btn btn-primary position-relative">
      Inbox
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        99+
        <span class="visually-hidden">unread messages</span>
      </span>
    </button>    
    <br />
    <br />


<BotonGrup/>
<br />
<Acordion/>
<br />
<Heading/>
<br /><br />
<Close/>
<br /><br />
<Collapse/>
<br />
<Lista/>
<br />
<Nav/>
<br />
<Off/>
<br />
<Place/>
<br /><br />
<Popovers/>
<br /><br />
<Img/>
<br />
<Modal/>
<br />
<PogresBar/>
<br />
<Carusel/>
<br />
<Card/>
<br />

    <div class="alert alert-warning" role="alert">
      Alerta color amarillo
    </div>

    </>

   
)
}

export default App

