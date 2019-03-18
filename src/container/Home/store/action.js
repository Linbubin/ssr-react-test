import axios from 'axios';
import { CHANGE_LIST } from './contants';

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const  getHomeList = () => {
  return (dispatch) => {
    axios.get('https://suggest.taobao.com/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb')
      .then(res => {
        console.log(res)
        dispatch(changeList([1,2,3]))
      }).catch(err => {
        console.log(err)
        dispatch(changeList([1,2,3]))
      })
  } 
}