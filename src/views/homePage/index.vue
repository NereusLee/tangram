<template>
  <v-touch @press="addLogo" class="homePage" :style="background"> 
    <dialog v-model="install" >
      
      <p>添加应用</p>
    </dialog>
    <Button type="default" plain>默认按钮</Button>
    <p>{{date}}</p>
    <Card></Card>
  </v-touch>  
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import dayjs from 'dayjs'
import {Button, Card } from 'vant' 

@Component({
  /*tslint:disable*/
  components:{
    // Button:()=>import(/*webpackChunkName:"chunk-vant"*/'vant').then(res=>{
    //   const {Button} = res
    //   return Button;
    // }),
    // Card:()=>import(/*webpackChunkName:"chunk-vant"*/'vant').then(res=>{
    //   const {Card} = res
    //   return Card;
    // })
    Button,Card
  }
})
export default class index extends Vue {
  name:string = 'homePage'
  private date:string = dayjs().format('HH:mm:ss A')
  private background:object = {
    backgroundImage: "url(" + require("@/assets/images/greenMountain.webp") + ")",
    backgroundRepeat:'no-repeat',
    backgroundSize:'auto 100%',
  }
  private install:boolean = false
  
  addLogo(){
    this.install=true
  }
  // render(h:any){
  //   return (
  //     <v-touch ontap={this.addLogo()} class="homePage" style={this.background}> 
  //       <p>{this.date}</p>
  //     </v-touch>
  //   )
  // }
}
</script>

<style lang="scss">
.homePage{
  height:100%;
  margin: 0;
  /* background-position:-1rem;25px */
  p{
    margin: 0;
  }
}
/*iphone X*/
@media screen and (height:812px){
  .homePage{
    background-position-x: -1.3rem;
  }
}
</style>
