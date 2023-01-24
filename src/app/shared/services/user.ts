export class User {
    uid?: string;
    email?: string;
    firstName?: string;
    lastName?:string;
    photoURL?: string;
    emailVerified?: boolean;
    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}
