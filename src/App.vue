<template>
  <div id="app" class="app">

    <div class="header">
      <h1><a href="">WebPets</a></h1>
      <nav>
        <a v-if="is_auth">Cuenta</a>
        <a v-if="is_auth">Registrar mascota</a>
        <a v-if="is_auth">Ver mascotas</a>
        <a v-if="is_auth">Cerrar sesion</a>
        <a v-if="!is_auth" v-on="loadLogin">Iniciar Sesión</a>
        <a v-if="!is_auth" v-on="loadSignup">Registrarse</a>
      </nav>
    </div>

    <div class="main-component">
      <router-view
        v-on:completedLogin="completedLogin"
        v-on:completedSignup="completedSignup"
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
      if(this.is_auth==false)
        this.$router.push({name: 'login'})
    },
    loadLogin: function(){
      this.$router.push({name: 'login'})
    },
    loadSignup: function(){
      this.$router.push({name: 'signup'})
    },
    completedLogin: function(data){},
    completedSignup: function(data){},
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
}
.header h1 a:hover{
  font-size: 40px;
}

.header nav a{
  color: #FFFFFF;
  text-decoration: none;
  margin-right: 15px;
  transition: .3s;
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
