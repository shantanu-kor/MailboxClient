const fetchMail = async (email, pre) => {
  const res = await fetch(
    `${process.env.REACT_APP_DATABASE_URL}/${pre}${email}.json`
  );
  let data = await res.json();
  try {
    data = Array.from(Object.entries(data));
  } catch {
    data = [];
  }
  return data;
};

export default fetchMail;
