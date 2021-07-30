<template>
  <div>
    <router-view/>
  </div>
  
</template>

<script>
import { supabase } from './supabase'

export default {

  methods: {
    async getUsers () {
      const { data, error } = await supabase
      .from('usuarios')
      .select()

      if (data) {
        console.log(data)
      } else {
        console.log(error)
      }
    }
  },


  mounted() {
    //Check user session
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        this.$router.push({ name: 'Session', path: 'session'})
      } else {
        this.$router.push({ name: 'Home', path: '/'})
      }
    })

    this.getUsers()
    
  },
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
}

</style>
