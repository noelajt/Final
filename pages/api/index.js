import { createClient } from '@supabase/supabase-js'

export default async function request(req, res) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

if (req.method === "GET") {
        // fetching data from the database
        let { data, error } = await supabase.from('TEST').select('School')

        if (error) {
            res.status(400).json({ message: "could not load "})
            return
        }

        res.status(200).json(data)
    }

}