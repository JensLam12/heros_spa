import { render,screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from '../../src/router';
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe( 'Test in <PublicRoute/>', () => {

    test('Should return children componente if the user is not logged', () =>  {
        const contextValue = {
            logged: false
        };
        
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Public Router</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Public Router') ).toBeTruthy();
    });

    test('Should return children componente if the user is not logged', () =>  {
        const contextValue = {
            logged: true,
            user: {
                id: 1,
                name: 'Jens Lam'
            }
        };
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Public Router</h1>
                            </PublicRoute>
                        }/>
                        <Route path='/' element={<h1>Test</h1>} > </Route>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Test') ).toBeTruthy();
    });

});