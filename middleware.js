const triggerApi = (request, response, next) => {
  console.log('Your have triggered a get message api');
  next()
}

export default {
  triggerApi
}