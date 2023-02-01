<template>
  <div class="all">
    <div class="container">
      <div class="white-background">
        <div class="title title1">{{ data.name }}</div>
        <div class="paragraph">{{ data.name2 }}</div>
        <div class="line"></div>
        <div>
          <div class="title">测评描述</div>
          <div class="paragraph">{{ data.description }}</div>
        </div>
        <div>
          <div class="title">测评背景</div>
          <div class="paragraph">{{ data.background }}</div>
        </div>
      </div>
      <div class="con2">
        <div class="white-background">
          <div class="title">题目总数</div>
          <div class="paragraph">{{ data.questionList.length }}</div>
        </div>
        <div class="white-background">
          <div class="title">预计时间</div>
          <div class="paragraph">{{ parseInt(data.questionList.length*0.2) }}分钟</div>
        </div>
      </div>
      <div class="paragraph" style="margin-top:4vh">{{ data.EnglishText }}</div>
    </div>
    <div class="btn" @touchstart="drump">开始测评</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      type:'',
      sum:null
    };
  },
  methods:{
    drump(){
      this.$router.push(`/questions?type=${this.type}${this.sum?'&sum='+this.sum:''}`)
    }
  },
  created() {
    // 获取题目数据
    let dataAll = null;
    // 默认为颜色人格测评
    let type = this.$route.query.type || "Personality_color_test";
    let sum = this.$route.query.sum;
    sum && (this.sum = sum)
    this.type = type
    this.$store.state.questionBase.some(item => {
      if (item.key === type) {
        dataAll = item;
      }
    });
    this.data = dataAll;
  }
};
</script>

<style scoped>
.all {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 3.2vw;
  text-align: left;
  display: flex;
  flex-direction: column;
}
.container {
  padding: 5.3vw;
  background-color: rgb(252, 248, 247);
  flex: 1;
  overflow: auto;
}
.white-background {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.05);
  padding: 4.48vw;
  flex: 1;
}
.line {
  height: 1px;
  width: 100%;
  background-color: rgb(234, 234, 234);
  margin: 0.8vh 0;
}
.title {
  font-weight: 600;
  font-size: 3.8vw;
  color: rgb(22, 22, 22);
  margin: 0.8vh 0;
}
.title1 {
  margin: 0;
}
.paragraph {
  line-height: 5.4vw;
  color: rgb(136, 136, 136);
  margin: 0.2vh 0;
}
.con2 {
  display: flex;
}
.con2 > div {
  margin-top: 1.2vh;
  padding-top: 1.2vh;
  padding-bottom: 1.2vh;
}
.con2 .title,
.con2 .paragraph {
  margin: 0;
}
.con2 .title {
  margin-bottom: 0.8vh;
}
.con2 > div:nth-child(1) {
  margin-right: 2.6vw;
}
.btn {
  height: 13.3vw;
  line-height: 13.3vw;
  background-color: rgba(24, 29, 51);
  color: white;
  text-align: center;
  font-size: 4.8vw;
  font-weight: 600;
}
</style>