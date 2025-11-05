import '../../css/UnitCardComponents/UnitCardLoadout.css';

interface UnitCardLoadoutLineProps {
    loadoutMap: Map<string, string[]>;
}

export function UnitCardLoadoutLine({ loadoutMap }: UnitCardLoadoutLineProps): React.JSX.Element {

    let loadoutArraySections: string[] = Array.from(loadoutMap.keys());

    return <>
        {loadoutArraySections.map((section: string, index: number) => (
            <span className='unit-card-loadout-element' key={index + "-" + section + "loadoutsection"}>
                {loadoutMap.get(section)?.map((value: string, index: number) => (
                    <span key={index + "-" + section}>
                        {value}
                    </span>
                ))
                }
            </span>
        ))
        }
    </ >;
}

export default UnitCardLoadoutLine;