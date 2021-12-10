<template>
  <div class="signUp_pet">
    <div class="container_signup_pet">
      <h1>Añadir Mascota</h1>
      <form v-on:submit.prevent="proccessSignUpPet">
        <input type="text" v-model="pet.id" placeholder="Identificacion">
        <input type="text" v-model="pet.imgBin64" placeholder="Imagen">
        <input type="text" v-model="pet.descripcion" placeholder="Descripcion">
        <input type="text" v-model="pet.fecha" readonly="readonly">
        <input type="text" v-model="pet.ciudad" placeholder="Ciudad">
        <input type="number" v-model="pet.telefono" placeholder="Telefono">
        <button type="submit">Añadir</button>
      </form>
    </div>
  </div>
</template>

<script>

function date(){
  let date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  date = day + "-" + month + "-" + year;

  return date
}

import gql from "graphql-tag";

export default {
  name: 'petsSignUp',

  data: function () {
    return {
      pet: {
        id: '',
        imgBin64: '',
        descripcion: '',
        fecha: date(),
        ciudad: '',
        telefono: 0,
      }
    }
  },

  methods: {
    proccess: async function(){
      await this.$apollo
          .mutate({
            mutation: gql`
                    mutation($input: PetInput!) {
                        createPet(input: $input) {
                            id
                            imgBin64
                            descripcion
                            fecha
                            ciudad
                            telefono
                        }
                    }
                `,
            variables: {
              input: this.pet 
            },
          })
          .then((result)=>{
            alert("Mascota añadida con éxito");
            this.$router.push({name: 'pets'})
          }).catch((error)=>{
            alert("Error al realizar el registro");
          });
    },
    proccessSignUpPet: function(){
      alert("Mascota añadida con éxito");
    }
  }
}
</script>

<style>
.signUp_pet{
  margin: 0;
  padding: 0%;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.container_signup_pet{
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
.container_signup_pet h1{
  margin: 10px;
}
.container_signup_pet form{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.container_signup_pet form input,select,button{
  margin: 5px;
  width: 100%;
}
.container_signup_pet form input,select{
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  padding: 10px;
}
.container_signup_pet form button{
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  padding: 10px;
  background-color: #3FBACC;
  color: #FFFFFF;
  font-size: 20px;
  transition: .3s;
  cursor: pointer;
}
.container_signup_pet form button:hover{
  background-color: #FFFFFF;
  color: #3FBACC;
}
</style>