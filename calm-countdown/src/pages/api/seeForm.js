// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Note: This endpoint is server-side only.
// TO-DO: Attach this API to a database.
// TO-DO: What info will be in req.body? Figure out what we are checking for.
// TO-DO: Implement react-hook-form

export default function handler(req, res) {

  // Get data submitted in req body
  const body = req.body;

  // Log response to console
  console.log('body: ', body);

  // Error handling - check for [WHAT INFO TO CHECK FOR?],
  // and returns early if not found
  if (!body.INFO) {
    res.status(400).json({ data: '[INFO] was not found.' })
  }
  
  // Everything goes well
  res.status(200).json({ data: `${body.INFO}`})
}


