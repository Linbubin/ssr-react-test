import axios from 'axios';

export const  getHomeList = () => {
  return () => {
    axios.get('https://suggest.taobao.com/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb')
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
  } 
}