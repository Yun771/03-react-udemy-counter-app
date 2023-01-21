import { usContext } from "../../base-pruebas/06-deses-obj";

describe('Pruebas 06-deses-obj', () => { 

    test('usContext debe retornar un objeto', () => { 
        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const result = usContext( persona );

        expect( result ).toEqual(
            { 
                nombre: persona.nombre,
                nombreClave: persona.clave,
                anios: persona.edad,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            }
        );

     })
 })