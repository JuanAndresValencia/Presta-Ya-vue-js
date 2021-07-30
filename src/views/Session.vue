<template>
  <div>
    <HeaderSession />   
    <BannerSession /> 
    <SolicitudPrestamo/>
  </div>
</template>

<script>
import { supabase } from '../supabase'
import { mapActions} from 'vuex'
import HeaderSession from '../components/HeaderSession.vue'
import BannerSession from '../components/BannerSession.vue'
import SolicitudPrestamo from '../components/SolicitudPrestamo.vue'

export default {
   name: 'Session',

   components: {
     HeaderSession,
     BannerSession,
     SolicitudPrestamo
   },

   data () {
     return {
       session: supabase.auth.session(),
     }
   },
   methods: {
     ...mapActions(['setCurrentUser']),

     async getCurrentUser() {
       const { data, error } = await supabase
         .from('usuarios')
         .select()
         .eq('email', this.session.user.email)
         
         if (error) throw error
         console.log(data)
         this.setCurrentUser(data)
      }
       
   },

   created() {
     this.getCurrentUser()
   },

   mounted() {
     this.getCurrentUser()
   },



}


</script>

<style>

</style>