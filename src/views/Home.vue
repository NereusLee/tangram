<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <dock :num="7788" @reset="reset"></dock>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import dock from '@/components/dock.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    dock
  },
})
export default class Home extends Vue {
  reset(){
    console.log('resets')
  }
}
</script>
