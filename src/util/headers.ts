const getHeaders = (user) => {
  if (user.token) {
    return { token: user.token }
  } else {
    return undefined
  }
}

export default getHeaders
