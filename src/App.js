import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <section className="hero">
    <header>
			<div className="container">
				<div className="logo">
					<h2><a href="#"><span></span>PioneerTech</a></h2>
				</div>
				<nav>
					<div className="hamb">
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</div>

					<ul className="nav-links">
						<li><a href="Index.html">Home</a></li>
						<li className="active"><a href="registro.html">Sing-In</a></li>
                        <li><a href="#">Atención al cliente</a></li>
						<li><a href="#">Contacto</a></li>
					</ul>
				</nav>
			</div>
		</header>

    <section className="banner">
			<div className="container">
				<div className="details">
					<h1>Soluciones para tu negocio.</h1>
					<p>Aplicación para el área de ventas, gestión comercial, control y administración, automatiza y aumenta la productividad.
					</p>
				</div>

				
				<div className="cta">
					<div button type="button" className="btn btn-outline-primary" data-bs-toggle="modal"data-bs-target="#staticBackdrop">Iniciar sesión</div>
				</div>	

				<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row mt-3">
                                    <div className="col-sm-0 col-md-1"></div>
                                    <div className="col-sm-12 col-md-10">
                                        <div className="card" aling="center">
                                            <h5 className="card-header " background="#467BFB;" color="#fff" >Iniciar sesión</h5>
                                            <div className="card-body">
                                                <div id="my-signin2"></div>
                                                <br/>
                                                <form action="admin.html">
                                                    <div className="mb-3">
                                                        <input type="email" name="correo" className="form-control"
                                                            placeholder="Correo" required="required"/>
                                                    </div>
                                                    <div className="mb-3">
                                                        <input type="password" name="clave" className="form-control"
                                                            placeholder="Clave" required="required"/>
                                                    </div>
                                                    <div className="d-grid">
                                                        <button type="submit" className="btn btn-primary" >Ingresar</button>
                                                    </div>
													<div className="connect">
														<div className="email">
															<a href="https://mail.google.com//" target="_blank"><i className="fab fa-google"></i></a>Continuar con google
														</div>		
													</div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				</div>
            </div>
           
			<div className="connect">
				<div className="container">	
					<h4>Síguenos:</h4>				
						<a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
						<a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
						<a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook"></i></a>
				</div>
			</div>
		</section>


    </section>
    
  );
}

export default App;
