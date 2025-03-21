const Notificacinoes =({notificacion}) =>{
     
    const estilo={
       boton:{
        backgroundColor    : 'green',
        color: 'white',
        padding: '10px 20px',
        textAling:'center',
        fontSize:'20px',
        border:'none',
        borderRadius:'5px',
        display:'incline-block',
        margin:'10px',
        cursor:'pointer'
       },
       letra:{
        fontSize:'12px',
       color:'white'
       }
    }

    return(
        <button type="button" style={estilo.boton}>
            {notificacion}
            La chola
         </button>
    )
}

export default Notificacinoes;