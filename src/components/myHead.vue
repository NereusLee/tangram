<script lang="tsx">
import { Component, Vue, Prop } from "vue-property-decorator";
import dayjs from "dayjs";

@Component
export default class head extends Vue {
  name: String = "myHead";
  private date: string = dayjs().format("HH:mm:ss A");
  // data() {
  //   return {
  //     date: dayjs().format('HH:mm:ss A'),
  //   }
  // }
  Alert(x: string | number) {
    alert(x);
    this.console(x);
    let hello: HTMLElement = document.getElementById("hell");
    console.log(hello)
    hello.style.backgroundColor = "green";
  }
  console(x: string | number) {
    console.log(x);
  }
  render(h: any) {
    // let self = this
    // return h("div", {
    //   attrs: {
    //     id: "hell"
    //   },
    // domProps: {
    //   innerHTML: "baz"
    // },
    //   on: {
    //     click: self.Alert(123)
    //   }
    // });
    let self = this;
    return (
      <div class="head">
        <p onClick={() => this.Alert(122343)}>{this.date}</p>
        {h(
          "ul",
          {
            attrs: {
              id: "hell"
            },
            // domProps: {
            //   innerHTML: "baz"
            // },
            on: {
              click: ()=>this.console(123)
            }
          },
          [1, 2, 3, 5, 4].map((item, index) => {
            return h("li", {
              attrs: {
                id: "li" + index
              },
              domProps: {
                innerHTML: item
              },
              on: {
                click: ()=>this.console(item)
              }
            });
          })
        )}
      </div>
    );
  }
  mounted() {
    console.log(this);
  }
}
</script>
