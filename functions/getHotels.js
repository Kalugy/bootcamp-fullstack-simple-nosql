const fecth = require('node-fetch')

exports.handler = async function (event){
    console.log("sad")
    const query = `
    query{
        hotel_data{
            values{
                id,
                name,
                rating
            }
        }
    }

    `
    const url= process.env.Endpoint2
    const options = {
        method: 'POST',
        Headers:{
            'Content-Type':'application/json',
            "x-cassandra-token": process.env.ASTRATOKEN
        },
        body: JSON.stringify({query})
    }
    const response = await fecth(url,options)

    try{
        const responseB = await response.json()
        return {
            statusCode: 200,
            body: JSON.stringify(responseB)
        }
    }catch(e){
        console.log(e)
        return{
            statusCode: 500,
            body: JSON.stringify(e)
        }
    }
}

