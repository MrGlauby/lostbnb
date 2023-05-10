 //PLACES
// const [placeName, setPlaceName] = useState("");
// const [placeMainPicture, setPlaceMainPicture] = useState("");
// const [placePricePerNight, setPlacePricePerNight] = useState("");
// const [placeDescription, setPlaceDescription] = useState("");
// const [placeOverallRating, setPlaceOverallRating] = useState("");
// const [placeGalleryPictures, setPlaceGalleryPictures] = useState("");
// const [placeLocation, setPlaceLocation] = useState("");
// const [placeReviews, setPlaceReviews] = useState("");


// useEffect(() => {
//   fetchContentTypeAll("places").then((response) => {
//     console.log("placefetch:", response);
//     setPlaceName(response.items[0].fields.name);
//     setPlaceMainPicture(response.items[0].fields.mainPicture.sys.id);
//     setPlacePricePerNight(response.items[0].fields.price);
//     setPlaceDescription(response.items[0].fields.description.content[0].content[0].value);
//     setPlaceOverallRating(response.items[0].fields.rating);
//     setPlaceGalleryPictures(response.items[0].fields.galleryPictures[0].sys.id);
//     setPlaceLocation(response.items[0].fields.location.sys.id);
//     setPlaceReviews(response.items[0].fields.reviews[0].sys.id);
//   });
// }, []);


//LOCATION

// const [locationTitle, setLocationTitle] = useState('');
// const [locationStreet, setLocationStreet] = useState('');
// const [locationZip, setlocationZip] = useState('');
// const [locationCity, setlocationCity] = useState('');
// const [locationCountry, setlocationCountry] = useState('');
// const [locationCoordinates, setlocationCoordinates] = useState('');


// useEffect(() => {
//   fetchContentTypeAll("location").then((response)=> {
//   console.log("locationfetch:",response)

//   setLocationTitle(response.items[0].fields.locationTitle)
//   setLocationStreet(response.items[0].fields.street)
//   setlocationZip(response.items[0].fields.zip)
//   setlocationCity(response.items[0].fields.city)
//   setlocationCountry(response.items[0].fields.country)
//   } ) }, [])


//USERS
// const [userName, setUserName] = useState('');
// const [userPicture, setUserPicture] = useState('');
// const [userAge, setUserAge] = useState('');


// useEffect(() => {
//   fetchContentTypeAll("user").then((response)=> {
//   console.log("userfetch:",response)

//   setUserName(response.items[0].fields.name)
//   setUserPicture(response.items[0].fields.picture.sys.id)
//   setUserAge(response.items[0].fields.age)
//   } ) }, [])


//REVIEWS
  // const [reviewTitle, setReviewTitle] = useState('');
  // const [reviewRating, setReviewRating] = useState('');
  // const [reviewPostingTime, setReviewPostingTime] = useState('');
  // const [reviewText, setReviewText] = useState('');

  // useEffect(()=>{
  //     fetchContentTypeAll("reviews").then((response)=> {
  //         console.log("reviewsfetch:",response);

  //         setReviewTitle(response.items[0].fields.reviewTitle);
  //         setReviewRating(response.items[0].fields.reviewerRating);
  //         setReviewPostingTime(response.items[0].fields.postingTime);
  //         setReviewText(response.items[0].fields.reviewText.content[0].content[0].value);

  //     } ) 
  // },[])