export function getVideoId(element: Element): string {
  const href = element.getElementsByTagName('a')[0].href;

  if (!href) {
    return;
  }

  const regex = /v=.*?(?=&|$)/;
  const match = regex.exec(href)[0];

  if (!match) {
    return;
  }

  return match.replace('v=', '');
}
