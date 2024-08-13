import { createUser } from '../models/user.js'

const data = Array.from({ length: 100 }, (_, index) => createUser(index))

export default [
  {
    path: '/api/users',
    method: 'get',
    handler: (req, res) => {
      const { page = 0, size = 20 } = req.query
      const startIndex = page * size
      const endIndex = startIndex + size
      const paginatedData = data.slice(startIndex, endIndex)
      return res.json({
        page,
        perpage: size,
        count: data.length,
        totalPages: Math.ceil(data.length / size),
        data: paginatedData,
        success: true,
        message: '正常終了',
      })
    },
  },
  {
    path: '/api/users/search',
    method: 'post',
    handler: (req, res) => {
      const { page = 0, size = 20 } = req.query
      const startIndex = page * size
      const endIndex = startIndex + size
      const paginatedData = data.slice(startIndex, endIndex)
      return res.json({
        page,
        perpage: size,
        count: data.length,
        totalPages: Math.ceil(data.length / size),
        data: paginatedData,
        success: true,
        message: '正常終了',
      })
    },
  },
]
