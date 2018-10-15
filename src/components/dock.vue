<script lang="tsx">
// import { CreateElement } from "vue";
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";

const log = (data:any)=>console.log(data)
@Component
export default class dock extends Vue {
  @Prop([Number, Number])
  num!: number | boolean;  //这里的 ! 符号
  count: number = 3;
  @Emit("reset")
  add() {
    this.count++;
  }
  @Watch("count")
  logCount(n: number) {
    log(n);
  }
  render(h:any) {
    log(this.num);
    let p = this.num ? <p>show num{this.num}</p> : <p>not show num</p>;
    return (
      <div>
        <h1 onClick={this.add}>tsx render function{this.count}</h1>
        {p}
      </div>
    );
  }
}
</script>
