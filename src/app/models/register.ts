export class Register {
    email: string;
    age: number;
    firstName: string;
    lastName: string;
    password: string;

    public constructor(init?: Partial<Register>) {
        Object.assign(this, init);
    }
}


