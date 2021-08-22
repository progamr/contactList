const CreateUser = require("./CreateUser")
// @ponicode
describe("onRegisterPressed", () => {
    let inst

    beforeEach(() => {
        inst = new CreateUser.default()
    })

    test("0", async () => {
        await inst.onRegisterPressed()
    })
})
