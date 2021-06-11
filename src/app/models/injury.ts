export class Injury {
    _id: any;
    bodyPartId: string;
    bodyPartName: string;
    tenantId: string;
    description: string;
    tenantName: string;

    public constructor(init?: Partial<Injury>) {
        Object.assign(this, init);
    }
}
