import {  GoogleLoginProvider } from '@abacritt/angularx-social-login';

export const config = {
    providers: [
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('531139663101-pohaua1gvglef65cha3ui7dn1hdp5sfc.apps.googleusercontent.com')
        }
    ]
}