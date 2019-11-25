class Notification {

    to: string;
    from: string;
    subject: string;
    description: string;

    constructor(notification: Notification) {
        this.to = notification ? notification.to : "";
        this.from = notification ? notification.from : "";
        this.subject = notification ? notification.subject : "";
        this.description = notification ? notification.description : "";
    }

    

}

export default Notification;