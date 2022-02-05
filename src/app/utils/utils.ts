import {PROMISIFY_RETRY_TIMEOUT} from '../constants';

type InterceptFetchCallback = (url: string, data: any) => any

export class Utils {
  private static prefix = 'YouTube Blacklist: ';

  public static log(message: string): void {
    // eslint-disable-next-line no-console
    console.log(this.prefix + message);
  }

  public static warn(message: string): void {
    // eslint-disable-next-line no-console
    console.warn(this.prefix + message);
  }

  public static error(message: string): void {
    // eslint-disable-next-line no-console,no-debugger
    console.error(this.prefix + message);
  }

  public static promisify(callback: (resolve: any, retry: () => void) => void): Promise<any> {
    return new Promise((resolve) => {
      const retry = () => setTimeout(() => callback(resolve, retry), PROMISIFY_RETRY_TIMEOUT);
      return callback(resolve, retry);
    });
  }

  public static filterYoutubeEndpoint(url: string): string {
    return /\/v1\/[a-zA-Z]*[^\\?]/.exec(url)[0];
  }

  public static interceptFetch(callback: InterceptFetchCallback): void {
    const originalFetch = window.fetch;

    window.fetch = function() {
      return originalFetch
        // eslint-disable-next-line prefer-rest-params
        .apply(this, arguments)
        .then(async (response: Response) => {
          try {
            if (response.status === 200) {
              const clonedResponse = response.clone();
              const data = await clonedResponse.json();
              callback(clonedResponse.url, data);
            }
          } catch (e) {
            Utils.error(e);
          }

          return response;
        });
    };
  }
}
