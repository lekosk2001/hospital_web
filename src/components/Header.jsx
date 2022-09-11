import { Link } from 'react-router-dom';
import React from 'react'

export default function Header() {
    return (
        <header>
            <nav>
                <span>
                    <Link to="/">
                        <p>ABOUT</p>
                        <h6>병원 소개</h6>
                    </Link>
                </span>
                
                <span>
                    <Link to="/">
                        <p>CURE N CARE</p>
                        <h6>재활 서비스</h6>
                    </Link>
                </span>
                
                <span>
                    <Link to="/">
                        <p>SUPPORT</p>
                        <h6>지원 서비스</h6>
                    </Link>
                </span>
                
                <span>
                    <Link to="/">
                        <p>NEWS</p>
                        <h6>병원 소식</h6>
                    </Link>
                </span>
            </nav>
            
            <div className='logo'>
                <Link to="/"><img src="" alt="" /></Link>
            </div>

            <div className='sns'>
                <Link to="/">
                    <span className='coop_link'>재활협력병원 씨엔씨푸른병원
                    <img src="" alt="" /></span>
                </Link>
                <Link to="/"><span className='sns_btn'><img src="" alt="" /></span></Link>
                <Link to="/"><span className='sns_btn'><img src="" alt="" /></span></Link>
                <Link to="/"><span className='sns_btn'><img src="" alt="" /></span></Link>
                <Link to="/"><span className='sns_btn'><img src="" alt="" /></span></Link>
            </div>
        </header>
    )
}
