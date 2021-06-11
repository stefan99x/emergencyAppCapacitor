export class Apartment {
    public floor: number;
    public nunber: number;
    public tenantId: string;


    public constructor(init?: Partial<Apartment>) {
        Object.assign(this, init);
    }
}
