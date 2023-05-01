import React from "react";

const space = "l5zj7qdwhdnd";
const environment = "master";
const accessToken = "3m-BGSfREZ3PmuhlllgUoxNA7QztjsVuxxIpmd1m2sI";
const contentTypes = ["location", "places", "reviews", "user"]

async function fetchContentful2(fetchUrl) {
    let responseData = [];
    try {
        const response = await fetch(fetchUrl);
        if(!response.ok) {
            const message = `Error while fetching from ${fetchUrl}: ${response.status}`;
            throw new Error(message);
        }
        responseData = await response.json();
    } catch(error) {
        console.error(`ERROR: ${error}`)
    }
    console.log("response Data async log: ", responseData);
    return responseData;
}

function fetchContentful(fetchUrl) {
    let fetchData = [];
    fetch(fetchUrl).then((response) => {
        return response.json();
    }).then((responseData) => {
        fetchData = responseData;
        console.log("fetch Log: ", fetchData);
    }).catch((error) => console.error(error));
    return fetchData;
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

export async function fetchContentTypeAll(contentType) {
    if (contentTypes.includes(contentType)) {
        const selectors = "sys.id,sys.createdAt,fields"
        const fetchUrl = `https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries/?select=${selectors}&content_type=${contentType}&access_token=${accessToken}`
        return fetchContentful2(fetchUrl)
        // console.log("fetchData variable: ", response);
        // return fetchData;
    } else {
        console.error(`Could not find content type. Did you spell it right?`);
        console.warn(`Possible content types are: ${contentTypes}`);
    }
}

// export function fetchContentType(contentType) {
//     if (contentTypes.includes(contentType)) {
//         const selectors = "sys.id,sys.createdAt,fields"
//         const fetchUrl = `https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries/?select=${selectors}&content_type=${contentType}&access_token=${accessToken}`
//         const fetchData = fetchContentful(fetchUrl);
//     } else {
//         console.error(`Could not find content type. Did you spell it right?`);
//         console.warn(`Possible content types are: ${contentTypes}`);
//     }
//     return fetchData
// }