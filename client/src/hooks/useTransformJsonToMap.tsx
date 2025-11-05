
export function useTransformJsonToMap(jsonObject: any): Map<string, any> {

    let resultMap = new Map<string, any>();

    for (const key in jsonObject) {
        resultMap.set(key, jsonObject[key] == "-" ? "-" : jsonObject[key]);
    }

    return resultMap;
}

export default useTransformJsonToMap;