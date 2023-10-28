<template>
    <navbar :pages="pages"></navbar>

    <router-view></router-view>

</template>

<script>

import Navbar from './components/Navbar.vue'; 
export default{

  components: {
    Navbar,
 
  },
 
       methods:{
 
        pageCreated(pageObg){
          this.pages.push(pageObg);
        }


       }
}
</script>