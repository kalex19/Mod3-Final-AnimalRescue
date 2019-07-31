export const fetchData = async (url) => {
  const response = await fetch(url);
  if(!response.ok){
    throw new Error('Unable to fetch data')
  }
  return await response.json()
}