import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from "@mui/material/Rating"
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { AddReview } from '../api/Main';
import { useRouter } from 'next/router';
import {useState} from "react";
import Loader from "./Loader";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const WriteReviewComponent = ({ on, onModel,reviewAdded }) => {
    let router = useRouter()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [rate, setRate] = React.useState(3)
    const [body, setBody] = React.useState("")
    const [title, setTitle] = React.useState("")

    const [loading,setLoading] = useState(false)

    let userId, token

    if (typeof window !== "undefined") {
        userId = localStorage.getItem("id")
        token = localStorage.getItem("token")
    }

    const handleSubmit = async () => {
        setLoading(true)
        let review = { userId, title, on, onModel, rate, body }
        try{
            let review_added = await AddReview({review,token})
            if (review_added.status === 200){
                setOpen(false)
                router.reload("#reviews")
            }
        }catch(e){
            console.error(e)
        }finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading? <Loader/> :
            <>
                {userId && <Button className="redbtn" onClick={handleOpen}>Write Review</Button>}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography component="legend">Review Rate</Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={rate}
                                    onChange={(event, newValue) => {
                                        setRate(newValue);
                                    }}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Review Title"
                                    multiline
                                    fullWidth
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    variant="standard"
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Review Body"
                                    multiline
                                    maxRows={10}
                                    fullWidth
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth onClick={handleSubmit} className="redbtn">Write Review</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            </>
            }
        </>
    )
}

export default WriteReviewComponent

