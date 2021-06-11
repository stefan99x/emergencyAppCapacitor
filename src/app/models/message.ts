export class Message {
    tenantName: string;
    message: string;

    public constructor(init?: Partial<Message>) {
        Object.assign(this, init);
    }
}
