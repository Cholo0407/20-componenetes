const Carusel = ({}) =>{


    return(
        <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://media1.tenor.com/m/ap6LSaSeQ_kAAAAC/ishowspeed-try-not-to-laugh.gif" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://media1.tenor.com/m/aloqrll_B74AAAAd/ishowspeed-shock.gif" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://media1.tenor.com/m/_J7d7J0v6FsAAAAd/ishowspeed-laugh.gif" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
         
    )
}

export default Carusel;