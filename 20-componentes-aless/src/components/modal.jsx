const modal = ({Modal}) =>{

    const style={
        
        modal:{
            position:'fixed',
            top:'0',
            left:'0',
            widht:'100%',
            height:'100%',
            backgroundColor:'rgba(255,255,255,0.8)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            zIndex:'1000',
            backgroundColor:'gray',
            borderRadius:'8px',
            boxShadow:'0 4px 20px rgba(0,0,0,0.2)',
            padding: '20px',
            maxWhidth:'400px',
            textAlign:'center',
            position:'relative'
        }
    }

    return(
        <div class="modal" tabindex="-1" style={style.modal}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                {Modal}
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default modal;