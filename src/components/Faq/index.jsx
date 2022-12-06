import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import parse from 'html-react-parser';
import ArrowDown from '../../assets/myPage/contact/down-arrow.png'
import arrowUp from '../../assets/myPage/contact/up-arrow.png'
import QIcon from '../../assets/myPage/contact/qa.png'
import HorizontalSubMenu from '../HorizontalSubMenu';


const Faq = ({ subActiveButton, setSubActiveButton }) => {

    const tabsArray2 = [
        { text: "전체", id: 0, width: '11.5625rem', path: "/cscenter/all/faq" },
        { text: "카지노", id: 1, width: '13.4375rem', path: "/cscenter/all/faq/live-casino" },
        { text: "슬롯", id: 2, width: '11.5625rem', path: "/cscenter/all/faq/slot" },
        { text: "스포츠", id: 3, width: '13.4375rem', path: "/cscenter/all/faq/sports" },
        { text: "호텔카지노", id: 4, width: '18.3125rem', path: "/cscenter/all/faq/e-sports1" },
        { text: "e-스포츠", id: 5, width: '15.3125rem', path: "/cscenter/all/faq/e-sports", leftScrollValue2: 842 },
        { text: "미니게임", id: 6, width: '15.3125rem', path: "/cscenter/all/faq/minigame" },
        { text: "키론가상게임", width: '20.3125rem', id: 7, path: "/cscenter/all/faq/ar-game" },
        { text: "피싱게임", width: '16.3125rem', id: 8, path: "/cscenter/all/faq/ar-game1" },
        { text: "티비벳", width: '16.3125rem', id: 9, path: "/cscenter/all/faq/ar-game2" },
        { text: "충전/환전", width: '16.3125rem', id: 10, path: "/cscenter/all/faq/transaction" },
        { text: "베팅관련", width: '15.3125rem', id: 11, path: "/cscenter/all/faq/about-betting" },
        { text: "기타", width: '10.3125rem', id: 12, path: "/cscenter/all/faq/other" },
    ];

    const location = useLocation();
    const [openedCell, setOpenedCell] = useState(null)
    const [, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    console.log(`selectedSubTab`, selectedSubTab)
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.onpopstate = e => {

            setTimeout(() => {
                navigate('/cscenter')
                setSubActiveButton('/cscenter/all/faq')
            }, 0)
        }
        return (() => {
            setSubActiveButton('/cscenter/all/faq')
        })
    }, [setSubActiveButton, navigate]);

    const questionArray = [
        { id: 0, type: "충전/환전", text: "첫, 매충 10% 포인트를 받으면 롤링을 어떻게 해야 환전가능한가요?" },
        { id: 1, type: "충전/환전", text: "1,000원 단위도 충전/환전 신청이 가능한가요?" },
        { id: 2, type: "충전/환전", text: "충전시 은행 입금자명이 달라도 처리가 가능한가요?" },
        { id: 3, type: "충전/환전", text: "출금(환전)시 예금주 변경 및 타명의 사용이 가능 &nbsp; &nbsp; 한가요?" },
        { id: 4, type: "베팅관련", text: "최소 베팅금액, 최대 베팅금액, 최대 적중한도 금액은 얼마인가요?" },
        { id: 5, type: "충전/환전", text: "충전&환전 처리 시간은 어느 정도 소요되나요?" },
        { id: 6, type: "베팅관련", text: "베팅 취소는 가능한가요?" },
        { id: 7, type: "스포츠", text: "스포츠북 라이브 베팅 목록 중, 경기 도중에 베팅한 &nbsp; 경기가 사라지는 경우 베팅한 내역은 어떻게 처리 &nbsp; &nbsp; 되나요?" },
        { id: 8, type: "기타", text: "Winner 홈페이지에 접속이 잘 되지 않거나 사용도중 에러가 발생하는데 어떻게 해야 하나요?" },
        { id: 9, type: "기타", text: "이 사이트는 안전한가요?" },
        { id: 10, type: "기타", text: "중복 IP 또는 본인 아이디를 공유하여 사용이 가능 &nbsp; 한가요?" },
    ]

    const BodyText1 = '☞ 첫, 매충 10% 포인트를 받지 않을시 모든게임의 롤링은 단폴, &nbsp; &nbsp; 카지노 베팅 포함 100%만 해주시면 환전가능합니다.'
    const BodyText2 = '- 포인트 받지 않기를 원할시 : \n 충전 --> "보너스받기" 에서 "받지않기" 클릭하시고 신청해주시면 됩니다.'
    const BodyText3 = ' ☞ 첫, 매충 10%포인트를 받았을시 각게임당 아래와 같이 롤링해  &nbsp; 주시면 됩니다. '
    const BodyText4 = '언제나 고객에게 최상의 서비스 제공을 할 수 있도록 노력하는 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \n  &nbsp;『 Winner 』가 되겠습니다.'

    const QuestionCell = ({ type, text, cellId }) => (
        <>
            <button
                className="question-cell"
                onClick={() => {
                    if (openedCell === cellId) {
                        setOpenedCell(null)
                    } else {
                        setOpenedCell(cellId)
                    }
                }}
            >
                <img
                    className="q-icon" src={QIcon} alt="" />
                <div style={{ marginLeft: '1.75rem' }} className="w-full h-full flex-col flex flex-wrap justify-center items-start">
                    <div
                        className="q-type"
                        style={{
                            maxWidth: '51.5rem',
                            minWidth: '17.5rem',
                            overflow: 'hidden',
                            lineHeight: '3.3rem',
                            height: '4.1rem',
                        }}
                    >
                        {type}
                    </div>
                    <p className="q-text">{parse(text)}</p>
                </div>
                <img style={{ width: '3.1875rem', marginRight: '4.45rem', marginLeft: '3.125rem' }} className={`${openedCell === cellId && "transform rotate-180"} q-down-arrow`} src={openedCell === cellId ? arrowUp : ArrowDown} alt="" />
            </button>
            {openedCell === cellId && (
                <div className="opened-cell" >
                    <div className="flex flex-col">
                        <div style={{ marginBottom: '6.1rem' }} className="font-spoqa tracking-tight text-gray-r585858">
                            <span className="no1" >
                                No.1
                            </span>
                            그 이상.! 최고를 넘어선 『 Winner 』입니다.
                        </div>

                        <div style={{ marginBottom: '5rem' }} className="font-spoqa tracking-tight text-gray-r585858">
                            {BodyText1.split('\n').map((item, i) =>
                                <p key={i} className={`flex items-center`}>{parse(item)}</p>
                            )}
                        </div>
                        <div style={{ marginBottom: '-0.3rem' }} className="font-spoqa tracking-tight text-gray-r585858">
                            {BodyText2.split('\n').map((item, i) =>
                                <p key={i} className={`flex items-center`}>{item}</p>
                            )}
                        </div>
                        <div style={{ marginBottom: '0.9rem' }} className="font-spoqa tracking-tight text-gray-r585858">
                            {BodyText3.split('\n').map((item, i) =>
                                <p key={i} className={`flex items-center`}>{parse(item)}</p>
                            )}
                        </div>
                        <div style={{ marginBottom: '1.9rem' }} className="font-spoqa tracking-tight text-gray-r585858">
                            - 스포츠 : <span style={{ color: "#e65454" }} className="">두폴더 이상 </span> 롤링 100% 최대 30만원
                        </div>
                        <div style={{ marginBottom: '1.9rem' }} className="font-spoqa tracking-tight text-gray-r585858 ">
                            - 스포츠단폴더, 가상게임, 미니게임, 카지노 :  <span style={{ color: "#e65454" }} className="">이용불가</span>

                        </div>
                        <div style={{ marginBottom: '1rem' }} className="font-spoqa tracking-tight text-gray-r585858">
                            - 스포츠 2폴더 이상 100% 롤링 후 이용 가능
                        </div>

                        <div style={{ marginBottom: '5.1rem', lineHeight: '1.9' }} className="font-spoqa tracking-tight text-gray-r585858">
                            스포츠 단폴더, 타 게임 이용 가능하며, 스포츠 2폴더 100% 롤링 전 타게임 이용시 보유금 <span style={{ color: "#e65454" }} className="">전액 몰수처리</span>
                        </div>

                        <div style={{ marginBottom: '5.2rem', lineHeight: '1.9' }} className="font-spoqa tracking-tight text-gray-r585858">
                            ※ 모든게임의 롤링적용시점은 게임이 끝나서 마감처리된 때입니다. 이후에 출금신청해주셔야 처리가능합니다.
                        </div>

                        <div className="font-spoqa tracking-tight text-gray-r585858">
                            {BodyText4.split('\n').map((item, i) =>
                                <span style={{ lineHeight: '1.9' }} key={i} className={`flex items-center`}>{parse(item)}</span>
                            )}
                        </div>
                        <div style={{ marginBottom: '4.625rem', marginTop: '1rem' }} className="font-spoqa  tracking-tight text-gray-r585858 flex items-center">
                            감사합니다.
                        </div>
                    </div>

                </div>
            )}
        </>
    )

    function MenuList({ items }) {

        return items.map(item => (
            <QuestionCell type={item.type} text={item.text} cellId={item.id} />
        )
        )
    }

    return (
        <div>
            <div style={{ margin: '1rem 1.85rem' }}>


            </div>
            <div className="w-full flex relative top-0" style={{ position: 'relative' }}>
                <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem' }} className="absolute h-full right-0 z-50"></div>

                <div id='scroll-wrapper12' style={{ paddingLeft: '1.875rem', overflowX: 'scroll', display: 'flex', marginTop: '1.08rem' }} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                    <div className=" flex flex-shrink-0 w-full" style={{ overflowX: 'scroll', display: 'flex', flexShrink: '0' }}>
                        <HorizontalSubMenu itemsArray={tabsArray2} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                    </div>
                </div>
                <div style={{ height: '98%', top: '2rem' }} className="nav-shadow absolute h-full left-0 z-50"></div>
            </div>

            <div style={{ margin: '1.875rem', paddingBottom: '14rem' }} className="">
                <MenuList items={questionArray} />
            </div>
        </div>
    )
}

export default Faq
