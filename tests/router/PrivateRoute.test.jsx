import { render,screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from '../../src/router';
import { MemoryRouter } from "react-router-dom";

describe( 'Test in <Private Route/>', () => {

    test('Should return children componente if the user is not logged', () =>  {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 1,
                name: 'Jens Lam'
            }
        };
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Private Router</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Private Router') ).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
    });

});