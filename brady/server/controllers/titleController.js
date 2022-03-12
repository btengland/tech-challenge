module.exports = {
  addTitle: async (req, res) => {
    const { title } = req.body;
    const db = req.app.get("db");
    await db.title.add_title(title);
    return res.sendStatus(200);
  },
  getTitle: async (req, res) => {
    const { title } = req.session.user;
    const db = req.app.get("db");
    const [get] = await db.title.get_title(title);
    return res.status(200).send(get);
  },
};
