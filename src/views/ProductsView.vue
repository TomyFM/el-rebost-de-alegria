<template>
    <div class="container">
        <div class="preferits">SELECCIONA ELS TEU PRODUCTES PREFERITS</div>
        <div class="row row-cols-auto">
            <div class="col">
                <div class="form-check">
                    <input class="form-check-input" v-model="checkedNames" type="checkbox" checked value="0" >
                    <label class="form-check-label" for="flexCheckDefault">Tots els productes {{tots}} </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" v-model="checkedNames" type="checkbox"  value="1" >
                    <label class="form-check-label" for="flexCheckChecked">Mermelades de Fruita</label>
                </div>
                <div class="form-check">
                        <input class="form-check-input" type="checkbox"  v-model="checkedNames"  value="2" >
                        <label class="form-check-label" for="flexCheckChecked">Mermelades de Verdura {{olis}}</label>
                </div>
            </div>
            <div class="col">
                <div class="form-check">
                        <input class="form-check-input" type="checkbox"  v-model="checkedNames"  value="3" >
                        <label class="form-check-label" for="flexCheckChecked">Olis i Olivada {{olis}}</label>
                </div>
                <div class="form-check">
                        <input class="form-check-input" type="checkbox"  v-model="checkedNames"  value="4" >
                        <label class="form-check-label" for="flexCheckChecked">Vinagres amb sabors {{olis}}</label>
                </div>
                <div class="form-check">
                        <input class="form-check-input" type="checkbox"  v-model="checkedNames"  value="5" >
                        <label class="form-check-label" for="flexCheckChecked">Sucs {{olis}}</label>
                </div>    
            </div>
            <div class="col">
                <div class="form-check">
                        <input class="form-check-input" type="checkbox"  v-model="checkedNames"  value="6" >
                        <label class="form-check-label" for="flexCheckChecked">Conserves i Congelats{{olis}}</label>
                </div>
                <div class="form-check">
                        <input class="form-check-input" type="checkbox"  v-model="checkedNames"  value="7" >
                        <label class="form-check-label" for="flexCheckChecked">Oli verge amb sabors {{olis}}</label>
                </div>
                <div class="form-check">
                        <input class="form-check-input" type="checkbox"  v-model="checkedNames"  value="8" >
                        <label class="form-check-label" for="flexCheckChecked">Fruits secs garrapinyats {{olis}}</label>
                </div>    
            </div>
        </div>        
        <div class="row row-cols-auto">
                <Card class="col" v-for="(value, key) in filtered" :data="value"/>
        </div>
    </div>

   

 
</template>
<script>
    import Card from '../components/Card.vue'
    import Data from '../assets/data.json'


    export default{
        name: 'productes',      
        components:{
            Card
        },   
        data(){
            return{
                a: "Tomas",
                data: Data,              
                checkedNames: ["0"]
            }
        },
        methods: {
        
        },
        computed: {
           
            filtered(){             
                
                if(this.checkedNames.includes("0")){
                    return this.data;
                }
                else {
                    return this.data.filter(d => this.checkedNames.includes(d.category))
                }
            }
        }
    }
</script>
<style>
    .preferits{
        margin-bottom: 10px;
        font-weight: 600;
        letter-spacing: 1px;
        color: #1F1F2E;
        outline: none;
    }
</style>