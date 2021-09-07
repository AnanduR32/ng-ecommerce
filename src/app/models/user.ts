export class User {
    name!: string
    phoneno?: number
    email!: string
    password!: string
    gender?: string
    state?: string
    agreement!: boolean
    constructor() {
        this.name = '',
            this.email = '',
            this.phoneno = undefined,
            this.gender = '',
            this.state = '',
            this.agreement = false
    }
}
