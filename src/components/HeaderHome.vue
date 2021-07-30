<template >
  <div class="container">
    
    <div class="options">
      <button class="btn-reg" v-on:click='setRegistro'>Registrarme</button>
      <button class="btn-log" v-on:click='setLogin'>Iniciar Sesion</button>
    </div>
    
    <div class="info">
      
      <div class="info-image">
        <img src='../assets/fly.png' />
      </div>
      
      <div class="sub-info">
        <h1>Presta Ya</h1>
        <p>Solicitar un credito no habia sido tan facil</p>
        <input 
          type="email"
          placeholder="Your email"
        />
        <button>Empezar</button>
      </div>

    </div>

    <!--Registro Container -->
    <div :class="[showRegistro ? 'registro' : 'hidden']">
      <Registro />
      <img src='../assets/close.svg' class="close-modal-home" v-on:click='setRegistro'/>
    </div>

    <!--Login Container-->
    <div :class="[showLogin ? 'login' : 'hidden']">
      <Login />
      <img src='../assets/close.svg' class="close-modal-home" v-on:click='setLogin'/>
    </div>
     
     <!--Absolute Position Wave -->
     <img src='../assets/wave.svg'  class="wake-bottom"/> 
  </div>
</template>

<script>
import Registro from '../components/Registro.vue'
import Login from '../components/Login.vue'

export default {
  components: {
    Registro,
    Login
  },

  data () {
    return {
      showRegistro: false,
      showLogin: false
    }
  },

  methods: {
    setRegistro: function () {
      this.showRegistro = !this.showRegistro
    },
    setLogin: function () {
      this.showLogin = !this.showLogin
    }
  }
}

</script>


<style>

/*Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Rubik:wght@500&display=swap');

  
.container{
  width: 100%;
  height: 100vh;
  background: #FF3433;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
} 

.wake-bottom{
  position: absolute;
  bottom: 0px;
}

.options{
  display: flex;
  width: 100%;
  justify-content: flex-end;
  height: auto;
  position: absolute;
  top: 10px;
  max-width: 1300px;
}

.options button{
  margin-top: 20px;
  color: white;
  margin-right: 30px;
  height: 33px;
  width: 100px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-family: 'Rubik', sans-serif;
  z-index: 3;
  cursor: pointer;
}


.btn-reg{
  background: #00D8B2;
  /*030301  00D8B2*/
}

.btn-log{
  background: transparent;
}


.info{
  position: relative;
  z-index: 1;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}

.info-image{
  display: flex;
}

.info-image img{
  width: 700px;
  filter: drop-shadow(0 8px 40px rgba(0, 0, 0, 1));
  transition: all 2s 
}

.info-image img:active{
  transform: rotate(360deg);
}



.sub-info{
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: center;
  color: white;
}

.sub-info h1{
  font-size: 70px;
  font-weight: 600;
  font-family: 'Rubik', sans-serif;
}

.sub-info p{
  font-size: 21px;
}

.sub-info input{
  margin-top: 20px;
  width: 320px;
  height: 25px;
  border: none;
  outline: none;
  padding: 10px 15px;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  background: white;
}

.sub-info button{
  margin-top: 10px;
  background: #00D8B2;
  color: white;
  border: none;
  height: 35px;
  width: 150px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Rubik', sans-serif;
  border-radius: 3px;
}

.registro {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  background: rgb(0,0,0);
  background: linear-gradient(315deg, rgba(0,0,0,0.6671043417366946) 13%, rgba(1,1,1,0.6783088235294117) 55%, rgba(0,0,0,0.6166841736694677) 86%);

}


.login {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  background: rgb(0,0,0);
  background: linear-gradient(315deg, rgba(0,0,0,0.6671043417366946) 13%, rgba(1,1,1,0.6783088235294117) 55%, rgba(0,0,0,0.6166841736694677) 86%);
}

.hidden {
  display: none;
}

.close-modal-home{
  width: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  color: white;
}

/*Responsive screens*/

@media screen and (max-width: 1150px){

  .info-image img{
    width: 500px;
  }

}

@media screen and (max-width: 900px){

  .info-image{
    width: 340px;
  }

  .info-image img{
    width: 400px;
  }

  .sub-info h1{
    font-size: 40px;
  }

  .sub-info p{
    font-size: 18px;
  }

  .sub-info input{
    width: 200px;
  }

  .sub-info button{
    width: 120px;
  }

}

@media screen and (max-width: 700px){

  .info-image{
    display: none;
  }

  .sub-info{
    align-items: center;
  }

  .sub-info p{
    text-align: center;
  }

}



</style>