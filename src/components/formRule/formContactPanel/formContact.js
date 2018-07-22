class formContact{
    constructor(){
        this.frameId=this.frameId;
        this.frame=null;
        this.event=[];

    }
    init(frameId){
        this.frame=document.getElementById(frameId);
        var eventLength=this.event.length;
        var events=this.event;
        console.log("初始化",window);
        /*
        window.addEventListener("message",(data)=>{
            console.log("data is",data);
           
            for(var index=0;index<events.length;index++){
                console.log("index",events[index]);
                events[index].fn.call(this,data);
            }
        });
        */
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
