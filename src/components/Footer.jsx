import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
    <footer>
        <section>
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
        <section>

        </section>
    </footer>
    )
}
