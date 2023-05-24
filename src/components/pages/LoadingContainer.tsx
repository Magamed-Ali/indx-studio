import React from 'react';
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

interface LoadingType {
    value: number
    loading: boolean
}

function LoadingContainer({value, loading}: LoadingType) {

    const renderComponents = () => {
        const components = [];
        for (let i = 0; i < value; i++) {
            components.push(1);
        }
        return components;
    };

    return (
            <div className="row d-flex justify-content-center">
                {
                    renderComponents().map(i => (
                        <div className={loading ? "col-12 col-sm-6 p-0 d-flex justify-content-center" : "col-12 col-sm-6 col-md-4 col-lg-3  p-0 d-flex justify-content-center"}>
                            <div className="loading-container">
                                <Stack spacing={1} >
                                    <div className={loading ? "stack-loading" : ""}>
                                        <div className={loading ? "stack-loading__left" : ""} >
                                            <Skeleton variant="rounded" width="100%" height={150}/>
                                            <img src={process.env.PUBLIC_URL + '/assets/images/Rectangle295.png'} alt=""/>
                                        </div>
                                        <div className="container skeleton">
                                            <div className="skeleton-text" style={{display: "flex"}}>
                                                <Skeleton variant="text" width="80%" height={30}/>
                                                <Skeleton variant="text" width="15%" height={30}/>
                                            </div>
                                            <div className="skeleton-bottom">
                                                <Skeleton variant="rounded" width="100%" height={10}/>
                                                <Skeleton variant="rounded" width="100%" height={10}/>
                                            </div>
                                        </div>
                                    </div>

                                </Stack>
                            </div>
                        </div>
                    ))
                }
            </div>
    )}
export default LoadingContainer;