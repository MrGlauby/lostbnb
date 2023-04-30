import React from "react";

const space = "l5zj7qdwhdnd";
const environment = "master";
const accessToken = "3m-BGSfREZ3PmuhlllgUoxNA7QztjsVuxxIpmd1m2sI";
const contentTypes = ["location", "places", "reviews", "user"]

function fetchContentful(fetchUrl) {
    fetch(fetchUrl).then((response) => {
        return response.json();
    }).then((responseData) => {
        console.log(responseData)
        return responseData
    }).catch((error) => console.error(error))
}

export function fetchEntry(requestEntry){
    const entry = requestEntry
    const fetchUrl = `https://cdn.contentful.com/spaces/${space}/environments/master/entries/${entry}?access_token=${accessToken}`
    
    fetchContentful(fetchUrl);

}

export function fetchAllEntries() {
    const fetchUrl = `https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`
    fetchContentful(fetchUrl);
}

export function fetchContentType(contentType) {
    if (contentTypes.includes(contentType)) {
        const fetchUrl = `https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}&content_type=${contentType}`
        fetchContentful(fetchUrl);
    } else {
        console.error(`Could not find content type. Did you spell it right?`);
        console.warn(`Possible content types are: ${contentTypes}`);
    }
    return 
}