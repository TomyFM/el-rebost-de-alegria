<template>
 <div class="container-fluid py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 pb-4 pb-lg-0">
                    <div class="bg-primary text-dark text-center p-4">
                        <h4 class="m-0"><i class="fa fa-map-marker-alt text-white mr-2"></i>Victor Pradera, nº 7, Godall</h4>
                    </div>
                    <iframe style="width: 100%; border:0; height: 470px;"
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.9001506174236!2d0.4687038512693106!3d40.65413137923684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a0f840287660c5%3A0x256793a526fcac6c!2sCarrer%20Victor%20Pradera%2C%207%2C%2043516%20Godall%2C%20Tarragona!5e0!3m2!1ses!2ses!4v1652968614235!5m2!1ses!2ses" 
                        frameborder="0"  allowfullscreen="false" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div class="col-lg-7">
                    <h6 class="text-primary text-uppercase font-weight-bold">Contacta amb nosaltres</h6>
                    <h1 class="mb-4">Contact per a qualsevol dubte</h1>
                    <div class="contact-form bg-secondary" style="padding: 30px;">
                        <div id="success"></div>
                        
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div class="control-group">
                                <input type="text" class="form-control border-0 p-4" id="name" placeholder="Nom"
                                    required="required" data-validation-required-message="Introdueix el teu nom" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="email" class="form-control border-0 p-4" id="email" placeholder="Email"
                                    required="required" data-validation-required-message="Introdueix un email" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control border-0 p-4" id="subject" placeholder="Titol"
                                    required="required" data-validation-required-message="Introduiex un titol" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control border-0 py-3 px-4" rows="3" id="message" placeholder="Missatge"
                                    required="required"
                                    data-validation-required-message="Introdeix un missatge"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact End -->
</template>