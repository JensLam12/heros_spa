import { render, screen } from "@testing-library/react";
import { AuthReducer, Types } from "../../../src/auth";

describe( 'Tests in AuthReducer', () => {

    test( 'Should return the default state', () => {
        const state = AuthReducer({ logged: false }, {});
        expect(state).toEqual({logged: false});
    });

    test( 'Should do login', () => {
        const action = {
            type: Types.login,
            payload: {
                id: 1,
                name: 'Jens Lam'
            }
        };
        const state = AuthReducer( {logged: false}, action);
        expect( state).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test( 'Should do logout', () => {
        const state = AuthReducer({ logged: true, user: { id: 1, name: 'Jens Lam'} }, {});

        const action = {
            type: Types.logout
        }

        const newState = AuthReducer( state, action);
        expect( newState).toEqual({ logged: false});
    })
});