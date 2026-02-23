// AuthGateway
export interface IUserDTO{
    userId: number
    customerID: number
    languagesID: number
    userName: string
    contactName: string
    email: string
    isAdmin: boolean
    isAuthSuccessful: boolean
    token: string
    errorMessage: string
}