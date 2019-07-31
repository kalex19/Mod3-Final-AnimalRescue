export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  if(!response.ok){
    throw new Error('Unable to fetch data')
  }
  return await response.json()
}