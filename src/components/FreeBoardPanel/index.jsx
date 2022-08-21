import React from 'react'
// import './RadioButton.css'
import TableHeader from '../TableHeader';
import CardHeader from '../CardHeader';
import CardResults from '../CardResults';
import CardContent from '../CardContent';

const FreeBoardPanel = ({
    checkedState = null,
    setCheckedState = null,
}) => {

    return (
        <>
            <div style={{ background: 'linear-gradient(to top,#20201f, #343433 50%, #494949 )', boxShadow: '0px 6px 12px 0px rgba(0, 0, 0, 0.6)', padding: '0.1875rem', borderRadius: '1.3rem' }}>
                <div style={{ borderRadius: "1em", paddingBottom: '0.5625rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', background: '#323232' }} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader smallCard />
                    <div style={{ padding: '0 0.65rem' }} className="w-full">
                        <div className="w-full rounded-lg" style={{ padding: '0.2875rem 0.1875rem' }}>
                            <div className='rounded-lg w-full' style={{ border: '0.375rem solid #473b35', borderRadius: '0.4rem' }}>
                                <CardHeader flag='us' name='MLS' date='2021-06-29 15:45' />
                                <CardResults
                                    bet="right"
                                    result="lose"
                                    score="1:2"
                                    team1="CF파추카"
                                    team2="과달하라 차바extra text"
                                    stat1="2.26"
                                    stat2="2.96"
                                    stat3="3.40"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    smallCard
                                />
                            </div>
                            <CardContent showBetNumber={false} withButtons={false} withInput={false} winAmount='+900,000,000' checkedState={checkedState} type={0} setCheckedState={setCheckedState} />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: 'linear-gradient(to top,#20201f, #343433 50%, #494949 )', boxShadow: '0px 6px 12px 0px rgba(0, 0, 0, 0.6)', padding: '0.1875rem', borderRadius: '1.3rem', marginTop: '1.7rem' }}>
                <div style={{ borderRadius: "1em", paddingBottom: '0.5625rem', color: '#ccc2b6', fontFamily: 'SpoqaHanSansNeoMedium', background: '#323232' }} className="shadow-subNavbar bg-gray-fafafa">
                    <TableHeader smallCard />
                    <div style={{ padding: '0 0.65rem' }} className="w-full">
                        <div className="w-full rounded-lg" style={{ padding: '0.2875rem 0.1875rem' }}>
                            <div className='rounded-lg w-full' style={{ background: '', border: '0.375rem solid #473b35', borderRadius: '0.4rem' }}>
                                <CardHeader flag='uk' name='EPL' date='2021-06-29 15:45' />
                                <CardResults
                                    bet="left"
                                    result="cancel"
                                    score=""
                                    team1="맨유"
                                    team2="첼시"
                                    stat1="2.95"
                                    stat2="4.62"
                                    stat3="1.39"
                                    isAttached={false}
                                    hasUp={false}
                                    hasDown={false}
                                    smallCard
                                />
                            </div>
                            <CardContent showBetNumber={false} withButtons={false} withInput={false} winAmount='+900,000,000' checkedState={checkedState} type={0} setCheckedState={setCheckedState} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FreeBoardPanel