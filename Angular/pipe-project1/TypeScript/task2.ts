export{}
function task2(a: number, b: number): number;
function task2(a: string, b: string, c: string): string;


function task2(a: any, b: any, c?: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a;
    }
    if (typeof a === "string" && typeof b === "string" && typeof c === "string") {
        return b;
    }
}


console.log(task2(10, 11));                 
console.log(task2("Vamsi","Ajay","Krishna")); 