class formContact {
    constructor() {
        this.frameId = this.frameId;
        this.frame = null;
        this.event = [];
    }
    init(frameId) {
        this.frame = document.getElementById(frameId);
        var eventLength = this.event.length;
        var events = this.event;
        console.log("初始化", window);

        window.addEventListener("message", (data) => {
            for (var index = 0; index < events.length; index++) {
                events[index].fn.call(this, data);
            }
        });

    }
    listenMes(eventName, fn) {
        /*
        this.event.shift();
        this.event.push({
            eventName: eventName,
            fn: fn
        })*/
        this.event = [{
            eventName: eventName,
            fn
        }];
    }
    postMes(data) {
        this.frame.contentWindow.postMessage(data, "*");
    }
}
export default new formContact();