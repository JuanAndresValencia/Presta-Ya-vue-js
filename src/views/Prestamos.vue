<template>
  <div class="prestamos-container">
    <img src='../assets/wavePres.svg' class="wave"/>
    <h1 v-if='session' class="prestamos-title">Mis prestamos Solicitados</h1>
    <h1 v-if='!session' class="sesion-title">No hay sesion activa</h1>
    <div class="all-prestamos" :key='prestamo.id' v-for='prestamo in prestamos'>
      <SinglePrestamo
        :id = 'prestamo.id'
        :cedula = 'prestamo.cedula'
        :dinero = 'prestamo.dinero'
        :fullname = 'prestamo.fullname'
        :fecha = 'prestamo.fecha'
      />
    </div>   
  </div>
</template>

<script>
import { supabase } from '../supabase'
import SinglePrestamo from '../components/SinglePrestamo.vue'

export default {
  name: 'Prestamos',

  components: {
    SinglePrestamo
  },
  
  data () {
    return {
      session: supabase.auth.session(),
      prestamos: []
    }
  },

  methods: {
    async getPrestamos() {
      const { data, error } = await supabase
        .from('prestamos')
        .select()
        .eq('email',  this.session.user.email)
      if (error) throw error
      if (data){
        this.prestamos = data
      }
    }
  },

  mounted() {
    this.getPrestamos()
  }
}

</script>

<style>
   
.prestamos-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
}  

.prestamos-title{
  margin-top: 140px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}

.wave{
  position: absolute;
  top: 0px;
  z-index: 1;
}

.sesion-title{
  font-size: 30px;
  text-transform: uppercase;
  padding-top: 150px;
  font-family: Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 530px){
  .prestamos-title{
    font-size: 22px;
  }

  .prestamos-container{
    padding-top: 0px;
  }
}

</style>