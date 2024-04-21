import React from 'react';
import ViewHeader from '../../components/ViewHeader/ViewHeader';
import usePaginate from '../../utils/usePaginate';

export default function WinnersPage() {
    const pageLimit = 10;
    const updatePage = false;
    const { data, page, nextPage, prevPage, total } = usePaginate(
        'winners',
        pageLimit,
        updatePage
    );
    console.log(data, nextPage, prevPage);

    return (
        <>
            <div className="content-header">
                <ViewHeader
                    pageName="Winners"
                    currentPageNumber={page}
                    totalItems={total}
                />
            </div>
        </>
    );
}
