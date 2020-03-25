import { useLocation } from "react-router-dom";
import * as queryString from 'query-string';

export const useQueryParams = (defaultParams: any) => {
    const location = useLocation();

    return {
        ...defaultParams,
        ...queryString.parse(location.search),
    };
}