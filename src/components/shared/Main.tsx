import React from 'react';

import {TopBarProps} from '../../App';
import DownloadedContainer from '../pages/DownloadedContainer';
import LoadingContainer from "../pages/LoadingContainer";

function Main({loading, downloaded, data}: TopBarProps) {

    console.log(data)
    return (
        <div>
            {
                data?.length ?
                    <DownloadedContainer loading={loading} data={data}/>
                    :
                    <LoadingContainer value={20} loading={loading}/>
            }

        </div>
    );
}

export default Main;