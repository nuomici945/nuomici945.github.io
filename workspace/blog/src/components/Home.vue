<template>
  <Layout class="page-content">
    <Sider hide-trigger :style="{height: '100vh',width:'22%',maxWidth:'22%',minWidth:'22%'}" class="left-slide">
      <div class="top-section">
        <div class="profile-image">
          <Avatar src="../../static/img/avatar.png" shape="circle"/>
        </div>
        <div class="profile-name">
          <h3>糯米糍 | 个人博客</h3>
        </div>
        <div class="profile-description">
          <p>我知道你会来，所以我在等</p>
        </div>
      </div>
      <div class="menu">
        <Menu :theme="'dark'" :width="'auto'" :active-name="menuType" @on-select="menuChange">
          <MenuItem name="Banner">
            <Icon type="ios-home" size="24"/>
            Welcome
          </MenuItem>
          <MenuItem name="About">
            <Icon type="md-person" size="24"/>
            About Me
          </MenuItem>
          <MenuItem name="Projects">
            <Icon type="ios-document" size="24"/>
            My project
          </MenuItem>
          <MenuItem name="Contact">
            <Icon type="ios-call" size="24"/>
            Contact Me
          </MenuItem>
          <MenuItem name="Diary">
            <Icon type="ios-book" size="24"/>
            Free Talk
          </MenuItem>
        </Menu>
      </div>
    </Sider>
    <Layout :style="{height: '100vh',width:'78%',maxWidth:'78%',minWidth:'78%'}" class="right-slide">
      <Header>
        <div class="title">
          {{title}}
        </div>
        <div class="time">
          <p class="time-date"><span>{{nowDate}}</span></p>
          <p class="time-time"><span>{{nowTime}}</span></p>
        </div>
      </Header>
      <Content>
        <component v-bind:is="menuType">

        </component>
      </Content>

    </Layout>
  </Layout>
</template>

<script>
  import moment from 'moment';
  import Banner from './Banner'
  import About from './About'
  import Projects from './Projects'
  import Contact from './Contact'
  import Diary from './Diary'

  export default {
    name: "Home",
    components: {
      Banner,
      About,
      Projects,
      Contact,
      Diary,
    },
    computed: {},
    created() {
      this.loadPage();
    },
    data() {
      return {
        menuType: 'About',
        nowDate: '',
        nowTime: '',
        title: 'Welcome To My Blog',
        componentObj: {
          Banner: {
            component: 'Banner',
            title: 'Welcome to My Blog'
          },
          About: {
            component: 'About',
            title: 'Do U Know Me?'
          },
          Projects: {
            component: 'Projects',
            title: 'What Kind of Job I Have Done?'
          },
          Contact: {
            component: 'Contact',
            title: 'How To Find Me?'
          },
          Diary:{
            component: 'Diary',
            title: 'Say Something to Myself'
          },
        }
      }
    },
    methods: {
      loadPage() {
        this.timedUpdate();
      },
      menuChange(menu) {
        this.menuType = this.componentObj[menu].component;
        this.title = this.componentObj[menu].title;
      },
      timedUpdate() {
        this.nowDate = moment(new Date()).format('YYYY-MM-DD');
        this.nowTime = moment(new Date()).format('HH:mm:ss');
        setTimeout(this.timedUpdate, 1000);
      },
    },
  }
</script>

<style scoped lang="less">
  .page-content {
    .left-slide.ivu-layout-sider {
      background-color: #5f6d7e;

      .top-section {
        margin-bottom: 40px;

        .profile-image {
          margin: 40px 0 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;

          .ivu-avatar {
            width: 150px;
            height: 150px;
            border: 4px solid white;
            border-radius: 150px;
          }

        }

        .profile-name {
          margin-bottom: 5px;
          color: white;
          font-size: 18px;

        }

        .profile-description {
          color: white;
          font-size: 14px;
        }
      }

      .menu {
        .ivu-menu.ivu-menu-dark.ivu-menu-vertical {
          background-color: #5f6d7e;

          .ivu-menu-item-active {
            background-color: #495461;
            color: #fff;
            border-right: none;
          }
        }
      }
    }

    .right-slide {
      .ivu-layout-header {
        height: 100px;
        line-height: 100px;
        text-align: left;
        display: flex;
        justify-content: space-between;

        .title {
          color: white;
          font-size: 36px;
          font-weight: 600;
        }

        .time {
          color: white;
          display: flex;
          justify-content: space-between;
          font-size: 26px;

          .time-date {
            margin-right: 20px;
          }
        }

        .banner-bg {
          width: 100%;
          padding: 260px 80px;
          position: relative;
          background: url('../../static/img/banner.jpg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          z-index: 2;

          .banner-overlay {
            background: rgba(95, 109, 126, 0.4);
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 3;
          }

        }

      }

      .ivu-layout-content {
        height: ~"calc(100vh - 100px)";
        min-height: e("calc(100vh - 100px)");
        flex: none;
      }
    }
  }
</style>
