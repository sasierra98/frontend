<template>
  <div id="app" class="app">

    <div class="header">
      <h1><a href="">WebPets</a></h1>
      <nav>
        <a v-if="is_auth" v-on:click="loadHome">Cuenta</a>
        <a v-if="is_auth" v-on:click="loadPetsSignUp">Registrar mascota</a>
        <a v-if="is_auth" v-on:click="loadPets">Ver mascotas</a>
        <a v-if="is_auth" v-on:click="logOut">Cerrar sesion</a>
        <a v-if="!is_auth" v-on:click="loadLogin">Iniciar Sesión</a>
        <a v-if="!is_auth" v-on:click="loadSignup">Registrarse</a>
      </nav>
    </div>

    <div class="main-component">
      <router-view
        v-on:completedLogin="completedLogin"
        v-on:completedSignup="completedSignup"
        v-on:logOut="logOut"
      ></router-view>
    </div>

    <div class="footer">
      <p>¡Ayuda a cambiarle la vida a una mascota!</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',

  data: function(){
    return{
      is_auth: false
    }
  },

  components:{
  },

  methods: {
    verifyAuth: function(){
      this.is_auth = localStorage.getItem("isAuth") || false;
      if(this.is_auth==false)
        this.$router.push({name: 'login'})
      else
        this.$router.push({name: 'home'})
    },
    loadLogin: function(){
      this.$router.push({name: 'login'})
    },
    loadSignup: function(){
      this.$router.push({name: 'signup'})
    },
    completedLogin: function(data){
      localStorage.setItem('isAuth', true)
      localStorage.setItem('username', data.username)
      localStorage.setItem('token_access', data.token_access)
      localStorage.setItem('token_refresh', data.token_refresh)
      alert('Autenticación exitosa')
      this.verifyAuth()
    },
    completedSignup: function(data){
      alert('Registro exitoso')
      this.completedLogin(data)
    },
    loadHome: function(){
      this.$router.push({name: 'home'})
    },
    loadPets: function(){
      this.$router.push({name: 'pets'})
    },
    logOut: function(){
      localStorage.clear()
      alert('Sesión cerrada')
      this.verifyAuth()
    },
    loadPetsSignUp: function(){
      this.$router.push({name: 'petsSignUp'})
    },
  },

  created: function(){
    this.verifyAuth()
  }
}
</script>


<style>
/* 
  Celeste: #3FBACC 
  Blanco: #FFFFFF
*/
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Roboto', sans-serif;
}
.header{

  widows: 100%;
  height: 70px;
  min-height: 70px;
  background-color: #3FBACC;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1{
  width: 20%;
  text-align: center;
}
.header h1 a{
  color: #FFFFFF;
  text-decoration: none;
  transition: .3s;
  cursor: pointer;
}
.header h1 a:hover{
  font-size: 40px;
}

.header nav a{
  color: #FFFFFF;
  text-decoration: none;
  margin-right: 15px;
  transition: .3s;
  cursor: pointer;
}
.header nav a:hover{
  font-size: 20px;
}
.footer{
  background-color: #797979;
  color: #FFFFFF;
  padding: 20px;
  text-align: center;
}
</style>
