import { ControlBase } from './controlBase';

class FileUpload extends ControlBase {
    constructor(option) {
        super(option);
        this.type = "fileUpload";
    }
}

export { FileUpload };