import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = () => (
    <div>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/login'>Login</Link>
    </div>
);

const mapStateToProps = (state) => ({
    x: state.x
})
export default connect(mapStateToProps, null)(Header);