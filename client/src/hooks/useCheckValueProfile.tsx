import { type StatDataState, type StoreTypes, type Stats, type StatsMap, type LoadoutState, type AplyedValue, type ProfileDataState, type ProfileState, type PlayerStatsState } from '../types/typesStore.tsx'
import { useActiveFormStore } from './useActiveFormStore.tsx';
import { useProfileData } from './Stores/useProfileData.tsx';
import { useDiscoveredData } from './Stores/useDiscoveredData.tsx';
import { useLoadout } from './Stores/useLoadout.tsx';
import { usePlayerStats } from './Stores/usePlayerStats.tsx';


export function useCheckValueProfile(typeStore: StoreTypes): () => void {

    const profileStore: ProfileDataState = useProfileData();
    const dicoveredStore: ProfileState = useDiscoveredData();
    const playerStatsStore: PlayerStatsState = usePlayerStats();
    const loadoutDataStore: LoadoutState = useLoadout();

    const activeStore: StatDataState = useActiveFormStore(typeStore);
    const selectedValue: string | undefined = activeStore.selectedValue?.value;
    const aplyedExtraValue: AplyedValue = activeStore.aplyedExtraValue;

    const functCheckStats = () => {
        const activeStat: StatsMap = dicoveredStore.stats;
        let successUpdate: boolean = false;
        if (profileStore.stats[selectedValue as keyof Stats] == aplyedExtraValue) {
            activeStat.set(selectedValue as keyof Stats, aplyedExtraValue as string);
            successUpdate = true;
        }
        dicoveredStore.updateStats(activeStat);

        if (!successUpdate) {
            const currentAccuracy: number = playerStatsStore.accuracy;
            if (currentAccuracy > 0)
                playerStatsStore.updateAccuracy(currentAccuracy - 10);
        }
    }

    const functCheckSkills = () => {
        const activeSkill: string[] = dicoveredStore.skills;
        let selectedSkill: string = selectedValue as string;
        let successUpdate: boolean = false;

        if (aplyedExtraValue !== undefined)
            selectedSkill += " (" + aplyedExtraValue + ")"

        const skillPosition: number = profileStore.skills.indexOf(selectedSkill)

        if (skillPosition !== -1) {
            activeSkill[skillPosition] = selectedSkill
            successUpdate = true;
        }
        else {
            profileStore.loadout.forEach((currentValue, index) => {

                const loadoutSkillPosition: number = currentValue.skills.indexOf(selectedSkill)
                if (loadoutSkillPosition !== -1) {
                    const loadout: Map<string, string[]>[] = loadoutDataStore.loadout
                    const loadoutSkills: string[] = loadout[index].get("skills") as string[];
                    loadoutSkills[loadoutSkillPosition] = selectedSkill;
                    loadout[index].set("skills", loadoutSkills)
                    loadoutDataStore.updateLoadout(loadout)
                    successUpdate = true;
                }
            });

            if (!successUpdate) {
                const currentAccuracy: number = playerStatsStore.accuracy;
                if (currentAccuracy > 0)
                    playerStatsStore.updateAccuracy(currentAccuracy - 10);
            }
        }

        dicoveredStore.updateSkills(activeSkill)
    }

    const functCheckEquipments = () => {
        const activeEquipments: string[] = dicoveredStore.equipments;
        let selectedEquipments: string = selectedValue as string;
        let successUpdate: boolean = false;

        if (aplyedExtraValue !== undefined)
            selectedEquipments += " (" + aplyedExtraValue + ")"

        const equipmentsPosition: number = profileStore.equipments.indexOf(selectedEquipments)

        if (equipmentsPosition !== -1) {
            activeEquipments[equipmentsPosition] = selectedEquipments
            successUpdate = true;
        }
        else {
            profileStore.loadout.forEach((currentValue, index) => {

                const loadoutEquipmentsPosition: number = currentValue.equipments.indexOf(selectedEquipments)
                if (loadoutEquipmentsPosition !== -1) {
                    const loadout: Map<string, string[]>[] = loadoutDataStore.loadout
                    const loadoutEquipments: string[] = loadout[index].get("equipments") as string[];
                    loadoutEquipments[loadoutEquipmentsPosition] = selectedEquipments;
                    loadout[index].set("equipments", loadoutEquipments)
                    loadoutDataStore.updateLoadout(loadout)
                    successUpdate = true;
                }
            });

            if (!successUpdate) {
                const currentAccuracy: number = playerStatsStore.accuracy;
                if (currentAccuracy > 0)
                    playerStatsStore.updateAccuracy(currentAccuracy - 10);
            }
        }

        dicoveredStore.updateEquipment(activeEquipments)
    }

    const functCheckWeapons = () => {
        let selectedWeapon: string = selectedValue as string;
        let successUpdate: boolean = false;

        if (aplyedExtraValue !== undefined)
            selectedWeapon += " (" + aplyedExtraValue + ")"

        else {
            profileStore.loadout.forEach((currentValue, index) => {

                const loadoutRangeWeaponPosition: number = currentValue.Range_Weapons.indexOf(selectedWeapon)
                if (loadoutRangeWeaponPosition !== -1) {
                    const loadout: Map<string, string[]>[] = loadoutDataStore.loadout
                    const loadoutRangeWeapon: string[] = loadout[index].get("Range_Weapons") as string[];
                    loadoutRangeWeapon[loadoutRangeWeaponPosition] = selectedWeapon;
                    loadout[index].set("Range_Weapons", loadoutRangeWeapon)
                    loadoutDataStore.updateLoadout(loadout)
                    successUpdate = true;
                }
                const loadoutMeleeWeaponPosition: number = currentValue.Melee_Weapons.indexOf(selectedWeapon)
                if (loadoutMeleeWeaponPosition !== -1) {
                    const loadout: Map<string, string[]>[] = loadoutDataStore.loadout
                    const loadoutMeleeWeapon: string[] = loadout[index].get("Melee_Weapons") as string[];
                    loadoutMeleeWeapon[loadoutMeleeWeaponPosition] = selectedWeapon;
                    loadout[index].set("Melee_Weapons", loadoutMeleeWeapon)
                    loadoutDataStore.updateLoadout(loadout)
                    successUpdate = true;
                }
            });

            if (!successUpdate) {
                const currentAccuracy: number = playerStatsStore.accuracy;
                if (currentAccuracy > 0)
                    playerStatsStore.updateAccuracy(currentAccuracy - 10);
            }
        }
    }

    return () => {

        switch (typeStore) {
            case "stats":
                functCheckStats();
                break;

            case "skills":
                functCheckSkills();
                break;

            case "equipments":
                functCheckEquipments();
                break;

            case "weapons":
                functCheckWeapons();
                break;

            default:
                break;
        }
    }

}

export default useCheckValueProfile;