import IAuthenticationRepo from "../../../domain/repositories/authentication/IAuthenticationRepo";

class GenerateToken {
    private readonly authenticationRepo: IAuthenticationRepo;

    constructor(authenticationRepo: IAuthenticationRepo) {
        this.authenticationRepo = authenticationRepo;
    }

    run(data: any): string {
        const token = this.authenticationRepo.generateToken(data);
        return token;
    }
}

export default GenerateToken;