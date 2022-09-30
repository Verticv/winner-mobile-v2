import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from '../HistoryTable'
// import ScrollButton from '../ScrollButton'
import SelectAllButton from '../SelectAllButton'
import Icon1 from '../../assets/myPage/second-btns/1.png'
import Icon3 from '../../assets/minigameResults/1.png'
import Icon4 from '../../assets/minigameResults/2.png'
import Icon5 from '../../assets/minigameResults/3.png'
import Icon6 from '../../assets/minigameResults/4.png'
// import SubHorizontalMenu5 from './SubHorizontalMenu5'
import HorizontalMenu from '../HorizontalMenu'
import PowerLadderBetHistoryPanel from '../PowerLadderBetHistoryPanel'
import KinoLadderBetHistoryPanel from '../KinoLadderBetHistoryPanel'
import { Route, Routes } from 'react-router-dom'
import Pagination from '../Pagination'

const subTabsArray = [
    { text: "전체", path: "/mypage/bet-history/all/minigame", icon: Icon1, id: 0, width: '19.375rem', marginIcon: '', },
    { text: "파워볼", path: "/mypage/bet-history/all/minigame/powerball", icon: Icon3, id: 1, width: '8.5625rem' },
    { text: "파워사다리", path: "/mypage/bet-history/all/minigame/powerladder", icon: Icon4, id: 2, width: '8.5625rem' },
    { text: "스피드키노", path: "/mypage/bet-history/all/minigame/speedkino", icon: Icon5, id: 3, custom: "mt-8px", width: '8.5625rem' },
    { text: "키노사다리", path: "/mypage/bet-history/all/minigame/kinoladder", icon: Icon6, id: 4, width: '8.5625rem' },
];

// 베팅번호 => number
// 베팅시간 => time
// 게임종류  => type
// 게임구분 => name
// 베팅금액  => amount
// 적중/손실금액 => profit
// 상태 => status

const tableData = [
    [
        {
            0: { 베팅번호: 7193915 },
        },
        {
            0: { 베팅시간: "2021-06-29 15:46:13" }
        },
        {
            0: { 게임종류: "파워볼" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { 배당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        },
        {
            buttonColor: '#0056a6'
        }
    ],
    [
        {
            0: { 베팅번호: 7193914 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "홀/짝" }
        },
        {
            0: { 베팅내역: "짝" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "+900,000,000" }
        },
        {
            0: { 상태: "승" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "홀/짝" }
        },
        {
            0: { 베팅내역: "홀" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임종류: "파워사다리" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
]

const tableData1 = [
    [
        {
            0: { 베팅번호: 7193915 },
        },
        {
            0: { 베팅시간: "2021-06-29 15:46:13" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "12,000" }
        },
        {
            0: { 배당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-12,000" }
        },
        {
            0: { 상태: "패" }
        },
        {
            buttonColor: '#0056a6'
        }
    ],
    [
        {
            0: { 베팅번호: 7193914 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "+900,000,000" }
        },
        {
            0: { 상태: "승" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
    [
        {
            0: { 베팅번호: 7193913 }
        },
        {
            0: { 베팅시간: "2021-06-29 15:45:41" }
        },
        {
            0: { 게임구분: "파워볼 언오버" }
        },
        {
            0: { 베팅내역: "언더" }
        },
        {
            0: { 베팅금액: "900,000,000" }
        },
        {
            0: { 베당률: "1.95" }
        },
        {
            0: { '적중/손실금액': "-800,000" }
        },
        {
            0: { 상태: "패" }
        }
    ],
]

const MinigameBetHistory = ({ isState = 0, setState, showSub = true, isPopup = false }) => {

    const [checkedState, setCheckedState] = useState(new Array(10).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [page, setPage] = useState(0)
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)

    return (
        <div className="LiveCasinoBetHistory">
            {showSub === true && (
                <>
                    <div className="w-full flex relative top-0">
                        <div style={{ background: "linear-gradient(to right, #ffffff00, #ffffff", width: '3.125rem' }} className="absolute h-full right-0 z-50"></div>
                        <div id='scroll-wrapper1' style={{ padding: '1.875rem', paddingRight: '0', paddingTop: '0' }} className="sticky overflow-x-scroll overflow-y-hidden hide-scrollbar">
                            <div className=" flex flex-shrink-0 w-full">
                                <HorizontalMenu itemsArray={subTabsArray} setSelectedTab={setSelectedTab} selectedTab={selectedTab} selectedSubTab={selectedSubTab} setSelectedSubTab={setSelectedSubTab} />
                            </div>
                        </div>
                        <div style={{ background: "linear-gradient(to left, #ffffff00, #ffffff", width: '3.125rem' }} className="absolute h-full left-0 z-50"></div>
                    </div>
                    <DateSearchBar isLeagueSearch={false} isPoints />
                </>

            )}

            <Routes>
                <Route index element={
                    <>
                        <HistoryTable
                            containerBackground='#f7f9fc'
                            tableData={tableData}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            isPopupOpen={isPopupOpen}
                            setPopupOpen={setPopupOpen}
                            cardHeight='42.15rem'
                            isPopup={isPopup}
                        />
                    </>
                } />
                <Route path='/powerball'
                    element={
                        <>
                            <HistoryTable
                                containerBackground='#f7f9fc'
                                tableData={tableData1}
                                checkedState={checkedState}
                                setCheckedState={setCheckedState}
                                isPopupOpen={isPopupOpen}
                                setPopupOpen={setPopupOpen}
                                cardHeight='37.75rem'
                                isPopup={isPopup}
                            />
                        </>
                    }
                />
                <Route path="/powerladder"
                    element={

                        <PowerLadderBetHistoryPanel isPopup={isPopup} type={0} checkedState={checkedState} setCheckedState={setCheckedState} setPopupOpen={setPopupOpen} />
                    }
                >
                </Route>

                <Route path="/speedkino"
                    element={

                        <KinoLadderBetHistoryPanel isPopup={isPopup} type={0} checkedState={checkedState} setCheckedState={setCheckedState} setPopupOpen={setPopupOpen} isMinigame={true} gameType="speedkino" />
                    }
                >
                </Route>
                <Route path="/kinoladder"
                    element={
                        <KinoLadderBetHistoryPanel isPopup={isPopup} type={0} checkedState={checkedState} setCheckedState={setCheckedState} setPopupOpen={setPopupOpen} isMinigame={true} gameType="kinoladder" />
                    }
                >
                </Route>

            </Routes>
            <SelectAllButton buttonsNumber={3} count={20} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
            <Pagination page={page} setPage={setPage} />

            {/* <Routes>
                <Route index
                    element={
                       
                    }
                />
            </Routes> */}


            {/* <DateSearchBar isLeagueSearch={false} isPoints/> */}

            {/* <ScrollButton /> */}

            <div className="h-full">
                {/* <Routes>
                    <Route path='/powerball'
                        element={
                            <>jjjjjjjjj</>
                        }
                    />
                </Routes> */}
                {/* <Routes>
                    <Route index element={<>
                        <HistoryTable
                            containerBackground='#f7f9fc'
                            tableData={tableData}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            isPopupOpen={isPopupOpen}
                            setPopupOpen={setPopupOpen}
                            cardHeight='42.15rem'
                            isPopup={isPopup}
                        />
                    </>} />
                </Routes> */}
                {/* <Route exact path="/mypage/bet-history/all/minigame">
                    <HistoryTable
                        containerBackground='#f7f9fc'
                        tableData={tableData}
                        checkedState={checkedState}
                        setCheckedState={setCheckedState}
                        isPopupOpen={isPopupOpen}
                        setPopupOpen={setPopupOpen}
                        cardHeight='42.15rem'
                        isPopup={isPopup}
                    />
                </Route> */}
                {/* <Route path="/mypage/bet-history/all/minigame/powerball">
                    <HistoryTable
                        containerBackground='#f7f9fc'
                        tableData={tableData1}
                        checkedState={checkedState}
                        setCheckedState={setCheckedState}
                        isPopupOpen={isPopupOpen}
                        setPopupOpen={setPopupOpen}
                        cardHeight='37.75rem'
                        isPopup={isPopup}
                    />
                </Route>
                <Route path="/mypage/bet-history/all/minigame/powerladder">
                    <PowerLadderBetHistoryPanel isPopup={isPopup} type={0} checkedState={checkedState} setCheckedState={setCheckedState} setPopupOpen={setPopupOpen} />
                </Route>
                <Route path="/mypage/bet-history/all/minigame/speedkino">
                    <KinoLadderBetHistoryPanel isPopup={isPopup} type={0} checkedState={checkedState} setCheckedState={setCheckedState} setPopupOpen={setPopupOpen} isMinigame={true} gameType="speedkino" />
                </Route>
                <Route path="/mypage/bet-history/all/minigame/kinoladder">
                    <KinoLadderBetHistoryPanel isPopup={isPopup} type={0} checkedState={checkedState} setCheckedState={setCheckedState} setPopupOpen={setPopupOpen} isMinigame={true} gameType="kinoladder" />
                </Route> */}
            </div>

            {/* <SelectAllButton buttonsNumber={3} count={20} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} /> */}
        </div>
    )
}

export default MinigameBetHistory