import { Component, OnInit } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  ngOnInit() {
    google.accounts.id.initialize({
      client_id: '531139663101-pohaua1gvglef65cha3ui7dn1hdp5sfc.apps.googleusercontent.com',
      callback: this.handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } 
    );
  }

  handleCredentialResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
}
