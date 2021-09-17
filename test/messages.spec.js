const messageServices = require("../messages");

describe("public annoucement service", () => {
    it("prepares a public announcement", () => {
        let msg = "Don't lie in yellow snow";
        let annoucement = messageServices.psa(msg);
        expect(annoucement).toContain(msg);
    })

    describe.each([
        "poop", "fart", "bum", "jquery"
    ])("throws error rejecting messages containing rude words", (word) => {
        it(`rejects ${word}`, () => {
            let msg = `This is about ${word} haha!`
            expect(messageServices.psa(msg)).toThrowError();
        })
    })
})