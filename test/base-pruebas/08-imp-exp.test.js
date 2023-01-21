import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById', () => { 
        const id = 100;

        const heroe = getHeroeById( id );

        expect( heroe ).toBeFalsy();

        // expect( heroe ).toEqual({ 
        //     id: 1,
        //     name: 'Batman',
        //     owner: 'DC'       
        // })
     })

     test('getHeroesByOwner debe retonar heroes de DC', () => { 

        const owner = 'DC';

        const heroesResultDC = getHeroesByOwner( owner );

        expect( heroesResultDC.length ).toBe( 3 );
        expect( heroesResultDC ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )

      })

      test('getHeroesByOwner debe retonar heroes de Marvel', () => { 

        const owner = 'Marvel';

        const heroesResultDC = getHeroesByOwner( owner );

        expect( heroesResultDC.length ).toBe( 2 );
        expect( heroesResultDC ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )

      })
 })