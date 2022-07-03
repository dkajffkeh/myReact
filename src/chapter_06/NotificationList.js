import React from "react";
import Notification from "./Notification";

let timer;

const reservedNotifications = [
    {
        message:"안녕",
    },
    {
        message:"오늘",
    },
    {
        message:"점심",
    }
];

class NotificationList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        }
    }

    componentDidMount() {


        const {notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                })
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                        return <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}/>;
                    })
                }
            </div>
        );
    }

}

export default NotificationList;