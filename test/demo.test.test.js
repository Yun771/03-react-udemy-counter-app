describe('Pruebas en <Demo Component />', () => { 
    
    
    test('Esta prueba no debe de fallar', () => {
        // * 1. Inicializacón
        
        const messaje1 = 'Hola mundo';
        
        // * 2. Estimulo
        
        const message2 = messaje1.trim();
        
        // * 3. Observar el comportamiento esperado
        
        expect( messaje1 ).toBe( message2 );
    })  
});