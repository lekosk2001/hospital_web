import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">
                    <h6 className='eng'>ABOUT</h6>
                    <h4>병원 소개</h4>
                </Link>

                <Link to="/">
                    <h6 className='eng'>CURE N CARE</h6>
                    <h4>재활 서비스</h4>
                </Link>
            
                    <Link to="/">
                        <h6 className='eng'>SUPPORT</h6>
                        <h4>지원 서비스</h4>
                    </Link>
                
                <Link to="/">
                    <h6 className='eng'>NEWS</h6>
                        <h4>병원 소식</h4>
                </Link>
            </nav>
            
            <div className='logo'>
                <Link to="/">
                    <h6>10년 역사 충북 최초 재활 병원 │ 적정성 평가 1등급 │ 인증의료기관</h6>
                    <div>
                        <h1 className='color_blue eng'>LGS&nbsp;</h1>
                        <h1>재활요양병원</h1>
                    </div>
                    <h6 className='eng'>LGS REHABILITATION CONVALESCENT HOSPITAL</h6>
                </Link>
            </div>

            <div className='sns'>
                <Link to="/">
                    <span className='coop_link'>재활협력병원 LGS재활병원
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
