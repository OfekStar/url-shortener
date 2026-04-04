function generateCode(url: string): string {
    return Math.random().toString(36).slice(2, 8)
  }

  console.log(generateCode("https://google.com"))


  interface Link {
    url: string
    code: string
    createdAt: Date
  }

  const myLink: Link = {
    url: "https://google.com",
    code: generateCode("https://google.com"),
    createdAt: new Date()
  }

  console.log(myLink)


  class LinkService {
    create(url: string): Link {
      return {
        url: url,
        code: generateCode(url),
        createdAt: new Date()
      }
    }
  }

  const service = new LinkService()
  console.log(service.create("https://google.com"))