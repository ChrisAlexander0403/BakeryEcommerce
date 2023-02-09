interface User {
    uuid?: string;
    firstName?: string;
    lastName?: string;
    userName?: string;
    password?: string;
    usedPasswords?: string[];
    phone?: string;
    birthdate?: string;
    profilePicture?: string;
    tokens?: string[];
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export default User;