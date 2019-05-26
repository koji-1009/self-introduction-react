import React from "react";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";

const styles = (theme: Theme): StyleRules => createStyles({
});

interface WorkProps extends WithStyles<typeof styles> {
}

class WorkComponent extends React.Component<WorkProps> {

    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <ul>
                    <li>Play Stored Application <a href="https://play.google.com/store/apps/developer?id=Koji+Wakamiya&hl=ja">Store</a>
                        <ul>
                            <li><a href="https://play.google.com/store/apps/details?id=com.app.dr1009.qrshot">QRShot</a></li>
                            <li><a href="https://play.google.com/store/apps/details?id=com.app.dr1009.dailytodo">DailyToDo</a></li>
                            <li><a href="https://play.google.com/store/apps/details?id=com.app.dr1009.addbu">LocationViewer</a></li>
                            <li><a href="https://play.google.com/store/apps/details?id=com.sf_lolitahag.kitsunehomerun">きつねホームラン</a></li>
                            <li><a href="https://play.google.com/store/apps/details?id=com.app.dr1009.webviewchecker">WebviewChecker</a></li>
                        </ul>
                    </li>
                    <li>Android Library
                        <ul>
                            <li><a href="https://github.com/koji-1009/EmptyRecyclerView">EmptyRecyclerView</a></li>
                            <li><a href="https://github.com/koji-1009/FailureStatus">FailureStatus</a></li>
                            <li><a href="https://github.com/koji-1009/ChronoDialogPreference">ChronoDialogPreference</a></li>
                            <li><a href="https://github.com/koji-1009/EasyNotificationChannel">EasyNotificationChannel</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withStyles(styles)(WorkComponent);