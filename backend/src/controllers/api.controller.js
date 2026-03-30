export const listData = async (req, res) => {
  try {
    const response = await fetch("https://api.api-onepiece.com/v2/fruits/en");
    const data = await response.json();

    for (const key in data) {
      const japaneseName = data[key];
      console.log(japaneseName.roman_name);
    }
  } catch (err) {
    console.error("ERROR", err);
    return res.json({
      ok: false,
      msg: "Error trayendo los personajes",
    });
  }
};
export const listDataById = async (req, res) => {};
export const createData = async (req, res) => {};
export const updateData = async (req, res) => {};
export const removeData = async (req, res) => {};
