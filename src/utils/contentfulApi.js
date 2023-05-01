import React from "react";

const space = "l5zj7qdwhdnd";
const environment = "master";
const accessToken = "3m-BGSfREZ3PmuhlllgUoxNA7QztjsVuxxIpmd1m2sI";
const contentTypes = ["location", "places", "reviews", "user"]

async function fetchContentful(fetchUrl) {
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

export async function fetchEntry(requestEntry){
    const entry = requestEntry
    const selectors = "sys.id,sys.createdAt,fields"
    const fetchUrl = `https://cdn.contentful.com/spaces/${space}/environments/master/entries/${entry}?select=${selectors}&access_token=${accessToken}`
    return fetchContentful(fetchUrl);
}

export async function fetchContentTypeAll(contentType) {
    if (contentTypes.includes(contentType)) {
        const selectors = "sys.id,sys.createdAt,fields"
        const fetchUrl = `https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries/?select=${selectors}&content_type=${contentType}&access_token=${accessToken}`
        return fetchContentful(fetchUrl)
        // console.log("fetchData variable: ", response);
        // return fetchData;
    } else {
        console.error(`Could not find content type. Did you spell it right?`);
        console.warn(`Possible content types are: ${contentTypes}`);
    }
}

export async function fetchAsset(assetToFetch) {
    const assetID = assetToFetch
    const selectors = "sys.id,sys.createdAt,fields"
    const fetchUrl = `https://cdn.contentful.com/spaces/${space}/environments/${environment}/assets/${assetID}?select=${selectors}&access_token=${accessToken}`
    return fetchContentful(fetchUrl)
}