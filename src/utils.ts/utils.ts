const fetchData = async (url: string, setState: Function) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setState(data);
  } catch (error) {
    console.error(error);
  }
};

export { fetchData };
