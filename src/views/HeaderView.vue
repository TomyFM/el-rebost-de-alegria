<template>
    <div class="container-fluid bg-dark">
        <div class="row py-2 px-lg-5">
            <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center text-white">
                    <small><i class="fa fa-phone-alt mr-2"></i>606 64 62 64</small>
                    <small class="px-3">|</small>
                    <small><i class="fa fa-envelope mr-2"></i>alegriagarriga@gmail.com</small>
                </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <a class="text-white px-2" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>                                  
                    <a class="text-white px-2" href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div>
        <img
          width="auto"
          alt="Logo"
          src="src/assets/img/capcalera.png"
          class="img-fluid logo"
        />
      </div>
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">           
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div class="navbar-nav m-auto py-0">
                    <router-link class="nav-item nav-link" active-class="active" :to="{ path: '/' }">INICI</router-link>
                    <router-link class="nav-item nav-link" active-class="active" :to="{ path: '/productes' }">PRODUCTES</router-link>
                    <router-link class="nav-item nav-link" active-class="active" :to="{ path: '/idees' }">IDEES PER A REGALAR</router-link>
                    <router-link class="nav-item nav-link" active-class="active" :to="{ path: '/contacte' }">CONTACTE</router-link>
                </div>               
            </div>
        </nav>
    </div>
    <hr style="border-top: 1px solid #1F1F2E;">
    <!-- Navbar End -->
</template>
