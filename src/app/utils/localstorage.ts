export class LocalStorageUtils {
    
    public getUser(){
        let ret = localStorage.getItem('devio.user')
        return ret != undefined ?  JSON.parse(ret): null;
    }

    public saveLocalData(response: any) {
        this.saveTokenUser(response.accessToken);
        this.saveUser(response.userToken);
    }

    public clear() {
        localStorage.removeItem('devio.token');
        localStorage.removeItem('devio.user');
    }

    public getTokenUser(): string | null {
        return localStorage.getItem('devio.token');
    }

    public saveTokenUser(token: string) {
        localStorage.setItem('devio.token', token);
    }

    public saveUser(user: string) {
        localStorage.setItem('devio.user', JSON.stringify(user));
    }

}