/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  //星空
//{
//"particles": {
//  "number": {
//    "value": 160,
//    "density": {
//      "enable": true,
//      "value_area": 800
//    }
//  },
//  "color": {
//    "value": "#ffffff"
//  },
//  "shape": {
//    "type": "edge",
//    "stroke": {
//      "width": 0,
//      "color": "#000000"
//    },
//    "polygon": {
//      "nb_sides": 5
//    },
//    "image": {
//      "src": "img/github.svg",
//      "width": 100,
//      "height": 100
//    }
//  },
//  "opacity": {
//    "value": 1,
//    "random": true,
//    "anim": {
//      "enable": true,
//      "speed": 1,
//      "opacity_min": 0,
//      "sync": false
//    }
//  },
//  "size": {
//    "value": 3,
//    "random": true,
//    "anim": {
//      "enable": false,
//      "speed": 4,
//      "size_min": 0.3,
//      "sync": false
//    }
//  },
//  "line_linked": {
//    "enable": false,
//    "distance": 150,
//    "color": "#ffffff",
//    "opacity": 0.4,
//    "width": 1
//  },
//  "move": {
//    "enable": true,
//    "speed": 1,
//    "direction": "none",
//    "random": true,
//    "straight": false,
//    "out_mode": "out",
//    "bounce": false,
//    "attract": {
//      "enable": false,
//      "rotateX": 600,
//      "rotateY": 600
//    }
//  }
//},
//"interactivity": {
//  "detect_on": "canvas",
//  "events": {
//    "onhover": {
//      "enable": true,
//      "mode": "bubble"
//    },
//    "onclick": {
//      "enable": true,
//      "mode": "repulse"
//    },
//    "resize": true
//  },
//  "modes": {
//    "grab": {
//      "distance": 400,
//      "line_linked": {
//        "opacity": 1
//      }
//    },
//    "bubble": {
//      "distance": 250,
//      "size": 0,
//      "duration": 2,
//      "opacity": 0,
//      "speed": 3
//    },
//    "repulse": {
//      "distance": 400,
//      "duration": 0.4
//    },
//    "push": {
//      "particles_nb": 4
//    },
//    "remove": {
//      "particles_nb": 2
//    }
//  }
//},
//"retina_detect": true
//}

//线性
//{
//  "particles": {
//      "number": {
//          "value": 30,
//          "density": {
//              "enable": true,
//              "value_area": 800
//          }
//      },
//      "color": {
//          "value": "#ffffff"
//      },
//      "shape": {
//          "type": "circle",
//          "stroke": {
//              "width": 0,
//              "color": "#000000"
//          },
//          "polygon": {
//              "nb_sides": 5
//          },
//          "image": {
//              "src": "img/github.svg",
//              "width": 100,
//              "height": 100
//          }
//      },
//      "opacity": {
//          "value": 0.5,
//          "random": false,
//          "anim": {
//              "enable": false,
//              "speed": 1,
//              "opacity_min": 0.1,
//              "sync": false
//          }
//      },
//      "size": {
//          "value": 10,
//          "random": true,
//          "anim": {
//              "enable": false,
//              "speed": 50,
//              "size_min": 0.1,
//              "sync": false
//          }
//      },
//      "line_linked": {
//          "enable": true,
//          "distance": 300,
//          "color": "#ffffff",
//          "opacity": 0.4,
//          "width": 2
//      },
//      "move": {
//          "enable": true,
//          "speed": 8,
//          "direction": "none",
//          "random": false,
//          "straight": false,
//          "out_mode": "out",
//          "bounce": false,
//          "attract": {
//              "enable": false,
//              "rotateX": 600,
//              "rotateY": 1200
//          }
//      }
//  },
//  "interactivity": {
//      "detect_on": "canvas",
//      "events": {
//          "onhover": {
//              "enable": false,
//              "mode": "repulse"
//          },
//          "onclick": {
//              "enable": false,
//              "mode": "push"
//          },
//          "resize": true
//      },
//      "modes": {
//          "grab": {
//              "distance": 800,
//              "line_linked": {
//                  "opacity": 1
//              }
//          },
//          "bubble": {
//              "distance": 800,
//              "size": 80,
//              "duration": 2,
//              "opacity": 0.8,
//              "speed": 3
//          },
//          "repulse": {
//              "distance": 400,
//              "duration": 0.4
//          },
//          "push": {
//              "particles_nb": 4
//          },
//          "remove": {
//              "particles_nb": 2
//          }
//      }
//  },
//  "retina_detect": true
//}

//http://www.cnblogs.com/zx-admin/p/7030978.html用户手册
{
  "particles": {
    "number": {
      "value": 50,//数量
      "density": {
        "enable": true,
        "value_area": 2000//区域散布密度大小
      }
    },
    "color": {
      "value": "#ffffff"//原子的颜色
    },
    "shape": {
      "type": "circle",//原子的形状
      "stroke": {
        "width": 0,// 原子的宽度
        "color": "#222222"//原子颜色
      },
      "polygon": {
        "nb_sides":4//原子的多边形边数
      },
      "image": {
        "src": "img/github.svg",//图片
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.75,//透明度
      "random": true,// 随机不透明度
      "anim": {
        "enable": false,// 渐变动画
        "speed": 1,//渐变速度
        "opacity_min": 0.1,//渐变动画不透明度
        "sync": false//异步
      }
    },
    "size": {
      "value": 5,//原子大小
      "random": true,//原子大小随机
      "anim": {
        "enable": false,//原子渐变
        "speed": 80,//渐变速度
        "size_min": 0.1,//原子最小值
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,//连接线
      "distance": 200,//连接线距离
      "color": "#ffffff",//连接线颜色
      "opacity": 0.4,//透明度
      "width": 2//宽度
    },
    "move": {
      "enable": true,//原子移动
      "speed": 2,//移动速度
      "direction": "bottom",//方向
      "random": false,//随机
      "straight": false,//直xian
      "out_mode": "out",//是否移出画布
      "bounce": false,//弹跳
      "attract": {//原子之间吸引
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,//悬浮 抓取临近的"bubble"  泡沫球效果"repulse"  击退效果["grab", "bubble"]
        "mode": "grab"
      },
      "onclick": {//点击   "grab"     
        "enable": true,
        "mode": "push"
      },
      
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity":1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 10//原子退出数量
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);