import { useInitProfileData } from './useInitProfileData.tsx';
import { useInitDiscoveredData } from './useInitDiscoveredData.tsx';
import { useConexionStatusProfileData } from '@Stores/useConexionStatusProfileData.tsx';

import { useState, useEffect } from 'react'

export function useLoadProfileData() {

    const stateLoadingStore = useConexionStatusProfileData();
    const stateLoading = stateLoadingStore.LoadingStatus;
    const [errorMesage, setErrorMesage] = useState({});

    const initProfileDataCallBack = useInitProfileData();
    const initDiscoveredDataCallBack = useInitDiscoveredData();

    useEffect(() => {
        if (stateLoading == "sending") {
            stateLoadingStore.updateLoadingStatus("loading");
            let formData = new FormData();
            fetch(
                `http://127.0.0.1:8000/api/getProfileData`,
                {
                    method: "POST",
                    body: formData
                }
            )
                .then(res => res.json())
                .then(response => {
                    if (response.success == 1) {

                        initProfileDataCallBack(response.data);
                        initDiscoveredDataCallBack(response.data);

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