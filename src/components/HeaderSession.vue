<template>
  <div class="container-session">
    <div :key="cont.key" v-for="cont in conter" :class="[showModal ? 'user-container-show' : 'user-container']">
      <p v-on:click='goPrestamos'>Mis prestamos</p>
      <p>{{ cont.email }}</p>
      <img :src="cont.avatar" v-on:click="close" class="user-avatar"/>
    </div>
    <img src="../assets/close.svg" v-on:click="changeModal" :class="[showModal ? 'close' : 'hide']" />
    <img src="../assets/lista.svg" v-on:click="changeModal" :class="[showModal ? 'hide': 'close']" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { supabase } from "../supabase";

export default {
  name: "",

  props: {
    nam: String,
    data: Object,
  },

  data() {
    return {
      showModal: true
    };
  },

  methods: {
    async close() {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },

    changeModal: function () {
      this.showModal = !this.showModal
    },

    goPrestamos: function() {
      this.$router.push({ name: 'Prestamos', path: 'prestamos'})
    }
  },

  mounted() {
    if (screen.width > 1000){
      this.showModal = false
    }
  },

  computed: {
    ...mapState(["conter"]),
  },
};
</script>

<style>
@media screen and (min-width: 900px) {
  .container-session {
    width: 100%;
    height: 100px;
    background: #00d8b2;
    color: white;
    display: flex;
    flex-direction: row;
  }

  .container-session .user-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;
    gap: 20px;
    margin: 0 auto;
    max-width: 1400px;
    font-family: "Rubik", sans-serif;
  }

  .close,
  .menu {
    display: none;
  }
}

.user-container p,
img {
  cursor: pointer;
}

.user-avatar{
  width: 70px;
  border-radius: 50%;
  cursor: pointer;
}

.close,
.menu {
  width: 30px;
  cursor: pointer;
  transition: all 2s;
}

.hide {
  display: none;
  transform: all 2s;
}

@media screen and (max-width: 899px){
  .container-session{
    height: 100vh;
    position: absolute;
    width: 100%;
    z-index: 2;
  }

  .user-container{
    width: 100%;
    height: 100vh;
    position: absolute;
    background: #00d8b2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-family: "Rubik", sans-serif;
    color: white;
    z-index: 1;
    margin-left: -900px;
    transition: all 1.2s ease-in;
  }

  .close{
    position: absolute;
    z-index: 2;
    right: 20px;
    top: 20px;
  }

  .hide{
    position: absolute;
    z-index: 2;
    right: 20px;
    top: 20px;
    display: none;
  }

  .user-container-show{
    width: 100%;
    height: 100vh;
    position: absolute;
    background: #00d8b2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-family: "Rubik", sans-serif;
    color: white;
    z-index: 1;
    margin-left: 0px;
    transition: all 1.2s ease-in;
  }

}
</style>