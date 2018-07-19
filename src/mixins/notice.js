const notice = {
    methods: {
        mix_g_message(option) {
            this.$message({
                message: option.mes,
                type: option.type
            });
        },
        mix_g_notice(option) {
            this.$notify({
                title: '系统提示',
                message: option.mes,
                type: option.type
            });
        },
    }
}

export default notice;