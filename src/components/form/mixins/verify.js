const methods = {
    methods: {
        mix_controlVerify() {
            this.$validator.validate("*").then((result) => {
                if (result == false) {
                    this.setControlVerifyStatus(true);
                } else {
                    this.setControlVerifyStatus(false);
                }
            });
        }
    }

}

export default methods;