import { getRandomSuccessMessage, funnyMessages } from './getRandomSuccessMessage';

/*

Ce qu'on peut tester :
- type de retour : string
- la string de retour soit inclue dans "funnyMessages"

*/

/*

Structure d'un test : AAA

Arrange : on commence par préparer les données
Act : on exécute la fonction testée
Assert : On vérifie nos assertions

*/

test('getRandomSuccessMessage()', () => {

    // ARRANGE => ici pas de données

    // ACT
    let message = getRandomSuccessMessage();

    // ASSERT
    // On test le type de retour
    expect( typeof message ).toBe("string")
    // On test que ça soit bien dans funnyMessages
    expect( funnyMessages ).toContain( message )
});