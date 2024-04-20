import React from 'react';
import ViewHeader from '../../components/ViewHeader/ViewHeader';
import './GaragePage.scss';
import usePaginate from '../../utils/usePaginate';

export default function GaragePage() {
    const pageLimit = 7;
    const { data, page, nextPage, prevPage, total } = usePaginate(
        'garage',
        pageLimit
    );
    console.log(data, nextPage, prevPage);

    return (
        <>
            <div className="content-header">
                <ViewHeader
                    pageName="Garage"
                    currentPageNumber={page}
                    totalItems={total}
                />
            </div>
        </>
    );
}

// function COmponetn({value}:{value?: object}){
//     use stat name
//     use state VideoColorSpace

//     useefect (()=>{
//     set name
//     set color
//     },[value])

//     return <input value={namestate} onchange={setnamestate()} <button onvlicj={SubmitEvent(statename, statecolor)} />>
// }
