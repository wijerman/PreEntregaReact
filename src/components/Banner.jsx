const Banner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card h-100 d-flex flex-column justify-content-between" style={{ width: "18rem" }}>
            <img src="articulos/fitness.png" className="card-img-top" alt="fitness" />
            <div className="card-body">
              <h5 className="card-title">Articulos de gimnasio</h5>
              <p className="card-text">
              Encuentra todo lo que necesitas para equipar tu gimnasio de la mejor manera. Explora nuestra amplia selección de artículos y equipos diseñados para ayudarte a alcanzar tus metas de fitness. Desde máquinas de última tecnología hasta accesorios especializados, tenemos todo lo necesario para crear un espacio de entrenamiento completo y eficaz.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary">
                Ingresar
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 d-flex flex-column justify-content-between" style={{ width: "18rem" }}>
            <img src="articulos/kinesio.PNG" className="card-img-top" alt="Kinesio" />
            <div className="card-body">
              <h5 className="card-title">Equipos de fisioterapia</h5>
              <p className="card-text">
                Descubre una amplia gama de equipos especializados en fisioterapia en nuestro gimnasio. Desde máquinas de última generación hasta equipos tradicionales, ofrecemos todo lo que necesitas para tu tratamiento y recuperación física.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary">
                Ingresar
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 d-flex flex-column justify-content-between" style={{ width: "18rem" }}>
            <img src="articulos/rehabilitacion.PNG" className="card-img-top" alt="rehabilitacion" />
            <div className="card-body">
              <h5 className="card-title">Equipos de rehabilitación</h5>
              <p className="card-text">
                Explora nuestra diversa selección de equipos y artículos diseñados para la rehabilitación en nuestro gimnasio. Desde máquinas de fisioterapia de vanguardia hasta herramientas tradicionales, ofrecemos todo lo necesario para tu proceso de recuperación.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary">
                Ingresar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
