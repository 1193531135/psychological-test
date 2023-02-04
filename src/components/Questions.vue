<template>
  <div class="all">
    <div>
      <div style="font-size: 4.2vw">{{ count + 1 }}/{{ questionToltal }}</div>
      <div class="progress-con">
        <div
          class="progress"
          :style="`width:${((count + 1) * 100) / questionToltal}%`"
        ></div>
      </div>
    </div>
    <div class="title">{{ randerList[count].question }}</div>
      <div class="answer-list">
        <div
          v-for="answer in option"
          :key="answer"
          :class="`answer-item ${isSelect(answer) ? 'answer-item-focus' : ''}`"
          @touchstart="remenberData(answer)"
        >
          {{ randerList[count][answer] }}
        </div>
      </div>
    <div class="end-con">
      <div v-show="count != 0" class="back-btn" @touchstart="countComputed('reduce')">上一题</div>
    </div>
    <div class="end-btn" v-if="data[randerList[questionToltal-1].num]" @click="$router.push(`/color-report?data=${data.toString()}`)">查看我的测试结果</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      count: 0,
      // 因为有可能几百题目只渲染一部分randerList作为真实渲染的列表
      randerList: [],
      randerListAll: [],
      option: [],
      questionToltal: 1,
    };
  },
  methods: {
    countComputed(type) {
      type = type || "add";
      let count = this.count;
      if (type === "add") {
        if ((count+1) === this.questionToltal) {
          return true
        }
        count += 1;
      }
      if (type === "reduce") {
        count -= 1;
      }
      this.count = count;
    },
    remenberData(value) {
      let numNow = this.randerList[this.count].num;
      // this.data[numNow] = value
      this.$set(this.data, numNow, value);
      console.log(numNow)
      // console.log(numNow)
      this.countComputed("add");
    },
    isSelect(value) {
      let state = false;
      let numNow = this.randerList[this.count].num;
      if (this.data[numNow] === value) {
        state = true;
      }
      return state;
    },
  },
  computed: {},
  created() {
    // 获取题目数据
    let dataAll = null;
    // 默认为颜色人格测评
    let type = this.$route.query.type || "Personality_color_test";
    this.$store.state.questionBase.some((item) => {
      if (item.key === type) {
        dataAll = this.$deepCopy(item);
      }
    });
    this.option = dataAll.option;
    // 生成临时排序随机数
    dataAll.questionList.some((item) => {
      item.random = Math.random();
    });
    // 随机排序
    dataAll.questionList.sort((a, b) => (a.random > b.random ? 1 : -1));
    this.randerListAll = dataAll.questionList;
    this.questionToltal = this.$route.query.sum
      ? Number(this.$route.query.sum)
      : this.randerListAll.length;
    this.randerList = this.randerListAll.slice(0, this.questionToltal);
    // 生成数组
    this.$set(this, "data", Array.from({ length: this.questionToltal }));
  },
};
</script>

<style scoped>
.all {
  text-align: left;
  background: rgb(240, 250, 252);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  color: rgb(22, 22, 22);
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 10vw;
  padding-bottom: 0;
}
.progress-con {
  height: 2vw;
  width: 100%;
  background-color: rgb(239, 239, 239);
  position: relative;
  margin-top: 1.5vh;
  margin-bottom: 5vh;
}
.progress {
  position: absolute;
  /* background-color: rgb(83,168,255); */
  background: linear-gradient(to right, rgb(217, 236, 255), rgb(83, 168, 255));
  /* border-radius: 1vw; */
  transition: width 0.3s;
  height: 2vw;
  width: 0%;
}
.all {
}
.title {
  font-weight: 600;
  font-size: 4.7vw;
  height: 9vh;
}
.answer-item {
  min-height: 12vw;
  width: 100%;
  box-sizing: border-box;
  background-color: rgb(250, 250, 250);
  border: 0.5vw solid white;
  border-radius: 1vw;
  /* box-shadow: 0 0 0 0.5vw white; */
  box-shadow: 0 0 2vw rgba(0, 0, 0, 0.1);
  font-size: 3.3vw;
  padding: 2vw;
  margin: 5vw 0;
}
.answer-list {
  height: 49.7vh;
}
.answer-item-focus {
  border-color: rgb(83, 168, 255) !important;
}
.answer-item:nth-last-child(1) {
  margin-bottom: 0;
}
.end-con {
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
}
.back-btn {
  width: 21vw;
  height: 21vw;
  text-align: center;
  border-radius: 50%;
  background-color: rgb(250, 250, 250);
  box-shadow: 0 0 2vw rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
.end-btn{
  height: 13.3vw;
  line-height: 13.3vw;
  background-color: rgba(24, 29, 51);
  color: white;
  text-align: center;
  font-size: 4.8vw;
  font-weight: 600;
  margin-bottom: 2vh;
}
</style>