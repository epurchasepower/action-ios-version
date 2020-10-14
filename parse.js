const xcode = require('xcode')

module.exports = function(xcodeprojPath, bundleId, scheme, cb) {
  const projectPath = `${xcodeprojPath}/project.pbxproj`
  const proj = xcode.project(projectPath)

  proj.parse(function (err) {
    if (err) {
      cb(err)
    } else {
      const obj = Object.values(proj.pbxXCBuildConfigurationSection())
                        .find((o) => (
                          !!o.buildSettings &&
                          o.buildSettings.PRODUCT_BUNDLE_IDENTIFIER === bundleId &&
                          o.name === scheme
                        ))
      if (!obj) {
        cb({message: `Could not find configuration for scheme ${scheme} and bundle ${bundleId} in ${projectPath}`})
      } else {
        cb(null, obj.buildSettings.MARKETING_VERSION)
      }
    }
  })
}
