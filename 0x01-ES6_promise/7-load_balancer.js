// Returns the value of the first resolved promise between chinaDownload and USDownload
export default function loadBalancer(chinaDownload, USDownload) {
    // Return the promise that resolves or rejects first
    return Promise.race([chinaDownload, USDownload]);
  }