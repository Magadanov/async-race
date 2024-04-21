import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function usePaginate(
    url: string,
    limit: number,
    updatePage: boolean
) {
    const [searchParams] = useSearchParams();
    const queryPage = Number(searchParams.get('page')) || 1;

    const [result, setResult] = useState({
        data: [],
        page: 0,
        nextPage: 0,
        prevPage: 0,
        total: 0,
    });

    useEffect(() => {
        fetch(`http://localhost:3000/${url}?_page=${queryPage}&_limit=${limit}`)
            .then((res) => {
                const total = parseInt(res.headers.get('X-Total-Count') || '0');
                const page = parseInt(res.headers.get('X-Current-Page') || '1');
                return res.json().then((data) => ({ data, total, page }));
            })
            .then(({ data, total, page }) => {
                setResult((prevState) => ({
                    ...prevState,
                    data,
                    page,
                    nextPage: page + 1,
                    prevPage: Math.max(1, page - 1),
                    total,
                }));
            })
            .catch((error: Error) => {
                throw new Error(error.message);
            });
    }, [queryPage, limit, url, updatePage]);

    return result;
}
