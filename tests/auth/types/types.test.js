import { Types } from "../../../src/auth";

describe( 'Test in Types.js', () => {
  
    test( 'Should return these types', () => {

        expect(Types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });

    });
})