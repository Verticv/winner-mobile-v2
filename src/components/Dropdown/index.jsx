import React, { useState } from "react";

// import "./style.css";


const SortBy = ({ children, options, value, onChange, onClick, multiple }) => (
    <div className="container"
        style={{ postion: 'relative', width: '100%' }}
    >
        <select
            // style={{position: 'absolute', zIndex: -1}}
            className="select-overlay"
            id="filter-select"
            name="filter-select[]"
            value={value}
            onChange={onChange}
            onClick={onClick}
            multiple={multiple}
        >
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        <label style={{ fontSize: '2.625rem' }} className="custom" htmlFor="filter-select">
            {children}
        </label>
    </div>
);

const Dropdown = ({ options, children, labelStyle, labelClasses, isLeagueSelection = false, isContact = false, multiple = false, isSignup = false }) => {
    const [sortValue, setSortValue] = useState(isContact ? "선택" : isLeagueSelection ? "리그선택" : isSignup ? options[0] : "전체회차")

    const onChange = e => setSortValue(e.currentTarget.value);

    return (
        <form style={{ width: '100%' }}>
            <SortBy
                options={options}
                value={sortValue}
                onChange={onChange}
                onClick={() => console.log('on click!')}
                multiple={multiple}
            >
                <div className="flex w-full items-center justify-between"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '15rem'
                    }}
                >
                    <div className={labelClasses} style={labelStyle}><p style={{ marginTop: "1.65rem", marginLeft: '-0.1rem', fontFamily: 'SpoqaHanSansNeoMedium', color: '#ccc2b6' }}>{sortValue}</p></div>
                    {children}
                </div>
            </SortBy>
        </form >
    )
}


export default Dropdown;


