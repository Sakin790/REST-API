export const healthCheck = (req, res) => {
  const url = req.baseUrl;
  const cookie = req.cookies.name;
  res.status(200).json({
    Message: "OK",
    url,
    cookie,
  });
};
