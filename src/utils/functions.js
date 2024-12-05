const { ThemeColors } = require("../theme/color")
const { statusTypes } = require("./constants")


const setColor = (status) => {
    switch (status) {
        case statusTypes.COMPLATED:
            return ThemeColors.green

        case statusTypes.INPROGRESS:
            return ThemeColors.blue

        case statusTypes.INREVIEW:
            return ThemeColors.pink

        case statusTypes.ONHOLD:
            return ThemeColors.yel

        default:
            return ThemeColors.white
    }
}

export { setColor }