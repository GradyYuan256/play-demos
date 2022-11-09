const app = document.getElementById('app')
app.addEventListener('scroll', (e) => {
  const scrollHeight = e.target.scrollHeight
  const clientHeight = e.target.clientHeight
  const scrollTop = e.target.scrollTop

  console.dir('scrollHeight = ', e.target.scrollHeight)
  console.log('clientHeight = ', e.target.clientHeight)
  console.log('scrollTop = ', e.target.scrollTop)
  console.log('---------------')

  if(Math.ceil(clientHeight + scrollTop) >= scrollHeight) {
    console.log('触底') // 建议加上 防抖
  }
})