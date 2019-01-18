<template>
  <div class="content-wrapper">
    <vue-waterfall-easy :imgsArr="albumData" @scrollReachBottom="getData">
      <div class="img-info" slot-scope="props">
        <p class="some-info">{{props.value.info}}</p>
      </div>
      <div slot="waterfall-over">被你看光啦！</div>
    </vue-waterfall-easy>
  </div>
</template>

<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'
  import monkData from './monkData.json';
  export default {
    name: "About",
    components: {vueWaterfallEasy},
    methods:{
      getData() {
        this.albumData = this.albumData.concat(monkData.data)
      },
    },
    created() {
      this.getData()
    },
    data() {
      return {
        albumData: [{
          info: "校门口的彩虹",
          src: "./static/img/myself/IMG_0497.JPG",
        },{
          info: "第一次面试成功，回家路上的傍晚",
          src: "./static/img/myself/IMG_1194.JPG",
        },{
          info: "滤镜后的车厢",
          src: "./static/img/myself/IMG_5426.JPG",
        },{
          info: "我是吃可爱多长大的",
          src: "./static/img/myself/IMG_5496.JPG",
        },{
          info: "可爱多本人",
          src: "./static/img/myself/IMG_6532.JPG",
        },{
          info: "热爱运动的我",
          src: "./static/img/myself/IMG_0407.JPG",
        },{
          info: "低抄校门口",
          src: "./static/img/myself/IMG_0486.JPG",
        },{
          info: "地狱西啊！！！",
          src: "./static/img/myself/IMG_5447.JPG",
        },{
          info: "贪吃系列",
          src: "./static/img/myself/IMG_0465.JPG",
        },{
          info: "贪吃系列",
          src: "./static/img/myself/IMG_0453.JPG",
        },{
          info: "贪吃系列",
          src: "./static/img/myself/IMG_0466.JPG",
        },{
          info: "贪吃系列",
          src: "./static/img/myself/IMG_0467.JPG",
        },{
          info: "贪吃系列",
          src: "./static/img/myself/IMG_0468.JPG",
        },{
          info: "贪吃系列",
          src: "./static/img/myself/IMG_0470.JPG",
        }]
      }
    }
  }
</script>

<style scoped lang="less">
  .content-wrapper {
    padding: 80px;
    width:100% ;
    height:100%;
    .vue-waterfall-easy-container{
      ::-webkit-scrollbar {
        width: 0px;
      }
        /deep/.vue-waterfall-easy {
          a.img-inner-box{
            background: white;
            border-radius: 4px;
          }
          a.img-wraper {
            border-radius: 4px;
            img{
              border: 4px solid white;
              border-radius: 4px;
            }

          }
          .img-info{
            line-height: 2.6;
            color: #96a5b4;
          }

        }
    }
  }
</style>
