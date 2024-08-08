
function generateArr(n) {
    return Array(n).fill().map((_, i) => {
        return {
            id: i+1,
            title: `title-${i+1}`,
            content: `content-${i+1}`
        }
    })
}

module.exports = {
    generateArr
}