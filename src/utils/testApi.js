import {fetchAllEntries, fetchContentTypeAll, fetchEntry} from "./contentfulApi";

export default function testApi() {
    const testEntry1 = 'Llh5RBFBTHeEQEXMvr7qP';
    const testEntry2 = '1EuKJphmri03p0GzhaaOvQ';
    fetchEntry(testEntry1);
}

export function testApiFetchAll() {
    fetchAllEntries();
}

export function testApiFetchType(contentType) {
    return fetchContentTypeAll(contentType);
}