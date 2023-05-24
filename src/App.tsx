import React, {useEffect, useState} from 'react';
import TopBar from "./components/shared/TopBar";
import Main from "./components/shared/Main";
import Footer from "./components/shared/Footer";
import {todolistsAPI} from "./api/api";

export type ButtonStateType = "active" | "error" | "loading"
export type TopBarProps = {
    loading: boolean;
    setLoading?: (val: boolean) => void
    downloaded?: boolean
    data?: Array<any>
    setData?: (data: Array<any>) => void
}
function App() {
    const [loading, setLoading] = useState<boolean>(false)
    const [downloaded, setDownloaded] = useState<boolean>(true)
    const [data, setData] = useState<Array<any>>([])
    const [buttonState, setButtonState] = useState<ButtonStateType>("active")
    const fetchData = async (value: number) => {
        setButtonState("loading");
        const response = await todolistsAPI.getTodolists(value);
        setButtonState("active");
        return response.data.items;
    }
    useEffect( ()=> {
        const fetchDataAsync = async () => {
            try {
                const response1 = await fetchData(1);
                const response2 = await fetchData(2);

                setData([...data, ...response1, ...response2]);
            } catch (error) {
                console.log(error);
                setButtonState("error");
            }
        };

        fetchDataAsync();

    }, [])

    return (
        <div className="container p-3 App">
            <TopBar loading={loading} setLoading={setLoading} downloaded={downloaded} data={data}/>
            <Main loading={loading} downloaded={downloaded} setLoading={setLoading} data={data}/>
            <Footer
                loading={loading}
                data={data}
                setLoading={setLoading}
                setData={setData}
                buttonState={buttonState}
                fetchData={fetchData}
                setButtonState={setButtonState}
            />
        </div>
    );
}

export default App;
