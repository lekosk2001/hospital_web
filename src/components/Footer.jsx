import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
    <footer>
        <section className='footer_gradient'>
            <h6 className='eng bold font_mini'>LGS REHABILITATION CONVALESCENT HOSPITAL</h6>
            <h1>만성기 환자 재활 요양에 최적화된 충북 최초 재활 도입 병원</h1>

            <div className='footer_btns'>
                <button>
                    병원 소개
                    <div className='arrow'/>
                </button>
                <button>
                    LGS 네트워크
                    <div className='arrow'/>
                </button>
            </div>
        </section>

        <section className='footer_shortcuts'>
            <span className='shortcut_box'>
                <h6>병원 소개</h6>
                <Link to="/"><p>병원 소개</p></Link>
                <Link to="/"><p>병원 둘러보기</p></Link>
                <Link to="/"><p>LGS 네트워크</p></Link>
                <Link to="/"><p>오시는 길</p></Link>
            </span>
            <span className='shortcut_box'>
                <h6>재활 서비스</h6>
                <Link to="/"><p>소아재활</p></Link>
                <Link to="/"><p>관절수술 후 재활</p></Link>
                <Link to="/"><p>암 재활</p></Link>
                <Link to="/"><p>치매인지재활</p></Link>
                <Link to="/"><p>호흡 재활</p></Link>
                <Link to="/"><p>척추손상 재활</p></Link>
                <Link to="/"><p>언어치료</p></Link>
                <Link to="/"><p>뇌졸중 재활</p></Link>
            </span>
            <span className='shortcut_box'>
                <h6>지원 서비스</h6>
                <Link to="/"><p>외래진료일정</p></Link>
                <Link to="/"><p>제증명 발급 안내</p></Link>
                <Link to="/"><p>입퇴원 안내</p></Link>
                <Link to="/"><p>자주하는 질문들</p></Link>
                <Link to="/"><p>입사지원</p></Link>
            </span>
            <span className='shortcut_box'>
                <h6>병원 소식</h6>
                <Link to="/"><p>병원 소식</p></Link>
            </span>
            <span className='shortcut_box'>
                <h6>부가 서비스</h6>
                <Link to="/"><p>개인정보처리방침</p></Link>
                <Link to="/"><p>환자의 권리와 의무</p></Link>
                <Link to="/"><p>비급여 수가</p></Link>
            </span>

        </section>

        <section className='footer_bottom'>
            <span>
                <p>
                    주소 : 청주시 흥덕구 복대동 익명아파트 101동 707호
                </p>
                <p>
                    Tel:043-234-5678
                </p>
                <p>
                    상호 : LGS재활요양병원
                </p>
                <p>
                    대표자명 : 이경석
                </p>
                <p>
                    사업자 등록번호 : 301-00-12345
                </p>
                <p>
                    @ LGS Rehabilitation Hospital. All rights reserved.
                </p>
            </span>
            <span>
                <Link to="/">
                        <h1>LGS 재활요양병원</h1>
                </Link>
            </span>
        </section>
    </footer>
    )
}
