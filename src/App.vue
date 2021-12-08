<template>
  <div id="app" class="app">

    <div class="header">
      <h1>WebPets</h1>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',

  data: function(){
  },

  methods: {
  },

  created: function(){
  },
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
</style>
