const generatePDF = require('./gen_pdf.js');
exports.coverpage = (req, res) => {
  const data = req.body;
  generatePDF;
  res.json({
    message: 'Cover page can be designed with following data',
    data: data,
  });
};
