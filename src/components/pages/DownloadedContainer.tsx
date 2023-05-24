import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {TopBarProps} from "../../App";

function DownloadedContainer({loading, data}: TopBarProps) {

    console.log(data)
    return (
        <div className="row">
            {
                data?.map(i => {
                    return <div className={loading ? "col-12 col-sm-6 p-0 d-flex justify-content-center" : "col-12 col-sm-6 col-md-4 col-lg-3  p-0 d-flex justify-content-center"}>
                                <Card className={loading ? "download-card" : "download-card-y"}>

                                    <div className={loading ? "download-card__top" : "download-card-y__top"}>
                                        <CardMedia
                                            sx={{width: 80,height: 80}}
                                            image={process.env.PUBLIC_URL + '/assets/images/Pngtree.png'}
                                            title="green iguana"
                                        />
                                    </div>
                                    <div className={loading ? "" : "download-card-img"}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                <div className="price">
                                                    <div>{i.price}<CurrencyRubleIcon/></div>
                                                    <div><FavoriteBorderIcon/></div>
                                                </div>

                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <div className="title">{i.title}</div>

                                            </Typography>
                                        </CardContent>
                                        <CardContent>
                                            <div className="address">
                                                <div>Город</div>
                                                <div>{i.address}</div>
                                            </div>
                                        </CardContent>
                                    </div>

                                </Card>
                            </div>
                })
            }
        </div>

    );
}

export default DownloadedContainer;