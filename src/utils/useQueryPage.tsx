import { useLocation, useSearchParams } from 'react-router-dom';

export default function useQueryPage(url: string): number {
    const keyPage = `page_${url}`;
    const savedPage = sessionStorage.getItem(keyPage);

    const [searchParams] = useSearchParams();
    const queryPage = Number(searchParams.get('page') || savedPage) || 1;
    sessionStorage.setItem(keyPage, `${queryPage}`);

    const { pathname } = useLocation();
    const newUrl = `${pathname}${savedPage !== '1' ? `?page=${savedPage}` : ''}`;
    window.history.pushState({ path: newUrl }, '', newUrl);

    return queryPage;
}
