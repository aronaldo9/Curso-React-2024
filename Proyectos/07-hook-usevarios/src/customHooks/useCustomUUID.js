/**
 * Custom Hook que me devuelva un UUId aleatorio y que me permita generar más UUID
 */

import { useState } from "react";

const useCustomUUID = () => {
    const [uuid, setUUID] = useState(generateUUID());

    function generateUUID() {
        const timeValue = Date.now()
        const randomV1 = Math.random().toString(36).substring(2);
        const randomV2 = Math.random().toString(36).substring(2);

        return `${timeValue}-${randomV1}-${randomV2}`
    }

    return [uuid, () => setUUID(generateUUID) ];
    
};


export default useCustomUUID;