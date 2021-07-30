<template>
  <div class="solicitud-container">
    <form v-on:submit.prevent="solicitarCredito">
      <input
        type="text"
        placeholder="Nombre Completo"
        v-model="userName"
        required
      />

      <input
        type="number"
        placeholder="Edad"
        v-model="userAge"
        min="18"
        required
      />

      <input
        type="number"
        placeholder="Cedula"
        v-model="userDocument"
        required
      />

      <input
        type="number"
        placeholder="Cantidad de Dinero Solicitada"
        v-model="userCantidadDin"
        required
      />

      <label for="autorizacion">
        Autorizo para que Presta Ya, investigue mi historial crediticio
      </label>
      <input type="checkbox" required id="autorizacion" />

      <button type="submit" :disabled="disabledBtn">Solicitar Prestamo</button>
    </form>
  </div>
</template>

<script>
import { supabase } from "../supabase";

export default {
  name: "Solicitud",

  data() {
    return {
      session: supabase.auth.session(),
      user: supabase.auth.user(),
      disabledBtn: false,
      userName: "",
      userAge: Number,
      userDocument: Number,
      userCantidadDin: Number,
    };
  },

  methods: {
    clearData: function () {
        (this.userName = ""),
        (this.userAge = ""),
        (this.userDocument = ""),
        (this.userCantidadDin = "");
    },

    async solicitarCredito() {
      if (this.user) {
        try {
          const { data, error } = await supabase.from("prestamos").insert([
            {
              fullname: this.userName,
              age: this.userAge,
              cedula: this.userDocument,
              dinero: this.userCantidadDin,
              email: this.user.email,
            },
          ]);
          if (error) throw error;
          if (data) {
            alert(
              "Su solicitud de credito se realizo correctamente, un agente se comunicara en los proximos dias"
            );
            this.clearData();
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  },

  mounted() {
    if (!this.session) this.disabledBtn = true;
  },
};
</script>

<style>
.solicitud-container {
  width: 100%;
  height: auto;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
  align-items: center;
}

.solicitud-container input {
  width: 290px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

form input,
label {
  font-family: "Rubik", sans-serif;
}

.solicitud-container button {
  width: 200px;
}

@media screen and (max-width: 500px) {
  .solicitud-container input {
    width: 80%;
  }

  label {
    text-align: center;
    padding: 10px;
  }
}
</style>