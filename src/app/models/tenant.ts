export class Tenant {
    email: string;
    age: number;
    id: string;
    token: string;
    firstName: string;
    lastName: string;

    public constructor(init?: Partial<Tenant>) {
        Object.assign(this, init);
    }
}
