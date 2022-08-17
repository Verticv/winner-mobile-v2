import React, { useState } from "react";
import Card from './index';

import bg1 from '../../assets/mainPage/inactive-bg1-card.png'
import bga1 from '../../assets/mainPage/active-bg1-card.png'

import bg2 from '../../assets/mainPage/inactive-bg2-card.png';
import bga2 from '../../assets/mainPage/active-bg2-card.png';

import bg3 from '../../assets/mainPage/inactive-bg3-card.png';
import bga3 from '../../assets/mainPage/active-bg3-card.png';

import bg4 from '../../assets/mainPage/inactive-bg4-card.png';
import bga4 from '../../assets/mainPage/active-bg4-card.png';

import bg5 from '../../assets/mainPage/inactive-bg5-card.png';
import bga5 from '../../assets/mainPage/active-bg5-card.png';

import bg6 from '../../assets/mainPage/inactive-bg6-card.png';
import bga6 from '../../assets/mainPage/active-bg6-card.png';

import bg7 from '../../assets/mainPage/inactive-bg7-card.png';
import bga7 from '../../assets/mainPage/active-bg7-card.png';

import bg8 from '../../assets/mainPage/inactive-bg8-card.png';
import bga8 from '../../assets/mainPage/active-bg8-card.png';

import bg9 from '../../assets/mainPage/inactive-bg9-card.png';
import bga9 from '../../assets/mainPage/active-bg9-card.png';

import bg10 from '../../assets/mainPage/inactive-bg10-card.png';
import bga10 from '../../assets/mainPage/active-bg10-card.png';

import bg11 from '../../assets/mainPage/inactive-bg11-card.png';
import bga11 from '../../assets/mainPage/active-bg11-card.png';

import bg12 from '../../assets/mainPage/inactive-bg12-card.png';
import bga12 from '../../assets/mainPage/active-bg12-card.png';

import bg13 from '../../assets/mainPage/inactive-bg13-card.png';
import bga13 from '../../assets/mainPage/active-bg13-card.png';

import bg14 from '../../assets/mainPage/inactive-bg14-card.png';
import bga14 from '../../assets/mainPage/active-bg14-card.png';

import bg15 from '../../assets/mainPage/inactive-bg15-card.png';
import bga15 from '../../assets/mainPage/active-bg15-card.png';

import bg16 from '../../assets/mainPage/inactive-bg16-card.png';
import bga16 from '../../assets/mainPage/active-bg16-card.png';

import bg17 from '../../assets/mainPage/inactive-bg17-card.png';
import bga17 from '../../assets/mainPage/active-bg17-card.png';

import bg18 from '../../assets/mainPage/inactive-bg18-card.png';
import bga18 from '../../assets/mainPage/active-bg18-card.png';

import bg19 from '../../assets/mainPage/inactive-bg19-card.png';
import bga19 from '../../assets/mainPage/active-bg19-card.png';

import bg20 from '../../assets/mainPage/inactive-bg20-card.png';
import bga20 from '../../assets/mainPage/active-bg20-card.png';

const cardInfo = [{
    id: 1,
    inactivBackground: bg1,
    activeBackground: bga1,
    icon: true,
    text: '에볼루션',
    isActive: false,
},
{
    id: 2,
    inactivBackground: bg2,
    activeBackground: bga2,
    icon: true,
    text: '프레그메틱플레이',
    isActive: true,
},
{
    id: 3,
    inactivBackground: bg3,
    activeBackground: bga3,
    icon: true,
    text: '로얄지',
    isActive: false,
},
{
    id: 4,
    inactivBackground: bg4,
    activeBackground: bga4,
    icon: true,
    text: '아시아게이밍',
    isActive: false,
},
{
    id: 5,
    inactivBackground: bg5,
    activeBackground: bga5,
    icon: true,
    text: '드림게이밍',
    isActive: false,
},
{
    id: 6,
    inactivBackground: bg6,
    activeBackground: bga6,
    icon: true,
    text: '섹시게이밍',
    isActive: false,
},
{
    id: 7,
    inactivBackground: bg7,
    activeBackground: bga7,
    icon: true,
    text: '빅게이밍',
    isActive: false,
},
{
    id: 8,
    inactivBackground: bg8,
    activeBackground: bga8,
    icon: true,
    text: '케이플레이슬롯',
    isActive: false,
},
{
    id: 9,
    inactivBackground: bg9,
    activeBackground: bga9,
    icon: false,
    text: '라이브베팅',
    isActive: false,
},
{
    id: 10,
    inactivBackground: bg10,
    activeBackground: bga10,
    icon: false,
    text: '조합베팅',
    isActive: false,
},
{
    id: 11,
    inactivBackground: bg11,
    activeBackground: bga11,
    icon: false,
    text: '스페셜베팅',
    isActive: false,
},
{
    id: 12,
    inactivBackground: bg12,
    activeBackground: bga12,
    icon: true,
    text: '보타카지노',
    isActive: false,
},
{
    id: 13,
    inactivBackground: bg13,
    activeBackground: bga13,
    icon: true,
    text: 'e-스포츠',
    isActive: false,
},
{
    id: 14,
    inactivBackground: bg14,
    activeBackground: bga14,
    icon: false,
    text: '파워볼',
    isActive: false,
},
{
    id: 15,
    inactivBackground: bg15,
    activeBackground: bga15,
    icon: false,
    text: '파워사다리',
    isActive: false,
},
{
    id: 16,
    inactivBackground: bg16,
    activeBackground: bga16,
    icon: false,
    text: '스피드키노',
    isActive: false,
},
{
    id: 17,
    inactivBackground: bg17,
    activeBackground: bga17,
    icon: false,
    text: '키노사다리',
    isActive: false,
},
{
    id: 18,
    inactivBackground: bg18,
    activeBackground: bga18,
    icon: true,
    text: '키론가상게임',
    isActive: false,
},
{
    id: 19,
    inactivBackground: bg19,
    activeBackground: bga19,
    icon: true,
    text: '케이플레이피싱',
    isActive: false,
},
{
    id: 20,
    inactivBackground: bg20,
    activeBackground: bga20,
    icon: true,
    text: '티비벳',
    isActive: false,
}
]

export default function AllCards() {
    const [cardActive, setCardActive] = useState('2');
    return (
        <div className="cards">
            {cardInfo.map(({ id, inactivBackground, activeBackground, icon, text, isActive }) => (
                <Card key={id} id={id} inactivBackground={inactivBackground} activeBackground={activeBackground}
                    icon={icon} text={text} isActive={isActive} cardActive={cardActive} setCardActive={setCardActive}
                />
            ))}
        </div>
    )
}
