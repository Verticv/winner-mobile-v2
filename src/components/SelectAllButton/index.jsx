import React from 'react'

const SelectAllButton = (
    {
        isAllSelected,
        setCheckedState,
        setAllSelected,
        count = 30,
        buttonsNumber = 2,
        btn1Text = '선택삭제',
        btn2Text = '내역올리기',
    }) => {

    function allSelectButtonPressed() {
        if (isAllSelected) {
            setCheckedState(Array(count).fill(false))
        } else {
            setCheckedState(Array(count).fill(true))
        }
        setAllSelected(!isAllSelected)
    }

    if (buttonsNumber === 3) {
        return (
            <div style={{ margin: '4.05rem 0', marginTop: '4.05rem', marginBottom: '2.5rem' }} className="flex items-center justify-between flex-shrink-0">
                <div className="flex w-full" style={{ display: 'flex' }}>
                    <button
                        style={{
                            height: '7.3125rem',
                            padding: ' 0.1875rem',
                            fontSize: '2.8125rem',
                            marginRight: ' 0.75rem',
                            width: '24.125rem',
                            background: 'linear-gradient(to top, rgb(77, 60, 10), rgb(156, 123, 74) 50%, rgb(231, 183, 134))',
                            borderRadius: '1rem'
                        }}
                        className="common-button flex flex-1 items-center justify-center mr-4 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                        onClick={() => allSelectButtonPressed()}
                    >
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to top, rgb(128, 96, 63), rgb(147, 110, 72) 50%, rgb(165, 123, 82))',
                                borderRadius: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: 'SpoqaHanSansNeoMedium',
                            }}
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-gray-r737579 cursor-pointer"
                        >
                            <span style={{ fontSize: '2.8125rem', color: 'rgb(255, 223, 189)', marginTop: '0.4rem', letterSpacing: '-0.07rem', textShadow: ' #00000080 0.3125rem 0.125rem 0.4375rem' }} className="font-spoqaMedium tracking-tight text-14px text-white mb-2">{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button
                        style={{
                            height: '7.3125rem',
                            padding: ' 0.1875rem',
                            fontSize: '2.8125rem',
                            marginRight: ' 0.75rem',
                            width: '24.125rem',
                            background: 'linear-gradient(to top, #4b0923, #e88895)',
                            borderRadius: '1rem'
                        }}
                        className="common-button flex flex-1 items-center justify-center mr-4 rounded-2xl bg-brown-r7e3636 hover:opacity-75"
                    >
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to top, #e06446, #96341d)',
                                borderRadius: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: 'SpoqaHanSansNeoMedium',
                            }}
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 cursor-pointer"
                        >
                            <span style={{ fontSize: '2.8125rem', color: 'rgb(255, 223, 189)', marginTop: '0.4rem', letterSpacing: '-0.07rem', textShadow: ' #00000080 0.3125rem 0.125rem 0.4375rem' }} className="font-spoqaMedium tracking-tight text-14px text-white pb-2">{btn1Text}</span>
                        </div>
                    </button>
                    <button
                        style={{
                            height: '7.3125rem',
                            padding: ' 0.1875rem',
                            fontSize: '2.8125rem',
                            // marginRight: ' 0.75rem',
                            width: '24.125rem',
                            background: 'linear-gradient(to top, #3d4a8d, #88d9e8)',
                            borderRadius: '1rem'
                        }}
                        className="common-button flex flex-1 items-center justify-center rounded-2xl bg-blue-r0070d9 hover:opacity-75"
                    // onClick={() => allSelectButtonPressed()}
                    >
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to top, #528ccd, #396084)',
                                borderRadius: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: 'SpoqaHanSansNeoMedium',
                            }}
                            className="flex items-center justify-center h-full w-full rounded-2xl border border-blue-r3ba3fc bg-gradient-to-b from-blue-r1491fc via-blue-r0e84ed to-blue-r0675db"
                        >
                            <span style={{ fontSize: '2.8125rem', color: 'rgb(255, 223, 189)', marginTop: '0.2rem', letterSpacing: '-0.07rem', textShadow: ' #00000080 0.3125rem 0.125rem 0.4375rem' }} className="font-spoqaMedium tracking-tight text-14px text-white pb-2">{btn2Text}</span>
                        </div>
                    </button>
                </div >
            </div >
        )
    }

    return (
        <div style={{ margin: '3.75rem 1.875rem', marginTop: '1.875rem', marginBottom: '2.5rem' }} className="flex items-center justify-between flex-shrink-0">
            <div className="flex w-full space-x-2px">
                <button
                    style={{ height: '7.3125rem' }}
                    className="common-button flex flex-1 items-center justify-center mr-4 rounded-2xl bg-gray-r171a1d hover:opacity-75"
                    onClick={() => allSelectButtonPressed()}
                >
                    <div
                        style={{
                            background: "linear-gradient(to bottom, #555555, #333333)",
                        }}
                        className="flex items-center justify-center h-full w-full rounded-2xl border border-gray-r737579 cursor-pointer"
                    >
                        <span style={{ fontSize: '2.8125rem' }} className="font-spoqaMedium tracking-tight text-14px text-white  mb-2">{isAllSelected ? "선택해제" : "전체선택"}</span>
                    </div>
                </button>
                <button
                    style={{ height: '7.3125rem' }}
                    className="common-button flex flex-1 items-center justify-center m-0 rounded-2xl bg-brown-r7e3636 hover:opacity-75"
                >
                    <div
                        style={{
                            background: "linear-gradient(to bottom, #f03a50, #cf254d)",
                        }}
                        className="flex items-center justify-center h-full w-full rounded-2xl border border-red-f36576 cursor-pointer"
                    >
                        <span style={{ fontSize: '2.8125rem' }} className="font-spoqaMedium tracking-tight text-14px text-white mb-2">{btn1Text}</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SelectAllButton
