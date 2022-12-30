import { useState, useEffect, useRef } from 'react';
import { Grid, Paper, Stack, Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Divider } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import _ from "lodash"
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { pink, green } from '@mui/material/colors';
import { makeStyles } from "@material-ui/core/styles";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

// import crowdsupp_logo from "../../public/crowdsupp_logo"

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "40px",
        borderBottom: "1px solid #555",
        backgroundColor: "#333",
        padding: "5px"

    },
    crowdsupp_logo: {
        height: "30px",
    },
    reddit: {
        height: "30px",
        width: "30px",
        borderRadius: "50%"
    },
    reddit_a: {
        height: "30px",
    },
    picture: {
        width: "100%",
        maxHeight: "200px",
        textAlign: "center",
        borderRadius: "10px",
        objectFit: "cover",

    },
    title: {
        fontSize: "24px",
        fontWeight: "600",
        color: "#e8e8e8"
    },
    button: {
        backgroundColor: "#ff9800",
        borderRadius: "10px",

    },
    icon_money: {
        // height: "15px",
        // width: "15px",
        position: "absolute",
        color: green[500]
    },
    money: {
        marginLeft: "20px",
        color: green[500]
    },
    timer: {
        borderTop: "1px solid #555"
    },
    timeLeft: {
        color: "#aaa"
    },
    description: {
        borderTop: "1px solid #555",
        color: "#e8e8e8"
    }

}));

function PetitionTest() {
    const petitionData = {
        title: "JCS make new videos!",
        description: "What is this project all about?\nThis campaign is made because we want JCS to upload new videos, if JCS confirms they will make new videos, the money raised will be sent to them.",
        date: "2023/01/29 18:42:00"
    }
    const [open, setOpen] = useState(false);
    const suppFormRef = useRef()
    const classes = useStyles();

    const [leftTime, setLeftTime] = useState("")

    useEffect(() => {
        leftTimeCompute(petitionData.date)
        const timerInstant = setInterval(() => { leftTimeCompute(petitionData.date) }, 1000)
        // clickShare()
        return () => clearInterval(timerInstant)
    }, [])



    function leftTimeCompute(date) {
        const setTime = new Date(date);
        const nowTime = new Date();
        const restSec = setTime.getTime() - nowTime.getTime();
        const day = parseInt(restSec / (60 * 60 * 24 * 1000));
        const hour = parseInt(restSec / (60 * 60 * 1000) % 24);
        const minu = parseInt(restSec / (60 * 1000) % 60);
        const sec = parseInt(restSec / 1000 % 60);
        setLeftTime(`${day}D ${hour}H ${minu}m ${sec}s`)
    }

    function clickShare() {
        copyToClipboard(window.location.href)
        setOpen(true);
        // var url = ;
        // copyUrl(url);
    }

    function clickSupp() {
        console.log(suppFormRef)
        console.log(document.getElementById("payment-button"))
        // suppFormRef.current.submit()
        document.getElementById("payment-button").submit()
    }

    function copyToClipboard(textToCopy) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(textToCopy);
        } else {
            let textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            textArea.style.position = "absolute";
            textArea.style.opacity = 0;
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            return new Promise((res, rej) => {
                document.execCommand('copy') ? res() : rej();
                textArea.remove();
            });
        }
    }

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <>
            <Stack spacing={0} sx={{ backgroundColor: "#333", height: "100vh" }}>
                <div className={classes.header}>
                    <img className={classes.crowdsupp_logo} src="imgs/crowdsupp_logo.png" alt="" />
                    <a href="https://www.reddit.com/r/crowdsupp/" className={classes.reddit_a} ><img className={classes.reddit} src="imgs/reddit_logo.jpeg" alt="" /></a>
                </div>
                <Grid2 p={2}>
                    <img className={classes.picture} src="imgs/petition_test_img.jpeg" alt="" />
                </Grid2>
                <Grid2 container px={2}>
                    <Grid2 >
                        <div className={classes.title}>{petitionData.title}</div>
                    </Grid2>
                </Grid2>
                <Grid2 container p={2} className={classes.button_container}>
                    <Grid2 xs={12}>
                        <Button variant="contained" fullWidth sx={{
                            backgroundColor: "#ffac33",
                            borderRadius: "10px",
                            height: "40px",
                            color: "#333",
                            fontWeight: "600"
                        }}
                            id="shareButton"
                            data-clipboard-text={"targetCode"} data-clipboard-action="copy" data-clipboard-target="#copyTarget"
                            onClick={clickShare}>
                            Share
                        </Button>
                    </Grid2>
                    <Grid2 xs={12} mt={1}>
                        <form ref={suppFormRef} id="payment-button" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                            <input type="hidden" name="business" value="eskil.costermans1@gmail.com" />
                            <input type="hidden" name="cmd" value="_donations" />
                            <input type="hidden" name="item_name" value="Donation" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <Button variant="contained" fullWidth sx={{
                                backgroundColor: "#ff9800",
                                borderRadius: "10px",
                                height: "40px",
                                color: "#333",
                                fontWeight: "600"
                            }}
                                onClick={clickSupp}>
                                Supp now !
                            </Button>
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" width="0" height="0" />
                        </form>
                    </Grid2>
                </Grid2>
                <Grid2 container p={2} className={classes.timer}>
                    <Grid2 xs={6}>
                        <AttachMoneyIcon className={classes.icon_money} />
                        <div className={classes.money}>{"0.00"} raised</div>
                    </Grid2>
                    <Grid2 xs={6} className={classes.timeLeft}>
                        <div >{leftTime} left</div>
                    </Grid2>
                </Grid2>
                <Grid2 container p={2} className={classes.description}>
                    <Grid2 >
                        <div >{petitionData.description}</div>
                    </Grid2>
                </Grid2>
            </Stack>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Current link is coppied in your clipboard successfully!
                </DialogTitle>
                {/* <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       
                    </DialogContentText>
                </DialogContent> */}
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>


        </>
    )
}

export default PetitionTest