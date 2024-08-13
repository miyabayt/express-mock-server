import moment from 'moment-timezone'

export const sortData = (data, sort) => {
  if (sort) {
    const sortingData = [...data]
    const sortField = sort.split(',')[0]
    const sortOrder = sort.split(',')[1]
    sortingData.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortField] > b[sortField] ? 1 : -1
      } else {
        return a[sortField] < b[sortField] ? 1 : -1
      }
    })
    return sortingData
  }
  return data
}

export const pagingData = (data, page, size) => {
  const startIndex = page * size
  const endIndex = startIndex + size
  return data.slice(startIndex, endIndex)
}

export const getTime = () => {
  return moment().tz('Asia/Tokyo')
}

export const getISOTime = () => {
  return moment().tz('Asia/Tokyo').format()
}

export const formatDate = (date) => {
  return moment(date).tz('Asia/Tokyo').format('YYYY-MM-DDTHH:mm:ssZ')
}
