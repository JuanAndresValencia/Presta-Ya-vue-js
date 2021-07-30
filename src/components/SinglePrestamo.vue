<template>
  <div class="singlePrestamo-container">
    <div class="single-cont-1">
      <h1>{{fullname}}</h1> 
      <p>Cedula: {{cedula}}</p>
      <p>Fecha: {{fecha}}</p>
      <h2>Dinero Solicitado: $ {{dinero}}</h2> 
    </div>

    <div class="single-cont-2">
      <h1>Pendiente</h1>
    </div>   
  </div>
</template>

<script>

export default {
  name: 'SinglePrestamo',

  props: {
    id: Number,
    cedula: Number,
    dinero: Number,
    fullname: String,
    fecha: String
  }
}

</script>

<style>
    
.singlePrestamo-container{
  padding-top: 95px;
  width: 800px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  z-index: 2;
  max-width: 1000px;

}

.singlePrestamo-container h1{
  font-size: 20px;
  font-weight: 500;
}

.singlePrestamo-container h2{
  font-size: 19px;
}

@media screen and (max-width: 900px){
  .singlePrestamo-container{
    width: 500px;
  }
}

@media screen and (max-width: 530px){
  .singlePrestamo-container{
    flex-direction: column;
    padding: 30px;
    width: 200px;
    align-items: flex-start;
    gap: 15px;
}
}

</style>