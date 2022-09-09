import React from 'react'
import parse from 'html-react-parser';


const SportsGamePolicyTable1 = ({ array }) => {

    const Cell = ({
        type,
        typeColor,
        overtime,
        ruleText,
        ruleText2 = null,
        hasMargin
    }) => (
        <tr style={{ borderBottom: "0.1875rem solid #252525", textAlign: 'center' }} className={`bg-gray-fefefe font-spoqa tracking-tight text-gray-r585858  w-full border-b border-gray-dddddd`}>
            <td style={{ width: "14.8125rem", paddingLeft: '0rem', paddingRight: '0rem', color: typeColor, textAlign: 'center' }} className="font-spoqaMedium text-center">
                {type.split('\n').map((item, i) =>
                    <p style={{ marginRight: '-1.5rem', marginTop: '0.5rem' }} key={i}>{item}</p>
                )}
            </td>
            <td style={{ width: "14.1875rem", color: overtime === null ? "#FF0000" : overtime === true ? "#dbae00" : "#585858" }} className="font-spoqaMedium text-center"><p style={{ marginTop: '0.5rem', marginLeft: hasMargin ? '' : '1rem' }}>{overtime === null ? "연장포함" : overtime === true ? "연장제외" : "연장없음"}</p></td>
            <td style={{ WebkitTextStroke: "0.2px", textAlign: 'start' }} className='dada'>
                <p style={{ marginLeft: '2rem' }}>{parse(ruleText)}</p>
                <p>{ruleText2}</p>
            </td>
        </tr>
    )
        
    function Cells({ items }) {
        return items.map(item => (
            <Cell type={item.type} typeColor={item.typeColor} overtime={item.overtime} ruleText={item.ruleText} ruleText2={item.ruleText2} hasMargin={item.hasMargin} />
        )
        )
    }


    return (
        <div style={{ background: 'linear-gradient(to top, #1f1f1e, #3e3e3d 50%, #4a4a4a)', padding: '0.1875rem', margin: '0 1.875rem', borderRadius: "1.2rem", }}>
            <table style={{ borderRadius: "1.2rem", fontSize: '2.8125rem', background: '#323232', letterSpacing: '-0.07rem', fontFamily: 'SpoqaHanSansNeoMedium', borderCollapse: 'collapse' }} className="shadow-subNavbar overflow-hidden">
                <thead style={{ borderBottomWidth: "0.1875rem", background: '#2e2e2e', borderBottom: '0.1875rem solid #252525', borderTopLeftRadius: '1.3rem', borderTopRightRadius: '1.3rem' }} className="bg-gray-fafafa font-spoqaMedium tracking-tight text-gray-r454545 border-b border-gray-dddddd">
                    <tr style={{ height: '9.1rem', background: '', borderTopLeftRadius: '1.3rem', }}>
                        <td style={{ width: "14.8125rem", color: '#ccc2b6', textAlign: 'center', borderTopLeftRadius: '1.3rem', }} className="text-center"><p style={{ margin: '-0.1rem 0 0 1.3rem ' }}>베팅타입</p></td>
                        <td style={{ width: "14.1875rem", color: '#ccc2b6', textAlign: 'center' }} className="text-center"><p style={{ margin: '-0.1rem 0 0 -1rem ' }}>적용시간</p></td>
                        <td className="text-center" style={{ color: '#ccc2b6', textAlign: 'center', borderTopRightRadius: '1.3rem' }}><p style={{ margin: '-0.1rem 0 0 -1.8rem ' }}>베팅룰</p></td>
                    </tr>
                </thead>
                <tbody style={{ fontSize: '2.625rem', color: '#ccc2b6' }} className="w-full text-585858 tracking-tight font-spoqa">

                    <Cells items={array} />

                </tbody>
            </table>

        </div>
    )
}

export default SportsGamePolicyTable1;
