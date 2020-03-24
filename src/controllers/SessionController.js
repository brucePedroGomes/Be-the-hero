import connection from '../database/connection';

export default {
  async create(req, res) {
    try {
      const { id } = req.body;
      console.log({ id });

      const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

      console.log({ ong });

      if (!ong) {
        return res.status(400).json({ error: 'error' });
      }
      return res.json(ong);
    } catch (error) {
      console.log(error);
    }
  }
};
