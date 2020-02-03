<template>
  <div id="app">
    <h3>默认</h3>
    <div>
      <VueShowMore :text="text" />
    </div>
    <h3>展开/折叠</h3>
    <div>
      <VueShowMore :text="text" :type="'toggle'" />
    </div>
    <h3>设置行数(2)</h3>
    <div>
      <VueShowMore :text="text" :type="'toggle'" :lines="2" />
    </div>
    <h3>改变按钮文案</h3>
    <div>
      <VueShowMore :text="text" :type="'toggle'" :btns="['...More', 'Hide']" />
    </div>
    <h3>前面插入文案</h3>
    <div>
      <VueShowMore :text="text" :type="'toggle'">
        <span slot="before" class="remind" style="color: skyblue">@chance722</span>
      </VueShowMore>
    </div>
    <h3>回车符空行不纳入计算(默认还是3行)</h3>
    <div>
      <VueShowMore :text="text2" :type="'toggle'" />
    </div>
    <h3>回车符空行纳入计算(设置最多3行)</h3>
    <div>
      <VueShowMore :text="text3" :type="'toggle'" :maxLines="3" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueShowMore from 'vue-simple-showmore'

Vue.use(VueShowMore)

export default {
  name: 'app',
  data () {
    return {
      text: '这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。\
        这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。\
        这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。\
        这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。\
        这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。',
      text2: '这是一首简单的小情歌，\r\n\r\n唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。\
        这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。\
        这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。\
        这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。\
        这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。',
       text3: '这是一首简单的小情歌，\r\n\r\n\r\n\r\n唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。\
        这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。\
        这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。\
        这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。\
        这是一首简单的小情歌，唱著人们心肠的曲折。我想我很快乐，当有你的温热，脚边的空气转了。',
    }
  },
}
</script>

<style>
 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto;
  padding: 0 20px;
}

@media only screen and (min-width: 768px) {
  #app {
    width: 960px;
  }
}
</style>
