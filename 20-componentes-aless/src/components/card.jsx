const Card =({Carta}) =>{

const Estilo={

    card:{
        backgroundColor: 'whiteSmoke',
        color:'black',
        borderRadius:'8px',
        boxShadow:'0 4px 8px rgba(0,0,0,0.1)',
        padding: '16px',
        maxWidth:'300px',
        textAlign:'center',
        transition:'transform 0.2s'
        }
}

return(
    <div class="card" style={Estilo.card}>
    <div class="card-body">
      La chola
      {Carta}
    </div>
  </div>
)
}

export default Card;