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
import Spinners from './components/spinners'
import SpinnerGroup from './components/SpinersGroup'
function App() {
 
return (
    <>
   
    <div class="alert alert-warning" role="alert">
      Alerta color amarillo
    </div>
    <Notificacion/>
   
    <br />
    <Spinners/>
    <br />
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

<Modal/>
<br />
<BotonGrup/>
<br />
<Acordion/>
<br />
<Heading/>
<br />
<Close/>
<br />
<Collapse/>
<br />
<Lista/>
<br />
<Nav/>
<br />
<Off/>
<br />
<Place/>
<br />
<Popovers/>
<br />
<Img/>
<br />
<PogresBar/>
<br />
<Carusel/>
<br />
<Card/>
<br />

    </>

   
)
}

export default App

