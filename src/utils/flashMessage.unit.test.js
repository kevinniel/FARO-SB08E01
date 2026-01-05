import { addFlashMessage, removeFlashMessage } from './flashMessage';

test('addFlashMessage() ajoute le flash message dans la session', () => {
    // ARRANGE
    const req = { session: {} };
    const params = {
        type: 'success',
        message: 'Test flash message',
    };

    // ACT
    addFlashMessage(req, params);

    // ASSERT
    expect(req.session.flash).toEqual(params);
});

test('addFlashMessage() accepte un tableau de messages', () => {
    // ARRANGE
    const req = { session: {} };
    const params = {
        type: 'warning',
        message: ['Attention', 'Deuxieme message'],
    };

    // ACT
    addFlashMessage(req, params);

    // ASSERT
    expect(req.session.flash).toEqual(params);
});

test('removeFlashMessage() supprime le flash message de la session', () => {
    // ARRANGE
    const req = {
        session: {
            flash: {
                type: 'danger',
                message: 'A supprimer',
            },
        },
    };

    // ACT
    removeFlashMessage(req);

    // ASSERT
    expect(req.session.flash).toBeUndefined();
});
