<template>
    <div class="principal">
        <div class="row">
            <div class="col-md-3">
                <div class=" custom-card card-sl">
                    <div class="card-image">
                        <img
                             :src="'src/assets/img/'+ data.imgName" />
                    </div>           
                    <div class="card-heading">
                       {{data.name}}
                    </div>                    
                    <div class="d-flex flex-row justify-content-center" >
                        <div>{{Number(data.preu).toFixed(2)}} € / {{data.pes}} {{data.unitat}}</div>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                        <!-- <div class="footer">
                            <span class="badge badge-primary category">{{data.pes}} {{data.unitat}}</span>
                        </div> -->
                        <div class="footer">
                            <span class="badge badge-primary category">Mermelades de fruita</span>
                        </div>
                    </div>                  
                   
                </div>
            </div>
        </div>  
    </div>
</template>
<style>

.principal{
    margin-top:50px;
   
}
.category{
    border-radius: 12px;
    
}

.custom-card{
    min-width: 240px;
}
.footer{
    padding: 10px 15px;
    border-radius: 0 0 8px 8px;
    margin-bottom: 15px;
    
}
        /*  Helper Styles */
    body {
        font-family: Varela Round;
        background: #f1f1f1;
    }

    a {
        text-decoration: none;
    }

    /* Card Styles */

    .card-sl {
        border-radius: 8px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: fit-content;
    }

    .card-image img {
        max-height: 100%;
        max-width: 100%;
        border-radius: 8px 8px 0px 0;
    }

    .card-action {
        position: relative;
        float: right;
        margin-top: -25px;
        margin-right: 20px;
        z-index: 2;
        color: #E26D5C;
        background: #fff;
        border-radius: 100%;
        padding: 15px;
        font-size: 15px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
    }

    .card-action:hover {
        color: #fff;
        background: #E26D5C;
        -webkit-animation: pulse 1.5s infinite;
    }

    .card-heading {
        font-size: 18px;
        font-weight: bold;
        background: #fff;
        padding: 10px 15px;
    }

    .card-text {
        padding: 10px 15px;
        background: #fff;
        font-size: 14px;
        color: #636262;
    }

    .card-button {
        display: flex;
        justify-content: center;
        padding: 10px 0;
        width: 100%;
        background-color: #1F487E;
        color: #fff;
        border-radius: 0 0 8px 8px;
    }

    .card-button:hover {
        text-decoration: none;
        background-color: #1D3461;
        color: #fff;

    }


    @-webkit-keyframes pulse {
        0% {
            -moz-transform: scale(0.9);
            -ms-transform: scale(0.9);
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
        }

        70% {
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -webkit-transform: scale(1);
            transform: scale(1);
            box-shadow: 0 0 0 50px rgba(90, 153, 212, 0);
        }

        100% {
            -moz-transform: scale(0.9);
            -ms-transform: scale(0.9);
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
            box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
        }
    }
</style>
<script>
export default{
    props: ['data'],
 
}
</script>
