export class User {

    constructor(
        public username:string,
        public first_name:string,
        public last_name:string,
        public email:string,
        public password:string,
        public rol?:string,
        public is_auth?:boolean,
    ){}
}
