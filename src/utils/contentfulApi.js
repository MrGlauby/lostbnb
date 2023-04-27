import React from "react";

export default function contentfulApi(requestEntry){
    const space = "l5zj7qdwhdnd";
    const environment = "master";
    const accessToken = "3m-BGSfREZ3PmuhlllgUoxNA7QztjsVuxxIpmd1m2sI";
    const entry = requestEntry
    const fetchUrl = `https://cdn.contentful.com/spaces/${space}/environments/master/entries/${entry}?access_token=${accessToken}`
    
    fetch(fetchUrl).then((response) => {
        return response.json();
    }).then((responseData) => {
        console.log(responseData)
        return responseData
    }).catch((error) => console.error(error))
}