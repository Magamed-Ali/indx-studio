import React from 'react';
import {ButtonStateType} from "../../App";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type FooterPropsType = {
    loading?: boolean;
    setLoading?: (val: boolean) => void
    downloaded?: boolean
    data?: Array<any>
    setData?: (data: Array<any>) => void
    buttonState?: ButtonStateType
    fetchData?: (value: number) => void
    setButtonState?: (s: ButtonStateType) => void
}

function Footer({buttonState, loading, data, fetchData, setButtonState, setData}: FooterPropsType) {

    const addData = async (value: number) => {
        try {
            if (fetchData && setData && setButtonState && data) {
                const response: any = await fetchData(value);
                setData([...data, ...response]);
            }
        } catch (error) {
            console.log(error);
            if (setButtonState) {
                setButtonState("error");
            }
        }
    }

    return (
        <div className="footer">
            {
                buttonState === "active"
                    ? <button onClick={() => data && addData((data.length / 10) + 1)}>Показать еще</button>
                    : buttonState === "loading" ? <div><Box sx={{display: 'flex'}}>
                            <CircularProgress sx={{ color: '#00A0AB' }}/>
                        </Box></div>
                        : <div>
                            <div className="footer__erorr">Ошибка при загрузке</div>
                            <button>Повторить попытку</button>
                        </div>
            }
        </div>
    );
}

export default Footer;