const mapLinkToPage = (page) =>
  page === '' ? null : parseInt(page.split('=').reverse()[0])

const mapLinkToId = (link) =>
  parseInt(link.split('/').reverse()[0])

const mapLinksToIds = (links) =>
  parseInt(links.map(it => it.split('/').reverse()[0]))

const mapInfo = (info) => ({
  count: info.count,
  pages: info.pages,
  next: mapLinkToPage(info.next),
  prev: mapLinkToPage(info.prev),
})

const mapResponse = (mapItems) => ({ data }) => ({
  info: mapInfo(data.info),
  results: mapItems(data.results),
})

export {
  mapLinkToId,
  mapLinksToIds,
  mapResponse,
}
