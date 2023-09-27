describe('Polymorphism', () => {

    class Employee {
        constructor(public name: string) {
        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee): void {
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);
        }
    }

    function sayHelloWrong(employee: Employee): void {
        if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        } else if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);
        }
    }

    it('should support', () => {
        let employee: Employee = new Employee("Aaa");
        console.info(employee);

        employee = new Manager("Aaa");
        console.info(employee);

        employee = new VicePresident("Aaa");
        console.info(employee);
    });

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("Aaa"));
        sayHello(new Manager("Bbb"));
        sayHello(new VicePresident("Ccc"));
    });

    it('should support method parameter polymorphism wrong', () => {
        sayHelloWrong(new Employee("Aaa"));
        sayHelloWrong(new Manager("Bbb"));
        sayHelloWrong(new VicePresident("Ccc"));
    });
});
