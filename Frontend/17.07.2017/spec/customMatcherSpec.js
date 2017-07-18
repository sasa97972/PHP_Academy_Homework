describe ("Users test", function(){
    beforeEach (function() {
        jasmine.addMatchers({
            validateAge: function() {
                return {
                    compare: function(actual, expected) {
                        var result = {};
                        result.pass = (actual >= 18 && actual <= 21);
                        if(!result.pass) {
                            result.message = "sorry you are not allowed to do something";
                        };
                        return result;
                    }
                };
            }
        });
    });

    describe("User1", function() {
        it ("Lets see whether you allowed to do smth or not", function(){
            expect(user1.age).validateAge();
        });

        it ("The user must correctly speak", function(){
            expect(user1.sayHello()).toEqual("Hello");
            expect(user1.sayWord("Bye")).toContain("Bye");
        });

        it ("The user must correctly divide", function(){
            expect(user1.divide(6, 2)).toEqual(3);
            expect(user1.divide(9, 7)).toBeCloseTo(1.285);
        });
    });
    

    describe("User2", function() {
        it ("Lets see whether you allowed to do smth or not", function(){
        expect(user2.age).validateAge();
        });

        it ("The user must correctly speak", function(){
            expect(user1.sayHello()).toEqual("Hello");
            expect(user1.sayWord("Bye")).toContain("Bye");
        });

        it ("The user must correctly divide", function(){
            expect(user1.divide(6, 2)).toEqual(3);
            expect(user1.divide(9, 7)).toBeCloseTo(1.285);
        });
    });
});