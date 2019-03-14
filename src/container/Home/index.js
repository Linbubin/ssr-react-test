import React, { Component } from 'react';
import Header from '../../components/Header'
import { connect } from 'react-redux';

class Home extends Component{
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
    console.log(state);
    return {
        name:123
    }
}

export default connect(mapStateToProps, null)(Home);