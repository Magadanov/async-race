import React from 'react';
import { ViewHeaderI } from '../../interfaces/interface';
import './ViewHeader.scss';

export default function ViewHeader(props: ViewHeaderI) {
    return (
        <div className="content-header__page">
            <div className="content-header__page-name">
                <div className="page-text">{props.pageName}:</div>
                <div className="page-items-number">{props.totalItems}</div>
            </div>
            <div className="content-header__page-number">
                <div className="page-number">
                    Page: {props.currentPageNumber}
                </div>
            </div>
        </div>
    );
}
