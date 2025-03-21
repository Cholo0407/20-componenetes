const BotonGrup = ({BOTON}) =>{


    const estilo={
        boton:{
            backgroundColor: 'pink',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 15px',
            cursor: 'pointer',
            margin:'10px',
            transition: ' backgroundColor 0.3s'
        }
    }

    return(
        <div class="btn-group" role="group" aria-label="Basic example" style={estilo.boton}>
        <button type="button" >Left</button>
        <button type="button" >Middle</button>
        <button type="button" >Right</button>
        {BOTON}
      </div>
    )
}

export default BotonGrup;