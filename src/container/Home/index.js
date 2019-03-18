import React, { Component } from 'react';
import Header from '../../components/Header'
import { connect } from 'react-redux';
import { getHomeList } from './store/action';

console.log(getHomeList)

class Home extends Component{
    componentDidMount(){
        this.props.getHomeList()
    }
    render(){
        return(
            <div onClick={()=>{console.log(123)}}>
                <Header />
                <div>this is {this.props.name}</div>
                Home
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.home.name
    }
}

const mapDispatchToProps = dispatch => ({
    getHomeList(){
        dispatch(getHomeList())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);