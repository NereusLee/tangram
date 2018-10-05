<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator';
import dayjs from 'dayjs'

@Component
export default class head extends Vue {
  name:String = 'head'
  private date:string = dayjs().format('HH:mm:ss A')
  // data() {
  //   return {
  //     date: dayjs().format('HH:mm:ss A'),
  //   }
  // }
  render(h:any){
    return (
      <div class="head">
        <p>{this.date}</p>
      </div>
    )
  }
}
</script>
