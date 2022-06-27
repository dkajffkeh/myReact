import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message:"1",
    },
    {
        message:"2",
    },
    {
        message:"3",
    }
]

let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        }
    }

    componentDidMount() {
        const {notifications} = this.state;

    }

}