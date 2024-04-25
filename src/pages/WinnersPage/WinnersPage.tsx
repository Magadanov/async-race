import React from 'react';
import ViewHeader from '../../components/ViewHeader/ViewHeader';
import usePaginate from '../../utils/usePaginate';
import Winners from '../../components/Winners/Winners';
import Pagination from '../../components/Pagination/Pagiantion';

export default function WinnersPage() {
    const pageLimit = 10;
    const { data, page, nextPage, prevPage, total } = usePaginate(
        'winners',
        pageLimit
    );

    return (
        <>
            <div className="content-header">
                <ViewHeader
                    pageName="Winners"
                    currentPageNumber={page}
                    totalItems={total}
                />
            </div>
            <div className="content">
                <Winners data={data} />
            </div>
            <Pagination page={page} nextPage={nextPage} prevPage={prevPage} />
        </>
    );
}
