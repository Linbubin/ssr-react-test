import React, { Component } from 'react';
import Header from '../../components/Header'
import { connect } from 'react-redux';
import { getHomeList } from './store/action';

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
                {this.props.newList.map(item => <h1 key={item}>{item}</h1>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.home.name,
        newList: state.home.newList
    }
}

const mapDispatchToProps = dispatch => ({
    getHomeList(){
        dispatch(getHomeList())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);