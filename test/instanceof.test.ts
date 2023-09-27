describe('Instance Of', () => {

    class Employee {}
    class Manager {}

    const bbb = new Employee();
    const aaa = new Manager();

    it('should have problem using typeof', () => {

        console.info(typeof bbb);
        console.info(typeof aaa);
    });

    it('should support instanceof', () => {
        expect(bbb instanceof Employee).toBe(true);
        expect(bbb instanceof Manager).toBe(false);

        expect(aaa instanceof Employee).toBe(false);
        expect(aaa instanceof Manager).toBe(true);
    });
});
