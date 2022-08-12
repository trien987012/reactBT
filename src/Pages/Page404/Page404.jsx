import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Page404 extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>
                    Khong tim thay du lieu!
                    de nghi b <NavLink to={''}>tro ve</NavLink> trang chu!
                </h3>
                
            </div>
        );
    }
}

export default Page404;
