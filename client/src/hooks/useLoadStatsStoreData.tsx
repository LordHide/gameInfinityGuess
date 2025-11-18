import { useActiveFormStore } from './useActiveFormStore.tsx';
import { useConexionStatusStatsStoreData } from './Stores/useConexionStatusStatsStoreData.tsx';

import { useState, useEffect } from 'react'

import { type StoreTypes } from '../types/typesStore'

export function useLoadStatsStoreData(typeStatsStoreData: StoreTypes,): void {

    const stateLoadingStore = useConexionStatusStatsStoreData();
    const stateLoading = stateLoadingStore.LoadingStatus;
    const [errorMesage, setErrorMesage] = useState({});

    const activeStore = useActiveFormStore(typeStatsStoreData);

    useEffect(() => {
        if (stateLoading[typeStatsStoreData] == "sending") {
            stateLoading[typeStatsStoreData] = "loading";
            stateLoadingStore.updateLoadingStatus(stateLoading);
            let formData = new FormData();
            fetch(
                `http://127.0.0.1:8000/api/getStatsStoreData/` + typeStatsStoreData,
                {
                    method: "POST",
                    body: formData
                }
            )
                .then(res => res.json())
                .then(response => {
                    if (response.success == 1) {

                        activeStore.updateValues(response.data);

                        stateLoading[typeStatsStoreData] = "pending";

                        stateLoadingStore.updateLoadingStatus(stateLoading);
                    }
                    else {
                        setErrorMesage(response.errors);
                        stateLoading[typeStatsStoreData] = "error";
                        stateLoadingStore.updateLoadingStatus(stateLoading);
                    }
                }
                )
                .catch((error) => {
                    console.log(error);
                    stateLoading[typeStatsStoreData] = "error";
                    stateLoadingStore.updateLoadingStatus(stateLoading);
                }
                );
        }
    }, [stateLoading, errorMesage]
    )
}