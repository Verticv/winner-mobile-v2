import React from 'react'
import Image1 from '../../assets/sports/1.png'
import Image2 from '../../assets/sports/2.png'
import icon from '../../assets/sports/Icon.png'
import Dot from '../../assets/sports/dot.png'

const EsportsStructure = () => {

    const TitleText = ({ number = "01" }) => (
        <div className="flex items-center" style={{ display: 'flex', alignItems: 'center', fontFamily: 'SpoqaHanSansNeoMedium', fontSize: '2.811875rem', paddingTop: '2rem', paddingBottom: '1.8rem' }}>
            <img src={icon} alt="" style={{ marginLeft: '1.6rem', marginRight: '0.2rem' }} />
            <div style={{ background: "linear-gradient(120deg, #2087f0, #1873cf", borderRadius: "3px" }} className="w-8px h-20px"></div>
            <span className="text-22px font-spoqaBold tracking-tight text-gray-r585858 ml-3px h-22px flex items-center" style={{ letterSpacing: '-0.07rem', marginTop: '0.1rem', marginRight: '1rem', color: '#ccc2b6' }}>화면구성</span>
            <div style={{ backgroundColor: "#494745", borderRadius: "100%", fontFamily: 'RobotoBold', padding: '0.4rem 0.5rem', color: '#ccc2b6' }} className="w-36px h-36px ml-3px flex items-center justify-center text-white text-22px font-roboto">
                {number}
            </div>

        </div>
    )

    const Item = ({ number = "1.", title = "게임종류선택", text = "다양한 게임을 선택할 수 있습니다.", marginTop, text2 = null, text3 = null, color1 = null, color2 = null, color3 = null, isflex, withoutP }) => (
        <div className="flex flex-col space-y-4px" style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', marginTop: marginTop }}>
            <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px flex h-18px items-center" style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.25rem' }}>
                <span className="text-blue-r0056a6" style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
                <span className="text-gray-r585858" style={{ color: '#ccc2b6' }}>{title}</span>
            </div>
            <span style={{ color: "#828282", fontSize: '2.0625rem', display: isflex ? 'flex' : '' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text} <span className="ml-2px text-blue-r0056a6" style={{ color: '#2980b9', marginLeft: '0.5rem', marginRight: '0.2rem' }}>{color1}</span><span style={{ color: "#e65454", marginRight: '0.5rem' }} className="mr-2px">{color2}</span><p style={{ margin: isflex || withoutP ? '0' : '' }}>{color3}</p></span>
            {text2 && (
                <span style={{ color: "#8c8c8c", display: 'flex', fontSize: '2.0625rem', marginTop: isflex ? '-0.2rem' : '' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text2}</span>
            )}
            {text3 && (
                <span style={{ color: "#8c8c8c", display: 'flex' }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text3}</span>
            )}
        </div>
    )

    const LongItem = ({ number = "4.", title = "메뉴", marginTop, text = "결과 : 경기결과 확인 가능", text2 = "팔레이 : 팔레이(다폴더) 리스트 확인 가능", text3 = "내베팅 : 상세한 베팅내역 확인 가능  ", text4 = "베팅규정 : 베팅규정 확인 가능" }) => (
        <div className="flex flex-col space-y-4px" style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', marginTop: marginTop, fontSize: '2.0625rem' }}>
            <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px flex h-18px items-center" style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.25rem' }}>
                <span className="text-blue-r0056a6" style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
                <span className="text-gray-r585858" style={{ color: '#ccc2b6' }}>{title}</span>
            </div>
            <div className="flex" style={{ marginTop: '-0.2rem', display: 'flex', alignItems: 'center' }}>
                <img src={Dot} className="object-none mr-4px" alt="" style={{ marginRight: '0.6rem', marginTop: '-0.2', width: '0.75rem' }} />
                <span style={{ color: "#8c8c8c", }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text}</span>
            </div>
            <div className="flex" style={{ marginTop: '-0rem', display: 'flex', alignItems: 'center' }}>
                <img src={Dot} className="object-none mr-4px" alt="" style={{ width: '0.75rem', marginRight: '0.6rem' }} />
                <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text2}</span>
            </div>
            <div className="flex" style={{ marginTop: '-0rem', display: 'flex', alignItems: 'center' }}>
                <img src={Dot} className="object-none mr-4px" alt="" style={{ width: '0.75rem', marginRight: '0.6rem' }} />
                <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text3}</span>
            </div>
            <div className="flex" style={{ marginTop: '-0rem', display: 'flex', alignItems: 'center' }}>
                <img src={Dot} className="object-none mr-4px" alt="" style={{ width: '0.75rem', marginRight: '0.6rem' }} />
                <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text4}</span>
            </div>
        </div>
    )
    const LongItem2 = ({ number = "8.", title = "메뉴", marginTop, text = "내베팅 : 상세한 베팅내역 확인 가능", text2 = "팔레이 : 팔레이(다폴더) 리스트 확인 가능", marginBottom }) => (
        <div className="flex flex-col space-y-4px" style={{ fontFamily: 'SpoqaHanSansNeoMedium', lineHeight: '1.4', marginTop: marginTop, fontSize: '2.0625rem', marginBottom: marginBottom }}>
            <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px flex h-18px items-center" style={{ fontFamily: 'SpoqaHanSansNeoBold', fontSize: '2.25rem' }}>
                <span className="text-blue-r0056a6" style={{ color: '#a67c52', marginRight: '0.4rem' }}>{number}</span>
                <span className="text-gray-r585858" style={{ color: '#ccc2b6' }}>{title}</span>
            </div>
            <div className="flex" style={{ marginTop: '-0.2rem', display: 'flex', alignItems: 'center' }}>
                <img src={Dot} className="object-none mr-4px" alt="" style={{ width: '0.75rem', marginRight: '0.6rem', marginTop: '-0.2' }} />
                <span style={{ color: "#8c8c8c", }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text}</span>
            </div>
            <div className="flex" style={{ marginTop: '-0rem', display: 'flex', alignItems: 'center' }}>
                <img src={Dot} className="object-none mr-4px" alt="" style={{ width: '0.75rem', marginRight: '0.6rem' }} />
                <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text2}</span>
            </div>
        </div>
    )

    return (
        <div style={{ borderRadius: "1em", }} className="w-full bg-gray-fafafa border border-gray-dddddd p-30px space-y-30px">

            <div className="flex space-x-20px items-start" style={{ marginTop: '-0.3rem' }}>
                <img className="object-none" src={Image1} alt="" style={{ width: '70rem' }} />
                <div style={{ backgroundColor: "#2b2b2a", height: "", marginTop: '1.5rem', borderRadius: '0.5rem' }} className="w-full h-full rounded-xl p-20px">
                    <TitleText />
                    <div style={{ background: '#494745', height: '0.1875rem', width: '94.5%', margin: 'auto' }} />
                    {/* <div className="mt-20px w-full h-px bg-gray-dddddd"></div> */}
                    <div className="pt-20px space-y-23px" style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}>
                        <Item />
                        <Item number="2." title="보유머니" text="본인의 보유머니가 표시됩니다." marginTop='-0.6rem' />
                        <Item number="3." title="경기리스트" text="경기리스트를 확인할 수 있습니다." marginTop='-0.5rem' />
                        <LongItem marginTop='-0.5rem' />
                        {/* <Item number="5." title="내 베팅" text="상세한 베팅내역 확인 가능" /> */}
                        {/* <Item number="6." title="팔레이" text="팔레이(다폴더) 리스트 확인 가능" /> */}
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gray-dddddd" />
            <div style={{ background: '#494745', height: '0.1875rem', width: '99.5%', margin: '4.1rem auto 3.8rem' }} />
            <div className="flex space-x-20px items-start" style={{ padding: '0rem 0 0.5rem' }}>
                <img className="object-none" src={Image2} alt="" style={{ width: '70rem' }} />
                <div style={{
                    backgroundColor: "#2b2b2a", height: "",
                    marginTop: '1.5rem', borderRadius: '0.5rem'
                }} className="w-full h-full rounded-xl p-20px">
                    <TitleText number="02" />

                    <div style={{ background: '#494745', height: '0.1875rem', width: '94.5%', margin: 'auto' }} />

                    <div className="pt-20px space-y-23px" style={{ padding: '1.8rem', letterSpacing: '-0.06rem' }}>
                        <Item title="메인(초기)화면" text="메인화면으로 이동됩니다." />
                        <Item number="2." title="베팅타입 정렬" text="베팅타입 별로 배당판이 정렬됩니다." marginTop='-0.6rem' />
                        <Item number="3." title="라이브 배당률" text="경기가 시작되면 라이브 배당률을 확인할 수 있습니다." text2="" marginTop='-0.6rem' />
                        <Item number="4." title="배당판" text="다양한 배당정보가 표시됩니다." marginTop='-0.6rem' />
                        <Item number="5." title="+버튼" text="각 팀의 좌/우 가장자리에 있는" color1="[+] " color2="[+]" color3="버튼을 누르면" text2="선택한 경기가 팔레이(다폴더) 리스트에 추가됩니다" marginTop='-0.5rem' isflex />
                        <Item number="6." title="경기영상" text="라이브경기는 실시간으로 경기영상을 제공하며" text2="대기중인 경기는 경기정보가 표시됩니다." marginTop='1.5rem' withoutP='true' />
                        <Item number="7." title="통계" text="경기플레이어, 게임통계, 팀순위 등" text2="다양한 경기정보를 제공합니다." withoutP marginTop='1.4rem' />
                        <LongItem2 marginTop='1.3rem' marginBottom='0.7rem' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EsportsStructure