export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
    return {
        [Symbol.iterator]: function* () {
            for (const department of Object.values(allEmployees)) {
                for (const employee of department) {
                    yield employee;
                }
            }
        }
    };

}