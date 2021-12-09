<template>
    <div class="pets">
        <div class="pets-tittle">
            <h2>Mascotas en adopcion</h2>
            <p>Aqui puede encontrar las mascotas disponibles para adoptar</p>
        </div>
        <div class="pets-container">
            <div v-for="pet in pets" :key="pet.id" class="pets-content">
                <div class="pet-target">
                    <img v-bind:src="pet.imgBin64" width="200" alt="Mascota">
                    <div class="pet-text">
                        <p>Descripcion: {{pet.descripcion}}</p>
                        <p>Fecha: {{pet.fecha.substring(0,10)}}</p>
                        <p>Ciudad: {{pet.ciudad}}</p>
                        <p>Contacto: {{pet.telefono}}</p>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: 'pets',

    data: function(){
        return {
            pets: '',   
        }
    },
    apollo:{
        pets: gql`
            query{
                pets {
                    imgBin64
                    descripcion
                    fecha
                    ciudad
                    telefono
                }
            }
        `,
    }

}
</script>

<style>
    .pets-tittle{
        width: 100%;
        text-align: center;
        margin: 30px;
    }
    .pets-container{
        display: flex;
        flex-wrap: wrap;
        margin: 30px;
        justify-content: center;
    }
    .pets-content{
        margin: 15px;
    }
    .pet-target{
        box-shadow: 0px 0px 5px #ccc;
        border-radius: 10px;
        padding: 20px;
        width: 300px;
        margin: 10px;
        transition: .3s;
        border: solid 2px #ccc;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .pet-target:hover{
        border: solid 2px #3FBACC;
    }
    .pet-text{
        margin: 5px;
        margin-top: 15px;
        text-align: center;
    }
</style>