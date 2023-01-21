import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas en 0707-deses-arr', () => { 

    test('debe retornar un string y un número', () => { 
        const [ letters, numbers ] = retornaArreglo();

        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        expect( letters ).toStrictEqual( expect.any(String) );

     })
})