<template>
  <div class="banner-containers">
     <img src='../assets/mujer-businnes.jpg' />
    <div class="banner-testimonio">
      <h1>Gracias a Presta Ya, pude cumplir mi sueño de adquirir mi vivienda
        a comodas cuotas.
        <br />
        Que esperas para solicitar tu credito!!!
      </h1>
      <p>Olivia Sanders</p>
    </div>
  </div>
</template>

<script>


export default {
  
}

</script>

<style>
   


.banner-containers{
  position: relative;
  top: 10px;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  height: auto;
  z-index: 1;
  display: flex;
  max-width: 1300px;
  align-items: center;
}

.banner-containers img{
  width: 700px;
}

.banner-testimonio{
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  justify-content: center;
  font-family: "Rubik", sans-serif;
  margin-left: -70px;
  padding-right: 20px;
}

.banner-testimonio h1{
  font-weight: 600;
}

@media screen and (max-width: 1100px){
  .banner-containers img{
    width: 500px;
  }

  .banner-testimonio{
    margin-left: -70px;
    padding-right: 30px;
  }
}

@media screen and (max-width: 900px){
  .banner-containers{
    padding-top: 60px;
  }
}

@media screen and (max-width: 800px){
  .banner-containers{
    flex-direction: column;
    justify-content: center;
  }

  .banner-testimonio{
    margin-left: 0px;
    padding-right: 0px;
    justify-content: center;
    align-items: center;
  }

  .banner-testimonio h1{
    font-size: 23px;
    width: 80%;
    text-align: center;
    padding-top: 10px;
  }
}

@media screen and (max-width: 530px){
  .banner-containers img{
    width: 98%;
  } 

  .banner-testimonio h1{
    font-size: 20px;
    width: 90%;
  }
}




</style>