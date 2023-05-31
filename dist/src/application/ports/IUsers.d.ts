export declare abstract class IUser<Entity> {
    abstract addUser(entity: Entity): any;
    abstract checkUser(email: string): any;
    abstract getDocInfo(doc_email: string): any;
}
