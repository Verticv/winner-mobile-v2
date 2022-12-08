import React from 'react'
import PopupControls from '../popups/PopupControls';
import LiveCasinoHistoryDetailPopup from '../LiveCasinoHistoryDetailPopup';

const HistoryTable = ({
    isPopup,
    tableData,
    checkedState,
    isCouponUsage = false,
    setCheckedState,
    isPopupOpen,
    wrapButtonText = false,
    setPopupOpen,
    cardHeight = '33.75rem',
    isButtonGradient = true,
    hasLeftInput = true,
    wideDetailButton = false,
    hasButton = true,
    containerBackground,
    isPointPage,
    isCoupon,
    color,
    width45,
    inlineText,
    isGift,
}) => {
    function Cells({ cards }) {
        const detailButton = (
            <button className="상세보기" onClick={() => setPopupOpen(true)}>
                <div style={{ padding: `${wrapButtonText ? '2.2rem 2rem 2rem 2.1rem' : ''}` }} className="상세보기-div">
                    <span className="상세보기-span"> 상세 <br /> 보기</span>
                </div>
            </button>
        )

        const wideDetailButtonComponent = (
            <button style={{ width: '20.25rem', height: '14.0625rem', background: '#c65337', position: 'absolute', top: '7.56rem', right: '1.9rem', borderRadius: '1.1rem', boxShadow: 'rgb(0 0 0 / 60%) 0px 0.375rem 0px 0px' }} className="hover change-top">
                <div style={{ padding: `${wrapButtonText ? '2.2rem 2rem 2rem 2.1rem' : ''}` }} className="flex w-full h-full items-center justify-center flex-wrap rounded-2xl cursor-pointer">
                    <span style={{ fontSize: '2.7rem', lineHeight: '1.25', width: '10.875rem', marginTop: '0.2375rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ffd2d2', textShadow: '#00000080 0.3125rem 0.125rem 0.4375rem' }} className="w-full -mt-2 font-font-spoqaMedium tracking-tight text-white"> 진행중 </span>
                </div>
            </button>
        )

        const handleOnChange = (position) => {
            const updatedCheckedState = checkedState.map((item, index) =>
                index === position ? !item : item
            );
            setCheckedState(updatedCheckedState);
        };

        const truncate = (str, max, len) => {
            return str.length > max ? str.substring(0, len) + "..." : str;
        }

        return cards.map((card, index) => (
            <div style={{
                minHeight: cardHeight, width: `${!hasButton ? '73.875rem' : ''}`,
                padding: '0.1875rem',
                marginTop: `${index ? '0' : '1.875rem'}`,
                margin: '1.86rem',
                background: 'linear-gradient(to top, #1f1f1e, #3b3b3b 50%, #4a4a4a)',
                boxShadow: '0 0 0.5rem 0 rgba(0, 0, 0, 0.6)',
                borderRadius: '1rem',
                position: 'relative'
            }} className="p-12 bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd flex items-center justify-between shadow-subNavbar rounded-2xl">
                <div style={{ borderRadius: '1rem', width: '100%', height: '100%', background: `${containerBackground && index % 2 ? '#2e2e2e' : '#323232'}`, paddingRight: '1.875rem', padding: '2.125rem 2.7rem', paddingTop: hasLeftInput ? (hasButton ? '2.4rem' : '3.3rem') : '2.4rem', display: 'flex', alignItems: 'center' }} className="flex flex-wrap items-center w-full h-full">
                    {hasLeftInput && (
                        <div style={{ width: '5.8125rem', position: 'relative', marginRight: '1.35rem', marginTop: '-0.2rem' }} className="relative text-left">
                            <label className="form-control">
                                <input
                                    className='w-12 h-12'
                                    type="checkbox"
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                />
                            </label>
                        </div>
                    )}
                    {/* 52 */}
                    <div style={{ width: wideDetailButton ? '85%' : '66rem', lineHeight: '1.45' }}>
                        {card.map((row, index) => {
                            let firstColumnColor = '#c8c8c8';
                            let secondColumnColor = '#c8c8c8';
                            if (row[0]) {
                                const firstRowKeysName = Object.keys(row[0])
                                const secondRowKeysName = Object.keys(row?.[1] || {})
                                if (firstRowKeysName[0] === '적중/손실금액') {
                                    firstColumnColor = row[0][firstRowKeysName[0]].includes("+") ? "#e65454" : "#c8c8c8"
                                }
                                if (firstRowKeysName[0] === '상태') {
                                    firstColumnColor = row[0][firstRowKeysName[0]] === '승' ? "#e65454" : "#c8c8c8"
                                }
                                if (firstRowKeysName[0] === '보너스금액') {
                                    firstColumnColor = row[0][firstRowKeysName[0]].includes("+") ? "#e65454" : "#c8c8c8"
                                }
                                if (firstRowKeysName[0] === '금액') {
                                    firstColumnColor = row[0][firstRowKeysName[0]].includes("+") ? "#e65454" : row[0][firstRowKeysName[0]].includes("-") ? '#4c98ff' : "#c8c8c8"
                                }
                                if (secondRowKeysName[0] === '적립포인트') {
                                    secondColumnColor = '#4c98ff'
                                }
                                if (firstRowKeysName[0] === '쿠폰금액') {
                                    firstColumnColor = '#e9441d'
                                }
                                if (firstRowKeysName[0] === '처리상태') {
                                    firstColumnColor = row[0][firstRowKeysName[0]] === '사용가능' ? "#e65454" : "#7b7b7b"
                                }
                                return (
                                    <div key={index} style={{ WebkitTextStroke: "0.2px", fontSize: '2.625rem', marginBottom: '0.375rem', color: firstColumnColor, letterSpacing: '-0.07rem', marginLeft: '0.14rem', display: '', width: '100%' }} className="w-full font-spoqa text-left text-gray-r7b7b7b">
                                        <span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.624375rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium' }}>{firstRowKeysName[0]} : </span>
                                        <span className='font-spoqa' style={{
                                            fontFamily: 'SpoqaHanSansNeo', color: '', display: 'inline-flex',
                                            wordBreak: 'break-all',
                                            maxWidth: firstRowKeysName[0] === '아이디' ? '' : isPointPage ? '57rem' : firstRowKeysName[0] === '쿠폰명' ? isGift ? '42rem' : hasButton ? '48rem' : '47rem' : width45 ? '45rem' : hasButton ? isGift ? '32rem' : isCoupon ? '38rem' : '39.7rem' : '39.7rem',
                                            overflow: firstRowKeysName[0] === '아이디' ? 'hidden' : '',
                                            textOverflow: firstRowKeysName[0] === '아이디' ? 'ellipsis' : '',
                                            whiteSpace: firstRowKeysName[0] === '아이디' ? 'nowrap' : '',
                                        }}>
                                            {firstRowKeysName[0] === '아이디' ? truncate(row[0][firstRowKeysName[0]], 16, 16) : row[0][firstRowKeysName[0]]}
                                        </span>
                                        {secondRowKeysName?.length > 0 && <><span className='font-spoqaMedium text-gray-r585858' style={{ fontSize: '2.624375rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', marginLeft: '3.725rem' }}>{secondRowKeysName[0]} : </span><span style={{ fontFamily: 'SpoqaHanSansNeo', color: secondColumnColor }}> {row[1][secondRowKeysName[0]]}</span></>}
                                    </div>
                                )
                            }
                            return <></>

                        })}
                    </div>
                    {isCouponUsage ? (
                        <div style={{ height: '14rem', width: '24rem', padding: '0.1875rem', background: 'linear-gradient(to top, #4b3b09, #e8b888)', borderRadius: '1.1rem' }}>
                            <button
                                style={{ padding: '0.5625rem', width: '100%', height: '100%', background: 'linear-gradient(to top, #7f5f3f, #a67c52)', borderRadius: '1rem' }}
                                className="hover shadow-to-box3"
                            >
                                <div style={{ color: "#ffdfbd", fontSize: '2.7rem', fontFamily: 'SpoqaHanSansNeoMedium' }} className="shadow-to-text">
                                    <p>사용하기</p>
                                </div>
                            </button>
                        </div>
                    ) : isButtonGradient ?
                        hasButton && (
                            <div className="text-center">
                                {isPopup ? (
                                    <button
                                        style={{ width: '9rem', height: '9rem', padding: '1px', }}
                                        className="flex items-center bg-blue-r286fce justify-center rounded-2xl hover:opacity-75"
                                    >
                                        <div className="flex w-full h-full items-center justify-center flex-wrap rounded-2xl border border-blue-r70a8f5 bg-gradient-to-b from-blue-r1491fc to-blue-r0675db cursor-pointer">
                                        </div>
                                    </button>
                                ) : (
                                    <>
                                        {!isCouponUsage ? (
                                            <PopupControls isNotFullScreen buttonChild={wideDetailButton ? wideDetailButtonComponent : detailButton}
                                                isPopupOpen={isPopupOpen}
                                                setPopupOpen={setPopupOpen}
                                                hasMargin='true'>
                                                {isPopupOpen ? <LiveCasinoHistoryDetailPopup setPopupOpen={setPopupOpen} /> : ''}

                                            </PopupControls>
                                        ) : (
                                            <>{wideDetailButtonComponent}</>
                                        )}
                                    </>
                                )}
                            </div>
                        ) : hasButton &&
                        <button style={{ width: '10.875rem', height: '10.875rem', backgroundColor: card[card.length - 1].buttonColor || 'red', position: 'absolute', top: '', right: '1.9rem', borderRadius: '1.1rem', boxShadow: 'rgb(0 0 0 / 60%) 0px 0.375rem 0px 0px' }} className="hover change-top">
                            <div style={{
                                padding: `${wrapButtonText ? inlineText ? '2.2rem 1rem 2rem 1rem' : '2.2rem 2rem 2rem 2.2rem' : card[card.length - 1].winLoseComplete ? '2.2rem 2rem 2rem 2.2rem' : ''}`
                            }}>
                                <span
                                    style={{
                                        fontSize: '2.7rem',
                                        lineHeight: '1.25',
                                        width: '10.875rem',
                                        marginTop: '0.2375rem',
                                        fontFamily: 'SpoqaHanSansNeoMedium',
                                        color: card[card.length - 1].textColor ? card[card.length - 1].textColor : '#ffdfbd',
                                    }}
                                >{card[card.length - 1].buttonText || '진행중'}
                                </span>
                            </div>
                        </button>}

                </div>
            </div >
        ))
    }
    return (
        <div style={{ borderRadius: "1em" }}>
            <Cells cards={tableData} />
        </div>
    )
}

export default HistoryTable
