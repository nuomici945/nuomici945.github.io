<template>
    <div class="content-wrapper">
      <div class="banner-overlay">

      </div>

    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped lang="less">
   .content-wrapper{
     width: 100%;
    height: 100%;
     position: relative;
     background: url('../../static/img/banner.jpg');
     background-repeat: no-repeat;
     background-position: center;
     background-size: cover;
     z-index: 2;
     .banner-overlay{
       background: rgba(95, 109, 126, 0.4);
       position: absolute;
       width: 100%;
       height: 100%;
       top: 0;
       left: 0;
       z-index: 3;
     }

   }
</style>
