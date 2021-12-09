<template>
    <div class="greetings">
        <h1>!Bienvenido <span>{{userDetailById.username}}</span>!</h1>
        <div class="details">
            <div class="container-detail">
                <h3>Su información es la siguiente</h3>
                <h3>Documento de identificacion: <span>{{userDetailById.id}}</span></h3>
                <h3>Usuario: <span>{{userDetailById.username}}</span></h3>
                <h3>Nombres: <span>{{userDetailById.name}}</span></h3>
                <h3>Apellidos: <span>{{userDetailById.lastName}}</span></h3>
                <h3>Correo: <span>{{userDetailById.email}}</span></h3>
                <h3>Telefono: <span>{{userDetailById.tel}}</span></h3>
                <h3>Ciudad: <span>{{userDetailById.location}}</span></h3>
                <h3>Direccion: <span>{{userDetailById.address}}</span></h3>
                <h3>Genero: <span>{{userDetailById.gender}}</span></h3>
            </div>
            <div class="mensaje">
                <h2>Si deseas adoptar una mascota o registrar una para que la adopten, selecciona la opcion en la cabecera de la página</h2>
            </div>

        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";
import jwt_decode from "jwt-decode";

export default {
    name: 'home',

    data: function(){
        return{
            userId: jwt_decode(localStorage.getItem("token_refresh")).user_id,
            userDetailById: {
                id: 0,
                username: '',
                name: '',
                lastName: '',
                email: '',
                tel: 0,
                location: '',
                address: '',
                gender: '',
            },
        }
    },

    apollo:{
        userDetailById:{
            query: gql`
                query ($userId: Int!) {
                    userDetailById(userId: $userId) {
                        id
                        username
                        name
                        lastName
                        email
                        tel
                        location
                        address
                        gender
                    }
                }
            `,
            variables(){
                return{
                    userId: this.userId,
                };
            }
        }
    }
}
</script>

<style>
    .greetings{
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .greetings h1{
        font-size: 50px;
        margin: 15px;
    }
    .greetings h3{
        margin: 15px;
    }
    .greetings span{
        color: #3FBACC;
        font-weight: bold;
    }
    .details{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .container-detail{
        width: 60%;
    }
    .mensaje{
        width: 40%;
        padding-top: 80px;
        color: #3FBACC;
    }
</style>