
export default class AdminUseCase {
    isValidCredentials(adminMail:string,adminPassword:string,emailBody:string,passwordBody:string,):boolean{
        return adminMail===emailBody&&adminPassword===passwordBody;
    }
}