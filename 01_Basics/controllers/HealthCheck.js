export const healthCheck = (req, res) => {
  const url = req.baseUrl;
  res.status(200).json({
    Message: "OK",
    url,
  });
};
