import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";

type CurrentUser = {
  id: string;
  firstName: string; 
  lastName: string;
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(
    private cookieService: CookieService
  ) {}

  login() {
    if (!this.currentUser) {
      window.location.replace(`${environment.authenticatorURL}/login`);
    }
  }

  public get currentUser(): CurrentUser {
    const token = this.cookieService.get(environment.authenticationToken);
    if (token) {
      const decodedData = this.parseJwt(token);
      return decodedData as CurrentUser;
    }

    return null;
  }

  private parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

}
