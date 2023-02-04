<template>
  <div class="all">
    <div class="head">
      <div class="title title1">{{ data.name }}</div>
      <div class="paragraph">{{ data.name2 }}</div>
    </div>
    <div class="container">
      <div class="title" style="font-weight:500">评测结果:</div>
      <div :style="`color:${character[name].color}`">{{ character[name].title }}</div>
      <div class="icon-con" :style="`color:${character[name].color}`">
        <i :class="computedFont"></i>
      </div>
      <div class="title" style="font-size:3.5vw">性格描述：</div>
      <div class="text color-background">{{ character[name].text }}</div>
    </div>
    <div class="advocate"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      name: "red",
      character: {
        red: {
          color: "rgba(255,0,0,0.5)",
          name: "红色",
          title: "红色:行动者",
          text: `红色性格的人是快节奏的人，会自发地行动和做出决策。他不关心事实和细节，并尽可能地逃避一些繁琐的工作。
            这种不遵循事实的特性经常会让他夸大其词。红色性格的人与分析研究相对比更喜欢随意猜测。他对组织活动充满兴趣，能够快速并热情地与人相处。
            红色性格的人一直追逐梦想，他有着不可思议的能力能够让别人和他一起实现梦想，他有非常强的说服能力。他一直寻求别人对他的成就给予赞扬。
            红色性格的人是很有创意的人，思维敏捷。但在他人的眼中，红色有时也会被人认为是主观的、鲁莽的、易冲动的。`,
        },
        blue: {
          color: "rgba(0,255,255,0.5)",
          name: "蓝色",
          title: "蓝色:思想者",
          text: `蓝色性格的人非常注重思考过程，能够全面、系统性的解决问题。他非常关心事物的安全性，任何事情都追求正确无误。
          所以这种人热衷于收集数据，询问很多有关于细节的问题。他的行动和决策都是非常谨慎的。蓝色性格的人做事缓慢，要求准确，喜欢有组织、
          有构架的，知识性的工作环境。这种性格的人比较容易多疑，且喜欢将事情记录下来。蓝色虽然是一个很好的问题解决者，但同时又是一个并不果断的决策者。
          当需要作决策时，他往往为了收集数据耽误了时间，经常性被他们引以为豪的口头禅是:“你不可能只掌握一半的数据就做出一项重要的决定吧。
          ”很多时候，蓝色性格的人会被认为是有距离的、挑剔的，和严肃的。`,
        },
        yellow: {
          color: "rgba(255,255,0,0.5)",
          name: "黄色",
          title: "黄色:领导者",
          text: `黄色性格的人是非常直接的，同时也很严谨。黄色性格的人善于控制他人和环境，果断行动和决策。这种性格的人行动非常迅速，对拖延非常没有耐心。
          当别人不能跟上他们的节奏，他会认为他们没有能力。黄色性格的人的座右铭是“我要做得又快又好”。
          黄色性格的人是典型的执行者，他们有很强的自我管理能力，他们自觉完成工作并给予自己新的任务。黄色性格的人喜欢同时做很多事情。他可以同时做三件事，并尽可能做第四件事。
          他会持续给自己加压一直到自已无法承受的最高点，之后稍事放松。然而很快他又会重新开始整个进程。不过，和别人交往时，黄色性格的人常常表现冷漠，以产出和目标为导向，
          更关心最后的结果，给人的印象是固执、缺乏耐心、强硬和专横。`,
        },
        green: {
          color: "rgba(0,255,0,0.5)",
          name: "绿色",
          title: "绿色:和平者",
          text: `绿色性格的人追求安全感和归属感，和蓝色一样做事和决策慢。这种拖延是因为绿色性格的人不愿冒风险。在他行动或作决策之前，他希望能够先了解别人的感受。
          绿色性格的人是四种性格中最以人际为导向的人。对这种性格最适合的形容词是亲近的、友好的。绿色性格的人不喜欢与人发生冲突，所以有时他会说别人想听的话而不是他心里想的话。
          绿色性格的人有很强的劝说能力，非常愿意支持其他人。他也是一个积极的聆听者。作为他的伙伴你会感觉很舒服。因为绿色性格的人很愿意听别人说，因此轮到他说的时候，
          别人也愿意听他说，因此他有很强的能力获得别人的支持。不过，绿色性格的人会被人认为过于温和，心肠太软，老好人。`,
        },
      },
    };
  },
  computed:{
    computedFont(){
      let fontClass = '';
      switch(this.name){
        case 'red':fontClass = 'font-icon-benpao';break
        case 'blue':fontClass = 'font-icon-sikao';break
        case 'yellow':fontClass = 'font-icon-bumenlingdao';break
        case 'green':fontClass = 'font-icon-heping';break
      }
      return fontClass
    }
  },
  methods: {
    colorComupted(array) {
      let red,blue,yellow,green
      red = blue = yellow = green = 0;
      array.some((item, index) => {
        if (index <= 15) {
          if (item === "A") {
            red += 1;
          }
          if (item === "B") {
            blue += 1;
          }
          if (item === "C") {
            yellow += 1;
          }
          if (item === "D") {
            green += 1;
          }
        } else {
          if (item === "D") {
            red += 1;
          }
          if (item === "C") {
            blue += 1;
          }
          if (item === "B") {
            yellow += 1;
          }
          if (item === "A") {
            green += 1;
          }
        }
      });
      //比较大小
      console.log(red, blue, yellow, green);
      let name = "",
        num = 0;
      if (num < red) {
        num = red;
        name = "red";
      }
      if (num < blue) {
        num = blue;
        name = "blue";
      }
      if (num < yellow) {
        num = yellow;
        name = "yellow";
      }
      if (num < green) {
        num = green;
        name = "green";
      }
      return name;
    },
  },
  created() {
    // 用户结果
    let data = this.$route.query.data;
    console.log(data)
    data = data.split(",");
    this.name = this.colorComupted(data);
    // 获取颜色人格的描述数据
    this.$store.state.questionBase.some((item) => {
      if (item.key === "Personality_color_test") {
        this.data = item;
      }
    });
    window.wx.miniProgram.postMessage({name:this.name})
  },
};
</script>

<style>
.all {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(167, 185, 213);
  flex-direction: column;
  text-align: left;
}
.head {
  text-align: left;
  padding: 2vw 5vw;
}
.head div {
  color: white !important;
  margin: 0;
}
.container {
  height: 74.6vh;
  flex: 1;
  overflow: auto;
  background-color: white;
  border-radius: 3vw 3vw 0 0;
  padding: 7vw 5vw;
  font-size: 3.2vw;
}
.advocate {
  position: fixed;
}
.title {
  font-weight: 600;
  font-size: 4vw;
  color: rgb(22, 22, 22);
  margin: 0.8vh 0;
}
.title1{
  font-size: 3.5vw;
}
.paragraph {
  line-height: 5.4vw;
  color: rgb(136, 136, 136);
  margin: 0.2vh 0;
  font-size: 3vw;
}
.icon-con{
  text-align: center;
  margin: 10vw 0;
  
}
.icon-con i{
  font-size: 30vw;
}
.text{
  font-size: 3vw;
  line-height: 5vw;
  padding: 0 5vw;
}
.color-background {
  background-color: rgb(250, 250, 250);
  border-radius: 10px;
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.05);
  padding: 4.48vw;
  flex: 1;
}
</style>