describe('Inheritance', () => {

    // parent class
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee{

    }

    class Director extends Manager {

    }

    it('should support', () => {
        const employee = new Employee("Aaa");
        console.info(employee.name);

        const manager = new Manager("Bbb");
        console.info(manager.name);

        const director = new Director("Ccc");
        console.info(director.name);
    });
});
