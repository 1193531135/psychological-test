<template>
  <div class="all">
    <div>
      <div>{{ data.name }}</div>
      <div>
        <div>测评描述</div>
        <div>{{ data.description }}</div>
      </div>
      <div>
        <div>测评背景</div>
        <div>{{ data.background }}</div>
      </div>
    </div>
    <div>
      <div></div>
      <div></div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:{}
    }
  },
  created(){
    // 获取题目数据
    let dataAll = null
    // 默认为颜色人格测评
    let type = this.$route.query.type || 'Personality_color_test'
    this.$store.state.questionBase.some(item => {
      if(item.key === type){
        dataAll = item
      }
    })
    this.data = dataAll
  }
}
</script>

<style scoped>
.all{
  background-color: rgb(255 248 244);
}
</style>