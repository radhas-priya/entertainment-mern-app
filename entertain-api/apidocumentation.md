
PURPOSE:
In this project Api,s are being used for getting the movies and tvshows as well for all genres that are available.
We have used The movie database for this work.

There are different api urls that have been used for fetching the data i will be adding that all here in the file.
Without integrating any api it would be not an eaasy task doing all the things manually.This is never a good practice as well as not engaging to the users too.

<!-- ------------------------------- -->
1 Base url:
<!-- ------------------------------- -->
"https://api.themoviedb.org/3"

2 For getting All genres : `${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`;

3 For getting the tvshows:
`${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`


4 For getting the data by genre :`${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`


<!-- ------------------------------- -->
Authentication:
<!-- ------------------------------- -->


There is an API key that is provided by the The movie databaase to every user of it who wants to use these apis.
For example:
`${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}` is an api url where 
at first there is base url to be added."/trending/" then the type which keeps on changing with the user selection as these holds the gernes. then  "/week?api_key" .Now for including the api key we are using js and whatever the api key is we ar etaking them through these environment variable API_KEY  . 



<!-- --------------------------------------------------------------- -->
Endpoints for Api,s i have used are:
<!-- --------------------------------------------------------------- -->



1 For getting all the movies from genres :
export const getGenres=createAsyncThunk("entertain/genres",async()=>{
    const {
      data : {genres},
  }=await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    return genres;
})
.It is a get request.








2 For getting all trending movies :

export const fetchMovies =createAsyncThunk("entertain/trending",
async({ type },thunkApi)=>{
  const {
    entertain:{genres},
  }=thunkApi.getState();
  return await  getRawData(
    `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
    genres,
    true
  );
    
},
)






3 For fetching data by genre 

export const fetchDataByGenre = createAsyncThunk(
  "entertain/moviesByGenres",
  async ({ genre, type }, thunkApi) => {
    const {
      entertain: { genres },
    } = thunkApi.getState();
    
   
     return await getRawData(
        `${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`,
        genres
      );
  }
); 



4 For getting the liked movies from list 
export const getUserLikedMovies = createAsyncThunk("entertain/getLiked",async (email)=>{
  const {data:{movies}}=await axios.get(`http://localhost:5000/api/user/liked/${email}`)
  return movies
})

The link only work for the localhost not for the live site.


5 For removing the like movies from list 
 export const removeFromLikedMovies = createAsyncThunk("entertain/deleteLiked",async ({email,movieId})=>{
  const {data:{movies}}=await axios.put(`http://localhost:5000/api/user/delete`,{email,movieId})
  return movies
})
Its aput request which will delete the liked movies from the list
The link only work for the localhost not for the live site.


6 const addToList=async ()=>{
  try{
    await axios.post("http://localhost:5000/api/user/add",{email,data:movieData})

  }catch(err){
    console.log(err)
}
}
This is a post request which will help in taking th einput from the user side as its users choice what he wants to add or remove from the list .

---------------------------------------------------------------
 For handling signin
---------------------------------------------------------------

 const handleSignIn= async()=>{
      try{
        const {email,password} =formValues;
        await createUserWithEmailAndPassword(firebaseAuth,email,password)
      }catch(err){
        console.log(err);
      }
    };
    
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

Firebase is used to handle signup. Firebase has inbuilt function  for authetnication of the user 
 createUserWithEmailAndPassword  onAuthStateChanged to handle the signup part .
 After destructing the object containing email and password it will create user with email and password ,After this we will navigate the user to the main  page 


-------------------------------------------------------------------
    For handlingLogIn
-------------------------------------------------------------------


        const handleLogIn = async () => {
        try {
            const { email, password } = formValues;
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (err) {
            console.log(err);
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    });

Firebase is used to handle login. Firebase has inbuilt function  for authetnication of the user 
 createUserWithEmailAndPassword  onAuthStateChanged to handle the login part .
  After destructing the object containing email and password it will create user with email and password ,After this we will navigate the user to the main  page 

Some of the HTTP status codes for failure scenarios are mentioned below:

401 Unauthorized
401 Unauthorized
400 Bad request
500 Internal server error


For okay resonse :
200 OK 



