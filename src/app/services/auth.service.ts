import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";


@Injectable({
    providedIn: "root",
})
export class AuthService {
    constructor(@Inject(PLATFORM_ID) private platformId: any){}
    
    setToken(token: string){
        sessionStorage.setItem("authToken", token);
    }

    getToken(): string | null{
        return sessionStorage.getItem("authToken");
    }

    logout() {
        sessionStorage.removeItem("authToken");
    }

    isAuthenticated(): boolean{
        if(isPlatformBrowser(this.platformId)){
            return !!this.getToken();
        }
        return false;
    }
}