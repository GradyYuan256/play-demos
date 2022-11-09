const app = document.getElementById('app')
app.addEventListener('scroll', (e) => {
  const scrollHeight = e.target.scrollHeight
  const clientHeight = e.target.clientHeight
  const scrollTop = e.target.scrollTop

  console.dir('scrollHeight = ', e.target.scrollHeight)
  console.log('clientHeight = ', e.target.clientHeight) // 包括 height + padding
  console.log('offsetHeight = ', e.target.offsetHeight) // 包括 border-width + height + padding
  console.log('scrollTop = ', e.target.scrollTop)
  console.log('---------------')

  if(Math.ceil(clientHeight + scrollTop) >= scrollHeight) {
    console.log('触底') // 建议加上 锁或者防抖
    alert('到底了~')
  }
})