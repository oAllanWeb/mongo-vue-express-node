const path = require('path');
module.exports = {
    outputDir: path.resolve(__dirname, "../server/public"),
    runtimeCompiler: true,
    devServer:{
        proxy:{
            '/api':{
                target:"http://localhost:3000"
            }
        }
    }
}