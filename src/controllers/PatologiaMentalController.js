const PatologiaMental = require("../models/PatologiaMental");

module.exports = {
	async index(req, res) {
		const patologiasmentais = await PatologiaMental.findAll();
		return res.json(patologiasmentais);
	},

	async store(req, res) {
		const { name, descricao } = req.body;
		const patologiasmentais = await PatologiaMental.create({ name, descricao });

		return res.json(patologiasmentais);
	}
};