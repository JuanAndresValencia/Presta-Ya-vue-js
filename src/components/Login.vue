<template>
  <div class="ingreso-container">

    <h1>Login</h1>

    <input 
      placeholder="Email"
      type="email"
      v-model='userEmail'
    />

    <input 
      placeholder="Contraseña"
      type="password"
      v-model="userPassword"
    />

    <button v-on:click='loginUser'>Ingresar</button>

  </div>
</template>

<script>
import { supabase } from '../supabase'


export default {
  name: 'Login',
  
  data () {
    return {
      userEmail: '',
      userPassword: ''
    }

  },

  methods: {
    async loginUser () {
      
      try {
        const { user, session, error } = await supabase.auth.signIn({
          email: this.userEmail,
          password: this.userPassword,
        })
        if (error) throw error
        console.log(user, session)
        this.$router.push({ name: 'Session', path: 'session'})
      } catch(error) {
        console.log(error)
        alert('Usuario o contraseña incorrecta')
      } finally {
        console.log('finally')
      }
    }
  }

  
}
</script>

<style>
  
.ingreso-container{
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

.ingreso-container h1{
  font-size: 22px;
  font-weight: 400;
  display: flex;
  align-self: flex-start;
  padding-left: 25px;
}

@media screen and (max-width: 550px){
  .ingreso-container{
    width: 290px;
  }
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