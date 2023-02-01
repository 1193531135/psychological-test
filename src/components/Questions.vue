<template>
  <div class="all">
    <div>
      <div style="font-size:4.2vw">{{ count+1 }}/{{ questionToltal }}</div>
      <div class="progress"></div>
    </div>
    <div class="title">{{ randerList[count].question }}</div>
    <div class="answer-list">
      <div v-for="answer in option" :key="answer" class="answer-item">
        {{ randerList[count][answer] }}
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      count:0,
      // 因为有可能几百题目只渲染一部分randerList作为真实渲染的列表
      randerList:[],
      randerListAll:[],
      option:[],
      questionToltal:0,
    };
  },
  created() {
    // 获取题目数据
    let dataAll = null;
    // 默认为颜色人格测评
    let type = this.$route.query.type || "Personality_color_test";
    this.$store.state.questionBase.some(item => {
      if (item.key === type) {
        dataAll = this.$deepCopy(item);
      }
    });
    this.option = dataAll.option
    // 生成临时排序随机数
    dataAll.questionList.some(item => {item.random = Math.random()})
    // 随机排序
    dataAll.questionList.sort((a,b) => a.random > b.random?1:-1)
    this.randerListAll = dataAll.questionList;
    this.questionToltal = this.$route.query.sum?Number(this.$route.query.sum):this.randerListAll.length
    this.randerList = this.randerListAll.slice(0,this.questionToltal)
  }
}
</script>

<style>
.all{
  text-align: left;
  background: rgb(249, 249, 249);
}
.progress{
  /* background-color: rgb(83,168,255); */
  height: 2vw;
  background: linear-gradient(to right,rgb(217,236,255),rgb(83,168,255));
  width: 100%;
  /* border-radius: 1vw; */
  margin-top: 1.5vh;
  margin-bottom: 5vh;
}
.all{
  padding: 10vw;
}
.title {
  font-weight: 600;
  font-size: 4.7vw;
  color: rgb(22, 22, 22);
  margin-bottom: 5vh;
}
.answer-item{
  height: 12vw;
  width: 100%;
  box-sizing: border-box;
  border: 0.5vw solid white;
}
</style>