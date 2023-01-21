import { getImagen } from '../../base-pruebas/11-async-await'

describe('Pruebas 11-async-await.js', () => { 

    test('getImagen debe retornar un url de la imagen', async () => { 
        const url = await getImagen();

        expect( typeof url ).toBe( 'string' );
    })

    // test('getImagen debe dar un error si no tiene api key', async () => { 
    //     const url = await getImagen();

    //     expect( typeof url ).toBe( 'No se encontro la url' );
    // })

 })