import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas a <CounterApp />', () => { 

    const value = 10;

    test('CounterApp debe hacer match con el snapshot', () => { 
        const { container } = render(
                <CounterApp value={ value } />

        );

        expect( container ).toMatchSnapshot();

    });

    test('value deber ser 100 al inicio', () => { 
        render( <CounterApp value={ 100 } /> );

        expect( screen.getByText(100) ).toBeTruthy();

        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain('100');

    });

    test('debe de incrementar con el boton +1', () => { 
        render( <CounterApp value={ value } /> );

        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText('11') ).toBeTruthy();
    });

    test('debe de decrementar con el boton -1', () => { 
        render( <CounterApp value={ value } /> );

        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText('9') ).toBeTruthy();
    });

    test('debe de resetear el value con el boton reset', () => { 
        render( <CounterApp value={ 355 } /> );

        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );

        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        

        expect( screen.getByText( 355 ) ).toBeTruthy();
    });

})