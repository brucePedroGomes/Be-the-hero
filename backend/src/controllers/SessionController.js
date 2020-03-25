import connection from '../database/connection';

export default {
  async create(req, res) {
    try {
      const { id } = req.body;

      const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

      if (!ong) {
        return res.status(400).json({ error: 'No ONG found with this ID' });
      }
      return res.json(ong);
    } catch (error) {
      console.log(error);
    }
  }
};
