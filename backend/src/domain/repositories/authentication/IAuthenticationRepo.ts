interface IAuthenticationRepo {
    generateToken(data: object): string;
    validateToken(token: string): boolean;
}

export default IAuthenticationRepo;