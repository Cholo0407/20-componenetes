const Card =({Carta}) =>{

    const Estilo={
    
        card:{
            backgroundColor: 'black',
            color:'white',
            boxShadow:'0 4px 8px rgba(0,0,0,0.1)',
            padding: '20px',
            maxWidth:'400px',
            textAlign:'center',
            transition:'transform 0.2s',
             margin: '0 auto'
            }
    }
    
    return(
        <div class="card" style={Estilo.card}>
            <img src="https://media1.tenor.com/m/aEDi9J1RTSUAAAAd/flightreacts-flight.gif" class="card-img-top" alt="..."></img>
            <div class="card-body">
             <h5>Alessandro Antonio Muñoz Quijada</h5>
            <br />
            telefono: 7556-9709
            <br />
            Edad: 17
            <br />
            Correo personal: aless070704@gmail.com   
            <br />
            Correo intitucional: 20200128@ricaldone.edu.sv   
            <br />
           {Carta}
          </div>
        </div>
    )
    }
    
    export default Card;