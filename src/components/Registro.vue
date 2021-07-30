<template>
  <div class="registro-container">

    <h1>Registro</h1>

    <input 
      placeholder="Nombre Completo"
      v-model="userName"
    />

    <select name="genero" ref='genre' class="select">
      <option value="hombre">Hombre</option>
      <option value="mujer">Mujer</option>
    </select>

    <input 
      type="text"
      placeholder="Avatar url"
      v-model="userAvatar"
    />

    <input 
      placeholder="Email"
      type="email"
      v-model="userEmail"
    />

    <input 
      placeholder="Contraseña"
      type="password"
      v-model="userPassword"
    />

    <button v-on:click='createUser'>Registrarme</button>

  </div>
</template>

<script>
import { supabase } from '../supabase'

export default {
  name: 'Registro',
  
  data () {
    return {
      userName: '',
      userEmail: '',
      userPassword: '',
      userGenre: '',
      userAvatar: ''
    }
  },

  methods: {

    clearInputs: function () {
      this.userName = '',
      this.userEmail = '',
      this.userPassword = '',
      this.userGenre = '',
      this.userAvatar = ''
    },

    async saveUserInfo() {
      //Guardar la informacion basica en la base de datos
        const { data, error } = await supabase
          .from('usuarios')
          .insert([
            { 
              fullname: this.userName,
              genre: this.userGenre,
              avatar: this.userAvatar,
              email: this.userEmail 
            }
        ])
        if (error) throw error
        console.log(data)
    }, 

    async createUser() {
      //Set to vaariable called userGenre, the value of a selected genre of the new user
      this.userGenre = this.$refs.genre.value
      
      if (this.userName && this.userEmail && this.userPassword && this.userAvatar){
        try {
          const { error } = await supabase.auth.signUp({
            email: this.userEmail,
            password: this.userPassword,
          })
          if (error) throw error
          alert("Check your email for confirm your account")
          this.saveUserInfo()
          this.clearInputs()
        } catch (error) {
          alert(error.message)
        } finally {
          console.log('finally')
        }
      } else {
        console.log('there are empty inputs')
      }
    }
  },

  
}
</script>

<style>
  
.registro-container{
  width: 350px;
  height: 400px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: -1px -5px 15px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px -5px 15px -4px rgba(0,0,0,0.75);
  box-shadow: -1px -5px 15px -4px rgba(0,0,0,0.75);
}

@media screen and (max-width: 550px){
  .registro-container{
    width: 290px;
  }
}

.registro-container h1{
  font-size: 22px;
  font-weight: 400;
  display: flex;
  align-self: flex-start;
  padding-left: 25px;
}

input{
  background: transparent;
  width: 80%;
  height: 25px;
  padding: 8px;
  outline: none;
  border: 1px solid;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
}

select{
  width: 86%;
  height: 40px;
  outline: none;
  border: 1px solid;
  border-radius: 3px;
  background: transparent;
  padding-left: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
}

button{
  width: 85%;
  margin-top: 20px;
  height: 40px;
  background: #00D8B2;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;
}



</style>