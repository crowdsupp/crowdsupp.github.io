import { useState } from 'react';
import { Paper, Stack } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import _ from "lodash"
import "./HomePage.scss"
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { pink, green } from '@mui/material/colors';
import { makeStyles } from "@material-ui/core/styles";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
const useStyles = makeStyles((theme) => ({
//     petition:{
// pa
//     },
    title: {
        fontSize: "16px",
        textAlign: "left",
        fontWeight: 600
    },

    icon: {
        position: "relative",
        top: "5px"
    },
    money: {
        color: green[500]
    },
    titleIcon: {
        color: pink[500]
    },
    time: {
        color: pink[500]
    }
}));

function HomePage() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const dataArr = [
        { "id": 1, title: "I want 5 carmreas in the next iPhone!!!I want 5 carmreas in the next iPhone!!!", raisedMoney: "972", description: "description description description description description description", icon: "rocket", money: 678, remainTime: "12Weeks", supporter: 120 },
        { "id": 2, title: "I want 5 carmreas in the next iPhone!!!I want 5 carmreas in the next iPhone!!!I want 5 carmreas in the next iPhone!!!", raisedMoney: "972", description: "description description description description description description", icon: "fire", money: 1333, remainTime: "7Days", supporter: 120 },
        { "id": 3, title: "I want 5 carmreas in the next iPhone!!!", raisedMoney: "972", description: "description description description description description description", money: 90, remainTime: "11Months", supporter: 12 },
        { "id": 4, title: "I want 5 carmreas in the next iPhone!!! I want 5 carmreas in the next iPhone!!!", raisedMoney: "972", description: "description description description description description description", money: 22.34, remainTime: "4Hours", supporter: 7 },
    ]
    const iconObj = {
        rocket: <RocketLaunchIcon className={[classes.titleIcon, classes.icon]} />,
        fire: <LocalFireDepartmentIcon className={[classes.titleIcon, classes.icon]} />,
    }
    // const handleChange =
    //     (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    //         setExpanded(isExpanded ? panel : false);
    //     };


    return (
        <>
            {/* Accordion */}
            <Grid2 container spacing={2} p={2}>
                {_.map(dataArr, (dataItem) => {
                    return (

                        <Grid2 key={_.get(dataItem, ["id"], "")} xs={12} md={6}  >
                            <Paper elevation={3} >
                                <Stack spacing={0} p={1}>
                                    <Grid2 container spacing={2} >
                                        {/* {iconObj[_.get(dataItem, ["icon"], "")] && <Grid2 xs={1}  >
                                            
                                        </Grid2>} */}
                                        <Grid2 xs className={classes.title}>
                                            {iconObj[_.get(dataItem, ["icon"], "")]}  {_.get(dataItem, ["title"], "")}
                                        </Grid2>
                                    </Grid2>
                                    <Grid2 container spacing={2} >
                                        <Grid2 xs={3} sx={{ textAlign: "left" }} className={classes.money}>
                                            <AttachMoneyIcon className={classes.icon} />{_.get(dataItem, ["money"], "")}
                                        </Grid2>
                                        <Grid2 xs={3} sx={{ textAlign: "left" }}>
                                            <SupervisorAccountIcon className={classes.icon} />{_.get(dataItem, ["supporter"], "")}
                                        </Grid2>
                                        <Grid2 xs={6} sx={{ textAlign: "left" }} className={classes.time}>
                                            <AccessAlarmIcon className={classes.icon} />
                                            {_.get(dataItem, ["remainTime"], "")}
                                        </Grid2>
                                    </Grid2>
                                </Stack>
                            </Paper>
                        </Grid2>


                    )
                })}
            </Grid2>
        </>
    )
}

export default HomePage