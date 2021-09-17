describe("public annoucement service", () => {
    it("prepares a public announcement", () => {
        let msg = "Don't lie in yellow snow";
        let annoucement = (psa(msg));
        expect(annoucement).toContain(msg);
    })

    describe.each([
        "poop", "fart", "bum", "jquery"
    ])("throws error rejecting messages containing rude words", () => {
        it('rejects %s', () => {
            let msg = "This is about %s haha!"
            expect(psa(msg)).toThrowError();
        })
    })
})