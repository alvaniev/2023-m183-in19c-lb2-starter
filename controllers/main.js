exports.getHelloWorld = (req, res, next) => {
  res.status(200).json({
    message: "Hello World",
  });
};

exports.doNothing = (req, res, next) => {
  res.status(200).json({});
};

exports.postMessage = (req, res, next) => {
  const header = req.body.header;
  const content = req.body.content;

  res.status(201).json({
    statusmessage: "Message posted successfully",
    post: { id: new Date().toISOString(), header: header, content: content },
  });
};

