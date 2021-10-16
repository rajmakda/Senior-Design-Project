const home = require("./home")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Pierre Edouard", "Michael"], ["George", "Jean-Philippe", "Jean-Philippe"], ["Pierre Edouard", "Jean-Philippe", "Jean-Philippe"]]
        inst = new home.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
