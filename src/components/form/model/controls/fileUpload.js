import { ControlBase } from './controlBase';
import { controlType } from './controlsTypeEnum';
class FileUpload extends ControlBase {
    constructor(option) {
        super(option);
        this.placeholder = option.placeholder;
        this.type = controlType.fileUpload;
    }
}

export { FileUpload };