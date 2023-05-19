// import { createClient } from '@supabase/supabase-js'

// export default async function request(req, res) {
//     const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
//     const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//     const supabase = createClient(supabaseUrl, supabaseKey)

//     const {school} = req.body;

//     // if (req.method === "POST") {
//     //     // sending data to the database
//     //     const body = req.body
//     //     console.log(body)

        
//     //     if (error) {
//     //         res.status(400).json({ message: "could not update"})
//     //         return
//     //     }
//     //     res.status(200).json(data)

//     // } 
//     if (req.method === "GET") {
//         // fetching data from the database
//         // let { data, error } = await supabase.from('TEST').select('*')
//         const { data, error } = await supabase
//         .from('TEST') //table name
//         .select('School')
//         .textSearch('School', `'${school}'`, {
//             config: 'english'
//     })
//     console.log(data);
//         if (error) {
//             res.status(400).json({ message: "could not load "})
//             return
//         }

//         res.status(200).json(data)
//     } else if (req.method === "DELETE") {
//         // delete all records in database 
//         // DANGEROUS (obviously) but for this example ok
//         const { error } = await supabase.from('TEST').delete().gt('id', -1)

//         console.log("deleting")
//         console.log(error)
//         res.status(200).json()
//     }

// }

import { createClient } from '@supabase/supabase-js';

export default async function request(req, res) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { school } = req.query;
  console.log(school);

  if (req.method === "GET") {
    try {
      const { data, error } = await supabase
        .from('TEST') // table name
        .select('*') 
        .eq('School', school);

      if (error) {
        res.status(400).json({ message: "Could not load data." });
        return;
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error." });
    }
  } 
}
