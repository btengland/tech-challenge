module.exports = {
  addParagraph: async (req, res) => {
    const { paragraph } = req.body;
    const db = req.app.get("db");
    await db.title.add_title(paragraph);
    return res.sendStatus(200);
  },
  getAppointment: async (req, res) => {
    const { paragraph } = req.session.user;
    const db = req.app.get("db");
    const [get] = await db.title.get_appointment(paragraph);
    return res.status(200).send(get);
  },
};
