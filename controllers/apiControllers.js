
function index(req, res) {
    res.json({
      message: 'Welcome to tunely!',
      documentation_url: 'https://github.com/sf-wdi-labs/tunely',
      base_url: 'localhost:3000',
      endpoints: [
        {
          method: 'GET', path: '/api', description: 'Describes available endpoints'
        }
      ]
    });

}

function create(req, res) {}

function show(req, res) {}

function destroy(req, res) {}

function update(req, res) {}
 

module.exports = {
  index: index
    /*
  create: create,
  show: show,
  destroy: destroy,
  update: update   */
}