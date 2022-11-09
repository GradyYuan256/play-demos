<script setup>
import {ref, onMounted} from 'vue'
let list = ref([])
const getList = (num) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num)
    }, 1000)
  })
}
getList(20).then(res => {
  for(let i = 1; i < res+1 ; i++) {
    list.value.push(i)
  }
})

const attach = (cb) => {
  getList(20).then(res => {
    for(let i = 1; i < res+1 ; i++) {
      list.value.push(i)
    }
    cb?.()
  })
}

onMounted(() => {
  let lock = null
  const app = document.getElementById('box')
  app.addEventListener('scroll', (e) => {
    const scrollHeight = e.target.scrollHeight
    const clientHeight = e.target.clientHeight
    const scrollTop = e.target.scrollTop

    console.dir('scrollHeight = ', e.target.scrollHeight)
    console.log('clientHeight = ', e.target.clientHeight)
    console.log('scrollTop = ', e.target.scrollTop)
    console.log('---------------')

    if(Math.ceil(clientHeight + scrollTop) >= scrollHeight) {
      console.log('触底') 
      // 建议加上 锁或者防抖
      if(lock) {
        lock = null
        return
      } else {
        lock = true
        attach(() => {
          lock = null
        })
      }
    }
  })
})
</script>

<template>
  <div id="box">
    <p v-for="i of list">{{i}}</p>
  </div>
</template>

<style scoped>
p {
  height: 20px;
  background: grey;
}

#box {
  height: 300px;
  border: 6px solid green; 
  overflow-y: scroll;
}
</style>