const Credit = require('../models/Credit');

// Create a credit (Admin only)
exports.createCredit = async (req, res) => {
  const { userId, amount, dueDate } = req.body;
  try {
    const credit = new Credit({ userId, amount, dueDate });
    await credit.save();
    res.status(201).json({ message: 'Credit created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user credit
exports.getUserCredit = async (req, res) => {
  try {
    const credit = await Credit.findOne({ userId: req.user._id });
    res.json(credit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Pay credit
exports.payCredit = async (req, res) => {
  const { amountPaid } = req.body;
  try {
    const credit = await Credit.findOne({ userId: req.user._id });
    if (!credit) {
      return res.status(404).json({ message: 'No credit found' });
    }

    credit.amountPaid += amountPaid;
    await credit.save();

    res.json({ message: 'Credit paid successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
