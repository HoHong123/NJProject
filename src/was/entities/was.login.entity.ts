export class UserEntity {
    constructor(
        public id : number, 
        public name : string, 
        public email: string,
        public password: string
    ) {}
}

export class EmailLoginEntity {
    constructor(
        public email: string,
        public password: string
    ) {}
}

export class EmailSignupEntity {
    constructor(
        public email: string,
        public password: string
    ) {}
}

export class EmailUpdateEntity {
    constructor(
        public email: string
    ) {}
}

export class NameUpdateEntity {
    constructor(
        public email: string
    ) {}
}

