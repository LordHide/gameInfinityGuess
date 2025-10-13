import React, { useState, useEffect, useContext } from 'react';

import '../../css/UnitCard.css'

import UnitCardStats from './UnitCardStats'
import UnitCardEquipment from './UnitCardEquipment'
import UnitCardSkills from './UnitCardSkills'
import UnitCardLoadout from './UnitCardLoadout'
import UnitCardName from './UnitCardName'
import UnitCardLogo from './UnitCardLogo'

export function UnitCard() {
    return <>
        <div className="unit-card">
            <UnitCardLogo />
            <UnitCardName />
            <UnitCardStats />
            <UnitCardEquipment />
            <UnitCardSkills />
            <UnitCardLoadout />
        </div>
    </>;
}

export default UnitCard