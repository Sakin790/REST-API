export const healthCheck = (req, res) => {
  res.status(200).json({
    Message: "OK",
  });
};
