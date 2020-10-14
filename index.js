const core = require('@actions/core')
const github = require('@actions/github')
const parse = require('./parse')

try {
  const project = core.getInput('xcodeprojPath')
  const bundleId = core.getInput('bundleId')
  const scheme = core.getInput('scheme')
  parse(project, bundleId, scheme, (err, version) => {
    if (err) {
      core.setFailed(err.message)
    } else {
      core.setOutput('result', 'Done')
      core.setOutput('version', version)
    }
  })
} catch (error) {
  core.setFailed(error.message)
}
