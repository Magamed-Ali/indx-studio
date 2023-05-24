import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import GridViewIcon from '@mui/icons-material/GridView';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import { TopBarProps } from '../../App';


function TopBar({loading, setLoading, downloaded, data}: TopBarProps) {

    return (
        <div className="top-bar">
            {data?.length?
            <div>
                <GridViewIcon className="colored-image" onClick={() => setLoading && setLoading(false)}/>
                <SplitscreenIcon className="colored-image" onClick={() => setLoading && setLoading(true)}/>
            </div>
           :
            <div>
                <Stack spacing={1}>
                    <Skeleton variant="rounded" width={100} height={45} onClick={() => setLoading && setLoading(!loading)}/>
                </Stack>
            </div>}
        </div>
    );
}

export default TopBar;