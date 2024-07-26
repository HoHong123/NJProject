export class UserEntity {
    constructor(
        public id : number, 
        public name : string, 
        public email: string,
        public password: string
    ) {}
}

export class SessionLoginEntity {
    constructor(
        public cachedId: string
    ) {}

    isValid() : boolean {
        //const ret = (this.cachedId.length == 36)
        //return ret;
        return true;
    }
}

class Email {
    constructor(
        public email: string,
        public password: string
    ) {}

    isValid() : boolean {
        const ret = (
            this.email && (this.email.length > 5 && this.email.length < 65) &&
            this.password && (this.password.length > 0 && this.password.length < 33)
        )
        return ret;
    }
}

export class EmailLoginEntity extends Email {
    constructor(
        public email: string,
        public password: string
    ) {
        super(email, password)
    }
}

export class EmailSignupEntity extends Email {
    constructor(
        public name: string,
        public email: string,
        public password: string
    ) {
        super(email, password)
    }
}

export class EmailUpdateEntity {
    constructor(
        public email: string
    ) {}
}

export class NameUpdateEntity {
    constructor(
        public name: string
    ) {}
}

