import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 
    test('getHeroesByIdAsycn debe retornar un hereo', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id)
        .then((heroe) => {
            expect( heroe ).toEqual( {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            } );

            done();
        });
    })

    test('getHeroesByIdAsycn debe de obtener un error si hereo no existe', (done) => { 
        const id = 100;
        getHeroeByIdAsync(id)
        .catch(( err ) => {
            expect( err ).toBe( `No se pudo encontrar el héroe ${ id }` );

            done();
        });
    })
 })