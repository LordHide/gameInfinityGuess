import { useNameList } from './Stores/useNameList.tsx';
import { useConexionStatusNameList } from './Stores/useConexionStatusNameList.tsx';

import { type LoadingState, type ConexionStatusState } from '../types/typesStore.tsx'

import { useState, useEffect } from 'react'

export function useLoadNamesList(): void {

    const stateLoadingStore: ConexionStatusState = useConexionStatusNameList();
    const stateLoading: LoadingState = stateLoadingStore.LoadingStatus;
    const [errorMesage, setErrorMesage] = useState({});

    const nameListStore = useNameList();

    useEffect(() => {
        if (stateLoading == "sending") {
            stateLoadingStore.updateLoadingStatus("loading");
            let formData = new FormData();
            fetch(
                `http://127.0.0.1:8000/api/getNamesList`,
                {
                    method: "POST",
                    body: formData
                }
            )
                .then(res => res.json())
                .then(response => {
                    if (response.success == 1) {

                        nameListStore.updateValues(response.data);

                        stateLoadingStore.updateLoadingStatus("pending");
                    }
                    else {
                        setErrorMesage(response.errors);
                        stateLoadingStore.updateLoadingStatus("error");
                    }
                }
                )
                .catch((error) => {
                    console.log(error);
                    stateLoadingStore.updateLoadingStatus("error");
                }
                );
        }
    }, [stateLoading, errorMesage]
    )
}