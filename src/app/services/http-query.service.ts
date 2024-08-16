import { Injectable } from "@angular/core";

@Injectable(
  {
    providedIn: "root"
  }
)
export class HttpQueryService {
  constructor() {

  }

  buildRequestWithQuery = (url: string, query: any): string => {
    if (typeof(query) === null || typeof(query) === undefined) {
      return url;
    }

    url += '?';

    for (let item in query) {
      if (!query[item]) {
        continue;
      }
      url += item + '=' + query[item] + '&';
    }

    return url;
  }
}