module.exports = {

  submitForm: (req, res) => {

   console.log(req.body);
   req.app
   .get('db')
   .submit_form([req.body.projname, req.body.compfrom, req.body.numtree, req.body.location, req.body.price, req.body.email])
   .then(response => {console.log(response); res.json(response)})
   .catch(err => console.log(err))
 },

  // createForSale: (req, res) => {
  //   console.log(req.body);
  //   req.app
  //   .get('db')
  //   .create_forsale(req.body)
  //   .then(response => {console.log(response); res.json(response)})
  //   .catch(err => console.log(err))
  // },
  //
  // getListings: (req,res) => {
  //   console.log(req.body);
  //   req.app
  //   .get('db')
  //   .get_listings([req.body.category, req.body.tag, req.body.value, req.body.uid])
  //   .then(data => res.json(data))
  //   .catch(err => res.json(err))
  // },
  //
  // deletePost: (req,res) => {
  //   req.app.get('db')
  //   .delete_post([req.body.post_id, req.body.uid])
  //   .then(data => res.json(data))
  //   .catch(err => res.json(err))
  // },
  //
  // postFav: (req,res) => {
  //   req.app.get('db')
  //   .post_fav([req.body.uid, req.body.post_id])
  //   .then(data => res.json(data))
  //   .catch(err => res.json(err))
  // },



}
