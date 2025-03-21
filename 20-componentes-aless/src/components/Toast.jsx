const Toast =({Toast}) =>{


    const estilo={
        toast:{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#4caf50',
            color: 'white',
            borderRadius: '5px',
            padding: '15px 20px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            opacity: '0',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            transform: 'translateY(20px)',
            zIndex: '1000'
        }
    }
    return(
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" style={estilo.toast}>
        <div class="toast-header">
          <img src="..." class="rounded me-2" alt="..."/>
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          {Toast}
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          Hello, world! This is a toast message.
        </div>
    
      </div>
     
    )
}