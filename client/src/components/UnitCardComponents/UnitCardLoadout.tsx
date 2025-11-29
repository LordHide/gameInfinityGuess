import { useLoadout } from '@Stores/useLoadout.tsx';

import '@css/UnitCardComponents/UnitCard.css';

import { type LoadoutState } from '@local-types/typesStore';

import UnitCardLoadoutLine from './UnitCardLoadoutLine.tsx';


export function UnitCardLoadout(): React.JSX.Element {

    const loadoutDataStore: LoadoutState = useLoadout();
    const loadout: Map<string, string[]>[] = loadoutDataStore.loadout as Map<string, string[]>[];

    return <div className="unit-card-loadout-section unit-card-loadout">

        <span className='unit-card-loadout-element'>Skills</span>
        <span className='unit-card-loadout-element'>Equipments</span>
        <span className='unit-card-loadout-element'>Range Weapons</span>
        <span className='unit-card-loadout-element'>Mele Weapons</span>
        {loadout.map((loadoutColection: Map<string, string[]>, index: number) => (
            <UnitCardLoadoutLine key={index + "loadoutline"} loadoutMap={loadoutColection} />
        ))}
    </div>;
}

export default UnitCardLoadout;