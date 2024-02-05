import type { Context } from "@netlify/functions"
 
export default async (req: Request, context: Context) => {

  console.log('Hola Mundo desde Hello.mts');


  return new Response(JSON.stringify("Hello, world!!!"),{
    status:200,
    headers: {
      'Content-Type':'application/json'
    }
  })
}