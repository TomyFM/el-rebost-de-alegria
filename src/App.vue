<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from './views/HeaderView.vue';
import FooterView from './views/FooterView.vue';

</script>

<template>
  <!-- Topbar Start -->
   
    
    <HeaderView></HeaderView>

    
    <RouterView></RouterView>


    <FooterView></FooterView>

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>
 

</template>

<style>
@import '@/assets/base.css';

  
    .logo{
    display: block;
    margin-left: auto;
    margin-right: auto;   
  }
  .footer{
    padding-top: 0px !important;
    padding-bottom: 0px !important
  }


</style>
