import { useCallback, useEffect, useState } from 'react';
import useQueryPage from './useQueryPage';

export default function usePaginate(url: string, limit: number) {
    const queryPage = useQueryPage(url);

    const [result, setResult] = useState({
        data: [],
        page: 0,
        nextPage: 0,
        prevPage: 0,
        total: 0,
    });

    const refreshData = useCallback(() => {
        fetch(`http://localhost:3000/${url}?_page=${queryPage}&_limit=${limit}`)
            .then((res) => {
                const total = parseInt(res.headers.get('X-Total-Count') || '0');
                const page = queryPage;
                return res.json().then((data) => ({ data, total, page }));
            })
            .then(({ data, total, page }) => {
                const nextPage = Math.ceil(total / limit);
                setResult({
                    data,
                    page,
                    nextPage: Math.min(page + 1, nextPage),
                    prevPage: Math.max(1, page - 1),
                    total,
                });
            })
            .catch((error: Error) => {
                throw new Error(error.message);
            });
    }, [queryPage, limit, url]);

    useEffect(() => {
        refreshData();
    }, [refreshData]);

    return { ...result, refreshData };
}
