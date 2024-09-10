export default interface AuthenticatedUser {
    username: string;
    email: string;
    avatar: string;
    address: {
        street: string;
        city: string;
        zipCode: string;
        country: string;
    };
}