import request from 'supertest';
import connection from '../../src/database/connection';

import app from '../../src/app';

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
    await connection.migrate.rollback();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'PedroTeste',
        email: 'contato@pedroleinar.com.br',
        whatsapp: '1355554444',
        city: 'Guaruja',
        uf: 'SP'
      });
    console.log(response.body);

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(12);
  });
});
