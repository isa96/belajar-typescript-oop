describe('Parameter Properties', () => {

    class Person {
        constructor(public name: string) {
        }
    }

    it('should support', () => {
        const person = new Person("Aaa");
        console.info(person.name);

        person.name = "Bbb";
        console.info(person.name);
    });
});
