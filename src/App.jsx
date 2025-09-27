
function App() {
  

  return (
    <>
      {/* Header */}
      <div className="container"> 
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"> 
          <div className="col-md-3 mb-2 mb-md-0"> 
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"> 
            <i class="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
            <span className="ms-2 fs-4">bookstore</span>
            </a> 
          </div> 
          
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> 
            <li><a href="#home" className="nav-link px-2">Home</a></li> <li><a href="#book" className="nav-link px-2">Book</a></li> 
            <li><a href="#team" className="nav-link px-2">Team</a></li> 
            <li><a href="#contact" className="nav-link px-2">Contact</a></li> 
          </ul> 
          
          <div className="col-md-3 text-end"> 
            <button type="button" className="btn btn-outline-primary me-2">Login</button> 
            <button type="button" className="btn btn-primary">Register</button> 
          </div>
        </header> 
      </div>

      {/* Hero */}
      <div id="home" className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Atomic Habits: Perubahan Kecil yang memberikan hasil luar biasa
            </h1>
            <p className="lead">
              Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Buy Now
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Detail
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
            <img className="rounded-lg-3" src="https://i.pinimg.com/1200x/f1/e5/f3/f1e5f38e77fdaf187b70e2b4c785e1fc.jpg" alt="" width="220"/>
          </div>
        </div>
      </div>

      {/* Product List */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 id="book" className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Something short and leading about the collection below—its contents, the
              creator, etc. Make it short and sweet, but not too short so folks don’t
              simply skip over it entirely.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">Views</a>
              <a href="#" className="btn btn-secondary my-2">Other Books</a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            <div className="col">
              <div className="card shadow-sm">
                <svg aria-label="Placeholder: Thumbnail" className="bd-placeholder-img card-img-top" height="225"
                  preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg aria-label="Placeholder: Thumbnail" className="bd-placeholder-img card-img-top" height="225"
                  preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg aria-label="Placeholder: Thumbnail" className="bd-placeholder-img card-img-top" height="225"
                  preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg aria-label="Placeholder: Thumbnail" className="bd-placeholder-img card-img-top" height="225"
                  preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg aria-label="Placeholder: Thumbnail" className="bd-placeholder-img card-img-top" height="225"
                  preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg aria-label="Placeholder: Thumbnail" className="bd-placeholder-img card-img-top" height="225"
                  preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg aria-label="Placeholder: Thumbnail" className="bd-placeholder-img card-img-top" height="225"
                  preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg aria-label="Placeholder: Thumbnail" className="bd-placeholder-img card-img-top" height="225"
                  preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg aria-label="Placeholder: Thumbnail" className="bd-placeholder-img card-img-top" height="225"
                  preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Section*/}
      <section id="team" class="py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-4">Our Team</h2>
          <div class="row  g-4 row-justify-content-center">
            <div class="col">
              <div class="card h-100 text-center">
                <img src="https://via.placeholder.com/150" class="card-img-top" alt="Team Member"/>
                <div class="card-body">
                  <h5 class="card-title">Raisya</h5>
                  <p class="card-text">Lead Developer</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100 text-center">
                <img src="https://via.placeholder.com/150" class="card-img-top" alt="Team Member"/>
                <div class="card-body">
                  <h5 class="card-title">Mentor</h5>
                  <p class="card-text">Project Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      
      
      {/* Contact  */}
      <section id="contact" class="py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-4">Contact</h2>
          <div class="row justify-content-center">
            <div class="col-md-6">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Email:</strong> araisyaanfl@gmail.com</li>
                <li class="list-group-item"><strong>Telepon:</strong> +62 819-5273-0465</li>
                <li class="list-group-item"><strong>Alamat:</strong> Jl. Ayub No. 6A, Jakarta Timur</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#home" className="nav-link px-2 text-body-secondary">Home</a>
            </li>
            <li className="nav-item">
              <a href="#book" className="nav-link px-2 text-body-secondary">Book</a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link px-2 text-body-secondary">Team</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2025 NF Academyc</p>
        </footer>
      </div>
      </>
  )
}

export default App

