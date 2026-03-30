import testFileUtils from "./utils/testFileUtils.js"
import testTransformUtil from "./utils/transformUtils.js"
import testApareo from "./apareo/testApareo.js"
import util from "./util.js"

function main() {
    testFileUtils.runAll()
    util.espacioDos()
    testTransformUtil.runAll()
    util.espacioDos()
    testApareo.runAll()
}


main()

