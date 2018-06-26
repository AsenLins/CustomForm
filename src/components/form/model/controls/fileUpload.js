import { ControlBase } from './controlBase';
import { controlType } from './controlsTypeEnum';
class FileUpload extends ControlBase {
    constructor(option) {
        super(option);
        this.type = controlType.fileUpload;
    }
}

export { FileUpload };