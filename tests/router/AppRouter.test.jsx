import { render } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router";

describe( 'Test in AppRouter', () => {

    test('Should show login if the user is not logged', () =>  {

        const contextValue= {
            logged: false
        }

        // render(
            
        //     <AuthContext.Provider value={contextValue}>
        //         <MemoryRouter initialEntries={['/']}>
        //             <AppRouter />
        //         </MemoryRouter>
        //     </AuthContext.Provider>
        // );
    });

});