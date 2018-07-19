class formContact{
    constructor(frameId){
        this.frameId=this.frameId;
        this.event=[];
        this.frame.document.getElementById(this.frameId);
        window.addEventListener("message",(data)=>{
            for(var index=0,eventLength;index<eventLength;index++){
                this.event[index].fn.call(this,data);
            }
        });
    }

    listenMes(eventName,fn){
        this.event.push({
            eventName:eventName,
            fn:fn
        })
    }
    postMes(data){
        this.frame.contentWindow.postMessage(data,"*");
    }
}


export default new formContact();
