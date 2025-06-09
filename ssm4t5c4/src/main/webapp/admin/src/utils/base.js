const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm4t5c4/",
            name: "ssm4t5c4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm4t5c4/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "济南旅游网站"
        } 
    }
}
export default base
