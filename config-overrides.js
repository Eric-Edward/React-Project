const {fixBabelImports, addLessLoader, override} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
            lessOptions: {
                javascriptEnabled:true,
                modifyVars:{'@primary-color':'#1DA57A'}
            }
        }
    )
)

