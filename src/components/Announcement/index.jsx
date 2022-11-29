import Pagination from '../Pagination'
import React, { useEffect, useState } from 'react'
import AnnouncementTable from '../AnnouncementTable'
import Search from '../Search'
import NavBottom from '../NavBottom'
import './_announcementTable.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import HorizontalSubMenu from '../HorizontalSubMenu'

const Announcement = ({
    setSubActiveButton
}) => {


    const tabsArray = [
        { text: "전체", id: 0, width: '11.5625rem', path: "/cscenter/all/announcement" },
        { text: "카지노", id: 1, width: '13.4375rem', path: "/cscenter/all/announcement/live-casino" },
        { text: "슬롯", id: 2, width: '11.5625rem', path: "/cscenter/all/announcement/slot" },
        { text: "스포츠", id: 3, width: '13.4375rem', path: "/cscenter/all/announcement/sports" },
        { text: "호텔카지노", id: 4, width: '18.3125rem', path: "/cscenter/all/announcement/e-sportsa" },
        { text: "e-스포츠", id: 5, width: '15.3125rem', path: "/cscenter/all/announcement/e-sports", leftScrollValue2: 842 },
        { text: "미니게임", id: 6, width: '15.3125rem', path: "/cscenter/all/announcement/minigame" },
        { text: "키론가상게임", width: '20.3125rem', id: 7, path: "/cscenter/all/announcement/ar-game" },
        { text: "피싱게임 ", width: '16.3125rem', id: 8, path: "/cscenter/all/announcement/other2" },
        { text: "티비벳 ", width: '16.3125rem', id: 9, path: "/cscenter/all/announcement/other3" },
        { text: "충전/환전", width: '16.3125rem', id: 10, path: "/cscenter/all/announcement/transaction" },
        { text: "베팅관련", width: '15.3125rem', id: 11, path: "/cscenter/all/announcement/about-betting" },
        { text: "기타", width: '10.3125rem', id: 12, path: "/cscenter/all/announcement/other" },
    ];

    const inboxArray = [
        {
            id: 0,
            type: "스포츠",
            title: "농구[쿼터] / 배구[세트] 스페셜 규정",
            isNew: true,
            time: "2021.06.28"
        },
        {
            id: 1,
            type: "스포츠",
            title: "야구스포츠 스페셜 규정",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 2,
            type: "스포츠",
            title: "예비 도메인 안내",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 3,
            type: "기타",
            title: "은행별 점검시간안내",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 4,
            type: "기타",
            title: "스포츠 종목별 규정",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 5,
            type: "미니게임",
            title: "미니게임 통합 규정",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 6,
            type: "미니게임",
            title: "스포츠게임 관련 규정",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 7,
            type: "카지노",
            title: "에볼루션카지노 이용안내",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 8,
            type: "스포츠",
            title: "라이브 베팅 기본 규정",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 9,
            type: "스포츠",
            title: "에볼루션카지노 이용안내",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 10,
            type: "스포츠",
            title: "농구스포츠 스페셜 규정",
            isNew: false,
            time: "2021.06.28"
        },
        {
            id: 11,
            type: "스포츠",
            title: "핸디캡의 이해",
            isNew: false,
            time: "2021.06.28"
        },

    ]
    const location = useLocation();

    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(inboxArray.length).fill(false)
    );
    const [, setSelectedTab] = useState(0);
    const [, setSelectedSubTab] = useState(location.pathname)
    const navigate = useNavigate()

    useEffect(() => {
        window.onpopstate = e => {
            setTimeout(() => {
                navigate('/cscenter')
                setSubActiveButton('/cscenter/all/announcement')
            }, 0)
        }
        return (() => {
            setSubActiveButton('/cscenter/all/announcement')
        })
    }, [setSubActiveButton, navigate]);

    return (
        <div>
            <div className="" />

            <div className="w-full flex relative top-0" style={{ position: 'relative' }}>
                <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem' }} className="absolute h-full right-0 z-50"></div>

                <div id='scroll-wrapper12' style={{ paddingLeft: '1.875rem', overflowX: 'scroll', display: 'flex', marginTop: '1.08rem' }} className="overflow-x-scroll overflow-y-hidden hide-scrollbar">
                    <div className=" flex flex-shrink-0 w-full" style={{ overflowX: 'scroll', display: 'flex', flexShrink: '0' }}>
                        <HorizontalSubMenu key={201} itemsArray={tabsArray} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                    </div>
                </div>
                <div style={{ height: '88%' }} className="nav-shadow absolute h-full left-0 z-50"></div>
            </div>

            <div style={{ borderRadius: "1em", margin: '1.875rem', marginTop: '0' }} className="shadow-subNavbar overflow-hidden">
                <div className="flex flex-col w-full announcementTable-container">
                    <AnnouncementTable checkedState={checkedState} setCheckedState={setCheckedState} array={inboxArray} />
                </div>
            </div>

            <div style={{ margin: '3.75rem 0' }} className="flex w-full justify-center">
                <Pagination withMarginBottom={false} page={page} setPage={setPage} />
            </div>

            <Search />
            <NavBottom />
        </div>
    )
}

export default Announcement
