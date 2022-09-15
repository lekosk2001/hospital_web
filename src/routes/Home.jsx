import { Link } from 'react-router-dom';
import React from 'react'
import './Home.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope,faHandHoldingMedical,faHandsHoldingChild,faHospitalUser} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <main>
            <section>
                <div className='visual'></div>
            </section>
            <section className='home_menu'>
                <Link to="/">
                    <span>
                        <h2>소아재활치료센터</h2>
                        <p>체계적인 치료 시스템</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faHandsHoldingChild} className="icon"/>
                    </span>
                </Link>
                <Link to="/">
                    <span>
                        <h2>뇌졸중재활치료</h2>
                        <p>질환에 의한 후유증을 치료</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faHandHoldingMedical} className="icon"/>
                    </span>
                </Link>
                <Link to="/">
                    <span>
                        <h2>입퇴원 안내</h2>
                        <p>친절하고 간소한 절차</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faHospitalUser} className="icon"/>
                    </span>
                </Link>
                <Link to="/">
                    <span>
                        <h2>진료 예약</h2>
                        <p>충북 최초 재활병원</p>
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faStethoscope} className="icon"/>
                    </span>
                </Link>
            </section>
            <section className='home_intro'>
                <div className='intro_desc_wrapper'>
                    <h6 className='eng bold font_mini'>CURE N CARE</h6>
                    <h1 className='color_blue'>
                        도심에서 누리는<br/>
                        쾌적하고 편안한 요양
                    </h1>
                    <h1>
                        치료와 돌봄으로<br/>
                        최선을 다하겠습니다.
                    </h1>

                    <p className='intro_desc'>
                        LGS 재활요양병원은 환자 한 명 한 명에게 맞춤요양 서비스를 제공하고 있습니다. LGS 재활요양병원의 만족스러운 의료 서비스의 퀄리티를 직접 경험해보세요.
                    </p>
                    
                    <div className='intro_btns'>
                        <button>
                            병원 둘러보기
                            <div className='arrow'/>
                        </button>
                        <button>
                            오시는 길
                            <div className='arrow'/>
                        </button>
                    </div>

                </div>

                <div className='intro_slide_wrapper'>
                    <div className='slide_img_box'>
                        <ul>
                            <li>
                            <div><img src=''></img></div>
                            <h2>청주 최초 재활 특화 요양병원</h2>
                            <p>LGS 재활요양병원은 보건복지부 2주기 인증을 통과하였습니다.</p>
                            </li>
                        </ul>

                    </div>

                </div>
            </section>
            <section className='home_news'>
                <h6 className='eng bold font_mini'>LGS NEWS</h6>
                <div className='news_title'>
                    <h1>새소식</h1>
                    <h1 className='color_blue'>+</h1>
                </div>
                <p className='news_desc'>
                재활요양병원에 머무시는 모든 분들을 위하여 <br/>항상 함께 있는 듯한 원활한 소통을 약속합니다.
                </p>

            <ul>
                <li>
                    <div className='news_thumnail'><img src=''></img></div>
                    <div className='news_info'>
                        <p className='color_blue bold'>공지사항</p>
                        {" │ "}
                        <p className='eng'>2023-01-01</p>
                    </div>
                    <h2>제목</h2>
                    <p className='font_mini'>내용</p>
                </li>
                
                <li>
                    <div className='news_thumnail'><img src=''></img></div>
                    <div className='news_info'>
                        <p className='color_blue bold'>공지사항</p>
                        {" │ "}
                        <p className='eng'>2023-01-01</p>
                    </div>
                    <h2>제목</h2>
                    <p className='font_mini'>내용</p>
                </li>
                
                <li>
                    <div className='news_thumnail'><img src=''></img></div>
                    <div className='news_info'>
                        <p className='color_blue bold'>공지사항</p>
                        {" │ "}
                        <p className='eng'>2023-01-01</p>
                    </div>
                    <h2>제목</h2>
                    <p className='font_mini'>내용</p>
                </li>
                
                <li>
                    <div className='news_thumnail'><img src=''></img></div>
                    <div className='news_info'>
                        <p className='color_blue bold'>공지사항</p>
                        {" │ "}
                        <p className='eng'>2023-01-01</p>
                    </div>
                    <h2>제목</h2>
                    <p className='font_mini'>내용</p>
                </li>
                
                <li>
                    <div className='news_thumnail'><img src=''></img></div>
                    <div className='news_info'>
                        <p className='color_blue bold'>공지사항</p>
                        {" │ "}
                        <p className='eng'>2023-01-01</p>
                    </div>
                    <h2>제목</h2>
                    <p className='font_mini'>내용</p>
                </li>
                
                <li>
                    <div className='news_thumnail'><img src=''></img></div>
                    <div className='news_info'>
                        <p className='color_blue bold'>공지사항</p>
                        {" │ "}
                        <p className='eng'>2023-01-01</p>
                    </div>
                    <h2>제목</h2>
                    <p className='font_mini'>내용</p>
                </li>
                
            </ul>
            </section>
            
        </main>
    )
}
