import React from 'react';
import './Pagination.scss';
import { Link, useLocation } from 'react-router-dom';

interface PaginationI {
    page: number;
    prevPage: number;
    nextPage: number;
}

export default function Pagination(props: PaginationI) {
    const location = useLocation();
    const { pathname } = location;
    const { page, prevPage, nextPage } = props;
    return (
        <div className="pagination">
            <Link
                to={{ pathname, search: `?page=${prevPage}` }}
                className={`page-link page-link__prev ${page === prevPage ? 'disabled' : ''}`}
            >
                Prev
            </Link>
            <div className="page-link__text">{page}</div>
            <Link
                to={{ pathname, search: `?page=${nextPage}` }}
                className={`page-link page-link__next ${page === nextPage ? 'disabled' : ''}`}
            >
                Next
            </Link>
        </div>
    );
}
