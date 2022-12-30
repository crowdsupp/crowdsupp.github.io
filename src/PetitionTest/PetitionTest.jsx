import { useState, useEffect } from 'react';
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
const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "40px",
        borderBottom: "1px solid #eee",


    },
    crowdsupp_logo: {
        // fontSize: "30px",
        // lineHeight: "40px",
        height: "40px",
        fontWeight: "600",
        display: "flex",
        alignItems: "center"

    },
    crowdsupp_logo_text: {
        fontSize: "20px",
        lineHeight: "40px",
        height: "40px",
        marginLeft: "10px"
    },
    crowdsupp_logo_face: {
        fontSize: "40px",
        lineHeight: "50px",
        height: "40px",
    },
    reddit: {
        height: "35px",
        width: "35px",
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
        fontWeight: "600"
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
      marginLeft:"20px",
      color: green[500]
    },
    timer: {
        borderTop: "1px solid #eee"
    },
    timeLeft:{
        color:"#aaa"
    },
    description: {
        borderTop: "1px solid #eee"
    }

}));

function PetitionTest() {
    const petitionData = {
        title: "JCS make new videos!",
        description: "What is this project all about?\nThis campaign is made because we want JCS to upload new videos, if JCS confirms they will make new videos, the money raised will be sent to them.",
        date: "2023/01/29 18:42:00"
    }
    const [open, setOpen] = useState(false);
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

    function copyToClipboard(textToCopy) {
        // navigator clipboard 需要https等安全上下文
        if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard 向剪贴板写文本
            return navigator.clipboard.writeText(textToCopy);
        } else {
            // 创建text area
            let textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            // 使text area不在viewport，同时设置不可见
            textArea.style.position = "absolute";
            textArea.style.opacity = 0;
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            return new Promise((res, rej) => {
                // 执行复制命令并移除文本框
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
            <Stack spacing={0}>
                <div className={classes.header}>
                    <div className={classes.crowdsupp_logo}>
                        <div className={classes.crowdsupp_logo_text}>Crowdsupp&nbsp;:&nbsp;)</div>
                        {/* <div className={classes.crowdsupp_logo_face}></div> */}
                    </div>
                    <a href="https://www.reddit.com/r/crowdsupp/"><img className={classes.reddit} src="/reddit_logo.jpeg" alt="" /></a>
                </div>
                <Grid2 p={2}>
                    <img className={classes.picture} src="/petition_test_img.jpeg" alt="" />
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
                        <Button variant="contained" fullWidth sx={{
                            backgroundColor: "#ff9800",
                            borderRadius: "10px",
                            height: "40px",
                            color: "#333",
                            fontWeight: "600"
                        }}>
                            Supp now !
                        </Button>
                    </Grid2>
                </Grid2>
                <Grid2 container p={2} className={classes.timer}>
                    <Grid2 xs={6}>
                        <AttachMoneyIcon className={classes.icon_money} />
                        <div className={classes.money}>{"0.00" } raised</div>
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