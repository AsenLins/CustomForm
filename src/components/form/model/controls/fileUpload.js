import { Base } from '../base/base';

class FileUpload extends Base {
    constructor(option) {
        super(option);
        this.type = "fileUpload";
    }
}

export { FileUpload };