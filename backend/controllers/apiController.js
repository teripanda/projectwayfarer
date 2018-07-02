function index(req, res) {
  res.json({
    message: 'Welcome to Project Wayfarer!',
    documentation_url: 'https://github.com/teripanda/project_wayfarer',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}

module.exports = {
  index: index
}
