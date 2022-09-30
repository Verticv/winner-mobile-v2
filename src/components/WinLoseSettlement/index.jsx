import React, { useState } from 'react'
import Diamond from '../../assets/mainPage/distributor/diamond.png'
import Pagination from '../Pagination'
import DateSearchBar from '../DateSearchBar'
import HistoryTable from '../HistoryTable'
import SelectAllButton from '../SelectAllButton'
import NavBottom from '../NavBottom'
// import ScrollButton from '../ScrollButton'
import HomePageTopBanner from '../HomePageTopBanner';
import Header from '../Header'

const tableData = [
    [
        {
            0: { 정산시작일: '2021-06-30' },
        },
        {
            0: { 정산종료일: "2021-07-29" }
        },
        {
            0: { 분류: "미니게임" }
        },
        {
            0: { 금액: "75,000" }
        },
        {
            buttonColor: '#826140',
        }
    ],
    [
        {
            0: { 정산시작일: '2021-06-30' },
        },
        {
            0: { 정산종료일: "2021-07-29" }
        },
        {
            0: { 분류: "에볼루션" }
        },
        {
            0: { 금액: "+75,000" }
        },
        {
            buttonColor: '#826140',
        }
    ],
    [
        {
            0: { 정산시작일: '2021-06-30' },
        },
        {
            0: { 정산종료일: "2021-07-29" }
        },
        {
            0: { 분류: "미니게임" }
        },
        {
            0: { 금액: "+75,000" }
        },
        {
            buttonColor: '#826140',
        }
    ],
    [
        {
            0: { 정산시작일: '2021-06-30' },
        },
        {
            0: { 정산종료일: "2021-07-29" }
        },
        {
            0: { 분류: "스포츠" }
        },
        {
            0: { 금액: "-20,000" }
        },
        {
            buttonColor: '#826140',
        }
    ],
    [
        {
            0: { 정산시작일: '2021-06-30' },
        },
        {
            0: { 정산종료일: "2021-07-29" }
        },
        {
            0: { 분류: "미니게임" }
        },
        {
            0: { 금액: "+15,000" }
        },
        {
            buttonColor: '#826140',
        }
    ],
    [
        {
            0: { 정산시작일: '2021-06-30' },
        },
        {
            0: { 정산종료일: "2021-07-29" }
        },
        {
            0: { 분류: "스포츠" }
        },
        {
            0: { 금액: "-15,000" }
        },
        {
            buttonColor: '#826140',
        }
    ],
    [
        {
            0: { 정산시작일: '2021-06-30' },
        },
        {
            0: { 정산종료일: "2021-07-29" }
        },
        {
            0: { 분류: "미니게임" }
        },
        {
            0: { 금액: "-15,000" }
        },
        {
            buttonColor: '#826140',
        }
    ],
    [
        {
            0: { 정산시작일: '2021-06-30' },
        },
        {
            0: { 정산종료일: "2021-07-29" }
        },
        {
            0: { 분류: "미니게임" }
        },
        {
            0: { 금액: "-50,000" }
        },
        {
            buttonColor: '#826140',
        }
    ],
]


const WinLoseSettlementContent = () => {

    const [page, setPage] = useState(0)
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [checkedState, setCheckedState] = useState(new Array(8).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)

    return (
        <div className="WinLoseSettlement">
            <Header />
            <HomePageTopBanner pageTitle='윈루즈정산' />
            <DateSearchBar isLeagueSearch={false} withBlackButton />
            {/* <ScrollButton /> */}
            {/* <div style={{ width: '73.875rem', height: '7.3125rem', marginTop: '1.875rem', fontSize: '2.625rem', borderRadius: '3.5rem', borderWidth: '0.1875rem' }} className="flex w-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium tracking-tight">
                <div className='w-1/2 flex items-center justify-center'>
                    <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '1.3125rem' }} src={Diamond} alt="" />
                    <div className="flex items-center space-x-4px pt-2px">
                        <span className="text-white">진행중인 금액:</span>
                        <span className="text-yellow-ffcc00 font-spoqaBold">2,520,000</span>
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <img style={{ width: '1.3125rem', height: '1.3125rem', marginRight: '1.3125rem' }} src={Diamond} alt="" />
                    <div className="flex items-center space-x-4px pt-2px">
                        <span className="text-white">정산 총 금액:</span>
                        <span className="text-yellow-ffcc00 font-spoqaBold">500,000</span>
                    </div>
                </div>
            </div> */}
            <div style={{ width: '73.875rem', height: '6.7rem', borderWidth: '0.1875rem', borderRadius: '3.1875rem', padding: '1.6rem 2.75rem', margin: '1.875rem 0', marginLeft: '1.875rem', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', background: '#2e2e2e', border: '0.1875rem solid #635f5b', fontFamily: 'SpoqaHanSansNeoMedium' }} className="flex flex-wrap w-full border-2 border-gray-b4b4b4 bg-gray-r5a6067">
                <div className='w-1/2 flex flex-wrap items-center justify-center' style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginLeft: '0.2rem', width: '50%' }}>
                    <div style={{ fontSize: '2.624375rem', marginBottom: '1.55rem' }} className="w-full font-spoqaMedium tracking-tight">
                        <div className='flex items-center' style={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ width: '1.2rem', height: '1.2rem', marginRight: '1.2rem' }} src={Diamond} alt="" />
                            <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: '0.625rem', color: '#ffffff', letterSpacing: '-0.07rem' }} className="text-white">진행중인 금액:</span>
                                <span className="text-yellow-ffcc00" style={{ color: '#ffd200' }}>2,520,000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 flex flex-wrap items-center justify-center' style={{ width: '50%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: '2.624375rem', marginBottom: '1.55rem' }} className="w-full font-spoqaMedium tracking-tight">
                        <div className='flex items-center' style={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ width: '1.2rem', height: '1.2rem', marginRight: '1.3125rem' }} src={Diamond} alt="" />
                            <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: '0.625rem', color: '#ffffff', letterSpacing: '-0.07rem' }} className="text-white">정산 총 금액:</span>
                                <span className="text-yellow-ffcc00" style={{ color: '#ffd200' }}>500,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-full">
                <HistoryTable
                    containerBackground='#f7f9fc'
                    tableData={tableData}
                    checkedState={checkedState}
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                    cardHeight='20.9375rem'
                    isButtonGradient={false}
                />
            </div>

            <div style={{ height: '7.5rem', width: '73.875rem', fontSize: '2.625rem', borderWidth: '0.1875rem', margin: '0px 1.875rem 1.875rem', fontFamily: 'SpoqaHanSansNeoMedium', letterSpacing: '-0.07rem', display: 'flex', alignItems: 'center', borderRadius: '0.5rem', padding: '0.1875rem', background: '#2e2e2e' }} className="shadow-to-box font-spoqaMedium text-14px tracking-tight border border-gray-ececec flex items-center shadow-subNavbar rounded-2xl">
                <div style={{ borderRightWidth: '0.1875rem', width: '50%', background: '#826140', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: '0.5rem', borderBottomLeftRadius: '0.5rem', color: '#ffdfbd' }} className='flex items-center justify-center h-full w-1/2 text-white bg-gray-a3b2c2 border-r border-gray-ececec rounded-l-2xl'>합계</div>
                <div style={{width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#e65454' }} className='flex items-center justify-center h-full w-1/2 text-red-d52e2e rounded-2xl'>+244,119</div>
            </div>

            <div className='w-full'>
                <SelectAllButton count={8} isAllSelected={isAllSelected} setCheckedState={setCheckedState} setAllSelected={setAllSelected} />
            </div>

            <div style={{ marginTop: '1.4375rem', paddingBottom: '0.01rem' }} className="">
                <Pagination page={page} setPage={setPage} />
            </div>
            <NavBottom />
        </div>
    )
}

export default WinLoseSettlementContent