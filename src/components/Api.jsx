import axios from "axios";

const searchImage = async(term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID 77REPPd-jo5T4oaLyC7pyCIPY0MDz4Cj_x6fenwnoLg',
        },
        params:{
            query : term,
        },
    });
    // console.log(response)
      return response ;
}

export default searchImage ;