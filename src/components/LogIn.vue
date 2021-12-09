<template>
    <div class="logIn_user">
        <div class="container_logIn_user">
            <h2>Iniciar sesión</h2>

            <form v-on:submit.prevent="processLogInUser" >
                <input type="text" v-model="user.username" placeholder="Usuario">
                <br>
                <input type="password" v-model="user.password" placeholder="Contraseña">
                <br>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    </div>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: "login",
  data: function() {
    return {
      user: {
          username: "",
          password: "",
      },
    };
  },
  
  methods: {
    processLogInUser: async function() {
      await this.$apollo
        .mutate({
          mutation: gql`
           mutation($credentials: CredentialsInput!) {
             logIn(credentials: $credentials) {
               refresh
               access
             }
           }
         `,
         variables: {
           credentials: this.user,
         },
       })
       .then((result) => {
         let dataLogIn = {
           username: this.user.username,
           token_access: result.data.logIn.access,
           token_refresh: result.data.logIn.refresh,
         };

        this.$emit("completedLogin", dataLogIn);
       })
       .catch((error) => {
         alert("ERROR 401: Credenciales Incorrectas.");
       });
    },
  },
}
</script>

<style>

     .logIn_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container_logIn_user {
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

      .container_logIn_user h2{
        margin: 10px;
        
      }

      .container_logIn_user form input,button{
        margin: 5px;
        width: 100%;
        border: 1px solid #c7c7c7;
        border-radius: 5px;
        padding: 10px;
      }

      .container_logIn_user form{
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .logIn_user h2{
         color: #101518;
      }

      .container_logIn_user form button{
        border: 1px solid #c7c7c7;
        border-radius: 5px;
        padding: 10px;
        background-color: #3FBACC;
        color: #FFFFFF;
        font-size: 20px;
        transition: .3s;
        cursor: pointer;
      }

      .container_logIn_user form button:hover{
        background-color: #FFFFFF;
        color: #3FBACC;
      }
</style>
