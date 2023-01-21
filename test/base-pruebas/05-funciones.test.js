import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();

        expect( testUser ).toStrictEqual( user );

    })

    test('getUsuario debe retornar un objeto', () => { 
        const name = 'Fernando';


        const usuarioActivo = getUsuarioActivo( 'Fernando' );


        expect( usuarioActivo ).toEqual(
            {
                uid: 'ABC567',
                username: name
            }
        );


    })
 })