import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import HorizontalSubMenu from '../HorizontalSubMenu';
// import BottomNavbar from 'components/bottomNavbar/BottomNavbar'
import Pagination from '../Pagination';
import ContactTable from '../ContactTable';
import Search from '../Search'

const Contact = ({ subActiveButton, setSubActiveButton }) => {

    const tabsArray = [
        { text: "전체", id: 0, width: '11.5625rem', path: "/cscenter/all/contact/all" },
        { text: "카지노", id: 1, width: '13.4375rem', path: "/cscenter/all/contact/all/live-casino" },
        { text: "슬롯", id: 2, width: '11.5625rem', path: "/cscenter/all/contact/all/slot" },
        { text: "스포츠", id: 3, width: '13.4375rem', path: "/cscenter/all/contact/all/sports" },
        { text: "호텔카지노", id: 4, width: '18.3125rem', path: "/cscenter/all/contact/all/e-sports1" },
        { text: "e-스포츠", id: 5, width: '15.3125rem', path: "/cscenter/all/contact/all/e-sports", leftScrollValue2: 842 },
        { text: "미니게임", id: 6, width: '15.3125rem', path: "/cscenter/all/contact/all/minigame" },
        { text: "키론가상게임 ", width: '20.3125rem', id: 7, path: "/cscenter/all/contact/all/ar-game" },
        { text: "피싱게임 ", width: '20.3125rem', id: 8, path: "/cscenter/all/contact/all/ar-game1" },
        { text: "티비벳", id: 9, width: '16.5625rem', path: "/cscenter/all/contact/all/slot2" },
        { text: "충전/환전", width: '16.3125rem', id: 10, path: "/cscenter/all/contact/all/transaction" },
        { text: "베팅관련", width: '15.3125rem', id: 11, path: "/cscenter/all/contact/all/about-betting" },
        { text: "기타", width: '10.3125rem', id: 12, path: "/cscenter/all/contact/all/other" },
    ];

    const inboxArray = [
        {
            id: 0,
            text: "은행계좌정보",
            isRead: false,
            time: "2021.06.28 15:36",
            category: "계좌문의",
            isClicked: true,
            path: '/cscenter/all/contact/view/1'
        },
        {
            id: 1,
            text: "스포츠북 문의",
            isRead: true,
            time: "2021.06.28 15:36",
            category: "스포츠",
            path: '/cscenter/all/contact/view/2'
        },
        {
            id: 2,
            text: "카지노 문의",
            isRead: true,
            time: "2021.06.28 15:36",
            category: "카지노",
            path: '/cscenter/all/contact/view/3'
        },
        {
            id: 3,
            text: "키론가상게임 문의",
            isRead: true,
            time: "2021.06.28 15:36",
            category: "키론가상게임",
            path: '/cscenter/all/contact/view/4'
        },
        {
            id: 4,
            text: "미니게임 문의",
            isRead: true,
            time: "2021.06.28 15:36",
            category: "미니게임",
            path: '/cscenter/all/contact/view/5'
        },
        {
            id: 5,
            text: "슬롯 문의",
            isRead: true,
            time: "2021.06.28 15:36",
            category: "슬롯게임",
            path: '/cscenter/all/contact/view/6'
        },
        {
            id: 6,
            text: "충전환전 문의",
            isRead: false,
            time: "2021.06.28 15:36",
            category: "충전환전",
            path: '/cscenter/all/contact/view/7'
        },
        {
            id: 7,
            text: "베팅관련 문의",
            isRead: true,
            time: "2021.06.28 15:36",
            category: "베팅관련",
            path: '/cscenter/all/contact/view/8'
        },
        {
            id: 8,
            text: "문의드립니다",
            isRead: true,
            time: "2021.06.28 15:36",
            category: "기타",
            path: '/cscenter/all/contact/view/9'
        },
        {
            id: 9,
            text: "문의드립니다",
            isRead: false,
            time: "2021.06.28 15:36",
            category: "기타",
            path: '/cscenter/all/contact/view/10'
        },

    ];
    const location = useLocation();
    const [, setSelectedTab] = useState(0)
    const [page, setPage] = useState(0)
    const [, setSelectedSubTab] = useState(location.pathname)
    const [checkedState, setCheckedState] = useState(
        new Array(inboxArray.length).fill(false)
    );
    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.onpopstate = e => {
            setTimeout(() => {
                navigate('/cscenter')
                setSubActiveButton('/cscenter/all/contact/all')
            }, 0)
        }
        return (() => {
            setSubActiveButton('/cscenter/all/contact/all')
        })
    }, [setSubActiveButton, navigate]);

    return (
        <div className='contact-container'>
            <div className="w-full flex relative top-0" style={{ position: 'relative' }}>
                <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem' }} className="absolute h-full right-0 z-50"></div>

                <div id='scroll-wrapper12' style={{ paddingLeft: '1.875rem', overflowX: 'scroll', display: 'flex', }} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                    <div className=" flex flex-shrink-0 w-full" style={{ overflowX: 'scroll', display: 'flex', flexShrink: '0' }}>
                        <HorizontalSubMenu key={40} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                    </div>
                </div>
                <div style={{ height: '88%' }} className="nav-shadow absolute h-full left-0 z-50"></div>
            </div>

            <div style={{ borderRadius: "1em", margin: '1.875rem', marginTop: '1.875rem' }} className="shadow-subNavbar overflow-hidden">
                <div className="flex flex-col w-full">
                    <ContactTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray} />
                </div>
            </div>


            {/* <ContactTable array={inboxArray}/> */}

            {/* <div style={{ margin: '1.875rem', marginTop: '3.75rem', marginBottom: '3.9375rem', fontSize: '2.8125rem' }} className="flex items-center justify-center">
                <button style={{ height: '7.3125rem', padding: '1px', backgroundColor: "#7e3636" }} className="flex items-center justify-center w-1/2 mr-4 rounded-2xl bg-red-cb4343">
                    <div className="flex items-center justify-center w-full h-full bg-black rounded-2xl border border-red-f36576 bg-gradient-to-b from-red-f03a50 via-red-e2314f to-red-cf254d cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-white">계좌문의</span>
                    </div>
                </button>
                <button style={{ height: '7.3125rem', padding: '1px', fontSize: '2.8125rem' }} onClick={() => navigate('/cscenter/all/contact/compose')} className="flex items-center justify-center w-1/2 rounded-2xl bg-blue-r0070d9">
                    <div className="flex items-center justify-center w-full h-full rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-white">문의작성</span>
                    </div>
                </button>
            </div> */}
            <div className="two-buttons">
                <button
                    className='hover shadow-to-box shadow-to-text'
                    style={{ background: 'linear-gradient(to top, #4d0a25, #a34f63 50%, #e78694 )' }}>
                    <div className='div-border'
                        style={{ background: 'linear-gradient(to top, #97351d, #bb4c32 50%, #df6345)' }}
                    >
                        <div className="text">
                            <span className="font-spoqaMedium tracking-tight text-white">계좌문의</span>
                        </div>
                    </div>
                </button>
                <button
                    className='hover shadow-to-box shadow-to-text'
                    style={{ background: 'linear-gradient(to top, #4d3c0a, #a3814f 50%, #e7b786 )' }} onClick={() => navigate('/cscenter/all/contact/compose')} >
                    <div className='div-border' style={{ background: 'linear-gradient(to top, #80603f, #96704a 50%, #a57b52 )', color: '#ffdfbd' }}>
                        <div className="text">
                            <span className="font-spoqaMedium tracking-tight text-white">문의작성</span>
                        </div>
                    </div>
                </button>
            </div>

            <div style={{ marginBottom: '3.75rem' }} className="flex w-full justify-center mt-4px">
                <Pagination page={page} setPage={setPage} withMarginBottom={false} />
            </div>

            <Search />
            {/* <BottomNavbar /> */}
        </div>
    )
}

export default Contact
