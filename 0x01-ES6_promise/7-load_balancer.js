/* eslint-disable */
export default function loaBalancer(chinaDownload, USDownload) {
    return Promise
    .race([chinaDownload, USDownload])
    .then((res) => res);
}