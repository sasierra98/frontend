<template>
    <div class="signUp_user">
        <div class="container_signup_user">
            <h1>Registrarse</h1>
            <form v-on:submit.prevent="proccessSignUp">
                <input type="number" v-model="user.id" placeholder="Documento de identidad">
                <input type="text" v-model="user.username" placeholder="Usuario">
                <input type="password" v-model="user.password" placeholder="Contraseña">
                <input type="text" v-model="user.name" placeholder="Nombres">
                <input type="text" v-model="user.lastname" placeholder="Apellidos">
                <input type="email" v-model="user.email" placeholder="Correo">
                <input type="tel" v-model="user.tel" placeholder="Telefono">
                <input type="text" v-model="user.location" placeholder="Ciudad">
                <input type="text" v-model="user.address" placeholder="Direccion">
                <select v-model="user.gender">
                    <option disabled value="">Genero</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                </select>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'signup',

    data: function () {
        return {
            user: {
                id: '',
                username: '',
                password: '',
                name: '',
                lastname: '',
                email: '',
                tel: '',
                location: '',
                address: '',
                gender: '',
            }
        }
    },

    methods: {
        proccessSignUp: function(){
            // Post
        }
    }
}
</script>

<style>
    .signUp_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }   
    .container_signup_user{
        margin: 40px;
        padding: 20px;
        box-shadow: 0px 0px 10px #c7c7c7;
        border-radius: 10px;
        width: 25%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .container_signup_user h1{
        margin: 10px;
    }
    .container_signup_user form{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .container_signup_user form input,select,button{
        margin: 5px;
        width: 100%;
    }
    .container_signup_user form input,select{
        border: 1px solid #c7c7c7;
        border-radius: 5px;
        padding: 10px;
    }
    .container_signup_user form button{
        border: 1px solid #c7c7c7;
        border-radius: 5px;
        padding: 10px;
        background-color: #3FBACC;
        color: #FFFFFF;
        font-size: 20px;
        transition: .3s;
        cursor: pointer;
    }
    .container_signup_user form button:hover{
        background-color: #FFFFFF;
        color: #3FBACC;
    }
</style>